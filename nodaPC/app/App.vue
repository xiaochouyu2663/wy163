<template>
  <router-view></router-view>
</template>
<script>

import Home from './components/Home'
export default {
 name:'App',
 components:{
    
 },
 data(){
     return {
         msg:'sdfds'
     }
 },
 created(){
     
 }
}
</script>
<style lang="scss" >
    *{
        padding:0;
        margin:0;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    html,body{
        padding:0;
        margin:0;
        font-size:14px;
        color:#585858;
    }
    body{
        background: #f3f3f3;
    }
    ul,li{
        list-style:none;
    }
    .w12{
        width:1200px;
        margin:0 auto;
    }
    a,a:link,a:visited,a:focus{
        color:#585858;
        text-decoration: none;
    }
    a.red,a.red:visited{
        color:#fe5722;
    }
    .user-menu{
        float:left;
        width:180px;
        background:#fff;
        color:#585858;
    }
</style>


