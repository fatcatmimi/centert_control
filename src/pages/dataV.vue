<template>
    <div>
        <div>
            <div class="mirrow">
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
                <CardComponent :title="cardData.orderCount.name" :num="cardData.orderCount.value"></CardComponent>
            </div>
            <div class="main">
                <div class="content">
                    <dv-border-box-10>
                        <BallComponent :twoBallData="twoBallData" />
                    </dv-border-box-10>

                </div>

                <div class="content">
                    <dv-border-box-10>
                        <TurnOverComponent />
                    </dv-border-box-10>
                </div>
                <div class="content">
                    <dv-border-box-10>
                        <div class="data_area">
                            <DepartComponent />
                        </div>
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <TableComponent title="部门完成度" :table-data="deptData">
                            <el-table-column prop="deptId" label="单位" width="60" align="center">
                            </el-table-column>
                            <el-table-column prop="personCountBegin" label="期初(人)" width="80" align="center">
                            </el-table-column>
                            <el-table-column prop="personCountNow" label="当前(人)" width="80" align="center">
                            </el-table-column>
                            <el-table-column prop="amendMoney" label="任务(万)" width="80" align="center"
                                :formatter="tformat">
                            </el-table-column>
                            <el-table-column prop="realMoney" label="完成(万)" width="80" align="center">
                            </el-table-column>
                            <el-table-column prop="process" label="完成(%)" width="80" align="center">
                            </el-table-column>
                            <el-table-column prop="processForecat" label="预测(%)" align="center">
                            </el-table-column>
                        </TableComponent>
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <TableComponent title="工作量人均" :table-data="worksData">
                            <el-table-column prop="deptId" label="单位" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="callNum" label="总通次" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="validCallNum" label="有效通次" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="sumHold" label="通时" width="100" align="center">
                            </el-table-column>
                            <el-table-column label="勤奋度" align="center">
                                <template slot-scope="scope">
                                    <el-rate disabled :show-score="false" text-color="#ff9900" :value="scope.row.raty"
                                        :colors="['#ff8464', '#ff8464','#ff8464']" />
                                </template>

                            </el-table-column>
                        </TableComponent>
                    </dv-border-box-10>
                </div>
                <div class="content">
                    <dv-border-box-10>
                        <TableComponent title="资源完成度" :table-data="sourceCompleteTableData">
                            <el-table-column prop="sourceId" label="资源类型" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="amendMoney" label="任务(人)" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="realMoney" label="完成(人)" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="process" label="完成(%)" width="100" align="center">
                            </el-table-column>
                            <el-table-column prop="processForecat" label="预测(%)" align="center">
                            </el-table-column>
                        </TableComponent>
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="听课" mapId='listen_course' :mapData="course" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="累计A0含成单" mapId='A0' :mapData="A0" />
                    </dv-border-box-10>
                </div>
                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="课后自助购买" mapId='buy_after_course' :mapData="buy_after_course" />
                    </dv-border-box-10>
                </div>


                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="累计销售额" mapId='accumulated_sales' :mapData="accumulated_sales" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="每日销售额" mapId='daily_sales' :mapData="daily_sales" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="每日收钱" mapId='daily_collection' :mapData="daily_collection" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="累计销售额完成度" mapId='accumulated_sales_degree'
                            :mapData="accumulated_sales_degree" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="每日销售额完成度" mapId='daily_sales_degree' :mapData="daily_sales_degree" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="累计收钱" mapId='accumulated_collection' :mapData="accumulated_collection" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="收钱(按小时累计)" mapId='receive_money_sum_hour'
                            :mapData="receive_money_sum_hour" />
                    </dv-border-box-10>
                </div>

                <div class="content">
                    <dv-border-box-10>
                        <MapComponent title="收钱(每小时)" mapId='receive_money_every_hour'
                            :mapData="receive_money_every_hour" />
                    </dv-border-box-10>
                </div>
                <div class="content"></div>
            </div>
        </div>
    </div>

</template>

<script>

import DepartComponent from '@/components/Depart'
import BallComponent from '@/components/Ball'
import TurnOverComponent from '@/components/TurnOver.vue'
import CardComponent from '@/components/Card';

import MapComponent from '@/components/MapComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
import { createWebSocket } from '@/tools/common'

import { mapState, mapGetters, mapActions } from 'vuex'

import StoreConst from '@/store/StoreConst'
export default {
    props: ['stype', 'actId'],
    components: {
        BallComponent,
        TurnOverComponent,
        CardComponent,
        DepartComponent,
        TableComponent,
        MapComponent
    },
    created() {
        this.$bus.$on('searchData', (sdate) => {
            sdate = sdate.replace(/-/g, '')
            this.initData(sdate)
        })
    },
    mounted() {
        this.actId = this.actId
        this.createWebSocket()
    },
    methods: {
        ...mapActions(`${StoreConst.TableStore}`, ['tableData']),
        ...mapActions(`${StoreConst.LineStore}`, ['lineData']),
        ...mapActions(`${StoreConst.BallStore}`, ['ballData']),
        ...mapActions(`${StoreConst.BaseStore}`, ['baseData']),

        initData(sdate) {
            this.tableData({ sdate, actId: this.actId })
            this.lineData({ sdate, actId: this.actId })
            this.ballData({ sdate, actId: this.actId })
            this.baseData(sdate)
        },

        tformat(row, column, cellValue, index) {
            return this.$options.filters.thounds(cellValue)
        },
        createWebSocket() {
            createWebSocket.call(this, "ws://192.168.76.216:8000/ws?userId=2021639")
        },
    },
    computed: {
        ...mapState(`${StoreConst.CardStore}`, ['cardData']),
        ...mapState(`${StoreConst.LineStore}`, ['course', 'A0', 'buy_after_course', 'accumulated_sales', 'daily_sales', 'daily_collection',
            'accumulated_collection', 'receive_money_sum_hour', 'receive_money_every_hour']),
        ...mapState(`${StoreConst.TableStore}`, ['sourceCompleteTableData']),
        ...mapState(`${StoreConst.BallStore}`, ['twoBallData']),

        /**获取state的2种方法，在这没什么特别原因，就是用一下getters*/
        ...mapGetters(`${StoreConst.TableStore}`, ['deptData', 'worksData']),
        ...mapGetters(`${StoreConst.LineStore}`, ['accumulated_sales_degree', 'daily_sales_degree']),
    }
}
</script>

<style>
.header {
    width: 100%;
    height: 150px;
}

.header .title {
    height: 150px;

}

.header .title img {
    width: 100%;
    height: 100%;
}

.mirrow {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    flex-wrap: nowrap
}

.main {
    /* margin-top:10px; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap
}

.main .content {
    width: 32%;
    height: 350px;
    /* border: 1px solid purple; */
    padding: 5px
}


.border {
    position: relative;
    font-size: 12px;
    height: 45px;
    line-height: 20px;
    width: 200px;
    top: px;
    text-align: center;

    /* border: 1px solid transparent; */
    /* border-image: linear-gradient(-45deg, #00104e, #00c0fe, #00c0fe, #00104e); */
    /* border-image-slice: 1; */
    color: #FFF;
    margin-left: 65%;
    margin-bottom: 10%;
    /* border-radius: 15px 0px; */
    /* background-color: #012a84; */
}
</style>