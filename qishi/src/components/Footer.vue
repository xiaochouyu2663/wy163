<template>
  <tabbar icon-class="iconfont icon-denglu" class="my-footer">
      <tabbar-item link="/home" :selected="home" icon-class="iconfont icon-caidantubiao-02">
         <span slot="icon" >
        <!--  <img src="~common/images/dui.png" alt="">-->
        </span> 
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/shopcar" :selected="shopcar" show-dot badge="0" icon-class="iconfont icon-gouwuche">
         <span slot="icon">
         <!-- <img src="~common/images/shopcar.png" alt="">-->
        </span> 
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/person" :selected="person" icon-class="iconfont icon-geren">
        <span slot="icon"></span>
        <span slot="label">
          个人中心
        </span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
    name:'footer',
    props:{
      home:{
        type:Boolean
      },
      shopcar:{
        type:Boolean
      },
      person:{
        type:Boolean
      }
    },
    data(){
      return {
        userToken:'',
        userId:null
      }
    },
    components:{
        Tabbar,TabbarItem
    },
    created(){
      this.userToken=this.$store.state.userToken;
    }

}
</script>
<style>

</style>


