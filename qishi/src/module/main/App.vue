<template>
  <div id="app">
    
    
    <router-view></router-view>
    
  </div>
</template>
<script>
import { mapState } from 'vuex'
import {ViewBox,Tabbar,TabbarItem} from 'vux'
export default {
  name:'App',
  components:{
    ViewBox,Tabbar,TabbarItem
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
#set-default {
  .weui-cell__bd{
      flex:0!important;
      font-size:14px;
  }
  .weui-switch, .weui-switch-cp__box{
    width:38px;
    height:22px;
}
.weui-switch:before, .weui-switch-cp__box:before{
    width:36px;
    height:20px;
}
.weui-switch:after, .weui-switch-cp__box:after{
    width:20px;
    height:20px;
}
}
.set-default {
  .weui-switch, .weui-switch-cp__box{
    width:38px;
    height:22px;
}
.weui-switch:before, .weui-switch-cp__box:before{
    width:36px;
    height:20px;
}
.weui-switch:after, .weui-switch-cp__box:after{
    width:20px;
    height:20px;
}
}
.weui-cells{
  font-size:15px!important;
}
</style>
