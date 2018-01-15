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
    }
    html,body{
        padding:0;
        margin:0;
    }

    ul,li{
        list-style:none;
    }
    .w12{
        width:1200px;
        margin:0 auto;
    }
    a,a:link,a:visited,a:focus{
        color:#000;
        text-decoration: none;
    }
</style>


