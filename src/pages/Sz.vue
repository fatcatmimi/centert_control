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
          <TableComponent title="部门完成度" :table-data="deptData">
            <el-table-column prop="deptId" label="单位" width="60" align="center">
            </el-table-column>
            <el-table-column prop="personCountBegin" label="期初(人)" width="80" align="center">
            </el-table-column>
            <el-table-column prop="personCountNow" label="当前(人)" width="80" align="center">
            </el-table-column>
            <el-table-column prop="amendMoney" label="任务(万)" width="80" align="center" :formatter="tformat">
            </el-table-column>
            <el-table-column prop="realMoney" label="完成(万)" width="80" align="center">
            </el-table-column>
            <el-table-column prop="process" label="完成(%)" width="80" align="center">
            </el-table-column>
            <el-table-column prop="processForecat" label="预测(%)" align="center">
            </el-table-column>
          </TableComponent>
        </el-col>
        <el-col :span="8">
          <BallComponent />
        </el-col>
        <!-- 资源完成度 -->
        <el-col :span="8">
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
        </el-col>
      </el-row>


      <!-- 第四行 -->
      <el-row>
        <el-col :span="8">
          <MapComponent title="听课" mapId='listen_course' :mapData="courseData" />
        </el-col>
        <el-col :span="8">
          <MapComponent title="开户人数" mapId='open_account_person' :mapData="courseData" />
        </el-col>
        <el-col :span="8">
          <MapComponent title="开户工单数" mapId='open_account_count' :mapData="courseData" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import Card from '@/components/Card';
import SourceComponent from '@/components/Source'
import DepartComponent from '@/components/Depart'

import BallComponent from '@/components/Ball.vue'
 
import MapComponent from '@/components/MapComponent.vue';
import TableComponent from '@/components/TableComponent.vue'

import TurnOverComponent from '@/components/TurnOver.vue'
 
import { mapState, mapGetters, mapActions } from 'vuex'
 
import StoreConst from '@/store/StoreConst'

export default {
  name: 'SzComponent',
  props: ['stype', 'sdate', 'actId'],
  components: {
    HeaderComponent,
    Card,
    SourceComponent,
    DepartComponent,
    BallComponent,
    MapComponent,
    TurnOverComponent,
    TableComponent,
 
},
  mounted() {
    this.sdate = this.sdate
    this.actId = this.actId
    // this.getAllData().then(data => {
    //   this.$store.dispatch(`${StoreConst.TableStore}/tableData`, [data[0], data[1]])
    // })

    this.tableData({ sdate: this.sdate, actId: this.actId })
    this.lineData({ sdate: this.sdate, actId: this.actId })


    // console.log(typeof 'aaa')
    //组件加载 发送请求获取数据
    // this.$store.dispatch('getData', '2022-08-04')
    // this.getData('2022-08-04')
  },
  methods: {
    ...mapActions(`${StoreConst.TableStore}`, ['tableData']),
    ...mapActions(`${StoreConst.LineStore}`, ['lineData']),
    
    tformat(row,column,cellValue,index) {
      return this.$options.filters.thounds(cellValue)
    },
  },
  computed: {
    ...mapState(`${StoreConst.CardStore}`, ['cardData']),
    ...mapState(`${StoreConst.LineStore}`, ['courseData']),


    /**获取state的2种方法，在这没什么特别原因，就是用一下getters*/
    ...mapState(`${StoreConst.TableStore}`, ['sourceCompleteTableData']),
    ...mapGetters(`${StoreConst.TableStore}`, ['deptData']),  
  }
}
</script>