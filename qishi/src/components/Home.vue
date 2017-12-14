<template>
  <div id="app">
    <view-box>
      <x-header class="header" style="" slot="header" :left-options="{showBack:false,backText:''}">
        <div>康妆商城</div>
      </x-header>
      <scroller class="my_scroller" :on-infinite="infinite">
        <swiper :list="swiperList" auto loop dots-position="right">
          
        </swiper>
        <tab class="tabnar">
          <tab-item selected>全部</tab-item>
          <tab-item>小白系列</tab-item>
          <tab-item>授权系列</tab-item>
        </tab>
        <div class="product_list" >
          <div class="product_list_item" v-for="item in productList">
            <img :src="item.product_image" alt="">
            <p>{{item.product_name}}</p>
            <span>{{item.product_price}}</span>
          </div>
        </div>
      </scroller>
      
    </view-box>
  </div>
</template>

<script>
import axios from 'axios'

import {ViewBox,XHeader,Swiper,Tab,TabItem,Panel} from 'vux';

export default {
  name: 'Home',
  components:{
    ViewBox,XHeader,Swiper,Tab,TabItem,Panel
  },
  data(){
    return {
      // swiperList:[{ url: 'javascript:', img: 'https://static.vux.li/demo/1.jpg', title: '送你一朵fua' }, { url: 'javascript:', img: 'https://static.vux.li/demo/5.jpg', title: '送你一次旅行', fallbackImg: 'https://static.vux.li/demo/3.jpg' }],
      swiperList:[],
      productList:[]
    }
  },
  methods:{
  
  },
  created(){
        //获取banner数据 
       axios.get('http://localhost/tp5/public/index.php/index/index/getBanner',{
         params:{}
       })
       .then(res=>{
         this.swiperList=res.data.map(item=>{
           return {
             src:'',
             title:item.product_name,
             img:'http://localhost/tp5/public/static/'+item.product_image
           }
         })
         this.productList=res.data.map(item=>{
           return {
             product_image:'http://localhost/tp5/public/static/'+item.product_image,
             product_name:item.product_name,
              product_price:item.product_price
           }
         })
         console.log(this.swiperList);
       })
       .catch(res=>{
         console.log(res)
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
  img{
    width:100%;
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
    width:100%;
  }
  .icon_back{
    fill:#fff;
    position:relative;
    top:-5px;
    left:-5px;
  }
  .tabnar{
    margin-top:15px;
  }
  .my_scroller{
    padding-bottom:50px;
  }
  .product_list_item{
    background:#fff;
    margin-bottom:10px;
  }
</style>
