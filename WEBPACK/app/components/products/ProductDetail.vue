<template>
  <div>
       <Nhead ></Nhead>
       <div class="products-box">
           <div class="products_main">
               <div class="nav-info">
                   <router-link to="/">首页</router-link>>>
                   <router-link to="/">情侣装</router-link>>>2015春装新款韩版长袖t恤男女碎花拼接情侣装纯棉字母卫衣班服潮
               </div>
               <div class="product-info">
                   <div class="product-preview">
                       <div class="zoom-small-image">
                           <div class="zoom-small-wrap">
                               <div class="small-image" @mousemove="mouseMoveDes">
                                   <img  src="~static/images/product.jpg" alt="">
                               </div>
                               <div class="little-wrap"></div>
                               <div class="zoom-big-image"><img src="~static/images/product.jpg" alt=""></div>
                           </div>
                       </div>
                       <div class="zoom-desc">
                           <div class="zom-desc-item"><img src="~static/images/product.jpg" alt=""></div>
                           <div class="zom-desc-item"><img src="~static/images/product.jpg" alt=""></div>
                           <div class="zom-desc-item"><img src="~static/images/product.jpg" alt=""></div>
                           <div class="zom-desc-item"><img src="~static/images/product.jpg" alt=""></div>
                           <div class="zom-desc-item"><img src="~static/images/product.jpg" alt=""></div>
                       </div>
                   </div>
                   <div class="product-params">参数</div>
                   <div class="product-serve">服务</div>
               </div>
           </div>
           
       </div>
       <Nfoot></Nfoot>
  </div>
</template>
<script>
import Nhead from '../common/Nhead'
import Nfoot from '../common/Nfoot'
export default {
  components: {
    Nhead,Nfoot
  },
  methods:{
      mouseMoveDes(e){
        //   console.log(e)
            var w=$('.little-wrap').width();
            var h=$('.little-wrap').height();
            console.log(w,h)
            if(e.offsetX-w/2<0){
                $('.little-wrap').css({'left':0,'top':e.offsetY-h/2})
            }else if(e.offsetY-h/2>410){
                $('.little-wrap').css({'left':e.offsetX-w/2,'top':310})
            }else{
                $('.little-wrap').css({'left':e.offsetX-w/2,'top':e.offsetY-h/2})
            }
          
      }
  }

}
</script>
<style lang="scss">
.products-box{
    
    background:#fff;
    min-height:500px;
    .products_main{
        width:1200px;
        margin:0 auto;
       
        padding-top:15px;
        overflow: hidden;
        .nav-info{
            margin-bottom:15px;
        }
        .product-info>div{
            float:left;
        }
        .product-preview{
            padding:0 5px;
            width:410px;
            .zoom-small-image{
                width:100%;
                height:410px;
                border: 1px solid ccc;
                .zoom-small-wrap{
                    position: relative;
                    .little-wrap{
                        background:rgba(0,0,0,0.1);
                        width:160px;
                        height:160px;
                        position: absolute;
                        border:2px solid #aaa;
                        top:0;
                        cursor:move;
                    }
                }
            }
            .small-image{
                border:1px solid #ccc;

            }
            .zoom-desc{
                padding:20px 0 20px 0px;
                overflow: hidden;
                
            }
            .zom-desc-item{
                width:60px;
                height:60px;
                float:left;
                margin-right:21px;
                cursor: pointer;
                img{
                    border:1px solid #ccc;
                }
            }
            img{
                width:100%;
                height:100%;
            }

        }
    }
}
</style>


