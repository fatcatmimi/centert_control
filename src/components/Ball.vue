<template>
    <div class="container">
        <div class="title">销售情况</div>
        <div class="border">
            <dv-border-box-8>
                <div>本期总任务 {{ twoBallData.mission.amendMoney | thounds }} 万元</div>
                <div>实际完成 {{ twoBallData.mission.realMoney | thounds }} 万元</div>
            </dv-border-box-8>
        </div>

        <div class="ball-area">
            <BallDetail text='昨日预测完成度' :person="twoBallData.yesterday.forecast" :degree="twoBallData.yesterday.realMoneyForecast" />
            <BallDetail text='今日预测完成度' :person="twoBallData.today.forecast" :degree="twoBallData.today.realMoneyForecast"  />
        </div>
    </div>
</template> 

 

<script>
 
import BallDetail from './BallDetail.vue'
export default {
    name: "BallComponentll",
    props:['twoBallData'],
    components: { 
        BallDetail
   }
}

</script>
<style scoped>
    .container{
        height:100%;
    }
    .container .border{
        text-align: center;
        width:200px;
        /* border: 1px solid transparent; */
        /* border-image: linear-gradient(-45deg, #00104e, #00c0fe, #00c0fe, #00104e);
        border-image-slice: 1; */
        color: #FFF;
        margin-left: 50%;
        /* margin-bottom:10%; */
        /* border-radius: 15px 0px; */
        /* background-color: #012a84; */
    } 

    .ball-area{
        display: flex;
        justify-content: space-around;
    }
</style>