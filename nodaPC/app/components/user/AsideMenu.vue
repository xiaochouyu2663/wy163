<template>
  <div class="user-menu" style="height:500px;padding-top:20px;">
      <el-menu ref="userMenu" style="border-right:none;" :default-openeds="[]" :default-active="curPath" :unique-opened="false" :router="true" @open="handleOpen" @close="handleClose" @select="handleSelect">
        <el-submenu index="1">
            <span slot="title"><i class="el-icon-goods"></i>我的交易记录</span>
            <el-menu-item index="returnmoney">退款申请单</el-menu-item>
            <el-menu-item index="returngoods">退货申请单</el-menu-item>
            <el-menu-item index="integral">我的积分</el-menu-item>
            <el-menu-item index="comment">我的评论</el-menu-item>
        </el-submenu>
    
    
        <el-submenu index="2">
            <span slot="title"><i class="el-icon-share"></i>我的合作伙伴</span>
            <el-menu-item index="share">分享赚佣金</el-menu-item>
            <el-menu-item index="partner">一阶伙伴</el-menu-item>
        </el-submenu>
    
    
        <el-submenu index="3">
            <span slot="title"><i class="el-icon-setting"></i>个人设置</span>
            <el-menu-item index="personal">个人信息</el-menu-item>
            <el-menu-item index="shops">门店信息</el-menu-item>
            <el-menu-item index="updatepwd">修改密码</el-menu-item>
            <el-menu-item index="address">我的收获地址</el-menu-item>
            <el-menu-item  index="safety">账户安全</el-menu-item>
        </el-submenu>
    
        <el-submenu index="4">
            <span slot="title"><i class="el-icon-message"></i>站内消息</span>
            <el-menu-item title="站内信" index="message">站内信</el-menu-item>
        </el-submenu>
          
      </el-menu>
  </div>
</template>
<script>

export default {
    props:{
        curPath:undefined
    },
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
    },
    created(){
        this.$nextTick(()=>{
            // console.log(this.$refs.userMenu.open('4'));
            // setTimeout(()=>{
            //     this.$refs.userMenu.close('4')
            // },2000)
            console.log(this.curPath)
        })
        
    }
}
</script>
<style>

</style>


