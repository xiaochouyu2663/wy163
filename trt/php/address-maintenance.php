<?php
	session_start();
	 if (!isset($_SESSION['uid']))  
	  {		
	  	setcookie('urlValue','address-maintenance.php');  
		header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
	  } 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" href="../font/iconfont.css" />
    <link rel="stylesheet" href="../css/Address-maintenance.css" />
    <script src="../js/new-address.js"></script>
    <script src="../js/common.js"></script>
    <script src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <title>收货地址信息</title>
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
	            <p>收货地址信息</p>
	        </div>
	        <div class="edit"></div>
	    </div>
	    
	<div class="box">
		<!-- <div class="box1"></div> -->
		
		
	</div>
	<a href="./new-address.php">
    	<div class="xz">
    	新增地址
    	</div>
    	</a>
</body>

</html>
<script>
var user_id=<?php echo $_SESSION['uid']?>;
address_mainReceipt.Addressmaintenance(user_id);
var link = location.href;
TRT.wxInit(link);
$(".back").click(function(){
    wx.closeWindow();
}) 
</script>