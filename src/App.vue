<template>
  <div id="app">
    <ContentComponent></ContentComponent>
  </div>
</template>

<script>
import ContentComponent from './components/Content'
import Ws from '@/tools/websocket'
import StoreConst from '@/store/StoreConst'
export default {
  name: 'App',
  components: {
    ContentComponent
  },
  methods: {
    createWebSocket() {
      this.webSocket = new Ws("ws://10.202.100.148:8000/ws?userId=2021639")
      this.webSocket.callback =(msg) => {
        let data = JSON.parse(msg.data)
        console.log(data)
        if (data.msgType == 69) {
          this.$store.dispatch(`${StoreConst.TurnOverStore}/updateTurnOverData`, data.msg)
        } else if (data.msgType == 68) {
          this.$store.dispatch(`${StoreConst.CardStore}/updateCardData`, data.msg)
        }
      }
    },
  },

  mounted() {
    this.createWebSocket()
  },
  destroyed() {
    this.webSocket.socket.close()
  }
}
</script>

<style>

   .container {
      margin-top:20px;
      padding: 30px;
      width: 600px;
      display: inline-block;
      height:350px;
      /* min-height: 350px;
      max-height:500px;  */
      background: url('~@/assets/img/jamb.png') no-repeat center;
      background-size: 100% 100%;
      overflow: hidden;
    }

    .container-table {
      height: 500px !important
    }

    .container .title{
      /* min-width:130px; */
      text-align: center;
      width:130px;
      height:30px;
      font-size:16px;
      font-weight: 30;
      background: url('~@/assets/img/frame_upper.png'), url('~@/assets/img/frame_down.png');
      background-repeat: no-repeat, no-repeat;
      background-position: top right, left bottom;
      margin-bottom: 15px;
    }

    .container .table-area {
        height: 350px;
        overflow: auto
      }
    .el-table::before{
        background-color: transparent!important;
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      border-radius: 10px;
      background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #FFF;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      background-color: #AAA;
    }

    .el-table__empty-block{
      background-color:rgb(0,28,97)
    }
    .el-table__empty-block span{
      color:#ddd
    }

</style>
