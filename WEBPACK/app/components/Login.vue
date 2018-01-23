<template>
<div>
 <Mhead :isLogin="isLogin"></Mhead>
 <div class="main">
     <div class="login_box">
         <div class="login_form">
             <div class="" style="font-size:18px;margin-bottom:20px;">
                 用户登录
                 <router-link style="font-size:16px;float:right;" to="/register" class="red">立即注册</router-link>
             </div>
             <el-input class="input-group" v-model="username" placeholder="请输入用户名" clearable>
                 <i slot="prefix" class="el-input__icon el-icon-search"></i>
             </el-input>
             <el-input class="input-group" type="password" v-model="password" placeholder="请输入密码" clearable>
                 <i slot="prefix" class="el-input__icon el-icon-search"></i>
             </el-input>
             <div class="" style="font-size:14px;margin-bottom:20px;">
                 <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
                 <router-link style="font-size:14px;float:right;" to="/forget" >忘记密码</router-link>
             </div>
             <el-button style="width:100%;margin-bottom:80px;" type="primary">登&nbsp;&nbsp;录</el-button>
         </div>
     </div>
 </div>
</div>
 
</template>
<script>
import Mhead from './Mhead.vue'
export default {
    data(){
        return {
            isLogin:true,
            username:'',
            password:'',
            isAutoLogin:true
        }
    },
  components:{
      Mhead
  }
}
</script>
<style lang="scss">
    .main{
        
        background:url('../../static/images/login_bg.jpg') no-repeat center/cover;
        .login_box{
            width:1000px;
            margin:0 auto;
            overflow: hidden;
        }
        .login_form{
            float:right;
            background:#fff;
            width:320px;
            
            padding:20px ;
            margin:40px 0;
            .input-group{
                margin-bottom:20px;
            }
        }
    }
    
</style>



