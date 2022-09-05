<template>
    <div class="container container-table">
        <div class="title">部门完成度</div>
        <div class="table-area">
            <el-table :data="tableData" style="width: 100%; " :header-cell-style="{
                backgroundColor: 'rgb(0,28,97)',
                color: '#41d3fd'
     
            }" :cell-style="{ backgroundColor: 'rgb(0,28,97)', color: 'white',borderBottom:'none !important'}"
                :size="'medium'">

                <el-table-column prop="date" label="单位" width="60" align="center">
                </el-table-column>
                <el-table-column prop="name" label="期初(人)" width="80" align="center">
                </el-table-column>
                <el-table-column prop="address" label="当前(人)" width="80" align="center">
                </el-table-column>
                <el-table-column prop="address" label="任务(%)" width="80" align="center">
                </el-table-column>
                <el-table-column prop="address" label="完成(人)" width="80" align="center">
                </el-table-column>
                <el-table-column prop="address" label="完成(%)" width="80" align="center">
                </el-table-column>
                <el-table-column prop="address" label="预测(%)" align="center">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
export default {
    name: "DeptCompleteComponent",
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
                },
                    {
                    date: '100',
                    name: 'bb',
                    address: 'cc'
                }
            ]
        }
    }
}
</script>

 