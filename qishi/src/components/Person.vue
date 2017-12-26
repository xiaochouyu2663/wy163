<template>
  <view-box ref="viewBox">
    <input type="text" v-model="question">
    <div v-for="i in 99">
      {{i}}
    </div>
    <tabbar icon-class="iconfont icon-denglu" class="my-footer">
      <tabbar-item link="/home" selected icon-class="iconfont icon-caidantubiao-02">
         <span slot="icon" >
        <!--  <img src="~common/images/dui.png" alt="">-->
        </span> 
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/shopcar" show-dot badge="0" icon-class="iconfont icon-gouwuche">
         <span slot="icon">
         <!-- <img src="~common/images/shopcar.png" alt="">-->
        </span> 
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/person" icon-class="iconfont icon-geren">
        <span slot="icon"></span>
        <span slot="label">
          个人中心
        </span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>
<script>
import {ViewBox,Tabbar,TabbarItem} from 'vux';
export default {
  name:'Person',
  components:{
    ViewBox,Tabbar,TabbarItem
  },
  data(){
    return {
      question:''
    }
  },
  watch:{
    question:function(){
      this.newAns()
    }
  },
  methods:{
    newAns(){
      console.log(this.question)
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
  setTimeout(()=>{
    this.question=12
  },2000)
 }
}
</script>
<style>

</style>


