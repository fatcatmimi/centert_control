<template>
    <div class="container">
        <div class="title">{{title}}</div>
        <div class="main_area">
            <el-table :data="tableData" 
            :header-cell-style="{
                backgroundColor: '#001149',
                color: '#41d3fd'    
            }" :cell-style="{
                backgroundColor: '#001149',
                borderBottom: 'none !important',
                padding:'5px 0'
            }" :size="'medium'" :row-style="rowStyle">
                <slot></slot>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'tableData'],
    methods: {
        rowStyle({ row }) {
            if (row.deptId == 0 || row.sourceId== 100) { 
                return {
                    color: '#c98e54',
                    fontSize:'16px',
                    fontWeight:'border'
                }
            } else {
                return {
                    color: '#A7DAF5'
                }
            }
            
        }
    }
  
}
</script>
 
<style scoped>

.main_area {
    padding: 0 25px;
    height: 72%;
    overflow: auto;
}
</style>