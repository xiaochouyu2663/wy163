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
      <el-col :span="4" class="header-logo">
          <img src="../../static/images/logo.jpg" alt="">
      </el-col>
      <el-col :span="16" class="header-search">
        <div class="header-search-box">
            <input type="search">
            <el-button>搜索</el-button>
        </div>
        <div>
            热门关键字
        </div>
      </el-col>
      <el-col :span="4" class="header-shopcar">
        sfsf
      </el-col>
  </el-row>
</div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
    $primary-color:#bdd90b;
    #header{
        border-bottom:2px solid $primary-color;
        .header_top{
            font-size:14px;
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
            }
        }
        .header_main{
            outline:1px solid red;
            margin:0 auto;
            .header-search-box{
                border:2px solid $primary-color;
            }
        }
    }
</style>


