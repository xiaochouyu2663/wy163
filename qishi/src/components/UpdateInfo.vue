<template>
  <view-box>
      <x-header title="修改个人信息" class="my-header" slot="header" :left-options="{showBack:true,backText:''}"></x-header>
      <group label-width="80px">
          <div style="padding:10px 15px;overflow:hidden;line-height:30px;">
              <label for="" style="display:inline-block;width:80px;float:left;line-height:32px;">头像</label>
              <img class="photo" src="../common/images/bai.png" alt="">
              <input @change="upload($event)" id="upload" type="file" value="点击上传头像" style="display:block;float:left;color:#a1a1a1;line-height:32px;margin-left:10px;font-size:14px;position:absolute;left:130px;opacity:0;">
              <span style="display:block;float:left;color:#a1a1a1;line-height:32px;margin-left:10px;font-size:14px;">点击上传头像</span>
          </div>
          <x-input title="姓名" placeholder="输入姓名" v-model="personInfo.name"></x-input>
          <x-input title="性别" placeholder="输入姓名" ></x-input>
          <x-input title="身份证号" placeholder="输入身份证号" v-model="personInfo.IDCard"></x-input>
          <x-input title="银行卡" placeholder="输入银行卡" v-model="personInfo.name"></x-input>
          <x-input title="银行卡号" placeholder="输入银行卡号" v-model="personInfo.bankInfo"></x-input>
          <x-input title="选择地址" placeholder="选择地址" v-model="personInfo.name"></x-input>
      </group>
      <x-button type="primary" class="submit">确认修改</x-button>
  </view-box>
</template>
<script>
import httpconfig from '../util/http'
import axios from 'axios'
import qs from 'qs'     //post数据传输需要将数据转换为字符串
import {ViewBox,XHeader,Group,XInput,XButton,Toast} from 'vux'
export default {
    data(){
        return {
            personInfo:{
                photoSrc:'',
                name:'张三',
                gender:'女',
                IDCard:'12212***121212',
                mobile:'123**1231',
                bank:'工商银行',
                bankInfo:'12313',
                address:'天津市 天津市 西青区'
            }
        }
    },
  components:{
      ViewBox,XHeader,Group,XInput,XButton,Toast
  },
  methods:{
      upload(event){
            var self=this;   //将vue实例赋值给self;
            var files =event.currentTarget.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(files);
            reader.onload = function(e) {
               var img_base64= this.result.split(',')[1];
                axios.post('/upload', {fileContent:img_base64},httpconfig
                )
                .then(function (res) {
                    console.log(res);
                    self.$vux.toast.text('上传成功！','middle');
                })
                .catch(function (error) {
                    console.log(error)
                    self.$vux.toast.text('获取数据失败，请重新尝试！','middle');
                });

            }
      }
  },
  created(){
      console.log(httpconfig)
  }
}
</script>
<style lang="less" scoped>
.submit{
    width:80%;
    margin:40px auto 0;
}
.photo{
    width:30px;
    height: 30px;
    border-radius:50%;
    border:1px solid #ccc;
    float:left;
}
</style>


