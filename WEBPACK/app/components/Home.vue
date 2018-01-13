<template>

  <el-container style="width:100%;">
    <el-header class="my-header" style="height:auto;padding:0;">
      <Nhead></Nhead>
    </el-header>
    <el-main class="w12" style="padding:0;overflow:hidden;">
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
                {{item.content}}
              </el-tab-pane>
            </el-tabs>
          </div>  
        </el-main>
      </el-container>
    </el-main>
    <el-footer style="height:100%">Footer</el-footer>
      
  </el-container>
</template>
<script>
import Nhead from './Nhead'
export default {
  data(){
    return {
      
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
      activeName:'first'
    }
  },
  components: {
    Nhead
  }
}
</script>
<style lang="scss" >
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
  }
</style>

