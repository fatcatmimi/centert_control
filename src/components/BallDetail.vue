<template>
    <div class="ball-main">
        <div class="ball">
            <div class="content-text">
                <div class="person"> {{ person | thounds }}万元</div>
                <div class="dgree">{{ degree }}%</div>
            </div>
            <img src="../assets/img/effect_n3.png" alt="" width="200px" height="150px">
        </div>
        <div class="text">{{text}}</div>
    </div>
</template> 

 


<script>
export default {
    name: 'BallDetail',
    props: ['text', 'person', 'degree'],
}
</script>

<style scoped>
.ball {
    position: relative;
}

.content-text {
    border: 1px soild black;
    height: 50px;
    padding: 5px;
    position: absolute;
    font-size: 20px;
    font-weight: bolder;
    top: 30px;
    left: 25px
}

.content-text .person {
    width: 150px;
    height: 30px;
    line-height: 30px;
    /* border:1px solid green; */
    margin-bottom: 5px;
}


.ball-main {
    text-align: center;
    font-size: 18px
}
</style>