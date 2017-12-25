<template>



  <view-box>
    <x-header class="my-header" :left-options="{backText:''}">
        <!-- <icon slot="overwrite-left"	></icon> -->
      <div>商品详情</div>
    </x-header>
    <card class="product_detail_box" >
	    <img :src="pro_detail.product_image" slot="header" alt="">
    	<div slot="content" class="product_detail_head">
		    <div class="commodity_name">
		    	<div class="com_name">{{pro_detail.product_name}}</div>
		    	<div class="price">{{pro_detail.product_price}}</div>
		    </div>
		    <div class="number">
		    	<div class="weight">单位</div>
		    	<div class="num">
		    		<span class="reduce" @click="minus()">-</span>
		    		<input class="numm" v-model="pro_num">
		    		<span class="plus" @click="plus()">+</span>
		    	</div>
		    </div>
	    </div>
	    <div slot="content" class="introduce">
	    	<div class="commodity_title vux-1px" style="display:inline-block;">商品详情</div>
	    	<div class="commodity_comment">
            {{pro_detail.introduce}}
            </div>
	    </div>
	  </card>
    <tabbar class="my-footer">
      <tabbar-item class="addcar" @on-item-click="addcar()">
        <span slot="label" style="color:#fff;">加入购物车</span>
      </tabbar-item>
      <tabbar-item class="buynow" @on-item-click="buynow()">
        <span slot="label" style="color:#fff;">立即购买</span>  
      </tabbar-item>
    </tabbar>
  </view-box>
  
</template>

<script>
  import axios from 'axios'
  import {ViewBox,XHeader,Card,Tabbar, TabbarItem,Icon} from 'vux'
 

  export default {
    name:'Detail',
    components: {
      ViewBox,XHeader,Card,Tabbar, TabbarItem,Icon
    },
    data(){
      return {
        pro_detail:{

        },
        pro_num:1
      }
    },
    created(){
      axios.get('http://localhost/tp5/public/index.php/index/index/getBanner',{
        params:{}
      })
      .then(res=>{
        var oid=this.$route.params.proid;
        var vm=this;
        res.data.forEach(function(v,i,a){
          if(oid==v.product_id){
            vm.pro_detail=v;
            vm.pro_detail.product_image='http://localhost/tp5/public/static/'+v.product_image;
            vm.pro_detail.introduce="sdfsfsdfsdfswefs";
          }
        })
      })
      .catch(err=>{
        console.log(err)
      })
      // console.log(this.$store.state.scrollPath=pos)
    },
    methods:{
      plus(){
        this.pro_num++;
      },
      minus(){
        this.pro_num=this.pro_num>2 ? this.pro_num-1:1;
      },
      addcar(){
        console.log('加入购物车')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  html,body{
    width:100%;
    height:100%;
    margin:0;
    background: #f1f1f1;
  }
  img{
    width:100%;
    display: block;
  }
  .my-header{
    background-color: #4db90a!important;
    color:#fff;
    position: relative;
    top:0;
    width:100%;
  }
  .product_detail_box.weui-panel{
    margin-top:0px;
    background:none;
  }
  .product_detail_box .product_detail_head{
      margin:10px 0;
      background: #fff;
      overflow: hidden;
      padding:10px;
  }
  .product_detail_box .product_detail_head .commodity_name{
    margin: .2rem;
    overflow: hidden;
    .com_name{
      float: left;
    font-size: 14px;
    width: 70%;
    }
    .price{
      width: 30%;
      float: right;
      text-align: right;
      font-size: 14px;
    }
  }
  .product_detail_box .product_detail_head .number{
    margin: .2rem;
    overflow: hidden;
    .weight{
      float:right;
      font-size: 14px;
    }
    .num{
      float: left;
      .reduce,.plus{
        border: 1px solid #ccc;
        width: 20px;
        line-height: 20px;
        text-align: center;
        display:inline-block;
        float:left;
      }
      .numm{
        display: inline-block;
        font-size: 14px;
        line-height:20px;
        border:1px solid #ccc;
        width:40px;
        text-align: center;
        border-width:1px 0 1px 0;
        float:left;
        outline:none;
      }
      
    }
  }
  .product_detail_box .introduce{
    background:#fff;
    padding:10px;
    font-size:14px;
    min-height:200px;
  }
  .weui-tabbar.my-footer{
    position:fixed;
    
    .addcar{
      background:#00aaf2;
      color:#fff!important;
    }
    .buynow{
      background:#fa5e1b;
      color:#fff;
    }
    .weui-tabbar__label{
      color:#fff;
    }
    .weui-tabbar__label{
        color:#fff!important;
    }
  }
</style>
