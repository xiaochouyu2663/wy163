<template>
  <tabbar icon-class="iconfont icon-denglu" class="my-footer">
      <tabbar-item link="/home"  icon-class="iconfont icon-caidantubiao-02">
         <span slot="icon" >
        <!--  <img src="~common/images/dui.png" alt="">-->
        </span> 
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/shopcar" selected show-dot badge="0" icon-class="iconfont icon-gouwuche">
         <span slot="icon">
         <!-- <img src="~common/images/shopcar.png" alt="">-->
        </span> 
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/person"  icon-class="iconfont icon-geren">
        <span slot="icon"></span>
        <span slot="label">
          个人中心
        </span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import {XDialog,XButton,Tabbar,TabbarItem } from 'vux'
export default {
    data(){
        return {
            isShow:true
        }
    },
  components:{
      XDialog,XButton ,Tabbar,TabbarItem
  }
}
</script>
<style>

</style>


