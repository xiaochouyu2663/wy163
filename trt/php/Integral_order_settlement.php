<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" href="../css/Integral_settlement.css" />
    <script src="../js/Integral_settlement.js"></script>
    <script src="../js/common.js"></script>
    <title>积分结算</title>
    <style>
    	.box{
    		padding-top: 0.8rem;
    	}
    </style>
</head>

<body>
    <div class="header">
        <div class="back">

        </div>
        <div class="title">
            <p>积分结算</p>
        </div>
        <div class="edit">
        
        </div>
    </div>
    
    
    <div class="box">
    <div class="distribution-information">
    	<a href="./new-address.php"><div class="modify">修改</div></a>
    	<h3>配送信息</h3>
    	
    	<div class="user-name">
    		<input type="text"  class="user-name-ipt"/>
    		<p class="user-p">张三</p>
    	</div>
    	<div class="cell-phone">
    		<input type="text"  class="cell-phone-ipt"/>
    		<p class="cell-p">12345678901</p>
    	</div>
    	<div class="address">
    		<input type="text"  class="address-ipt"/>
    		<p class="address-p">天津市-西青区-xxx路-xxx号</p>
    	</div>
    </div>
    <div class="order-type">
    	<div class="order-type1">
    		<div class="order">订单类型</div>
    		<div class="content">XXXXX</div>
    	</div>
    	
    	<div class="order-type1">
    		<div class="order">总价</div>
    		<div class="content">&yen;998</div>
    	</div>
    	
    	<div class="order-type1">
    		<div class="order">总积分</div>
    		<div class="content">23</div>
    	</div>
    	
    	<div class="order-type1">
    		<div class="order">运费</div>
    		<div class="content">&yen;10</div>
    	</div>
    	<div class="btn-commodity-details">
    		商品详情
    	</div>
    </div>
    
    <div class="commodity-box">
		    <div class="commodity-name">
		    	<div class="commodity-name-title">
		    		商品名称
		    	</div>
		    	<div class="unit-price">
		    		单价
		    	</div>
		    	<div class="commodity-number">
		    		数量
		    	</div>
		    </div>
		    
		    <div class="commodity-name">
		    	<div class="commodity-name-title">
		    		商品二
		    	</div>
		    	<div class="unit-price">
		    		&yen;<span>66</span>
		    	</div>
		    	<div class="commodity-number">
		    		X <span>3</span>
		    	</div>
		    </div>
		    
		    <div class="commodity-name">
		    	<div class="commodity-name-title">
		    		商品一
		    	</div>
		    	<div class="unit-price">
		    		&yen;<span>199</span>
		    	</div>
		    	<div class="commodity-number">
		    		X<span>2</span>
		    	</div>
		    </div>
		</div>
    
    <div class="payment-password"  style="display:none">
    	支付密码：<input type="password" placeholder="请输入支付密码" />
    </div>
    
    <div class="Amount-of-money">
    	<div class="money-1">
    		实收金额：&yen;<span>299.00</span>
    	</div>
    	<div class="determine">确定支付</div>
    </div>
    
    <div class="popup" style="display: none">
    	<div class="popup-1">
    		<p>付款成功</p>
    		<p class="dd">订单号:</p>
    		<a href="./home.php"><div class="again">再次购物</div></a>
    		<a href="http://qixingshangcheng.pstech360.com/php/getScanCode.php?level=0"><div class="discount">推荐优惠顾客</div></a>
    		<a href="http://qixingshangcheng.pstech360.com/php/getScanCode.php?level=1"><div class="distributor">推荐经销商</div></a>
    	</div>
    </div>
    </div>
    <script src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script src="../js/swiper-3.4.2.min.js"></script>
    <script src="../js/http.js"></script>
    <script src="../js/Integral_order_settlement.js"></script>
</body>
</html>
<script>
	
	
</script>