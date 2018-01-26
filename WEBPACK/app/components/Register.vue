<template>
<div>
    <Mhead :isLogin="isLogin"></Mhead>
    <div class="main">
     <div class="login_box">
         <div class="login_form">
             <div class="" style="font-size:18px;margin-bottom:20px;">
                 用户注册
                
             </div>
             <el-input  class="input-group" v-model="username" placeholder="请输入手机号" clearable>
                 <i slot="prefix" class="iconfont icon-shoujihao"></i>
             </el-input>
             <el-input class="input-group" v-model="alias" placeholder="请输入真实姓名" clearable>
                 <i slot="prefix" class="iconfont icon-denglu"></i>
             </el-input>
             <el-input class="input-group" type="password" v-model="password" placeholder="请输入密码" clearable>
                 <i slot="prefix" class="iconfont icon-mima"></i>
             </el-input>

             <el-input class="input-group"  v-model="vcode" placeholder="请输入验证码" clearable>
                 <i slot="prefix" class="iconfont icon-yanzhengma"></i>
             </el-input>
             <div class="" style="font-size:12px;margin-bottom:20px;">
                 <el-checkbox v-model="ischecked"></el-checkbox>
                 我已阅读并同意<router-link style="font-size:12px;" class="red" to="/forget" >《用户协议》</router-link>
             </div>
             <el-button @click="userRegister" style="width:100%;margin-bottom:20px;font-size:17px;" type="primary">立即注册</el-button>
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
            isLogin:false,
            username:'',
            alias:'',
            IDCard:'',
            password:'',
            vcode:'',
            ischecked:true
        }
    },
  components:{
      Mhead
  },
  methods:{
      userRegister(){
          
      }
  }
}
</script>
<style lang="scss">
.iconfont{
    font-size:20px;
    margin-top:10px;
    display:block;
}
.main{
        
        background:url('../../static/images/login_bg.jpg') no-repeat center/cover;
        .login_box{
            width:1200px;
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
                margin-bottom:10px;
            }
            .el-input__inner{
                height: 45px;
            }
        }
    }
</style>



