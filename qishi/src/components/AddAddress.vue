<template>
  <view-box>
      <x-header slot="header" class="my-header" title="新增收货地址" :left-options="{showBack:true,backText:''}">
          
      </x-header>
      <group gutter="10px" label-width="80px">
        <x-input class="add-receiver" is-type="" type="text" placeholder="收货人姓名" show-clear :max="20" title="姓名" v-model="addressInfo.receiver"></x-input>
        <x-input class="add-receiver" @on-blur="verifyMobile" type="tel" placeholder="收货人手机号" show-clear :max="11" title="手机号" v-model="addressInfo.receiverPhone"></x-input>
        <x-address  @on-hide="logHide"  placeholder="选择收货地址"   value-text-align="left" title="收货地址" :list="addressData" v-model="vlist"></x-address>
         <x-textarea title="详细地址" placeholder="例如街道名称，门牌号" v-model="addressInfo.address"></x-textarea>
      </group>
      <group gutter="10px" >
          <x-switch title="设为默认" class="set-default"  v-model="addressInfo.isDefault?true:false"></x-switch>
      </group>
      <x-button @click.native="addAddress" type="primary" id="add-address">确认</x-button>
  </view-box>
</template>
<script>

import axios from 'axios'
import {ViewBox,XHeader,Group,XInput,Selector,XAddress,ChinaAddressV4Data,XTextarea,XSwitch,XButton      }  from 'vux'
export default {
  components:{
      ViewBox,XHeader,Group,XInput ,Selector ,XAddress ,ChinaAddressV4Data ,XTextarea ,XSwitch ,XButton 
  },
  data(){
      return {
          vlist:[],   //选择省市区的id存放数组
          addressData: ChinaAddressV4Data,
          addressInfo:{
              receiver:'',
              receiverPhone:'',
              provinceId:'',
              cityId:'',
              countId:'',
              address:'',
              isDefault:1
          }
      }
  },
  methods:{
      verifyMobile(value,$event){
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if (!myreg.test(value)) { 
            this.$vux.toast.text('请输入正确的手机号', 'middle');
            return false;
        }else{
            return true;
        }
      },
      logHide () {
        this.addressInfo.provinceId=this.vlist[0];
        this.addressInfo.cityId=this.vlist[1];
        this.addressInfo.countId=this.vlist[2];
    },
    addAddress(){
        for(let v in this.addressInfo){
            if(this.addressInfo[v]=='') {
                console.log(this.addressInfo);
                this.$vux.toast.text('请填写完整的信息', 'middle');
                return;
            }
            if(v=='receiverPhone'){
                if(!this.verifyMobile(this.addressInfo[v])){
                    return;
                }
            }
        }
        
        axios.get('http://localhost/tp5/public/index.php/index/index/addAddress',{
            params:{
                UserId:this.$store.state.userId,
                AddressList:JSON.stringify(this.addressInfo)
            }
        })
        .then((res)=>{
            if(res.data.code==200){
                var self=this;
                this.$vux.alert.show({
                    title: '',
                    content: '添加地址成功！',
                    onHide () {
                        self.$router.push({ path: '/address' });
                    }
                })
            }
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
            this.$vux.toast.text('获取数据失败，请重新尝试！')
        })
    },
    
  },
  created(){
      
  }
}
</script>
<style lang="less" scoped>
.add-receiver .weui-cell__bd{
    flex:1;
}
#add-address{
    width:90%;
    margin-top:40px;
    line-height:2.2;
    font-size:16px;
}
</style>


