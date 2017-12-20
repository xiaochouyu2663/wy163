﻿
<?php
    session_start();
    //查询是否获取到session
   if (!isset($_SESSION['uid'])){     
        setcookie('urlValue','integral.php'); 
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9161959d6c078a3c&redirect_uri=http://wechat.trtjklife.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
     }else{
        $user_id=$_SESSION['uid'];
     } 
?>
<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">

    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" type="text/css" href="../css/footer.css">
    <link rel="stylesheet" type="text/css" href="../css/upgrade.css">
    <link rel="stylesheet" type="text/css" href="../css/swiper-3.4.2.min.css">
    <link rel="stylesheet" type="text/css" href="../css/discount.css?v=1">
    <title>积分购物</title>
    <script src="../js/common.js"></script>
    <style>
        body {
            line-height: 1.3;
        }
        
        #topNav {
            width: 6rem;
            overflow: hidden;
            font-size: 0.28rem;
            position: relative;
        }
        
        #topNav .swiper-slide {
            letter-spacing: 2px;
            width: 2rem;
            text-align: center;
        }
        
        #topNav .swiper-slide span {
            /* transition: all .3s ease; */
            display: block;
            padding: 0.08rem;
        }
        
        #topNav .active span {
            /* transform: scale(1.1); */
            /* color: #FF2D2D */
            background-color: #00c7f2;
            border-radius: 0.3rem;
        }
        
        #Order {
            width: 6rem;
            overflow: hidden;
            font-size: 0.28rem;
            position: relative;
        }
        
        #Order .swiper-slide {
            letter-spacing: 2px;
            width: 2rem;
            text-align: center;
        }
        
        #Order .swiper-slide span {
            /* transition: all .3s ease; */
            display: block;
            padding: 0.08rem;
        }
        
        #Order .active span {
            /* transform: scale(1.1); */
            /* color: #FF2D2D */
            background-color: #00c7f2;
            border-radius: 0.3rem;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
            height: 0.3rem;
            top: 0.25rem;
            margin-top: 0;
        }
        
        .upgrade_container {
            padding-bottom: 1.2rem;
        }
        
        .footer .integral p span {
            font-size: 0.28rem;
        }
        
        .footer .integral {
            line-height: 0.7rem;
        }
        
        .footer .integral .money {
            font-size: 0.36rem;
        }
        
        .upgrade_container .upgrade_list .upgrad_list_box a .upgrade_list_panel .upgrade_shop_sort .upgrade_shop_price2 {
            display: none;
        }
    </style>
</head>

<body>
    <div id="app">
        <!-- 导航头部 -->
        <div class="header">
            <div class="back">

            </div>
            <div class="title">
                <p>积分购物</p>
            </div>
            <div class="edit">

            </div>
        </div>

        <!-- 主体 -->
        <div class="upgrade_container">
            <!-- 积分头部 -->
            <div class="discount_integral">
                <div class="user_name">
                    李四李四
                </div>
                <div class="user_phone">
                    18888888888
                </div>
                <div class="user_integral">
                    <span>积分&nbsp;:&nbsp;</span>
                    <span id="user_integral_sum">0</span>
                </div>
            </div>
            <!-- 订单导航 -->

            <div class="upgrade_header">
                <div id="topNav" class="swiper-container">
                    <div class="swiper-wrapper" id="productNav">

                    </div>
                </div>
                <div class="swiper-button-prev "></div>
                <div class="swiper-button-next "></div>
            </div>


            <div id="upgrade">

            </div>
        </div>

    </div>
    <!-- 遮罩 -->
    <div class="mask">
        <div class="mask_box">
            <p>
                累计购物业绩已达到所选级别，升级成功
            </p>
            <div class="mask_btn">
                <a>购物</a>
                <a>推荐优惠顾客</a>
                <a>推荐经销商</a>
            </div>
        </div>
    </div>
    <!-- 底部 -->
    <!-- <div class="upgrade_select">
        <p>请选择计入级别</p>
        <select class="select">
                    <option value="1" >金卡</option>
                    <option value="1">银卡</option>
                    <option value="1">钻石卡</option>
            </select>
    </div> -->
    <div class="footer">

        <div class="integral">
            <p>
                <span class="price">总积分:</span>
                <span class="money">&nbsp;<span  class="money" id="integralSum">0</span></span>
            </p>

        </div>
        <div class="settlement" id="settlement">
            <p>去结算</p>
        </div>
    </div>
    </div>
</body>
<script src="../js/jquery-1.11.0.js"></script>
<script type="text/javascript" src="../js/jquery.cookie.js"></script>
<script src="../js/swiper-3.4.2.min.js"></script>
<script src="../js/home.js"></script>
<!-- <script src="../js/integral.js"></script> -->
<script type="text/javascript" src="../js/api.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
    

        var user_id=<?php echo $user_id ?>; 
        var userInfo=JSON.parse($.cookie("userInfo")||"{}");
        var productCar=JSON.parse(window.sessionStorage.getItem("productCar")||"{}");
        var currentOrderType=JFOrderTrigger;
        var order_type={
            "order_type_id":5,
            "order_type_name":"积分订单"
        }
        if(productCar['productType']){
            var activeItem=productCar['productType']['product_id'];
            var currentProd=productCar['productInfo'];
        }
        
        $(".discount_integral .user_name").html(userInfo.name);  //获取用户姓名
        $(".discount_integral .user_phone").html(userInfo.mobile)  //获取用户电话
        
        integralQuery(user_id)                  //获取用户总积分
        product(user_id,activeItem);              //获取产品分类
        listQuery(currentOrderType,user_id,currentProd);             //获取产品列表

        $('#settlement').click(function(){
            if($("#integralSum").html()>0){
                $.cookie("productInfo",JSON.stringify(productArr))
                $.cookie("orderType",JSON.stringify(order_type))
                $.cookie("userType",JSON.stringify($("#select").val()))
                var productCar={};
                productCar["productInfo"]=productArr;
                productCar["orderType"]=order_type;
                productCar["productType"]={
                    product_id:$('#productNav .swiper-slide.active').attr('data-id'),
                    product_name:$('#productNav .swiper-slide.active span').html()
                }
                window.sessionStorage.setItem("productCar",JSON.stringify(productCar));
                window.location.href = 'order_settlement.php';

            }else{
                alert("请先选择产品");
            }
        })

        var link = location.href;
        TRT.wxInit(link);
        $(".back").click(function(){
            wx.closeWindow();
        }) 

   
</script>


</html>