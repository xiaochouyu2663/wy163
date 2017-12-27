<template>
  <view-box >
      <x-header slot="header" :left-options="{showBack:true,backText:''}" class="my-header">我的分店</x-header>
  </view-box>
</template>
<script>
import {ViewBox,XHeader,Panel,Grid, GridItem} from 'vux';
export default {
  components:{
      ViewBox,XHeader,Panel,Grid, GridItem
  }
}
</script>
<style>

</style>


