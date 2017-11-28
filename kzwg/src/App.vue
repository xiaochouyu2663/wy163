<template>
  <div id="app">
    <view-box>
      <x-header class="header" style="" slot="header" :left-options="{showBack:true,backText:''}">
        <x-icon slot="overwrite-left" size="30" type="ios-arrow-back"  class="icon_back"></x-icon>
        <div>康妆商城</div>
      </x-header>
      <scroller class="my_scroller" refreshText="loading" :on-refresh="refresh" :on-infinite="infinite">
        <swiper :list="swiperList" auto loop dots-position="center">
          
        </swiper>
        <tab class="tabnar">
          <tab-item selected>全部</tab-item>
          <tab-item>小白系列</tab-item>
          <tab-item>授权系列</tab-item>
        </tab>
        <panel :list="proList">

        </panel>
      </scroller>
      <tabbar slot="bottom" class="my_tabbar">
        <tabbar-item>
          <img slot="icon" src="./assets/bianji.png"/>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="./assets/bianji.png"/>
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="./assets/bianji.png"/>
          <span slot="label">个人</span>
        </tabbar-item>
      </tabbar>
    </view-box>
    <router-view/>
  </div>
</template>

<script>
import {ViewBox,XHeader,Swiper,Tab,TabItem,Panel,Tabbar,TabbarItem} from 'vux';

export default {
  name: 'app',
  components:{
    ViewBox,XHeader,Swiper,Tab,TabItem,Panel,Tabbar,TabbarItem
  },
  data(){
    return {
      swiperList:[],
      proList:[]
    }
  },
  methods:{
    refresh(done){
      setTimeout(() => {
        this.$http.get('./data/prolist.json').
        then((res)=>{
          console.log(res)
          this.proList=this.proList.concat(res.data.data.map(item=>{
            return {
              src: 'http://wx.kzddshop.net/'+item.PREVIEW_IMAGE,
              title: item.PRODUCT_NAME,
              desc: item.PRICE,
              url: '/component/prodetail'
            }
          }))

          console.log(this.proList)
        })
        
        done()
      }, 1500)
    },
    infinite(done){
      setTimeout(() => {
        this.$http.get('./data/prolist.json').
        then((res)=>{
          console.log(res)
          this.proList=this.proList.concat(res.data.data.map(item=>{
            return {
              src: 'http://wx.kzddshop.net/'+item.PREVIEW_IMAGE,
              title: item.PRODUCT_NAME,
              desc: item.PRICE,
              url: '/component/prodetail'
            }
          }))
        })
        
        done()
      }, 1500)
    }
  },
  created(){
        this.$http.get('./data/banner.json').
        then((res)=>{
          if(res.data.total>0){
            this.swiperList=res.data.data
            res.data.data.forEach((value,index)=>{
              let that=value;
              let num=index;
              this.swiperList.forEach((value,index)=>{
                if(index==num){
                  value.img='http://wx.kzddshop.net/data/getimage.ashx?file_id='+that.FILE_NAME
                }
                
              })
            })
          }
        })

        this.$http.get('./data/prolist.json').
        then((res)=>{
          this.proList=res.data.data.map(item=>{
            return {
              src: 'http://wx.kzddshop.net/'+item.PREVIEW_IMAGE,
              title: item.PRODUCT_NAME,
              desc: item.PRICE,
              url: '/component/prodetail'
            }
          })
        })
      }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html,body{
    width:100%;
    height:100%;
    margin:0;
    background: #f1f1f1;
  }
  #app{
    height:100%;
    .my_scroller{
    top:46px;
  }
  }
  .header{
    background-color: #4db90a!important;
    color:#fff;
    position: absolute;
    top:0;
  }
  .icon_back{
    fill:#fff;
    position:relative;
    top:-4px;
    left:-4px;
  }
  .tabnar{
    margin-top:15px;
  }
  // .my_tabbar{
  //   position: fixed;
  //   bottom:0;
  // }
</style>
