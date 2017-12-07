<template>
  <div id="app">
    <view-box>
      <x-header class="my-header" :left-options="{showBack:true,backText:''}" :right-options="{showMore:false}">
        <p>登录</p>
        <a slot="right" href="register.html">注册</a>
      </x-header>
      <img style="width:200px;margin:0 auto;display:block;" src="~common/images/logo.jpg" alt="">
      <group gutter="0" class="my-group" >
          <x-input type="text"  v-model="username" placeholder="请输入用户名" class="my-input">
            <span slot="label" class="iconfont icon-denglu" style="font-size:16px;margin-right:10px;"></span>
          </x-input>
      </group>
      <group gutter="0" class="my-group" >
          <x-input title="密码"  type="password" v-model="password" placeholder="请输入密码" class="my-input">
            <span slot="label" class="iconfont icon-mima" style="font-size:16px;margin-right:10px;"></span>
          </x-input>
      </group>
      <group>
        <x-button type="primary" style="width:200px;background:4db90a" @click.native="loginFn(username,password)">登录</x-button>
      </group>
      <toast v-model="isShow" :time="2000" type="text" width="200px" @on-hide="onHide" :is-show-mask="true" :text="showText" position="middle"></toast>
    </view-box>
  </div>
</template>

<script>
  import axios from 'axios'

  import {ViewBox,XHeader,Group,Cell,XInput,XButton,Toast} from 'vux'
  export default {
    name: 'app',
    components: {
      ViewBox,XHeader,Group,Cell,XInput,XButton,Toast
    },
    data(){
      return {
        username:'',
        password:'',
        isShow:false,
        showText:''
      }
    },
    methods:{
      loginFn(user,pwd){
        axios.get('http://localhost/tp5/public/index.php/index/index/login?',{
          params:{
            username:user,
            password:pwd
          }
        })
        .then(res=>{
          console.log(res.data.result)
          if(res.data.result=="success"){
            window.location.href="register.html"
          }else{
            this.isShow=true;
            this.showText=res.data.result;
            
          }
        })
        .catch(err=>{
          console.log(err)
        })
        
      },
      onHide(){
        console.log('已经隐藏了')
      }
    }
  }
</script>

<style lang="less" scoped>
  *{
    font-size:14px;
  }
  @import '~common/css/reset.css';
  @import '~common/css/iconfont.css';
  html,body{
    margin:0;padding:0;
    width:100%;
    height:100%;
    background:#ffffff;
  }
  .weui-cells.vux-no-group-title::before{
    border-top:1px solid #fff;
  }
  #app{
    height:100%;
    .my-header{
      background:#4db90a;
      span{
        color:#fff;
      }
      &.vux-header .vux-header-left .left-arrow:before{
        border-color:#fff;
      }
      p{
        margin:0;
        font-size:16px;
      }
    }
    .my-group{
      width:80%;
      border-radius:5px;
      margin:10px auto;
      .weui-cells:before{
        border-top:none;
      }
      .weui-cells:after{
        border-top:none!important;
      }
      .my-input{
        border:1px solid #ccc;
        border-radius:5px;
      }
    }
    
  }
</style>
