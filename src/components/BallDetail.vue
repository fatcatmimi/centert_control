<template>
    <div class="ball-main">
        <div class="ball">
            <div class="content-text">
                <div class="person"> {{ person | thounds }}人</div>
                <div class="dgree">{{ degree }}%</div>
            </div>
            <img src="../assets/img/effect_n3.png" alt="">
        </div>
        <div class="text">{{text}}}</div>
    </div>
</template>

<script>
export default {
    name: 'BallDetail',
    props: ['text', 'person','degree'],
}
</script>

<style scoped>


    .ball{
        position: relative
    }
    .content-text{
        border:1px soild black;
        height:50px;
        padding:5px;
        position: absolute ;
        font-size:25px;
        font-weight: bolder;
        top:50px;
        left:50px     
    }
    .content-text .person {
        width:150px;
        height:30px;
        line-height: 30px;
        /* border:1px solid green; */
        margin-bottom: 5px;
    }


    .ball-main{
        text-align: center;
        font-size:18px
    }
</style>