<template>
  <view-box ref="viewBox">
    <x-header slot="header" class="my-header" :left-options="{showBack:true,backText:''}">个人中心</x-header>
    <panel style="background:#4db90a;color:#000;margin-top:-1px;padding:10px 0" class="my-panel" :list="personInfo"></panel>
    <grid :cols="3" style="background:#fff;"> 
      <grid-item>
        <a class="go_order center_mn" style="background: rgb(77, 185, 10);display:block;border-radius:50%;">
            <img src="http://localhost/tp5/public/static/images/order.png" alt="">
        </a>
        <span style="display:block;margin:8px auto 0;color:#000;">订单中心</span>
      </grid-item>
      <grid-item>ss</grid-item>
      <grid-item>ss</grid-item>
      <grid-item>ss</grid-item>
    </grid>
    <tabbar icon-class="iconfont icon-denglu" class="my-footer">
      <tabbar-item link="/home"  icon-class="iconfont icon-caidantubiao-02">
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
      <tabbar-item link="/person" selected icon-class="iconfont icon-geren">
        <span slot="icon"></span>
        <span slot="label">
          个人中心
        </span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>
<script>
import {ViewBox,Tabbar,TabbarItem,XHeader,Panel,Grid, GridItem} from 'vux';
export default {
  name:'Person',
  components:{
    ViewBox,Tabbar,TabbarItem,XHeader,Panel,Grid, GridItem
  },
  data(){
    return {
      personInfo:[{
        src: 'http://somedomain.somdomain/.jpg',
        fallbackSrc: 'http://localhost/tp5/public/static/images/white.jpg',
        title: '用户名：张三',
        desc: '级别：一星'
      }]
    }
  },

}
</script>
<style>
.my-panel .weui-media-box_appmsg .weui-media-box__thumb{
  border-radius:50%;
}
.weui-media-box__title{
  font-size:16px;
  color:#fff;
}
.weui-media-box__desc{
  color:#000;
  font-size:16px;
  color:#fff;
}
.center_mn{
  width:56px;
  height:56px;
  display: block;
  margin:0 auto;
}
.center_mn img{
  width:30px;
  height:30px;
  margin:0 auto;
  padding:12px 0;
}
</style>


