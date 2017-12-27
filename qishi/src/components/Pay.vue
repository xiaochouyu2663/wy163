<template>
  <view-box>
    <x-header slot="header" title="支付成功" class="my-header" :left-options="{showBack:false}"></x-header>
    <div> 
        <msg icon="success" description="可以在我的订单里查看订单详情" title="支付成功" >
            <x-button type="primary" link="/home" slot="buttons">继续购物</x-button>
            <x-button style="background:#ff5722;color:#fff;"  slot="buttons">推荐好友</x-button>
        </msg>
    </div> 
  </view-box>
</template>
<script>
import {ViewBox,XHeader,Msg,XButton} from 'vux'
export default {
  components:{
      ViewBox,XHeader,Msg,XButton
  },
  data(){
      return {
          
      }
  }
}
</script>
<style scoped>

</style>


