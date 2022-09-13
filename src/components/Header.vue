<template>
  <div class="header">
    <div class="title">

      <img src="../assets/img/headerbg.png" alt="">
    </div>
    <div class="oprtate_area">
      <el-date-picker @change="changeDate" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" v-model="value"
        style="width:150px;margin:0 5px" size="small" :editable="false">
      </el-date-picker>

      <el-button type="primary" round @click="searchData">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      value: null
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (value) {
        const _t = value ? new Date(value) : new Date();
        const year = _t.getFullYear()
        const month = _t.getMonth() + 1 < 10 ? '0' + (_t.getMonth() + 1) : (_t.getMonth() + 1)
        const day = _t.getDate() < 10 ? '0' + _t.getDate() : _t.getDate()
        this.value = `${year}-${month}-${day}`
      }
    }
  },
  methods: {
    changeDate(date) {
      this.value = date
    },
    searchData() {
      this.$bus.$emit('searchData', this.value)
    }
  },
  mounted() {
    setTimeout(() => {
      this.searchData()
    }, 500);

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
</style>