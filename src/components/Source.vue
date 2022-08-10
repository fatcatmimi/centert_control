<template>
    <div class="container">
        <div class="title">资源分布</div>
        <!-- <div id="main"></div> -->
        <div class="content">
            <div id="main"></div>
        </div>
    </div>
</template>

<script>

export default {
    name:'SourceComponent',
    methods: {
        getLoadEcharts() { 
            let myChart = this.$echarts.init(document.getElementById('main'))
            let option = {
                // title:'aaaa',
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'left',
                    orient: 'vertical',
                    
                },
          
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            };
            myChart.setOption(option)
        }
    },

    mounted() { 
        this.getLoadEcharts()
    }
}
</script>

<style>
    .container .content{
        width:95%;
        height:250px
    }
    #main{
        width:100%;
        height:100%
    }
 
</style>