<template>
  <div id="app">
    <view-box>
    <tabbar icon-class="iconfont icon-denglu">
      <tabbar-item link="/home" selected icon-class="iconfont icon-caidantubiao-02">
         <span slot="icon" >
        <!--  <img src="~common/images/dui.png" alt="">-->
        </span> 
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/shopcar" show-dot badge="0" icon-class="iconfont icon-gouwuche">
         <span slot="icon">
         <!-- <img src="~common/images/shopcar.png" alt="">-->
        </span> 
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/person" icon-class="iconfont icon-geren">
        <span slot="icon"></span>
        <span slot="label">
          个人中心
        </span>
      </tabbar-item>
    </tabbar>
    <router-view></router-view>
    </view-box>
  </div>
</template>
<script>

import {ViewBox,Tabbar,TabbarItem} from 'vux'
export default {
  name:'App',
  components:{
    ViewBox,Tabbar,TabbarItem
  },
  data(){
    return {

    }
  }

}
</script>
<style  lang="less">
@import '~vux/src/styles/reset.less';
// @import '~common/css/reset.css';
@import '~common/css/iconfont.css';
#app{
  height:100%;
}
.iconfont{
  font-size:20px;
}
</style>
