<template>
  
<view-box>
    <x-header class="my-header" slot="header" :left-options="{showBack:true,backText:''}">收货地址</x-header>
    <Loading class="pullDown" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)" v-if="!ajaxDone" ></Loading>
    <div v-else>
        <div class="address-list" v-for="item in addressList">
            <div class="address-list-main">
                <div class="address-list-top">
                    <span style="padding-right:30px">{{item.Receiver}}</span>
                    <span>{{item.ReceiverPhone}}</span>
                </div>
                <div class="address-list-content">{{item.ProvinceDes}}-{{item.CityDes}}-{{item.CountDes}}-{{item.Address}}
                </div>
            </div>
            <div class="address-list-opt">

            </div>
            <group gutter="0" style="width:100%" class="my-group">
                <x-switch id="set-default" style="float:left;width:140px;" title="设为默认"   v-model="item.IsDefault?true:false"></x-switch> 
                <div class="address_opts" >
                    <span>编辑</span>    
                    <img @click="editAddress" src="../common/images/bianji.png" alt="">
                    <span>删除</span>
                    <img @click="deleteAddress" src="../common/images/delete.png" alt="">
                </div>   
            </group> 
        </div> 
        <x-button link="/addAddress" type="primary" id="add-address">新增收货地址</x-button>  
    </div>
</view-box>
</template>
<script>

import Loading from './loading.vue'
import {ViewBox,XHeader,Group,XSwitch,XButton} from 'vux'
import axios from 'axios'
export default {
  components:{
      ViewBox,XHeader,Loading,Group,XSwitch,XButton
  },
  data(){
      return {
          addressList:[],
          ajaxDone:false,
          def:false
      }
  },
  methods:{
      deleteAddress(){

      },
      editAddress(){

      }
  },
  created(){
      
      axios.get('http://localhost/tp5/public/index.php/index/index/address',{
          params:{
              UserId:1
          }
      })
      .then((res)=>{
          this.addressList=res.data.data;
          this.ajaxDone=true;
          console.log(res)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
}
</script>
<style lang="less" scoped>
.address-list{
    background:#fff;
    margin-top:10px;    
    font-size:14px; 
    .address-list-main{
        // border-bottom:1px solid #ccc;
        padding:10px;
        
    }
}

.my-group{
    width:100%;
}
.address_opts{
    float:right;width:130px;margin-right:10px;font-size:14px;text-align:right;line-height:35px;
    &>img{
        width:20px;display:inline;vertical-align:sub;padding-right:10px;
    }
}
#add-address{
    width:90%;
    margin-top:40px;
    line-height:2.2;
    font-size:16px;
}
</style>


