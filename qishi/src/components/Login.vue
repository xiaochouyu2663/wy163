<template>
  
    <view-box style="background:#fff;">
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
      
        <x-button type="primary" style="width:200px;background:4db90a" @click.native="loginFn(username,password)">登录</x-button>
      
      <toast v-model="isShow" :time="2000" type="text" width="200px" @on-hide="onHide" :is-show-mask="true" :text="showText" position="middle"></toast>
    </view-box>
  
</template>

<script>
  import axios from 'axios'
  import {getCookie,setCookie} from '../util/util'
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
        this.$vux.loading.show({
         text: '正在加载中'
        })

        axios.get('http://localhost/tp5/public/index.php/index/index/login?',{
          params:{
            username:user,
            password:pwd
          }
        })
        .then(res=>{
          this.$vux.loading.hide()
          
          if(res.data.code==200){
            this.isShow=true;
            this.showText='登录成功';
            setCookie('userToken',res.data.data['token'],3600);  //存储用户西信息
            this.$store.commit('updateUserId',res.data.data['userId']);
            this.$store.commit('updateUserToken',res.data.data['token']);
            if(this.$route.query.redirect){
                this.$router.push(this.$route.query.redirect+'/'+res.data.data['userId']);  //跳转到登陆之前的页面
            }else{
                this.$router.push('home/'+res.data.data['userId']);    //如果不是由其他页面跳转到登陆页，那么登录以后跳转到商城首页
            }
            
          }else{
            this.isShow=true;
            this.showText=res.data.data;
            
          }
        })
        .catch(err=>{
          this.$vux.loading.hide()
          this.$vux.Toast.text('登录失败，请重新登录!','middle');
          console.log(err)
        })
        
      },
      onHide(){
        
      }
    },
    created(){
        
    }
  }
</script>

<style lang="less" scoped>

 
  @import '~common/css/reset.css';
  @import '~common/css/iconfont.css';

  .weui-cells.vux-no-group-title::before{
    border-top:1px solid #fff;
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
    
  
</style>
