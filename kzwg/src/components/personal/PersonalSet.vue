<template>
  <div class="personal">
      <view-box>
            <x-header  slot="header" class="my-header" :left-options="{showBack:true,backText:''}" >
                <x-icon slot="overwrite-left" size="30" type="ios-arrow-back"  class="icon_back"></x-icon>
                    <div>个人中心</div>
            </x-header>
            <panel class="my-panel"
                :list="[{src: 'src/assets/bai.png',
                title: '用户名:张三',
                desc: '级别：一级',
                }]">

            </panel>
            <grid class="my-grid" :cols="3" >
                <grid-item v-for="i in gridsList">
                    <img :src="i.imgSrc" alt="" slot="icon">
                    <span slot="label">{{i.title}}</span>
                </grid-item>
            </grid>
      </view-box>
      
  </div>
</template>
<script>
import {ViewBox ,XHeader ,Panel ,Grid, GridItem} from 'vux';
export default {
  name: 'PersonalSet',
  components: {
      ViewBox ,XHeader ,Panel ,Grid, GridItem
  },
  data(){
      return {
          gridsList:[
                {imgSrc:'src/assets/bai.png',title:'订单中心'},
                {imgSrc:'src/assets/bai.png',title:'游戏中心'},
                {imgSrc:'src/assets/bai.png',title:'积分中心'},
                {imgSrc:'src/assets/bai.png',title:'购物'},
                {imgSrc:'src/assets/bai.png',title:'收货地址'},
                {imgSrc:'src/assets/bai.png',title:'消息中心'},
                {imgSrc:'src/assets/bai.png',title:'个人信息'},
                {imgSrc:'src/assets/bai.png',title:'分享好友'},
                {imgSrc:'src/assets/bai.png',title:'我的分店'}
          ]
      }
  }
}
</script>
<style scoped lang="less">
    @primary-color:#4db90a;
    .personal{
        height:100%;
        .my-header{
            background-color: #4db90a!important;
            color:#fff;
            position: absolute;
            top:0;
            width:100%;
            .icon_back{
                fill:#fff;
                position:relative;
                top:-5px;
                left:-5px;
            }
        }
        .my-panel{
            margin-top:44px;
            background:@primary-color; 
            .weui-media-box_appmsg .weui-media-box__thumb{
                border-radius: 50%!important;
            }
            
        }
        .my-grid{
            background:#fff;
            margin-top:10px;
        }
    }
</style>


