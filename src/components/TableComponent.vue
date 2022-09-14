<template>
    <div class="container">
        <div class="title">{{title}}</div>
        <div class="main_area">
            <el-table :data="tableData" :header-cell-style="{
                backgroundColor: '#001149',
                color: '#41d3fd'    
            }" :cell-style="{
                backgroundColor: '#001149',
                borderBottom: 'none !important',
                padding:'4px 0'
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
            if (row.deptId == 0 || row.sourceId == 100) {
                return {
                    color: '#c98e54',
                    fontSize: '16px',
                    fontWeight: 'border'
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
    padding: 5px;
    height: 80%;
    width: 90%;
    margin: 50px auto;
    overflow: auto;
    /* border: 1px solid red */
}
</style>