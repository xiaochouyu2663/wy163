<template>
  <div id="app">
    <tabbar slot="bottom" class="my_tabbar" >
        <tabbar-item link="/">
          <img slot="icon" src="./assets/home.png"/>
          <img slot="icon-active" src="./assets/home_active.png"/>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/login" badge="2" show-dot>
          <img  slot="icon" src="./assets/shopcar.png"/>
          <img  slot="icon-active" src="./assets/shopcar_active.png"/>
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item selected link="/personal/PersonalSet">
          <img slot="icon" src="./assets/person.png"/>
          <img slot="icon-active" src="./assets/person_active.png"/>
          <span slot="label">个人</span>
        </tabbar-item>
      </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
  name: 'App',
  components:{
    Tabbar,TabbarItem
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html,body{
    width:100%;
    height:100%;
    background:#f1f1f1;
  }
  .my_tabbar{
    font-size:12px;
    position:fixed;
  }
</style>
