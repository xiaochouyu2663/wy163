<template>
  <view-box>
      <x-header slot="header" class="my-header" :left-options="{showBack:true,backText:''}">个人信息</x-header>
      <group>
        <cell title="头像" class="my-photo" is-link link="/updateInfo">
          <img src="../common/images/bai.png" alt="">
        </cell>
        <cell title="姓名" value="张三" is-link>
        </cell>
        <cell title="性别" value="女" is-link>
        </cell>
        <cell title="身份证号" value="1302***0110" is-link>
        </cell>
        <cell title="手机号" value="131****0000" is-link>
        </cell>
        <cell title="银行卡" value="工商银行" is-link>
        </cell>
        <cell title="银行卡号" value="12*121212" is-link>
        </cell>
        <cell title="收货地址" value="天津市 天津 西青区" is-link>
        </cell>
      </group>
      <x-button class="logoff" type="primary" >退出登录</x-button>
  </view-box>
</template>
<script>
import {ViewBox,XHeader,Group,Cell,XButton} from 'vux'
export default {
  components:{
      ViewBox,XHeader,Group,Cell,XButton
  }
}
</script>
<style lang="less" scoped>
  .my-photo{
    img{
      width:30px;
      height: 30px;
      border:1px solid #ccc;
      border-radius:50%;
    }
  }
  .logoff{
    width:80%;
    margin:40px auto 0;
  }
</style>


