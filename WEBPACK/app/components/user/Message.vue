<template>
  <div>
    <Nhead></Nhead>
    <div style="width:1200px;margin:15px auto 0;overflow:hidden;margin-bottom:100px;">
        <AsideMenu :curPath="'message'"></AsideMenu>
        <div class="user-main">
            <div class="contents">
                <p class="title">我的站内信</p>
                <div >
                    <el-table width="100%" :data="tableData" :stripe="false" border >
                        <el-table-column type="selection" label="选择" prop=""></el-table-column>
                        <el-table-column width="100px" label="状态">
                            <img style="width:20px;" slot-scope="scope" src="~static/images/read0.jpg" alt="">
                        </el-table-column>
                        <el-table-column width="400px" label="标题" prop="title"></el-table-column>
                        <el-table-column label="发件人" prop="name"></el-table-column>
                        <el-table-column label="时间" prop="date"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <em >查看回复</em>
                                <em>删除</em>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination  @size-change="handleSizeChange"
      @current-change="handleCurrentChange" layout="prev, pager, next,jumper"
       :total="100" prev-text="上一页" next-text="下一页"
        >

                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Nhead from '../common/Nhead'
import UserHead from './UserHead'
import AsideMenu from './AsideMenu'
export default {
    components:{
        Nhead,UserHead,AsideMenu
    },
    data(){
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            title: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            title: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            title: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            title: '上海市普陀区金沙江路 1516 弄'
          }]
        
        }
    },
    methods:{
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>
<style lang="scss">
    .el-table{
        font-size:12px;
        text-align: center;
        em{
            font-style:normal;
            color:#ff5c14;
            cursor: pointer;
        }
    }
    .el-table th{
        text-align: center;
        color:#606266;
    }
    .el-pagination{
        float:right;
        margin-top:20px;
    }
    .el-pager li{
        color:#606266;
        margin-right:10px;
        border:1px solid ;
        border-radius:2px;
    }
    .el-pager li.active{
        color:#ff5c14;
        border:1px solid ;
    }
    .el-pager li:hover{
        color:#ff5c14;
        
    }
    .el-pager li.active+li{
        border:1px solid;
    }
    .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon:hover{
        color:#ff5c14;
    }
    .el-pagination button:hover.disabled{
        color:#c0c4cc;
    }
    .el-pagination button:hover{
        color:#ff5c14;
    }
</style>


