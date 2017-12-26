<template>
    <view-box>
        <x-header slot="header" class='my-header' :left-options="{showBack:true,backText:''}">
            <div>结算</div>
        </x-header>
        <div>
            <group style="font-size:14px" >
                <!-- <label style="padding:20px;" for="">发货方式</label>
                <radio @on-change="changeType" selected  v-model="sendType"  :options="options"></radio> -->
                <checklist  :max="1"  :options="options"></checklist >
            </group>
            <card :header="{title:'配送地址'}">
                <ul style="padding:10px 20px;font-size:14px;list-style:none;" slot="content">
                    <li>张三</li>
                    <li>13121554252</li>
                    <li>山东省-济南市-市辖区-sf</li>
                </ul>
            </card>
            <group>
                <cell style="font-size:15px;" title="总价" :value="products.totalPrice"></cell>
                <cell style="font-size:15px;" title="运费" :value="products.freight" :is-loading="products.isShow"></cell>
                <cell >
                    <x-button style="font-size:14px;" plain>商品详情</x-button>
                </cell>
            </group>
            <group>
                <cell></cell>
            </group>
        </div>
    </view-box>
</template>
<script>

import {ViewBox,XHeader,Cell ,Group,XSwitch,Radio,Card ,XButton,Checker,Checklist  } from 'vux'
export default {
    components:{
        ViewBox,XHeader,Cell ,Group,XSwitch,Radio ,Card,XButton,Checker ,Checklist 
    },
    data(){
        return {
            options:[{
                key: '1',
                value: '自提'
                }, {
                key: '2',
                value: '公司发货'
                }],
            sendType:'2',     //1表示自提2表示公司发货
            products:{
                totalPrice:621733,
                freight:'',
                isShow:true
            }
        }
    },
    methods:{
        changeType(value, label){
            this.sendType=value;
            console.log(this.sendType)
        }
    },
    created(){
        setTimeout(()=>{
            this.products.freight=20
            this.products.isShow=false
        },2000)
    }

}
</script>
<style scoped lang="less">
    
</style>


