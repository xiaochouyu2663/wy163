<template>
  
<view-box>
    <MHeader title="收货地址"></MHeader>
    <Loading class="pullDown" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)" v-if="!ajaxDone" ></Loading>
    <div v-else>
        <div class="address-list" v-for="(item,index) in addressList">
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
                <x-switch :ref="'switch'+index" class="set-default" :disabled="item.IsDefault?true:false" style="float:left;width:140px;"  title="设为默认" :data-default="item.Id"   @on-change="setDefault(item.Id)"  v-model="item.IsDefault?true:false"></x-switch> 
                <!-- <div style="float:left;width:140px;line-height:35px;margin-left:10px;font-size:14px;">
                    <span class="checkbox" :data-isDefault="item.IsDefault" :data-id="item.Id">
                        <i></i>
                    </span>
                    <span>设为默认</span>
                </div> -->
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
import MHeader from './Header.vue'    //导入公共的头部
import Loading from './loading.vue'
import {ViewBox,XHeader,Group,XSwitch,XButton,Radio} from 'vux'
import axios from 'axios'
export default {
  components:{
      ViewBox,XHeader,Loading,Group,XSwitch,XButton,Radio,MHeader
  },
  props:{

  },
  data(){
      return {
          addressList:[],
          ajaxDone:false,
          def:false
      }
  },
  methods:{
      getaddress(){
        axios.get('http://localhost/tp5/public/index.php/index/index/address',{
          params:{
              UserId:this.$store.state.userId
          }
      }).then((res)=>{
          console.log(res)
          this.addressList=res.data.data;
          this.ajaxDone=true;
          
      }).catch((err)=>{
          console.log(err)
      })
      },
      deleteAddress(){

      },
      editAddress(){

      },
      setDefault(oid){
        
        axios.get('http://localhost/tp5/public/index.php/index/index/setDefault',{
            params:{
                UserId:1,
                Id:oid
            }
        }).then((res)=>{
            if(res.data.code==200){
                this.$vux.toast.text('设置默认地址成功！','middle')
                setTimeout(()=>{
                    this.getaddress()
                },2000)
                
            }
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    },
  
  },
  created(){
      console.log('userid',this.$store.state.userId)
      this.getaddress()
    
    

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
.checkbox{
    display:inline-block;
    width:20px;
    height: 20px;
    position: relative;
    top:7px;
    i{
        position: absolute;
        display:inline-block;
        width:16px;
        height: 16px;
        border:1px solid #ccc;
        border-radius:2px;
        &:after{
            content:'';
            position: absolute;
            z-index:1;
            top:-3px;
            left:0;
            width:17px;
            height: 6px;
            border:3px solid #4db90a;
            transform: rotate(-45deg);
            border-top:2px solid transparent;
            border-right:2px solid transparent;
            display:block;
        }
    }
}
</style>


