<template>
    <el-container>
        <el-header>
            <HeaderComponent />
        </el-header>
        <el-main style="margin-top:40px">
            <!-- 卡片行-->
            <el-row :gutter="20">
                <el-col :span="3">
                    <Card :title="cardData.orderCount.name" :num="cardData.orderCount.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf106.name" :num="cardData.wf106.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf2.name" :num="cardData.wf2.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf15.name" :num="cardData.wf15.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf101.name" :num="cardData.wf101.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf100Rate.name" :num="cardData.wf100Rate.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf13.name" :num="cardData.wf13.value"></Card>
                </el-col>
                <el-col :span="3">
                    <Card :title="cardData.wf7.name" :num="cardData.wf7.value"></Card>
                </el-col>
            </el-row>

            <!-- 资源分布行-->
            <el-row>
                <el-col :span="8">
                    <SourceComponent />
                </el-col>
                <el-col :span="8">
                    <!-- <CountFolp /> -->
                    <TurnOverComponent />
                </el-col>
                <el-col :span="8">
                    <DepartComponent />
                </el-col>

            </el-row>

            <!-- 第三行-->
            <el-row>
                <!-- 部门完成度 -->
                <el-col :span="8">
                    <TableComponent title="部门完成度" :table-data="deptCompleteTableData">
                        <el-table-column prop="a" label="单位" width="60" align="center">
                        </el-table-column>
                        <el-table-column prop="b" label="期初(人)" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="c" label="当前(人)" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="d" label="任务(%)" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="e" label="完成(人)" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="f" label="完成(%)" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="g" label="预测(%)" align="center">
                        </el-table-column>
                    </TableComponent>
                </el-col>
                <el-col :span="8">
                    <BallComponent />
                </el-col>
                <!-- 资源完成度 -->
                <el-col :span="8">
                    <TableComponent title="资源完成度" :table-data="sourceCompleteTableData">
                        <el-table-column prop="a" label="资源类型" width="100" align="center">
                        </el-table-column>
                        <el-table-column prop="b" label="任务(人)" width="100" align="center">
                        </el-table-column>
                        <el-table-column prop="c" label="完成(人)" width="100" align="center">
                        </el-table-column>
                        <el-table-column prop="d" label="完成(%)" width="100" align="center">
                        </el-table-column>
                        <el-table-column prop="e" label="预测(%)" align="center">
                        </el-table-column>
                    </TableComponent>
                </el-col>
            </el-row>


            <!-- 第四行 -->
            <el-row>
                <el-col :span="8">
                    <MapComponent title="听课" mapId='listen_course' />
                </el-col>
                <el-col :span="8">
                    <MapComponent title="开户人数" mapId='open_account_person' />
                </el-col>
                <el-col :span="8">
                    <MapComponent title="开户工单数" mapId='open_account_count' />
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import HeaderComponent from './Header.vue';
import Card from './Card';
import SourceComponent from './Source'
import DepartComponent from './Depart'

import BallComponent from './Ball.vue'
// import DeptComplete from './DeptComplete.vue';
// import SourceComplete from './SourceComplete.vue';
import MapComponent from './MapComponent.vue';
import TableComponent from './TableComponent.vue'

import TurnOverComponent from './TurnOver.vue'

import { mapState, mapGetters, mapActions } from 'vuex'
import StoreConst from '@/store/StoreConst'

export default {
    name: 'ContentComponent',
    components: {
        HeaderComponent
        , Card
        , SourceComponent
        , DepartComponent
        , BallComponent
        , MapComponent
        , TurnOverComponent
        , TableComponent
    },
    mounted() { 
        //组件加载 发送请求获取数据
        // this.$store.dispatch('getData', '2022-08-04')
        // this.getData('2022-08-04')
    },
    methods: {
        // ...mapActions({
        //     getData:'getData'
        // })
    },
    computed: {
        ...mapState(`${StoreConst.CardStore}`, ['cardData'])  ,
        ...mapState(`${StoreConst.TableStore}`, ['sourceCompleteTableData', 'deptCompleteTableData'])
    }
}
</script>
