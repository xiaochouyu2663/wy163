<template>
  <view-box ref="viewBox">
    <x-header slot="header" class="my-header" :left-options="{showBack:true,backText:''}">个人中心</x-header>
    <panel style="background:#4db90a;color:#000;margin-top:-1px;padding:10px 0" class="my-panel" :list="personInfo"></panel>
    <grid :cols="3" style="background:#fff;margin-top:10px;"> 
      <grid-item :link="item.path" v-for="item in centerMenu">
        <div class="center_mn" :class="[item.bgColor]">
            <img :src="item.bgSrc" alt="">
        </div>
        <span >{{item.label}}</span>
      </grid-item>
      
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
      personState:1,
      personInfo:[{
        src: 'http://somedomain.somdomain/.jpg',
        fallbackSrc: 'http://localhost/tp5/public/static/images/white.jpg',
        title: '用户名：张三',
        desc: '级别：一星'
      }],
      centerMenu:[
        {
          path:'/order',
          bgColor:'menu-green',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'订单中心'
        },
        {
          path:'/game',
          bgColor:'menu-orange',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'游戏中心'
        },
        {
          path:'/integral',
          bgColor:'menu-bluelight',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'积分中心'
        },
        {
          path:'/home',
          bgColor:'menu-pink',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'购物中心'
        },
        {
          path:'/address',
          bgColor:'menu-dgreen',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'收货地址'
        },
        {
          path:'/news',
          bgColor:'menu-purple',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'消息中心'
        },
        {
          path:'/personalInfo',
          bgColor:'menu-mgreen',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'个人信息'
        },
        {
          path:'/share',
          bgColor:'menu-dblue',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'分享好友'
        },
        {
          path:'/myshop',
          bgColor:'menu-yellow',
          bgSrc:'http://localhost/tp5/public/static/images/order.png',
          label:'我的分店'
        }
      ]
    }
  },
  created(){
    this.$nextTick(()=>{
    })
  },
  methods:{

  }
}
</script>
<style lang="less">
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
.center_mn{
  background: #ccc;display:block;border-radius:50%;
  &+span{
    display:block;margin:8px auto 0;color:#000;text-align:center;font-size:14px;
  }
}
.menu-green{
  background:#4db90a;
}
.menu-orange{
  background:#e48c1a;
}
.menu-bluelight{
  background:#7185ec;
}
.menu-pink{
  background:#e46e95;
}
.menu-dgreen{
  background:#49bf91;
}
.menu-purple{
  background:#a37fd9;
}
.menu-mgreen{
  background:#5eb372;
}
.menu-dblue{
  background:#5aa6f2;
}
.menu-yellow{
  background:#eeb951;
}
.weui-grid:before{
  border-right:none!important;
}
.weui-grid:after{
  border-bottom:none!important;
}
</style>


