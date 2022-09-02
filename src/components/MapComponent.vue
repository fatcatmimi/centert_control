<template>
    <div class="container">
        <div class="title">{{ title }}</div>
        <div class="main_area">
            <div :id="mapId" style="width:550px;height:260px;"></div>
        </div>
    </div>
</template>

<script>
function getWeek(day) {
    let days = new Date(day).getDay();
 
    switch (days) {
        case 1:return '星期一';
        case 2:return '星期二';
        case 3:return '星期三';
        case 4:return '星期四';
        case 5:return '星期五';
        case 6:return '星期六';
        case 0:return '星期日';
    }
}

import backImg from "../assets/img/elastic-frame.png";
export default {
    name: 'MapComponent',
    props: ['title', 'mapId', 'mapData'],
    methods: {
        _getSeries(legend) { 
            return legend.map((item) => {
                let data = [] 
                let area = []
                switch (item) { 
                    case '实际值':
                        data = _.compact(this.mapData.data.realValue);
                        area = [
                            {
                                offset: 0,
                                color: "rgba(98,90,150,.7)",
                            },
                            {
                                offset: 0.8,
                                color: "rgba(98,90,150,0)",
                            },
                        ]
                        break;
                    case '参考线':    
                    case '监控值下限':
                        data = this.mapData.data.goal;
                
                        area = [
                            {
                                offset: 0,
                                color: "rgba(0,107,170,1)",
                            },
                            {
                                offset: 0.8,
                                color: "rgba(0,107,170,0)",
                            },
                        ]
                        break;
                    case '监控值上限':
                        data = this.mapData.data.goalHigh;
                        area = [
                            {
                                offset: 0,
                                color: "rgba(255, 255,20, .5)",
                            },
                            {
                                offset: 0.8,
                                color: "rgba(255, 255,20, 0)",
                            },
                        ] 
                        break;
                }
                return {
                    name: item,
                    type: 'line',
                    areaStyle: {
                        opacity: 0.8,
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, area,false)
                    },
                    data: data
                }
            })  
        },
        echartsConfig(mapId) {
            let that = this
            let op = {}
            const _c = () => {
                switch (mapId) { 
                    case 'daily_collection':
                    case 'daily_sales':
                    case 'accumulated_sales':
                    case 'listen_course':
                    case 'A0':
                    case 'buy_after_course':
                    case 'accumulated_collection':
                        op = {
                            color: ['rgba(253,1,104,1)', 'rgba(1,202,254,1)', 'rgba(255,255,20,1)'],
                            legend: ['实际值', '监控值下限', '监控值上限'],
                            XYname: ['日期', '单位:万元'],
                            series: function () {
                                return that._getSeries(this.legend)
                            }
                        }
                        break;
                    case 'daily_sales_degree':    
                    case 'accumulated_sales_degree':   
                        op = {
                            color: ['rgba(253,1,104,1)', 'rgba(1,202,254,1)' ],
                            legend: ['实际值', '参考线' ],
                            XYname: ['日期', '单位:%'],
                            series: function () {
                                return that._getSeries(this.legend)
                            }
                        }
                }

                return op
            }
            return {  
                color: _c().color,
                legend: {
                    data: _c().legend,
                    right: 50,
                    textStyle: {
                        color: 'white',
                        fontSize: 10
                    }
                },
                tooltip: {
                    trigger: 'axis',
                        // confine:true,
                        position: function (pos, params, dom, rect, size) {
                            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                            // console.log(pos, params, dom, rect, size)
                            var obj = { top: -30 };
                            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                            return obj;
                        },
                    triggerOn: 'mousemove',
                    backgroundColor: 'rgba(0,0,0,0)',
                    // showDelay: 1,
                    formatter: this.toolTipString,
                    extraCssText: 'text-align: center;'

                },
                grid: {
                    left: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        name: _c().XYname[0],
                        nameLocation: "end",
                        nameTextStyle: {
                            color: 'rgb(65, 211, 253)',
                            fontWeight: 'bolder',
                            fontSize: 12,

                        },
                        data: this.mapData.data.sdate,
                        axisLabel: {
                            color: 'rgb(65, 211, 253)',
                            rotate: '65'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgb(65, 211, 253)'
                            }
                        },
                        axisTick: {
                            length: 5,
                            lineStyle: {
                                color: 'rgb(65, 211, 253)',
                            }
                        },
                        splitLine: {
                            show: false
                        },
                    }
                ],
                yAxis: [
                    {
                        name: _c().XYname[1],
                        nameLocation: 'end',
                        type: 'value',
                        axisLabel: {
                            color: 'rgb(65, 211, 253)'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgb(65, 211, 253)'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255,255,255,0.1)'
                            }
                        }
                    }
                ],
                series: _c().series()
            
            }
        },
        getLoadEcharts() {
            this.myChart = this.$echarts.init(document.getElementById(this.mapId))
            const option = this.echartsConfig(this.mapId)
            option && this.myChart.setOption(option);
        },
        toolTipString(params) { 
            this.sDate = params[0].axisValue
            
            let _s = `${this.sDate.slice(0, 4)}-${this.sDate.slice(4, 6)}-${this.sDate.slice(6, 8)}`
            let week = getWeek(_s)

            this.toolTip = (toolTipWidth=400,getHeader,getBody) => { 
                return `
                    <div style="width:${toolTipWidth}px;background:url(${backImg})no-repeat center;background-size:100% 100%;">
                        <div style="height:100%;padding:20px">
                            <div style="font-size:18px;font-weight:bold">${_s} (${week}) </div>
                            <hr/>
                            <table table style = "width:100%; border-collapse:separate; border-spacing:5px;" >
                                ${getHeader()}
                                ${getBody()}
                            </table>
                        </div>
                    </div>
                `
            }
            switch (this.mapId) { 
                case 'listen_course':
                case 'A0':  
                case 'buy_after_course': 
                case 'accumulated_sales': 
                case 'daily_sales':
                    const noShowLockPerson = ['daily_sales', 'accumulated_sales', 'buy_after_course','accumulated_collection'];
                    return this.toolTip(400, () => {
                        return `<tr><th>资源</th><th>实际值${_.indexOf(noShowLockPerson, this.mapId) <= -1 ? '/(占比)' : ''}</th><th>监控值${_.indexOf(noShowLockPerson, this.mapId) <= -1 ? '/(占比)' : ''}</th><th>涨跌幅</th></tr>`
                    }, () => {
                        const detail = this.mapData.tooltip[this.sDate];
                        let html = ''
                        detail.forEach(value => {
                            html += `<tr><td>${value.sourceId}</td><td>${value.realValue}${_.indexOf(noShowLockPerson, this.mapId) <= -1 ? `/</i><span style="color:#409EFF">(${value.realValueRatio}%)<span>` : ''}</td><td>${value.goal}${_.indexOf(noShowLockPerson, this.mapId) <= -1 ? `/<span style="color:#409EFF">(${value.goalRatio}%)</span>` : ''}</i ></td><td>${value.proportion}% ${value.proportion < 0 ? '<i class="el-icon-caret-bottom" style="color:#67C23A"></i>' : value.proportion == 0 ? '-' : '<i class="el-icon-caret-top" style="color:#F56C6C"></i>'} </td></tr>`
                        })
                        return html
                    })
                case 'accumulated_collection':    
                case 'daily_collection':
                    return this.toolTip(250, () => {
                        return ''
                    }, () => {
                        const detail = _.zip(this.mapData.data.sdate, this.mapData.data.goal, this.mapData.data.goalHigh, this.mapData.data.realValue)

                        let _index = _.findIndex(detail, (item) => {
                            return item[0] == this.sDate
                        })

                        const up_or_down = (detail[_index][3] / detail[_index][1] * 100).toFixed(1)
                        const arrow = up_or_down == 0 ? '-' : up_or_down < 100 ? '<i class="el-icon-caret-bottom" style="color:#67C23A"></i>' : '<i class="el-icon-caret-top" style="color:#F56C6C"></i>'
                        let html = `   
                            <tr>
                                <td style="text-align:right;width:100px">监控值下限:</td><td>${detail[_index][1]}</td>
                            </tr>
                            <tr>
                                <td style="text-align:right;width:100px">监控值上限:</td><td>${detail[_index][2]}</td>
                            </tr>
                            <tr><td style="text-align:right;width:100px">实际值:</td><td>${detail[_index][3]}</td></tr>
                            <tr><td style="text-align:right;width:100px">涨跌幅:</td><td>${up_or_down}%</td><td style="text-align:left">${arrow}</td></tr>
                        `
                        return html;
                    })
                case 'accumulated_sales_degree':
                case 'daily_sales_degree':
                    return this.toolTip(250, () => { 
                        return ''
                    }, () => { 
                        const detail = _.zip(this.mapData.data.sdate, this.mapData.data.goal,this.mapData.data.realValue)

                        let _index = _.findIndex(detail, (item) => {
                            return item[0] == this.sDate
                        })
                        let html = `   
                            <tr>
                                <td style="text-align:right;width:100px">参考线:</td><td>${detail[_index][1]}%</td>
                            </tr>
                            <tr>
                                <td style="text-align:right;width:100px">实际线:</td><td>${detail[_index][2]}%</td>
                            </tr>
                
                        `
                        return html;
                    })
            }
        },
    },
    mounted() {
        if (this.mapData) { 
            this.getLoadEcharts()
        }
        
    },  
    watch: {
        mapData: {
            deep: true,
            handler: function () { 
                this.getLoadEcharts()
            }
        }
     }
}
</script>
 
<style scoped>

.main_area {
    padding: 20px 10px;
    height:90%;
    overflow: auto;
}

</style>