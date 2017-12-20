<?php
	session_start();
  //查询是否获取到session
	  if (!isset($_SESSION['uid']))
	  {		
        setcookie('urlValue','order.php');  
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
    <link rel="stylesheet" type="text/css" href="../css/order.css">
    <title>订单信息</title>
    <script src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script src="../js/common.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <style>
        body {
            line-height: 1.3;
        }
        
        a:hover,
        a:focus {
            color: #000000;
        }
        
        .order_main_state .order_main_btn {
            color: #000000;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="back">

        </div>
        <div class="title">
            <p>订单信息</p>
        </div>
        <div class="edit">

        </div>
    </div>
    <div class="order_container">
        <!-- header部分 -->
        <div class="order_header">
            <div class="order_all ">
                <p class="order_avtive">全部</p>
            </div>
            <div class="order_unpaid">
                <p>未付款</p>
            </div>
            <div class="order_paid">
                <p>已付款</p>
            </div>
        </div>
        <!-- 主体部分 -->
        <div class="order_main">
        	
        	
            <!--<div class="order_main_list">
                <div class="order_main_li">
                    <div class="order_main_li_fl order_main_li_pt">
                        <p class="order_main_goods">商品名称</p>
                        <p>￥<span>128.00</span></p>
                    </div>
                    <div class="order_main_li_fl">
                        <p class="order_main_goods">积分&nbsp;:&nbsp;<span>23</span></p>
                        <p>2017-2-15</p>
                    </div>
                </div>
                <div class="order_main_state">
                    <p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>已付款</span></p>
                    <a class="order_main_btn">去支付</a>
                </div>
            </div>-->
            
            
            
            <!--<div class="order_main_list">
                <div class="order_main_li">
                	
                	
                    <div class="order_main_li_fl order_main_li_pt">
                        <p class="order_main_goods">商品名称</p>
                        <p>￥<span>128.00</span></p>
                    </div>
                    
                    
                    <div class="order_main_li_fl">
                        <p class="order_main_goods">积分&nbsp;:&nbsp;<span>23</span></p>
                        <p>2017-2-15</p>
                    </div>
                    
                    
                </div>
                
                
                <div class="order_main_state">
                    <p class="order_main_goods">
                        <span>状态&nbsp;:&nbsp;</span>
                        <span>已付款</span>
                        <span class="order_main_integral">积分订单</span>
                    </p>
                    <a class="order_main_btn">去支付</a>
                </div>
            </div>-->
        </div>
    </div>
</body>

<script src="../js/settlement.js"></script>
<script>
    
    var user_id = <?php echo $_SESSION['uid']?>;
    order.getAllOrder(order.orderUrl,user_id)
$('.order_avtive').click(function(){
	$('.order_avtive').css({"color":"#00C7F2","border-bottom":"2px solid #00C7F2"});
	$('.order_unpaid p').css({"color":"black","border-bottom":"none"});
	$('.order_paid p').css({"color":"black","border-bottom":"none"});
	$('.order_main').html('');
    order.getAllOrder(order.orderUrl,user_id)
})
$('.order_unpaid').click(function(){
	$('.order_avtive').css({"color":"black","border-bottom":"none"});
	$('.order_unpaid p').css({"color":"#00C7F2","border-bottom":"2px solid #00C7F2"});
	$('.order_paid p').css({"color":"black","border-bottom":"none"});
	order.getAllOrder(order.orderUrl,user_id,0)
})
$('.order_paid').click(function(){
	$('.order_avtive').css({"color":"black","border-bottom":"none"});
	$('.order_unpaid p').css({"color":"black","border-bottom":"none"});
	$('.order_paid p').css({"color":"#00C7F2","border-bottom":"2px solid #00C7F2"});
	order.getAllOrder(order.orderUrl,user_id,1)
    })
var link = location.href;
            TRT.wxInit(link);
             $(".back").click(function(){
                wx.closeWindow();
            })
</script>

</html>