<template>
  <div>
      <div class="footer_top">
          <ul class="w12">
              <li><img src="~static/images/foot_ico1.png" alt=""><span>品牌防伪</span></li>
              <li><img src="~static/images/foot_ico2.png" alt=""><span>7天无理由退货</span></li>
              <li><img src="~static/images/foot_ico3.png" alt=""><span>百万用户口碑</span></li>
              <li><img src="~static/images/foot_ico4.png" alt=""><span>订单闪电发货</span></li>
              <li><img src="~static/images/foot_ico5.png" alt=""><span>星级品质保障</span></li>
          </ul>
      </div>
      <div class="footer_bottom">
          <ul class="w12">
            <router-link to="/" tag="li">联系我们</router-link>
            <router-link to="/" tag="li">客服中心</router-link>
            <router-link to="/" tag="li">如何支付</router-link>
            <router-link to="/" tag="li">退换服务</router-link>
            <router-link to="/" tag="li">欢迎加盟</router-link>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name:'Nfoot'

}
</script>
<style lang="scss" scoped>
$primary-color:#bdd90b;
.footer_top{
    background:#fff;
    border-top:2px solid #ccc;
    padding:20px 0;
    ul{
        display:flex;
        display:-webkit-flex;
        justify-content: space-between;
        li{
            margin-top:1px;
            text-align:center;
        }
        img{
            display:block;
            margin:0 auto;
        }
    }
}
.footer_bottom{
    background:$primary-color;
    color:#fff;
    ul{
        display:flex;
        justify-content: center;
        padding:15px 0;
        font-size:13px;
        li{
            padding:0 20px;
            border-right: 1px solid #fff;
            &:last-child{
                border-right:none;
            }
        }
    }
}
</style>


