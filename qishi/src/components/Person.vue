<template>
  <view-box ref="viewBox">
    <div v-for="i in 99">
      {{i}}
    </div>
  </view-box>
</template>
<script>
import {ViewBox} from 'vux';
export default {
  name:'Person',
  components:{
    ViewBox
  },
  data(){
    return {

    }
  },
 mounted(){
    
    this.$nextTick(function () {
        var oScroDom=this.$refs.viewBox.getScrollBody();  //获取滚动div, 也可以直接用组件引用的.$refs.viewBoxBody	
        var that=this;
        this.$refs.viewBox.scrollTo(this.$store.state.path);   //指定viewbox滚动到指定的位置
        oScroDom.addEventListener('scroll',function(){
          console.log(that.$refs.viewBox.getScrollTop())   //获取viewbox当前的滚动位置
          that.$store.state.path=that.$refs.viewBox.getScrollTop()
        },false)
        console.log(this.$store.state.path)
  })
 }
}
</script>
<style>

</style>


