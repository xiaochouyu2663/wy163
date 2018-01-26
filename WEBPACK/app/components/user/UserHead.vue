<template>
  <div class="user_head">
      <el-row class="user_head-main">
        <el-col :span="4">
            <div class="fl">
                <div class="man">
                    <img src="~static/images/touxiang.png" alt="">
                </div>
                <div class="info">
                    小丑鱼
                </div>
            </div>
            </el-col>
        <el-col :span="20">
            <div class="fr">
               <div class="info1">
                   <el-row>
                       <el-col :span="8">
                           <div class="yonghu">
                               <div class="level">普通用户</div>
                               <div class="xiaoxi">
                                   <el-badge :value="2" class="item">
                                       消息
                                    </el-badge>
                               </div>
                           </div>
                           <div class="yonghu-opt">
                               <router-link to="/">开通微商</router-link> |
                               <router-link to="/">开通微商</router-link>
                           </div>
                       </el-col>
                       <el-col :span="8">
                           <b>10297</b>
                           <em>消费积分</em>
                       </el-col>
                       <el-col :span="8">
                           <b>10297</b>
                           <em>提现积分</em>
                       </el-col>
                   </el-row>
               </div>
               <div class="info2">
                   <el-row>
                       <el-col :span="4">
                           <router-link to="/" tag="li">
                                待发货
                               <i>2</i>
                           </router-link>
                       </el-col>
                       <el-col :span="4">
                           <router-link to="/" tag="li">
                                待发货
                               <i>2</i>
                           </router-link>
                       </el-col>
                       <el-col :span="4">
                           <router-link to="/" tag="li">
                                待发货
                               <i>2</i>
                           </router-link>
                       </el-col>
                       <el-col :span="4">
                           <router-link to="/" tag="li">
                                待发货
                               <i>2</i>
                           </router-link>
                       </el-col>
                       <el-col :span="4">
                           <router-link to="/" tag="li">
                                待发货
                               <i>2</i>
                           </router-link>
                       </el-col>
                       <el-col :span="4">
                           <router-link to="/" tag="li">
                                待发货
                               <i>2</i>
                           </router-link>
                       </el-col>
                   </el-row>
               </div>
            </div>
            </el-col>
        </el-row>
      
  </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss">
    .user_head{
        height:238px;
        background:url('~static/images/user_index_bg.jpg') no-repeat;
        .user_head-main{
            width:1100px;
            margin:0 auto;
            
            .fl{
                padding-top:35px;
                text-align: center;
                img{
                    width:135px;
                    border-radius: 50%;
                    margin-bottom:10px;
                }
            }
            .fr{
                margin:40px 50px;
                position: relative;
                &::after{
                    content:'';
                    position: absolute;
                    width:0;
                    height:0;
                    border-width:10px;
                    border-style:solid;
                    border-color: transparent #fff transparent transparent;
                    top:50%;
                    left:-20px;
                    margin-top:-10px;
                }
                .info1{
                    height:120px;
                    background: #ffffff;
                    border-radius: 5px 5px 0 0;
                    .el-col{
                        padding:25px 0;
                        text-align: center;
                    }
                    b{
                        display: block;
                        color: #fe5722;
                        font-size: 38px;
                        font-weight: normal
                    }
                    em{
                        display: block;
                        color: #585858;
                        font-size: 14px;
                        text-align: center;
                        font-style: normal;
                    }
                    .yonghu{
                        
                        padding:10px 50px;
                        overflow: hidden;
                        margin-bottom: 10px;
                        .level{
                            color:#fe5722;
                            float: left;
                            font-size: 14px;
                        }
                        .xiaoxi{
                            float: right;
                        }
                    }
                    
                }
                .info2{
                    height:35px;
                    background:#4f4f4f;
                    border-radius: 0 0 5px 5px;
                    color:#fff;
                    text-align: center;
                    line-height: 35px;
                    i{
                        font-style: normal;
                        font-size: small;
                        color:#fe5722;
                        font-size:12px;
                    }
                }
            }
        }
    }
</style>


