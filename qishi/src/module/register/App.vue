<template>
  <div id="app">
    
      <x-header class="my-header" :left-options="{showBack:true,backText:''}" title="注册" >
        
      </x-header>
      <group  class="my-group" label-width="60px" label-margin-right="10px" label-align="left">
        <x-input label-width="80px" placeholder="分享人姓名" type="text" title="分享人姓名">
        </x-input>
        <x-input label-width="90px"  placeholder="分享人会员号" type="text"title="分享人会员号">
        </x-input>
  
        <x-input placeholder="姓名" type="text" title="姓名">
        </x-input>
      
        <x-input placeholder="手机号" type="text" title="手机号">
        </x-input>
      
        <x-input placeholder="验证码" type="text" title="验证码">
        </x-input>
      
        <x-input placeholder="登录密码" type="password" title="登录密码">
        </x-input>
      
        <x-input placeholder="确认密码" type="password" title="登录密码">
        </x-input>
        
      </group>
  </div>
</template>

<script>
  import {ViewBox,XHeader,Icon,Group,XInput } from 'vux'
  export default {
    name: 'app',
    components: {
      ViewBox,XHeader,Icon,Group,XInput
    },
    methods:{
     
    }
  }
</script>

<style lang="less" >
    @primary-color:#4db90a;
   @import '~vux/src/styles/reset.less';
   html,body{
  width:100%;
  height:100%;
  overflow-x:hidden;
}
body{
  font-size:14px;
  background:#f1f1f1;
}
#app{
  height:100%;
}
.my-header{
  background:@primary-color!important;
}

.my-group .weui-cells{
  margin-top:0;
  font-size:14px;
}
.my-group  .weui-cells:before{
  height:0;
  border-top:none;
}

</style>
