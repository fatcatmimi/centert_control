<template>
    <div class="container">
        <div class="title">销售排名</div>
        <div class="main_area">
            <el-row :gutter="10" v-for="(item,index) in 4" :key="index" style="margin-top:10px">
                <el-col :span="2">
                    <div v-if="index == 0" class="crown">
                        <img src="../assets/img/first.png" />
                    </div>
                    <div v-else-if="index == 1" class="crown">
                        <img src="../assets/img/second.png" />
                    </div>
                    <div v-else-if="index == 2" class="crown">
                        <img src="../assets/img/third.png" />
                    </div>
                    <div v-else class="crown">
                        <span></span>
                    </div>
                </el-col>
                <el-col :span="2">
                    <span>{{ index + 1 }}</span>
                </el-col>
                <el-col :span="5">
                    <span>云集一中心</span>
                </el-col>
                <el-col :span="15">
                    <el-progress :text-inside="true" :stroke-width="26" :percentage="real_percentage" :format="format">
                    </el-progress>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DepartComponent',
    data() { 
        return {
            percentage: 23
        }
    },
    computed:{ 
        real_percentage:function(){ 
            if (this.percentage > 100) {
                return 100
            } else { 
                return this.percentage
            }
        }
    },
    methods: {
        format() { 
            return this.percentage+'%';
        }
    }
}
</script>

<style scoped>
  .main_area{
    padding:0 15px;
    height:65%;
    overflow: auto;
  }
  .crown{
    width:30px;
    height:30px
  }

  .crown img{
    width:100%;
    height:100%
  }
</style>