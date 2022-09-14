<template>
    <div>
        <slot :saleCenter="saleCenter"></slot>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import StoreConst from '../store/StoreConst'
export default {
    name: 'SearchTypeComponent',
    props: ['dataList', 'dataIndex'],
    mounted() {
        this.getSaleCenter(this.$store.state.base.searchCondition.searchType)
    },
    methods: {
        ...mapActions(`${StoreConst.BaseStore}`, ['getSaleCenter']),
     
    },
    computed: {
        ...mapState(`${StoreConst.BaseStore}`, ['saleCenter']),
    }
}
</script>

<style scoped>
.searchTypeMain {
    width: 80%;
    height: 250px;
    margin: 10px auto;
    background: url('~@/assets/img/jamb.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: auto;
}

.searchTypeMain .searchTypeTitle {
    position: relative;
    top: 30px;
    left: 20px;
    color: white;
    text-align: center;
    width: 150px;
    height: 25px;
    font-size: 16px;
    font-weight: 50;
    background: url('~@/assets/img/frame_upper.png'), url('~@/assets/img/frame_down.png');
    background-repeat: no-repeat, no-repeat;
    background-position: top right, left bottom;
}

.searchTypeMain .searchTypeContent {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: 30px;
}

.searchTypeMain .button_style {
    width: 200px;
    margin: 10px
}
</style>