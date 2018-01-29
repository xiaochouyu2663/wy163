<template>
<transition name="fade">
  <el-container class="home-box" style="width:100%;">
    <el-header class="my-header" style="height:auto;padding:0;">
      <Nhead :isLogin="userInfo.isLogin" :name="userInfo.name" v-on:updateUserInfo="userLogoff"></Nhead>
    </el-header>
    <el-main class="w12" style="padding:0;overflow:hidden;width:1200px!important;">
      <el-container>
        <el-aside style="border:1px solid #ccc;height:435px;width:240px;padding-top:20px;">
          <el-menu>
            <el-menu-item v-for="(item,index) in menuList" :index="index.toString()" :key="index" style="line-height:28px;">
              <div>
                <i :class="item.icon"></i>
                {{item.content}}
              </div>
              <div style="padding-left:35px;color:#aaa;">
                 <span style="display:inline-block;margin-right:10px;" v-for="(list,index) in item.desc" :key="index">{{list}}</span>
              </div>
              </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="padding:0;">
          <el-carousel style="height:435px;">
          <el-carousel-item style="height:435px;" class="banner-list" v-for="(item,index) in bannerList" :key="index">
            <img :src="item.src" alt="">
          </el-carousel-item>
        </el-carousel>
        </el-main>
      </el-container>
      <el-container style="margin-top:20px;min-height:600px;">
        <el-main style="padding:0;">
          <ul>
            <router-link  class="advertisement" to="/" tag="li" v-for="(item,index) in advertisement" :key="index">
              <img :src="item.src" alt="">
            </router-link>
          </ul>
          <div style="clear:both;">
            <el-tabs v-model="activeName" class="advertise">
              <el-tab-pane v-for="(item,index) in tabbar" :key="index" :label="item.content" :name="item.name">
                <el-row style="border:2px solid #ebeef5;border-width:0 2px 2px 2px;">
                  <el-col :span="4" v-for="(value,index) in productList" :key="index">
                    <el-card :body-style="{}">
                      <img style="width:100%;display:block;" :src="value.pro_image" alt="">
                      <h5 style="margin-top:20px;color:#aaa;font-weight:normal;margin-bottom:10px;">{{value.pro_name}}</h5>
                      <p style="color:#f00;">&euro;{{value.pro_price | fixTwo}}</p>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>  
          <div class="advertisement-box" >
            <img  src="../../static/images/advertisement1.png" alt="">
          </div>
          <div class="pro_show">
            <div class="show_top">
              <div class="show_top_left">
                <img src="../../static/images/icon_tit.png" alt="">
                <span>食用橄榄油</span>
              </div>
              <div class="show_top_right">
                <router-link to="/">更多>></router-link>
              </div>
            </div>
            <div class="show_main">
              <el-row>
                <el-col :span="5" style="">
                  <div>
                    <ul class="show_main_menu">
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                    </ul>
                    <img src="../../static/images/bottom_bg.png" alt="">
                  </div>
                </el-col>
                <el-col :span="7" >
                  <img style="width:100%;display:block;" src="../../static/images/left_bg.png" alt="">
                </el-col>
                <el-col :span="12" style="">
                  <div style="padding:0 20px;">
                   <el-card style="width:33.333%;float:left;border:none;box-shadow:none;" :body-style="{padding:'10px 20px'}" v-for="(value,index) in productList" :key="index">
                      <img style="width:100%;display:block;" :src="value.pro_image" alt="">
                      <h5 style="margin-top:5px;color:#aaa;font-weight:normal;margin-bottom:0px;">{{value.pro_name}}</h5>
                      <p style="color:#f00;">&euro;{{value.pro_price | fixTwo}}</p>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="pro_show">
            <div class="show_top">
              <div class="show_top_left">
                <img src="../../static/images/icon_tit.png" alt="">
                <span>食用橄榄油</span>
              </div>
              <div class="show_top_right">
                <router-link to="/">更多>></router-link>
              </div>
            </div>
            <div class="show_main">
              <el-row>
                <el-col :span="5" style="">
                  <div>
                    <ul class="show_main_menu">
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                    </ul>
                    <img src="../../static/images/bottom_bg.png" alt="">
                  </div>
                </el-col>
                <el-col :span="7" >
                  <img style="width:100%;display:block;" src="../../static/images/left_bg.png" alt="">
                </el-col>
                <el-col :span="12" style="">
                  <div style="padding:0 20px;">
                   <el-card style="width:33.333%;float:left;border:none;box-shadow:none;" :body-style="{padding:'10px 20px'}" v-for="(value,index) in productList" :key="index">
                      <img style="width:100%;display:block;" :src="value.pro_image" alt="">
                      <h5 style="margin-top:5px;color:#aaa;font-weight:normal;margin-bottom:0px;">{{value.pro_name}}</h5>
                      <p style="color:#f00;">&euro;{{value.pro_price | fixTwo}}</p>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="pro_show">
            <div class="show_top">
              <div class="show_top_left">
                <img src="../../static/images/icon_tit.png" alt="">
                <span>食用橄榄油</span>
              </div>
              <div class="show_top_right">
                <router-link to="/">更多>></router-link>
              </div>
            </div>
            <div class="show_main">
              <el-row>
                <el-col :span="5" style="">
                  <div>
                    <ul class="show_main_menu">
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                      <li>初级特榨</li>
                    </ul>
                    <img src="../../static/images/bottom_bg.png" alt="">
                  </div>
                </el-col>
                <el-col :span="7" >
                  <img style="width:100%;display:block;" src="../../static/images/left_bg.png" alt="">
                </el-col>
                <el-col :span="12" style="">
                  <div style="padding:0 20px;">
                   <el-card style="width:33.333%;float:left;border:none;box-shadow:none;" :body-style="{padding:'10px 20px'}" v-for="(value,index) in productList" :key="index">
                      <img style="width:100%;display:block;" :src="value.pro_image" alt="">
                      <h5 style="margin-top:5px;color:#aaa;font-weight:normal;margin-bottom:0px;">{{value.pro_name}}</h5>
                      <p style="color:#f00;">&euro;{{value.pro_price | fixTwo}}</p>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="advertisement-box" >
            <img  src="../../static/images/advertisement1.png" alt="">
          </div>
        </el-main>
      </el-container>
    </el-main>
    <el-footer style="height:100%;padding:0;">
      <Nfoot name="Nfoot"></Nfoot>
    </el-footer>
      
  </el-container>
  </transition>
</template>
<script>
import Nhead from './common/Nhead'
import Nfoot from './common/Nfoot'
export default {
  data(){
    return {
      userInfo:{
        isLogin:false,
        name:undefined
      },
      menuList:[
        {
          icon:'el-icon-search',
          content:'食用橄榄油',
          desc:[
            '特级初榨','初榨'
          ]
        },
        {
          icon:'el-icon-search',
          content:'身体',
          desc:[
            '全身滋养','护肤滋润'
          ]
        },
        {
          icon:'el-icon-search',
          content:'婴儿',
          desc:[
            '娇嫩滋养','婴幼儿滋养'
          ]
        },
        {
          icon:'el-icon-search',
          content:'头部',
          desc:[
            '滋养头发','修护'
          ]
        },
        {
          icon:'el-icon-search',
          content:'手工皂',
          desc:[
            '美肤','滋养洁净'
          ]
        },
        {
          icon:'el-icon-search',
          content:'营养品',
          desc:[
            '减肥瘦身','健康'
          ]
        }
      ],
      bannerList:[
        {
          src:require('../../static/images/banner_01.jpg')
        },
        {
          src:require('../../static/images/banner_02.jpg')
        },
        {
          src:require('../../static/images/banner_03.jpg')
        }
      ],
      advertisement:[
        {
          src:require('../../static/images/list_01.png')
        },
        {
          src:require('../../static/images/list_02.png')
        },
        {
          src:require('../../static/images/list_03.png')
        },
        {
          src:require('../../static/images/list_04.png')
        },
        {
          src:require('../../static/images/list_05.png')
        }
      ],
      tabbar:[
        {
          name:'first',
          content:'食用橄榄油'
        },
        {
          name:'second',
          content:'护肤系列'
        },
        {
          name:'third',
          content:'营养系列'
        }
      ],
      activeName:'first',
      productList:[
        {
          pro_id:0,
          pro_name:'Huile Olive食用橄榄油',
          pro_price:'232.00',
          pro_image:require('../../static/images/product_01.png')
        },
        {
          pro_id:0,
          pro_name:'Huile Olive食用橄榄油',
          pro_price:'232.00',
          pro_image:require('../../static/images/product_01.png')
        },
        {
          pro_id:0,
          pro_name:'Huile Olive食用橄榄油',
          pro_price:'232.00',
          pro_image:require('../../static/images/product_01.png')
        },
        {
          pro_id:0,
          pro_name:'Huile Olive食用橄榄油',
          pro_price:'232.00',
          pro_image:require('../../static/images/product_01.png')
        },
        {
          pro_id:0,
          pro_name:'Huile Olive食用橄榄油',
          pro_price:'232.00',
          pro_image:require('../../static/images/product_01.png')
        },
        {
          pro_id:0,
          pro_name:'Huile Olive食用橄榄油',
          pro_price:'232.00',
          pro_image:require('../../static/images/product_01.png')
        }
      ]
    }
  },
  components: {
    Nhead,Nfoot
  },
  // 在组件的选项中定义本地过滤器
  filters:{
    fixTwo(value){
      return Number(value).toFixed(2)
    }
  },
  created(){
    this.$nextTick(()=>{
      this.InitUserInfo()
    })
  },
  methods:{
    /** function:退出登录功能 */
    userLogoff(){
      let userInfo={
          isLogin:false,
          name:undefined
      }
      this.$cookie.set('userInfo',JSON.stringify(userInfo));
      this.userInfo=userInfo;
    },

    /**function:获取用户信息 2018-1-25*/
    InitUserInfo(){
      this.userInfo=JSON.parse(this.$cookie.get('userInfo'));
    }
  }
}
</script>
<style lang="scss" >
.home-box{
  background:#fff;
}
.fade-enter-active,{
  transition: opacity .5s
}
.fade-enter, /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
  .my-header{
    height:auto;
  }
  .banner-list{
    img{
      width:100%;
    }
  }
  .el-carousel__container{
    height:435px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .advertisement{
    float: left;
    width:20%;
    padding-right:5px;
    box-sizing:border-box;
    &:last-child{
      padding-right:0;
    }
    img{
      width:100%;
    }
  }
  .advertise{
    .el-tabs__nav{
      width:100%;
    }
    .el-tabs__item{
      width:33.3333%;
      text-align:center;
    }
    .el-tabs__header{
      margin:0;
    }
    .el-card{
      border:none;
      box-shadow: none;
    }
  }
  .advertisement-box{
    margin:20px auto;
    img{
      width:100%;
    }
  }
  .pro_show{
    margin-bottom:20px;
  }
  .show_top{
    display:flex;
    justify-content: space-between;

    img{
      width:20px;
      display: block;
      float: left;
      margin-right:15px;
    }
    .show_top_left{
      font-weight: bold;
    }
    .show_top_right{
      a{
        color:#aaa;
        font-size:14px;
      }
      
    }
  }
  .show_main{
    border:1px solid #ccc;
    min-height:400px;
    margin-top:10px;
    padding:5px;
  }
  .show_main_menu{
    padding:20px 15px 0;
    overflow:hidden;
    li{
      float: left;
      width:50%;
      color:#aaa;
      text-align:center;
      border-bottom:1px solid #ccc;
      font-size:14px;
      line-height:40px;
    }
  }
</style>

