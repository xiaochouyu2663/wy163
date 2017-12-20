<?php
    session_start();
    //查询是否获取到session
      if (!isset($_SESSION['uid'])) 
      {    
      	setcookie('urlValue','getScanCode.php');   
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
      }else{
        $user_id=$_SESSION['uid'];
     } 
?>
<!doctype html>
<html>

	<head>
		<meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <meta name="renderer" content="webkit">
	    <link rel="stylesheet" href="../css/reset.css">
	    <link rel="stylesheet" href="../css/style.css">
	    <link rel="stylesheet" href="../css/alert.css">
	    <link rel="stylesheet" href="../css/iconfont.css">
	    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
	    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
	    <script type="text/javascript" src="../js/alert.js"></script>
	    <script type="text/javascript" src="../js/common.js"></script>
	    <script type="text/javascript" src="../js/api.js"></script>
	    <script type="text/javascript" src="../js/jquery.qrcode.min.js"></script>
	    <script type="text/javascript" src="../js/getScanCode.js"></script>
    	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
		<title>扫描二维码</title>
		<style>
			body{
				width:100%;
				height:100%;
				background:rgba(0,0,0,0.8);
			}
			.scode_wrapper{
				
				width:200px;
				height:auto;
				padding:20px 20px 10px;
				position:absolute;
				background:#fff;
				top:50%;
				left:50%;
				transform:translate(-50%,-50%);
				text-align: center;
				border-radius: 5px;
			}
			.scode_wrapper p{
				font-size:14px;
				margin-top:10px;
			}
			.scode_wrapper #convertedImg{
				
			}
			.scode_wrapper .btn{
				font-size: 0.32rem;
			    color: #fff;
			    width: 2.6rem;
			    height: 0.8rem;
			    display: block;
			    margin: 0.4rem auto;
			    background: #00c7f2;
			    border: none;
			    border-radius: 0.1rem;
			}
		</style>
	</head>

	<body>	
		
	<div class="scode_wrapper wrapper1">
		<div id="qrcode" style="display: none"></div>
		<div id="convertedImg"></div>
		<p>长按转发二维码邀请好友</p>
		<p id="code_time"></p>
	</div>
	<div class="scode_wrapper wrapper2">
		<p>抱歉，您是优惠顾客，不能推荐经销商</p>
		<button class="btn upgrade_dealer">升级经销商</button>
		<button class="btn back_wx">返回微信</button>
	</div>
	<div class="scode_wrapper wrapper3">
		<p>您还未激活</p>
		<button class="btn join">去激活</button>
	</div>
	<script type="text/javascript">
		$('.scode_wrapper').hide()
		var userInfo=JSON.parse($.cookie("userInfo")||"{}");
        var user_id=<?php echo $user_id ?>;	
        var level=window.location.search.slice(-1);
        var code="";
        var share_link = "";

        getScan(user_id);
        
	</script>
	</body>

</html>