<template>
  
    <view-box ref="viewBox" >
      <MHeader slot="header" :leftOptions="{showBack:false}" :title="'康妆商城'" ></MHeader>
      <div   id="wraper" slot="default" ref="wrapper">
        <div  id="wraper-content">
          <Loading class="pullDown" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)" v-if="!ajaxDone" ></Loading>
          <div  v-else>
            <swiper :list="swiperList" auto loop dots-position="right">
            </swiper>
            <tab class="tabnar">
              <tab-item selected>全部</tab-item>
              <tab-item>小白系列</tab-item>
              <tab-item>授权系列</tab-item>
            </tab>
            <div class="product_list" >
              <div class="product_list_item" v-for="item in productList" >
                  <router-link :to="'/Detail/'+item.product_id">
                    <img :src="item.product_image" alt="">
                    <p>{{item.product_name}}</p>
                    <span>{{item.product_price}}</span>
                  </router-link>
              </div>
            </div>
            <transition name="pullDown">
              <div>
                <Loading class="pullDown" v-show="inPullUp" ></Loading>
                <PullingWord v-show="inLoadMore" :loadingWord='beforePullUpWord'></PullingWord>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <MFooter slot="bottom" :home="true"></MFooter>
    </view-box>
  
</template>

<script>

import axios from 'axios'
import BScroll from 'better-scroll'
import MHeader from './Header.vue'    //导入公共的头部
import MFooter from './Footer.vue'    //导入公共的底部
import {ViewBox,Swiper,Tab,TabItem,Panel,Tabbar,TabbarItem} from 'vux';
import Loading from './loading.vue'
import PullingWord from './pulling-word'
 const PullingUpWord="正在拼命加载中...";
 const beforePullUpWord="上拉加载更多";
 const finishPullUpWord="加载完成";
 
 const PullingDownWord="加载中...";
export default {
  name: 'Home',
  components:{
    ViewBox,Swiper,Tab,TabItem,Panel,Loading,PullingWord,Tabbar,TabbarItem,MFooter,MHeader

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
      userId:'',
      nowPage:1,
      pageSize:2,
      // swiperList:[{ url: 'javascript:', img: 'https://static.vux.li/demo/1.jpg', title: '送你一朵fua' }, { url: 'javascript:', img: 'https://static.vux.li/demo/5.jpg', title: '送你一次旅行', fallbackImg: 'https://static.vux.li/demo/3.jpg' }],
      swiperList:[],
      productList:[],
      sellerList:[],
      scroll:null,
      inPullUp:false,
      inPullDown:false,
      inLoadMore:false,
      beforePullUpWord:beforePullUpWord,
      PullingUpWord,
      PullingDownWord,
      continuePullUp:true,
      ajaxDone:false,
    }
  },
  watch:{
    ajaxDone:function(){
      this.initScroll()
    }
  },
  methods:{
    // 初始化better-scroll插件
    initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,    
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: {
          threshold:-80,
          default:true
        },
      })
      let nowPos=this.$store.state.scrollPath;
      this.scroll.scrollTo(nowPos.x,nowPos.y,0,'easing');
      this.scroll.on('touchEnd',(pos)=>{
        this.$store.state.scrollPath=pos;
        this.$store.state.homeProList=this.productList;
        this.$store.state.nowPage=this.nowPage;
        this.$store.state.loadWord=this.beforePullUpWord;
      });
      this.scroll.on('pullingUp',()=> {
        this.loadMore();
        if(this.continuePullUp){
          this.beforePullUp();
          this.$emit("onPullUp","当前状态：上拉加载");
        }else{

        }
      });
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
         this.inPullUp=true;   
         this.beforePullUpWord='正在加载。。。';
        axios.get('http://localhost/tp5/public/index.php/index/index/productList',{
         params:{
           nowPage:this.nowPage,
           pageSize:this.pageSize
         }
        })
        .then(res=>{
         this.beforePullUpWord='加载完成';
         this.inPullUp=false;
         if(res.data.count>0){
           this.productList=this.productList.concat(res.data.data.map(item=>{
            return {
              product_image:'http://localhost/tp5/public/static/'+item.product_image,
              product_name:item.product_name,
              product_price:item.product_price,
              product_id:item.product_id
            }
          }))
          this.$nextTick(function(){ 
            this.scroll.finishPullUp();                                    
            this.scroll.refresh(); 
            this.continuePullUp=false; 
            this.beforePullUpWord='上拉加载更多';
            this.nowPage++;
          });
         }else{
           this.continuePullUp=false; 
           this.beforePullUpWord='没有更多数据了';
         }
         
        })
        .catch(res=>{
          console.log(res)
        })
                  
    
    } 
  },
  
  created(){ 
    this.userId=this.$store.state.userId;
      //获取banner数据 
       axios.get('http://localhost/tp5/public/index.php/index/index/getBanner',{
         params:{}
       })
       .then(res=>{
         this.ajaxDone=true;
         this.swiperList=res.data.map(item=>{
           return {
             src:'',
             title:item.product_name,
             img:'http://localhost/tp5/public/static/'+item.product_image
           }
         })
         
         
       })
       .catch(res=>{
         console.log(res)
       }) 
       
      //  获取产品列表
      if(this.$store.state.homeProList.length>0){
           this.productList=this.$store.state.homeProList;
           this.inLoadMore=true;
           this.nowPage=this.$store.state.nowPage;
           this.beforePullUpWord=this.$store.state.loadWord;
      }else{
      axios.get('http://localhost/tp5/public/index.php/index/index/productList',{
        params:{
          nowPage:this.nowPage,
          pageSize:this.pageSize
        }
      })
      .then((res)=>{
           if(res.data.count>0){
             this.productList=res.data.data.map(item=>{
              return {
                product_image:'http://localhost/tp5/public/static/'+item.product_image,
                product_name:item.product_name,
                product_price:item.product_price,
                product_id:item.product_id
              }
            })
            this.inLoadMore=true;
            this.nowPage++;
           }
      })
  }
  },
  mounted(){
    this.$nextTick(()=>{
     
      
    })
    
  },
}
</script>

<style lang="less" scoped>
  
 
    
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
