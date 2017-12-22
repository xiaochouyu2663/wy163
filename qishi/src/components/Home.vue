<template>
  <div id="apper">
    <view-box ref="viewBox" >
      <x-header @on-click-title="getscroll()" class="header" style="" slot="header" :left-options="{showBack:false,backText:''}">
        <div>康妆商城</div>
      </x-header>
      
      <div id="wraper" slot="default" ref="wrapper">
        <div id="wraper-content">
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
        </div>
        <transition name="pullDown">
          <Loading class="pullDown" v-show="inPullDown" :loadingWord='PullingDownWord'></Loading>
        </transition>
      </div>
      
      
    </view-box>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import {ViewBox,XHeader,Swiper,Tab,TabItem,Panel} from 'vux';
import Loading from './loading.vue'
import PullingWord from './pulling-word'
const PullingUpWord="正在拼命加载中...";
 const beforePullUpWord="上拉加载更多";
 const finishPullUpWord="加载完成";
 
 const PullingDownWord="加载中...";
export default {
  name: 'Home',
  components:{
    ViewBox,XHeader,Swiper,Tab,TabItem,Panel,Loading,PullingWord
  },
  props: {
   dataList:{
    type: Array,
    default(){
      return []
    }
   },
   probeType: {
    type: Number,
    default: 3
   },
   click: {
    type: Boolean,
    default: true
   },  
   pullDownRefresh: {
    type: null,
    default: true
   },
   pullUpLoad: {
    type: null,
    default: true,
    threshold:-80
   },  
  },
  data(){
    return {
      // swiperList:[{ url: 'javascript:', img: 'https://static.vux.li/demo/1.jpg', title: '送你一朵fua' }, { url: 'javascript:', img: 'https://static.vux.li/demo/5.jpg', title: '送你一次旅行', fallbackImg: 'https://static.vux.li/demo/3.jpg' }],
      swiperList:[],
      productList:[],
      sellerList:[],
      scroll:null,
      inPullUp:false,
      inPullDown:false,
      beforePullUpWord,
      PullingUpWord,
      PullingDownWord,
      continuePullUp:true,
    }
  },
  methods:{
   initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      var self=this;
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,    
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: {
          threshold:-80,
          default:true
        },
      })
    },
    beforePullUp(){
      this.PullingUpWord=PullingUpWord;
      this.inPullUp=true;
    }, 
    beforePullDown(){
      this.disable();
      this.inPullDown=true;
    },
    finish(type){
      this["finish"+type]();
      this.enable();
      this["in"+type]=false; 
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }, 
    finishPullDown(){
      this.scroll&&this.scroll.finishPullDown()
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },  
    loadMore() {        
      
        axios.get('http://localhost/tp5/public/index.php/index/index/getBanner',{
         params:{}
        })
        .then(res=>{
        
         this.productList=this.productList.concat(res.data.map(item=>{
            return {
              product_image:'http://localhost/tp5/public/static/'+item.product_image,
              product_name:item.product_name,
              product_price:item.product_price,
              product_id:item.product_id
            }
          }))
          this.$nextTick(function(){ 
            console.log('数据已加载')  
            this.scroll.finishPullUp();                                    
            this.scroll.refresh();  
          });
        })
        .catch(res=>{
          console.log(res)
        })
                  
    
    } 
  },
  watched:{
    
  },
  created(){
        
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
    
  },
  beforeMount(){
    
  },
  mounted(){
    this.$nextTick(()=>{
      this.initScroll();
      this.scroll.on('pullingUp',()=> {
        console.log('上拉加载。。。')
        this.loadMore()
        if(this.continuePullUp){
          this.beforePullUp();
          
          // this.$emit("onPullUp","当前状态：上拉加载");
        }
      });


      this.scroll.on('pullingDown',()=> {
        console.log('pullingDown')
        // if(this.continuePullUp){
        //   this.beforePullUp();
        //   this.$emit("onPullUp","当前状态：上拉加载");
        // }
      });
    })
    
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
  #wraper{
    width:100%;
    height:100%;
    overflow: hidden;
    margin-bottom:10px;
    #wraper-content{
      width:100%;
    }
  }
</style>
