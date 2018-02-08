<template>
    <div class="mhead">
        <div class="mhead_logo">
            <img class="logo" src="../../static/images/logo.jpg" alt="">
            <span v-if="isLogin">欢迎登陆</span>
            <span v-else>欢迎注册</span>
        </div>
        <div v-if="!isLogin" class="mhead_tip">
            我已注册,现在就去<router-link to="/login">登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        isLogin:true
    }
}
</script>
<style lang="scss" scoped>
    .mhead{
        width:1200px;
        margin:0 auto;
        overflow: hidden;
        padding:20px 0;
        .mhead_logo{
            font-size:24px;
            overflow: hidden;
            .logo{
                display: block;
                float:left;
                border-right: 1px solid #e5e5e5;
                padding-right:5px;
            }
            span{
                display: block;
                float:left;
                margin-top:25px;
                padding-left:25px;
            }
        }
        .mhead_tip{
            text-align: right;
            font-size:16px;
            color:#707070;
        }
    }
</style>


