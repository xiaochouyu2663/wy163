<?php
    session_start();
  //查询是否获取到session
      if (!isset($_SESSION['uid']))
      {     
        setcookie('urlValue','order.php');  
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
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
    <link rel="stylesheet" href="../css/settlement.css" />
    <script src="../js/ajax.js"></script>
    <script src="../js/common.js"></script>
    <title>结算</title>
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
            <p>结算</p>
        </div>
        <div class="edit">
        
        </div>
    </div>
    
    <div class="box">
        <div class="distribution-information">
        	<!-- <h3>配送信息</h3>
        	
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
        	</div> -->
        </div>
        <div class="order-type">
        	<div class="order-type1">
        		<div class="order">订单类型</div>
        		<div class="content"></div>
        	</div>
        	
        	<div class="order-type1">
        		<div class="order">总价</div>
        		<div class="content"></div>
        	</div>
        	
        	<div class="order-type1">
        		<div class="order">总积分</div>
        		<div class="content"></div>
        	</div>
        	
        	<div class="order-type1">
        		<div class="order">运费</div>
        		<div class="content"></div>
        	</div>
        	<div class="btn-commodity-details">
        		商品详情
        	</div>
        </div>
    
    
        <div class="commodity-box" style="display: none">
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
    	</div>
        <div class="Amount-of-money">
        	<div class="money-1">
        		实收金额：&yen;<span></span>
        	</div>
        	<div class="determine wxpay" id="wxpay">确定支付</div>
        </div>
    
    </div>
    <script src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script src="../js/settlement.js"></script>
<script>
    var user_id=<?php echo $user_id ?>; 
    var oid = location.search.slice(6);   //订单id
    var userInfo=JSON.parse($.cookie("userInfo")||'{}');
    var openId=userInfo.openid;
    order.getSingleOrder(user_id,oid,openId);
    $('.btn-commodity-details').click(function(){
        var state=$('.commodity-box').css("display");
        if(state=="none"){
            state="block";
            $('.commodity-box').css("display",state);
        }else{
             state="none";
            $('.commodity-box').css("display",state);
        }
     })
     $('.back').click(function(){
        window.history.go(-1)
    })
</script>
    
</body>

</html>
