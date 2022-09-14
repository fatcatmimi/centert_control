<template>
  <div class="header">
    <div class="title">
      <img src="../assets/img/headerbg.png" alt="">
    </div>
    <div class="oprtate_area">
      <el-date-picker @change="changeDate" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" v-model="value"
        style="width:150px;margin:0 5px" size="small" :editable="false" :picker-options="pickerOptions">
      </el-date-picker>

      <template v-if="isShow">
        <el-button plain size="small" class="stype" @click="dialogTableVisible=true">
          {{searchCondition.deptName}}
        </el-button>
      </template>

      <el-button type="text" @click="searchData">查询</el-button>
    </div>


    <el-dialog :visible.sync="dialogTableVisible" custom-class="sale-center">
      <SearchTypeComponentVue>
        <template slot-scope="scope">
          <template v-for="item in scope.saleCenter">
            <div class="searchTypeMain">
              <div class="searchTypeTitle">
                {{item.title}}
              </div>
              <div class="searchTypeContent">
                <el-button type="primary" class="button_style" v-for="b in item.buttonList" :key="b.UnitId"
                  @click="handleClick(b)">
                  {{b.unitName}}
                </el-button>
              </div>
            </div>
          </template>

        </template>
      </SearchTypeComponentVue>
    </el-dialog>
  </div>
</template>

<script>
import SearchTypeComponentVue from './SearchTypeComponent.vue'
import { dateFormatString } from '@/tools/common'
import { mapState } from 'vuex'
import StoreConst from '@/store/StoreConst'

export default {
  name: 'HeaderComponent',
  components: { SearchTypeComponentVue },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value: null,
      dialogTableVisible: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (value) {
        this.value = dateFormatString(value)
      }
    }
  },
  computed: {
    ...mapState(`${StoreConst.BaseStore}`, ['searchCondition']),
    isShow: function () {
      if (this.$store.state.base.searchCondition.deptId == 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    //设置日期
    changeDate(date) {
      this.value = date
      Object.assign(this.$store.state.base.searchCondition, {
        sdate: date
      })
    },
    handleClick: function (button) {
      console.log(button)
      Object.assign(this.$store.state.base.searchCondition, {
        deptId: button.deptId,
        deptName: button.unitName
      })
      // this.currentName = button.unitName
      this.dialogTableVisible = false
    },
    searchData() {
      this.$bus.$emit('searchData')
    },
  }
}
</script>
<style scoped>
.header {
  position: relative;
}

.header .oprtate_area {
  position: absolute;
  bottom: 20px;
  right: 20px;
  /* border: 1px solid red */
}

.stype {
  width: 150px;
  color: black !important
}

.stype:hover {
  background-color: #FFF !important;
  color: black !important
}
</style>

<style>
.el-dialog.sale-center {
  font-size: 50px;
  background-color: #001149;
}
</style>