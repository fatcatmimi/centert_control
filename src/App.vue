<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
.container {
  /* margin-top:20px; */
  padding: 10px 15px;
  /* border:1px solid green; */
  width: 600px;
  /* display: inline-block; */
  height: 350px;
  /* min-height: 350px;
      max-height:500px;  */
  /* background: url('~@/assets/img/jamb.png') no-repeat center;
      background-size: 100% 100%; */
  overflow: auto;
}

.container .title {
  /* min-width:130px; */
  text-align: center;
  width: 150px;
  height: 25px;
  font-size: 16px;
  font-weight: 30;
  background: url('~@/assets/img/frame_upper.png'), url('~@/assets/img/frame_down.png');
  background-repeat: no-repeat, no-repeat;
  background-position: top right, left bottom;
  /* margin: 15px; */
}

.container .main_area {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;

}

.el-table::before {
  background-color: transparent !important;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
  background-color: #FFF;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3); */
  background-color: #AAA;
}

.el-table__empty-block {
  /* background-color:rgb(0,28,97) */
  background-color: #001149
}

.el-table__empty-block span {
  color: #ddd
}
</style>
