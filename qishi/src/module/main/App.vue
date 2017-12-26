<template>
  <div id="app">
    
    
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import {ViewBox,Tabbar,TabbarItem,Loading } from 'vux'
export default {
  name:'App',
  components:{
    ViewBox,Tabbar,TabbarItem,Loading
  },
  data(){
    return {

    }
  },
 computed: {
    ...mapState({
      isLoading: vuex_store => vuex_store.vux.isLoading
    })
  },
}
</script>
<style  lang="less">
@import '~vux/src/styles/reset.less';
@import '~common/css/iconfont.css';
 html,body{
    width:100%;
    height:100%;
    margin:0;
    background: #f1f1f1;
    font-family: 14px;
  }
  img{
    width:100%;
    display: block;
  }
#app{
  height:100%;
}
.my-header.vux-header .vux-header-left .left-arrow:before{
  border-width:2px 0 0 2px;
  border-color:#fff;
}
  .my-header{
    background-color: #4db90a!important;
    color:#fff;
    position: absolute;
    top:0;
    width:100%;
    .icon-white{
      fill:#fff;
      margin-top:-5px;
      margin-left:-10px;
    }
  }
.iconfont{
  font-size:20px;
}
.my-footer.weui-tabbar{
  position:fixed;
  
}
</style>
