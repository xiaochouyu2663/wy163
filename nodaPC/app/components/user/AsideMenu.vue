<template>
  <div class="user-menu" style="height:500px;padding-top:20px;">
      <el-menu style="border-right:none;" :unique-opened="true" :router="false" @open="handleOpen" @close="handleClose" @select="handleSelect">
        <el-submenu index="1">
            <span slot="title"><i class="el-icon-goods"></i>我的交易记录</span>
            <el-menu-item :route="{path:'/'}" index="1-1">退款申请单</el-menu-item>
            <el-menu-item index="1-2">退货申请单</el-menu-item>
            <el-menu-item index="1-3">我的积分</el-menu-item>
            <el-menu-item index="1-4">我的评论</el-menu-item>
        </el-submenu>
    
    
        <el-submenu index="2">
            <span slot="title"><i class="el-icon-share"></i>我的合作伙伴</span>
            <el-menu-item index="2-1">分享赚佣金</el-menu-item>
            <el-menu-item index="2-2">一阶伙伴</el-menu-item>
        </el-submenu>
    
    
        <el-submenu index="3">
            <span slot="title"><i class="el-icon-setting"></i>个人设置</span>
            <el-menu-item index="3-1">个人信息</el-menu-item>
            <el-menu-item index="3-2">门店信息</el-menu-item>
            <el-menu-item index="3-3">修改密码</el-menu-item>
            <el-menu-item index="3-4">我的收获地址</el-menu-item>
            <el-menu-item  index="3-5">账户安全</el-menu-item>
        </el-submenu>
    
        <el-submenu index="4">
            <span slot="title"><i class="el-icon-message"></i>站内消息</span>
            <el-menu-item title="站内信" index="4-1">站内信</el-menu-item>
        </el-submenu>
          
      </el-menu>
  </div>
</template>
<script>

export default {
    components:{
       
    },
    methods:{
        handleOpen(key, keyPath) {
        console.log('菜单展开是时的key，keyPath:'+key, keyPath);
      },
       handleClose(key, keyPath) {
        console.log('菜单收起时的key，keyPath:'+key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log('菜单激活时的key，keyPath:'+key, keyPath);
      }
    }
}
</script>
<style>

</style>


