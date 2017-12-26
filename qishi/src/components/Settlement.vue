<template>
    <view-box>
        <x-header slot="header" class='my-header' :left-options="{showBack:true,backText:''}">
            <div>结算</div>
        </x-header>
        <div>
            <group style="font-size:14px" gutter="10px">
                <div style="padding:20px;font-size:14px" for="">发货方式</div>
               <!--  <radio @on-change="changeType" selected  v-model="sendType"  :options="options"></radio> -->
                <checklist style="font-size:14px" @on-change="changeType" :max="1"  :options="options" v-model="sendType"></checklist >
                
            </group>
            <card :header="{title:'配送地址'}">
                <ul style="padding:10px 20px;font-size:14px;list-style:none;" slot="content">
                    <li>张三</li>
                    <li>13121554252</li>
                    <li>山东省-济南市-市辖区-sf</li>
                </ul>
            </card>
            <group gutter="10px">
                <cell style="font-size:15px;" title="总价" :value="products.totalPrice"></cell>
                <cell style="font-size:15px;" title="运费" :value="products.freight" :is-loading="products.isShow"></cell>
                <cell >
                    <x-button style="font-size:13px;padding:0 10px;line-height:25px;" plain>商品详情</x-button>
                </cell>
            </group>
            <x-table :cell-bordered="false" style="background:#fff;">
                <thead>
                <tr>
                    <th>产品名称</th>
                    <th>数量</th>
                    <th>价格</th>
                </tr>
                </thead>
                <tbody >
                <tr v-for="item in this.products.list">
                    <td>{{item.name}}</td>
                    <td>{{item.num}}</td>
                    <td>￥{{item.price.toFixed(2)}}</td>
                </tr>
                </tbody>
            </x-table>
            <group gutter="10px">
                <cell>
                    <span slot="title">总价：￥{{products.totalPrice+products.freight}}</span>
                    <x-button style="font-size:13px;padding:0 10px;line-height:25px;" type="warn">提交订单</x-button>
                </cell>
            </group>
            
        </div>
    </view-box>
</template>
<script>

import {ViewBox,XHeader,Cell ,Group,XSwitch,Radio,Card ,XButton,Checker,Checklist,CheckerItem,XTable  } from 'vux'
export default {
    components:{
        ViewBox,XHeader,Cell ,Group,XSwitch,Radio ,Card,XButton,Checker ,Checklist ,CheckerItem,XTable
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
            sendType: ['2'],     //1表示自提2表示公司发货
            products:{
                totalPrice:621733,
                freight:'',
                isShow:true,
                list:[]
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
        this.$nextTick(()=>{
            this.products.list=this.$store.state.settleProduct;
        })
        setTimeout(()=>{
            this.products.freight=20
            this.products.isShow=false;
            
        },2000)
    }

}
</script>
<style scoped lang="less">
    
</style>


