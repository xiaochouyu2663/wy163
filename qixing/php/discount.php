<?php
    session_start();
    //查询是否获取到session
       if (!isset($_SESSION['uid'])) 
      {   
           
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9161959d6c078a3c&redirect_uri=http://wechat.trtjklife.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
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
    <title>优惠顾客购物</title>
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
        
        .swiper-button-next,
        .swiper-button-prev {
            height: 0.3rem;
            top: 0.25rem;
            margin-top: 0;
        }
        
        .upgrade_container {
            padding-bottom: 1.2rem;
        }
        
        .upgrade_container .upgrade_list .upgrad_list_box a .upgrade_list_panel .upgrade_shop_sort .upgrade_shop_price {
            margin-top: 0.1rem;
        }
        
        .upgrade_container .upgrade_list .upgrad_list_box a .upgrade_list_panel .upgrade_shop_sort .upgrade_shop_price1 {
            margin-top: 0.1rem;
            visibility: hidden;
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
                <p>优惠顾客购物</p>
            </div>
            <div class="edit">

            </div>
        </div>

        <!-- 主体 -->
        <div class="upgrade_container">
            <!-- 积分头部 -->
            <div class="discount_integral">
                <div class="user_name">
                    李四李四李四
                </div>
                <div class="user_phone">
                    18888888888
                </div>
                <div class="user_integral">
                    <span>累计积分&nbsp;:&nbsp;</span>
                    <span id="user_integral_sum">0</span>
                </div>
            </div>
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
            <p><span class="price">总价格:</span><span class="money">&nbsp;&nbsp;￥<span  class="money" id="money">0</span></span>
            </p>
            <p><span class="total">总积分:</span><span class="sum">&nbsp;&nbsp;&nbsp;<span id="integralSum">0</span></span>
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
<script src="../js/http.js"></script>
<script src="../js/discount.js"></script>
<script>
    var user_id=<?php echo $_SESSION['uid']?>;
    product(http,user_id, productUrl)
    listQuery(http, currentOrderType,user_id)
    integralQuery(http, balanceUrl,user_id);
     $('#settlement').click(function() {
        if($("#money").html()>0){
            $.cookie("productInfo",JSON.stringify(productArr))
            $.cookie("orderType",JSON.stringify(order_type))
            $.cookie("userType",JSON.stringify($("#select").val()))
            }
            if(currentOrderType==JMOrderTrigger||currentOrderType==SJOrderTrigger){
                var productStr="";
                $(productArr).each(function(){
                     productStr+=$(this)[0].id+'`'+$(this)[0].num+'~'
                })
                upgradeArr=[{
                    "USER_TYPE":$("#select").val(),
                    "ORDER_TYPE":order_type['order_type_id'],
                    "PRODUCTS":productStr.slice(0,-1)
                }];
                isUpgradeSuccsee(http,upgradeTrigger,user_id,upgradeArr)
            }else{
                window.location.href = 'order_settlement.php';
            }
        })
</script>
</html>