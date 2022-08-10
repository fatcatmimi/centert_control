<template>
    <div class="container container-table">
        <div class="title">资源完成度</div>
        <div class="table-area">
            <el-table :data="tableData" style="width: 100%" :header-cell-style="{
                backgroundColor: 'rgb(0,28,97)',
                color: '#41d3fd'    
            }" :cell-style="{
                    backgroundColor: 'rgb(0,28,97)',
                    color: '#A7DAF5',
    borderBottom: 'none !important'
            }" :size="'medium'">

                <el-table-column prop="date" label="资源类型" width="100" align="center">
                </el-table-column>
                <el-table-column prop="name" label="任务(人)" width="100" align="center">
                </el-table-column>
                <el-table-column prop="address" label="完成(人)" width="100" align="center">
                </el-table-column>
                <el-table-column prop="address" label="完成(%)" width="100" align="center">
                </el-table-column>
                <el-table-column prop="address" label="预测(%)" align="center">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
export default {
    name: "SourceCompleteComponent",
    data() { 
        return {
            tableData: [
                {
                    date: '100',
                    name: 'bb',
                    address:'cc'
                },
                {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                },
                {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }, {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }, {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }, {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                },
                {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                },
                {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                },
                {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }, {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }, {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }, {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                },
            ]
        }
    }
}
</script>

<style>

</style>
