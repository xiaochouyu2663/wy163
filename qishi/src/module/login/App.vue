<template>
  <div id="app">
    <view-box>
      <x-header class="my-header" :left-options="{showBack:true,backText:''}" :right-options="{showMore:false}">
        <p>登录</p>
        <span slot="right">注册</span>
      </x-header>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox,XHeader} from 'vux'
  export default {
    name: 'app',
    components: {
      ViewBox,XHeader
    }
  }
</script>

<style lang="less">
  *{
    margin:0;padding:0;
  }
  html,body{
    width:100%;
    height:100%;
    background:#f1f1f1;
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
    }
  }
</style>
