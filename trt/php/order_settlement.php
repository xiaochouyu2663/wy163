<?php
    session_start();
    //查询是否获取到session
      if (!isset($_SESSION['uid'])) 
      {       
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
    <link rel="stylesheet" href="../css/Integral_settlement.css" />
    <link rel="stylesheet" href="../css/settlement.css" />
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
    	<!-- <a href="./new-address.php"><div class="modify">修改</div></a>
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
    	</div> -->
    </div>
    <div class="order-type">
    	<div class="order-type1">
    		<div class="order">订单类型</div>
    		<div class="content type"></div>
    	</div>
    	
    	<div class="order-type1">
    		<div class="order">总价</div>
    		<div class="content allPrice"></div>
    	</div>
    	
    	<div class="order-type1">
    		<div class="order">总积分</div>
    		<div class="content allPV"></div>
    	</div>
    	
    	<div class="order-type1">
    		<div class="order">运费</div>
    		<div class="content yreight"></div>
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
		   
		    <!-- <div class="commodity-name">
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
		    </div>  -->
		</div>
    
    
    <div class="verification" style="">
        <input id="verifyCode" type="password" placeholder="请输入验证码（必填）"/><span>*</span>
        <button class="btn-verification">获取验证码</button>
    </div>
    <div class="Amount-of-money">
    	<div class="money-1">
    		实收:<span></span>
    	</div>
    	<div class="determine">确定支付</div>
    </div>
    
    <div class="popup" style="display: none">
    	<div class="popup-1">
    		<p>付款成功</p>
    		<p class="dd order_id">订单号:</p>
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
    <script src="../js/api.js"></script>
    <script src="../js/order_settlement.js"></script>
    <script>
        
            var user_id=<?php echo $user_id ?>; 
            var userInfo=JSON.parse($.cookie("userInfo")||"{}");
            var openId=userInfo.openid;
            var upgradeData=JSON.parse($.cookie("upgradeData")||"{}");
            $.cookie("hasCurrentOrder",null,{expires:-1})
            createOrder.getAddress(createOrder.addressTigger,createOrder.freightTrigger,user_id);   //获取地址          
            $(".order-type .yreight").html('&yen;'+createOrder.freight)
            var orderType=JSON.parse($.cookie("orderType")||"{}");   //获取订单类型cookie
            $(".determine").click(function(){
                var currentOrder=JSON.parse($.cookie("hasCurrentOrder")||'{}');
                if(currentOrder.orderId!=undefined){
                    createOrder.wxpay(user_id,currentOrder.orderId,currentOrder.orderMoney,openId)
                }else{
                    if(orderType["order_type_id"]==1){
                        if(userInfo['is_customer']==0){
                            createOrder.createOrder(createOrder.jiamengTrigger,user_id,openId,jiamengdataObj); 
                        }else{
                            var jiamengTrigger1="1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821B4DD2839BF310976BCA14260D66F3B32A8E6829FF4B8A7A4FF16252F26C71215D277C9FBB9714F9CF8C8AD6D266A4D66A69D751DB47EE1C62B4170723AAA108BA2C0AE9BE079838A046A8883B718678D80EE208FB86F632D29CD1E238B0D5A7E4270D757F7FD10F5516A2B900D610DE3B5F01A7FFE6E0624E452ABB49969D081EDC0B84EAFE0FE6195328BBF6070156C97A049359C0E7E31F04F075011AD62E2163CE4206BC9957DCC88475375A4ACCA6E58FF41AEC2864F27FE22D3C614CD6F7BD2FC7D2538EBF5";
                            var upgradeData=JSON.parse($.cookie('upgradeData')||'{}');
                            upgradeData[0]['USER_TYPE']=jiamengdataObj1[0]['USER_TYPE'];
                            upgradeData[0]['PRODUCTS']=jiamengdataObj1[0]['PRODUCTS'];
                            upgradeData[0]['ADDRESS_ID']=jiamengdataObj1[0]['ADDRESS_ID'];
                            createOrder.createOrder(jiamengTrigger1,user_id,openId,upgradeData);
                        }
                    }else if(orderType["order_type_id"]==2){
                         createOrder.createOrder(createOrder.shengjiTrigger,user_id,openId,shengjidataObj); 
                    }else if(orderType["order_type_id"]==3){
                         createOrder.createOrder(createOrder.chongxiaoTrigger,user_id,openId,chongxiaodataObj); 
                    }else if(orderType["order_type_id"]==4){
                         createOrder.createOrder(createOrder.lingshouTrigger,user_id,openId,lingshoudataObj); 
                    }else if(orderType["order_type_id"]==5){
                        if($("#verifyCode").val()==""){
                            alert("请输入验证码")
                        }else{
                            jifendataObj[0]["CAPTCHA_CODE"]=$("#verifyCode").val();
                            createOrder.createOrder(createOrder.jifenTrigger,user_id,openId,jifendataObj); 
                        }
                        
                    }else if(orderType["order_type_id"]==6){
                        createOrder.createOrder(createOrder.youhuiTrigger,user_id,openId,youhuidataObj); 
                    }
                }
                
              
            })
             $(".btn-verification").click(function(){
                TRT.sendVerifyCode($(this),userInfo.mobile)
            })

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
<script>
	
	
</script>