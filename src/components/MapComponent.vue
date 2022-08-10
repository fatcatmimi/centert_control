<template>
    <div class="container">
        <div class="title">{{title}}</div>
        <div class="content">
            <div :id="mapId" style="width:580px;height:250px"></div>
        </div>
    </div>
</template>

<script>
function getWeek(day) {
    console.log(day)
    let days = new Date(day).getDay();
    switch (days) { 
        case 1:
            return '星期一';
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
        case 0:
            return '星期日';
             
    }
}
function toolTipFormatterFunction(params) {    
    let sDate = params[0].axisValue
    let week = getWeek(sDate)
    return `
            <div style="width:450px;height:300px;background:url(${backImg})no-repeat center;background-size:100% 100%;">
                <div style="height:100%;padding:20px">
                    <div>${sDate}(${week})</div>
                    <hr/>
                    <table style="width:100%">
                        <tr><th>资源</th><th>实际值/(占比)</th><th>监控值/(占比)</th><th>涨跌幅</th></tr>
                    </table>                   
                </div>
            </div>
    `
}

import backImg from "../assets/img/elastic-frame.png";
export default {
    name: 'MapComponent',
    props: ['title', 'mapId'],
    methods: {
        getLoadEcharts() {
            let myChart = this.$echarts.init(document.getElementById(this.mapId))
            const option = {
                    color: ['rgba(1,202,254,1)', 'rgba(255,255,20,1)', 'rgba(253,1,104,1)'],
                    legend: {
                        data: ['监控值下限', '监控值上限', '实际值'],
                        right:50,
                        textStyle: {
                            color: 'white',
                            fontSize:10
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
                        backgroundColor:'rgba(0,0,0,0)',
                        showDelay:5,
                        formatter: toolTipFormatterFunction,
                        textStyle: {
                            fontWeight: 'bolder',
                        }
                    },
                    grid: {
                        left: '4%',
                        // right: '0%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap:false,
                            name: '日期',
                            nameLocation: "end",
                            nameTextStyle: {
                                color: 'rgb(65, 211, 253)',
                                fontWeight: 'bolder',
                                fontSize: 12,

                            },
                            data: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07'],
                            axisLabel: {
                                color: 'rgb(65, 211, 253)',
                                rotate: '45'
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
                            splitLine:{
                                show:false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            name: '单位:人数',
                            nameLocation:'end',
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
                    series: [
                        {
                            name: '监控值下限',
                            type: 'line',
                           
                            areaStyle: {
                                opacity: 0.3,
                                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,107,170,1)'
                                    },
                                    {
                                        offset: 8,
                                        color: 'rgba(0, 107, 170, 0)'
                                    }
                                ])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '监控值上限',
                            type: 'line',
                          
                            areaStyle: {
                                opacity: 0.3,
                                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(255, 255,20, .5)'
                                    },
                                    {
                                        offset: 8,
                                        color: 'rgba(255, 255,20, 0)'
                                    }
                                ])
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '实际值',
                            type: 'line',
                        
                            areaStyle: {
                                opacity: 0.3,
                                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(98,90,150,.7)'
                                    },
                                    {
                                        offset: 8,
                                        color: 'rgba(98,90,150,0)'
                                    }
                                ])
                            },
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        
                    ]
            };
            option && myChart.setOption(option);  
        }
    },
    mounted() {
        this.getLoadEcharts()
    }
}
</script>
