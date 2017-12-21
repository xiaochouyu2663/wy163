<template>
  <div id="apper">
    <view-box ref="viewBox" >
      <x-header @on-click-title="getscroll()" class="header" style="" slot="header" :left-options="{showBack:false,backText:''}">
        <div>康妆商城</div>
      </x-header>
      
        <div slot="default">
          <scroller class="my_scroller"  ref="scroller" :onRefresh="refresh" refreshText="loading..." :onInfinite="infinit">
          <swiper :list="swiperList" auto loop dots-position="right">
            
          </swiper>
          <tab class="tabnar">
            <tab-item selected>全部</tab-item>
            <tab-item>小白系列</tab-item>
            <tab-item>授权系列</tab-item>
          </tab>
          <div class="product_list" >
            <div class="product_list_item" v-for="item in productList" >
              <a :href="'detail.html?proid='+item.product_id">
                <img :src="item.product_image" alt="">
                <p>{{item.product_name}}</p>
                <span>{{item.product_price}}</span>
              </a>
              
            </div>
          </div>
          </scroller>
        </div>
      
      
    </view-box>
  </div>
</template>

<script>
import axios from 'axios'

import {ViewBox,XHeader,Swiper,Tab,TabItem,Panel} from 'vux';

export default {
  name: 'Home',
  components:{
    ViewBox,XHeader,Swiper,Tab,TabItem,Panel
  },
  data(){
    return {
      // swiperList:[{ url: 'javascript:', img: 'https://static.vux.li/demo/1.jpg', title: '送你一朵fua' }, { url: 'javascript:', img: 'https://static.vux.li/demo/5.jpg', title: '送你一次旅行', fallbackImg: 'https://static.vux.li/demo/3.jpg' }],
      swiperList:[],
      productList:[],
      sellerList:[]
    }
  },
  methods:{
    infinit(done){

     var self=this;
        setTimeout(()=>{
          console.log('下拉加载')
          axios.get('http://localhost/tp5/public/index.php/index/index/getBanner',{
            params:{}
          })
          .then(res=>{
            self.productList=self.productList.concat(res.data.map(item=>{
                return {
                  product_image:'http://localhost/tp5/public/static/'+item.product_image,
                  product_name:item.product_name,
                  product_price:item.product_price,
                  product_id:item.product_id
                }
              })
            )
          })
          .catch(res=>{
            console.log(res)
          })
          
           setTimeout(() => {
            done()
          })
        },1500)
    },
    refresh(done){
      var self=this;
      setTimeout(()=>{
        console.log('下拉刷新')
        // self.$refs.scroller.triggerPullToRefresh();  手动刷新
        done()
      },1000)
      
    }
  },
  created(){
        console.log('created')
        //获取banner数据 
       axios.get('http://localhost/tp5/public/index.php/index/index/getBanner',{
         params:{}
       })
       .then(res=>{
        //  console.log(res)
         this.swiperList=res.data.map(item=>{
           return {
             src:'',
             title:item.product_name,
             img:'http://localhost/tp5/public/static/'+item.product_image
           }
         })
         this.productList=res.data.map(item=>{
            return {
              product_image:'http://localhost/tp5/public/static/'+item.product_image,
              product_name:item.product_name,
              product_price:item.product_price,
              product_id:item.product_id
            }
          })
         
       })
       .catch(res=>{
         console.log(res)
       })
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  beforeMount(){
    console.log('beforeMount')
    console.log(this)
  },
  mounted(){
    // console.log('mounted')
    // console.log(this.$refs.scroller.getPosition())   //获取scroller当前的位置
    // setTimeout(() => {
    //   console.log(this.$refs.scroller.getPosition())
    //   //this.$refs.scroller.scrollTo(0,1000,true);      //指定scroller到当前的位置
    //   this.$refs.scroller.scrollBy(0,1000,true)         //指定scroller到当前的位置


    //   this.$refs.scroller.finishPullToRefresh()
    // }, 5000);
    

  },

  beforeRouteEnter(to,from,next){
    console.log(sessionStorage.askPositon)
    if(!sessionStorage.askPositon || from.path == '/'){//当前页面刷新不需要切换位置
      sessionStorage.askPositon = '';
      next();
    }else{
      next(vm => {
          if(vm && vm.$refs.scrollerBottom){//通过vm实例访问this
            setTimeout(function () {
              vm.$refs.scrollerBottom.scrollTo(0, sessionStorage.askPositon, false);
            },0)//同步转异步操作
          }
      })
    }
  },
beforeRouteLeave(to,from,next){//记录离开时的位置
  sessionStorage.askPositon = this.$refs.scrollerBottom && this.$refs.scrollerBottom.getPosition() && this.$refs.scrollerBottom.getPosition().top;
  next()
},
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html,body{
    width:100%;
    height:100%;
    margin:0;
    background: #f1f1f1;
  }
  img{
    width:100%;
    display:block;
  }
  #apper{
    height:100%;
    .my_scroller{
      top:46px;
      height: auto;
      padding-bottom:100px;
      margin-bottom:60px;
    }
  }
  .header{
    background-color: #4db90a!important;
    color:#fff;
    position: absolute;
    top:0;
    width:100%;
  }
  .icon_back{
    fill:#fff;
    position:relative;
    top:-5px;
    left:-5px;
  }
  .tabnar{
    margin-top:15px;
  }
  
  .product_list_item{
    background:#fff;
    margin-bottom:10px;
  }
</style>
