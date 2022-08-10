<template>
    <div class="container">
        <div class="title">开户情况</div>
        <div class="border">
            <div>本期总任务 {{ 54823 | thounds }} 人</div>
            <div>实际完成 0 人</div>
        </div>

        <div class="ball-area">
            <BallDetail text='昨日预测完成度' person="5100" degree="107" />
            <BallDetail text='今日预测完成度' person='4600' degree="110" />
        </div>
    </div>
</template>

<script>
 
import BallDetail from './BallDetail.vue'
export default {
    name: "BallComponentll",
    components: { 
        BallDetail
    }
}
</script>

<style scoped>






.container{
    height:500px
}

.container .border{
    text-align: center;
    width:250px;
    border: 1px solid transparent;
    border-image: linear-gradient(-45deg, #00104e, #00c0fe, #00c0fe, #00104e);
    border-image-slice: 1;
    color: #FFF;
    margin-left: 50%;
    margin-bottom:10%;
    border-radius: 15px 0px;
    background-color: #012a84;
}

.ball-area{
    display: flex;
}
</style>