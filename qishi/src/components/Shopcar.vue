<template>
  <div>
      123
    <MFooter :shopcar="true"></MFooter>
  </div>
  
</template>
<script>
import MFooter from './Footer.vue'
import {XDialog,XButton,Tabbar,TabbarItem } from 'vux'
export default {
    data(){
        return {
            isShow:true
        }
    },
  components:{
      XDialog,XButton ,Tabbar,TabbarItem,MFooter
  },
  created(){
     
  }
}
</script>
<style>

</style>


