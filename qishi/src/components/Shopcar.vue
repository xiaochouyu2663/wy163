<template>
  <div>
    <MHeader :title="'购物车'"></MHeader>
    <MFooter :shopcar="true"></MFooter>
  </div>
  
</template>
<script>
import MHeader from './Header.vue'    //导入公共的头部
import MFooter from './Footer.vue'    //导入公共的底部
import {XDialog,XButton,Tabbar,TabbarItem } from 'vux'
export default {
    data(){
        return {
            isShow:true
        }
    },
  components:{
      XDialog,XButton ,Tabbar,TabbarItem,MFooter,MHeader
  },
  created(){
     
  }
}
</script>
<style>

</style>


