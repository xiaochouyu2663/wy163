<template>
<div id="header">
    <div class="header_top">
        <div class="header_top-main w12">
            <div class="top-title">
                你好，欢迎光临农哒商城
            </div>
            <div class="top-form">
                <router-link to="login">登录</router-link>
                <router-link to="register">注册</router-link>
            </div>
        </div>
  </div>
  <el-row class="header_main w12">
      <el-col :span="6" class="header-logo">
          <router-link to="/">
              <img src="../../static/images/logo.jpg" alt="">
          </router-link>
          
      </el-col>
      <el-col :span="12"  class="header-search">
          <div>
              <div class="header-search-box">
                <el-input id="search" v-model="search" prefix-icon="el-icon-search" clearable placeholder="请输入搜索内容"></el-input>
                <el-button class="primary">搜&nbsp;&nbsp;索</el-button>
            </div>
            <div style="font-size:14px;margin-top:5px;">
                热门关键字:
                <span>sfs</span>
                <span>sfs</span>
            </div>
          </div>
      </el-col>
      <el-col :span="6" class="header-shopcar">
        <div style="text-align:right;margin-top:10px;">
            <el-button class="shopcar primary">
                <i class="el-icon-goods"></i>
                购物车0件
                <i class="el-icon-arrow-right"></i>
            </el-button>
        </div>
      </el-col>
  </el-row>
  <div class="w12">
      <el-button class="primary">商品全部分类</el-button>
  </div>
</div>
  
</template>
<script>
export default {
  data(){
      return {
          search:''
      }
  },
  created(){
      this.$nextTick(()=>{
          $('.primary').mouseover(function(){

              $(this).css({'background':'#bdd90b','color':'#fff'})
          })
      })
      
  }
}
</script>
<style  lang="scss">
    $primary-color:#bdd90b;
    .primary{
        background:$primary-color;
        color:#fff;
        border:none;
        border-radius:0;
    }
    
    #header{
        border-bottom:2px solid $primary-color;
        .header_top{
            font-size:12px;
            color:#959595;
            background:rgb(248,248,248);
            line-height:30px;
            border-bottom:1px solid #ebebeb;
            .header_top-main{
                margin:0 auto;
                overflow: hidden;
            }
            .top-title{
                float:left;
            }
            .top-form{
                float:right;
                a{
                   color:#959595; 
                }
            }
        }
        .header_main{
            margin:0 auto;
            padding:10px 0;
            .header-search-box{
                border:2px solid $primary-color;
                display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6 */
                display: -moz-box;  /* OLD - Firefox 19- H5不用考虑 */
                display: -mz-flexbox; 
                display:flex;
                margin-top:10px;
            }
        }
    }
    #search{
        outline:none;
        border:none;
        border-radius:0;
    }
    .shopcar{
        background:$primary-color;
        border:none;
        border-radius: 0;
        color:#fff;
        outline:2px solid $primary-color;
    }
</style>


