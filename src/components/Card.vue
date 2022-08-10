<template>
    <div class="content">
        <div class="title">{{title}}</div>
        <hr>
        <div class="num">
            {{ num | thounds }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'ShowCard',
    props: ['title','num'],
}
</script>

<style scoped>
    .content{
        position:relative;
        width:150px;
        height:100px;
        padding:15px;
        color:white;
        border-radius: 10px;
        background:#003399;
        box-shadow:5px 5px 5px #888888;
        overflow: hidden
    }
    .title{
        text-align: center;
        font-size:16px;
        font-weight: bold;
    }
    .num{
        font-size:14px;
        text-align: center;
    }

   
    .content:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background: linear-gradient(-45deg, transparent 30%, transparent, rgba(255, 255, 255, .5), transparent 70%) no-repeat;
        background-size: 200% 200%;
        background-position: 200% 200%;
    }

    .content:hover:before{
        transition:background-position 3s;
        background-position: -100% -100%;
    }

   
</style>