<template>
  <view-box>
      <x-header class="my-header" slot="header" :left-options="{showBack:true,backText:''}">游戏中心</x-header>
  </view-box>
</template>
<script>
import {ViewBox,XHeader} from 'vux'
export default {
  components:{
      ViewBox,XHeader
  }
}
</script>
<style>

</style>


