<template>
    <div class="container">
        <div class="title">实时开户人数</div>
        <ul class="fp-box" style="margin-top:15%">
            <!-- 需要显示6列 -->
            <li ref="li" v-for="i in 7" :key="i">
                <!-- 每列中的10行数字 -->
                <span v-for="num in 10" :key="num">{{ num - 1 }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'TurnOverComponent',
    data() {
        return {
            numberArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //固定每列中的19行数字
            // numStr: "", // 需要展示的数字字符串
            numArr: [0, 0, 0, 0, 0, 0, 0] ,//默认展示6个数字数组
        };
    },
    methods: {
        draw() { 
            this.numArr = this.numStr.split("");
            let numArrlen = this.numArr.length;
            // 展示数字的处理，不够6位前面补0
            for (let i = 0; i < 7 - numArrlen; i++) {
                this.numArr.unshift(0);
            }
            this.$refs.li.forEach((item, index) => {
                let ty = this.numArr[index];
                // 滚动数字(li标签)
                item.style.transform = `translateY(-${ty * 70}px)`;
            });
        }
    },
    computed: {
        ...mapState('turnOver',['numStr'])
    }, 
    watch: {
        numStr: function () { 
            this.draw()
        }
    },

};
</script>

<style  scoped>


* {
    margin: 0;
    padding: 0;
}

.fp-box {
    display: flex;
    overflow: hidden;
    justify-content:space-around;
}

.fp-box li{
        width: 50px;
        height: 70px;
        flex-direction: column;
        transition: transform 1s ease-in-out;
        list-style-type:none
}

.fp-box li::marker{
    content:''
}

.fp-box li span{
        text-align: center;
        background-image: linear-gradient(90deg, #ff8464 0%, #ff6e5c 100%);
        box-shadow: 0 3px 16px 0 rgba(3, 5, 21, 0.12);
        font-size: 32px;
        color: #ffffff;
        display: flex;
        display: inline-block;
        width: 50px;
        height: 70px;
        padding:15px
}
</style>