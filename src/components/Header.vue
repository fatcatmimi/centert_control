<template>
  <div>
    <img :src="headerImg" alt="">
  </div>
</template>

<script>
import headerImg from '../assets/img/headerbg.png'
export default {
  name:'HeaderComponent',
  data() { 
    return { headerImg }
  }
}
</script>
<style scoped>
  div{
    width:100%;
    height:150px;
  }
  img{
    width:100%;
    height:100%
  }
</style>