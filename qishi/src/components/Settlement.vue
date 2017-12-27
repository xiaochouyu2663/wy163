<template>
    <view-box>
        <x-header slot="header" class='my-header' :left-options="{showBack:true,backText:''}">
            <div>结算</div>
        </x-header>
        <div>
            <group style="font-size:14px" gutter="10px">
                <div style="padding:20px;font-size:14px" for="">发货方式</div>
               <!--  <radio @on-change="changeType" selected  v-model="sendType"  :options="options"></radio> -->
                <checklist :required="true"  style="font-size:14px" @on-change="changeType" :max="1"  :options="products.options" v-model="products.sendType"></checklist >
                
            </group>
            <card :header="{title:'配送地址'}">
                <ul style="padding:10px 20px;font-size:14px;list-style:none;" slot="content">
                    <li>张三</li>
                    <li>13121554252</li>
                    <li>山东省-济南市-市辖区-sf</li>
                </ul>
            </card>
            <group gutter="10px">
                <cell style="font-size:15px;" title="总价" >
                    <span style="color:#000;">￥{{products.totalPrice.toFixed(2)}}</span>
                </cell>
                <cell style="font-size:15px;" title="运费"  :is-loading="products.isShow">
                    <span @click="getYreight" style="color:#000;" v-show="!products.isShow">{{products.freight|freFliter}}</span>
                </cell>
                <cell >
                    <x-button style="font-size:13px;padding:0 10px;line-height:25px;" @click.native="showProDetail" action-type="button" plain>商品详情</x-button>
                </cell>
            </group>
            <transition  name="fade">
            <x-table v-show="products.isTable" :cell-bordered="false" style="background:#fff;margin-top:-1px">
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
            </transition>
            <group gutter="10px">
                <cell>
                    <span @click="getYreight" slot="title">总价：<i v-show="!products.isShow">{{products.totalPrice +products.freight | totPriFliter(products.freight)}}</i></span>
                    <x-button @click.native="createOrder" style="font-size:13px;padding:0 10px;line-height:25px;" :disabled="products.isButton" type="warn">提交订单</x-button>
                </cell>
            </group>
            <div v-transfer-dom>
            <x-dialog v-model="showDialog" class="dialog-demo" >
                <p style="margin-top:20px">已生成订单</p>
                <p id="oid">订单号：1223333</p>
                    <x-button link="/pay" style="margin:20px auto;" :mini="true" type="primary">去支付</x-button>
            </x-dialog>
            </div>
        </div>
    </view-box>
</template>
<script>

import axios from 'axios'
import {ViewBox,XHeader,Cell ,Group,XSwitch,Radio,Card ,XButton,Checker,Checklist,CheckerItem,XTable,XDialog ,TransferDomDirective as TransferDom  } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components:{
        ViewBox,XHeader,Cell ,Group,XSwitch,Radio ,Card,XButton,Checker ,Checklist ,CheckerItem,XTable,XDialog 
    },
    data(){
        return {
            showDialog:false,
            type:'2',
            products:{
                options:[{
                    key: '1',
                    value: '自提',
                    inlineDesc:'自提需要收取10元的人工费用'
                }, 
                {
                    key: '2',
                    value: '公司发货',
                    inlineDesc:'按地区收费'
                }],
                sendType: ['2'],//1表示自提2表示公司发货
                totalPrice:0,
                freight:0,
                isShow:true,
                list:[],
                isTable:false,
                isButton:true,
            },
            
        }
    },
    filters:{
        freFliter(value){
            if(typeof value=='string'){
                return value;
            }
            return '￥'+value.toFixed(2);
        },
        totPriFliter(value,freight){
            
            if(typeof freight=='string'){
                return '刷新';
            }
            return '￥'+value.toFixed(2);
        }
    },
    methods:{
        showProDetail(){
            this.products.isTable=!this.products.isTable;
        },
        changeType(value, label){
            if(value.length==0){
                value[0]=this.type;
            }
            this.products.sendType=value;
            this.type=value[0];
           
            this.getYreight()
        },
        getYreight(){
            axios.get('http://localhost/tp5/public/index.php/index/index/yreight',{
                params:{
                    type:this.products.sendType[0]
                }
            })
            .then((res)=>{
                if(res.data.code==200){
                    this.products.isShow=false;
                    this.products.isButton=false;    
                    this.products.freight=res.data.data;
                }else{
                    this.products.isShow=false;
                    this.products.isButton=true;          //运费获取失败，提交订单按钮禁掉
                    this.products.freight='点击获取运费';
                }
                
                
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        createOrder(){
            axios.get('http://localhost/tp5/public/index.php/index/index/creatOrder',{
                params:{
                    UserId:1,
                    Freight:this.products.freight,
                    DeliveryType:this.products.sendType[0]
                }
            })
            .then((res)=>{
                if(res.data.code==200){
                    this.showDialog=true;
                    document.querySelector('#oid').innerHTML=res.data.data;
                }else{
                    this.$vux.toast.text('hello', 'middle');
                }
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.$nextTick(()=>{
            this.products.list=this.$store.state.settleProduct;
            this.products.list.forEach((value,index)=>{
                this.products.totalPrice+=value.num*value.price;
            })
            this.getYreight();
                
        })
        
    }

}
</script>
<style scoped lang="less">
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>


