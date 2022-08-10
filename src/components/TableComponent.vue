<template>
    <div class="container container-table">
        <div class="title">{{title}}</div>
        <div class="table-area">
            <el-table :data="tableData" style="width: 100%" :header-cell-style="{
                                backgroundColor: 'rgb(0,28,97)',
                                color: '#41d3fd'    
                            }" :cell-style="{
                                    backgroundColor: 'rgb(0,28,97)',
                                    color: '#A7DAF5',
                    borderBottom: 'none !important'
                            }" :size="'medium'">
            
                <slot></slot>
            
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','tableData']
}
</script>

<style>

</style>