<?php
    include "../controller/curl.php";
    $appid = 'wx9161959d6c078a3c';
    $APPSECRET = '3850b193d664408ff1924beba73c854a';
    $access_token=getToken($appid,$APPSECRET);
    $code=$_GET["code"];
    $url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx9161959d6c078a3c&secret=3850b193d664408ff1924beba73c854a&code=".$code."&grant_type=authorization_code";
    $oauth2=getJson($url);            //获取用户基本信息
    $openid=$oauth2["openid"];
    batchMemTags($openid,$access_token);
    getMember($access_token);
    getMemTags($openid,$access_token);
?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/iconfont.css">
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<title>注册成功</title>
</head>
<body>
	<div class="header">
        <div class="title">
            <p>注册成功</p>
        </div>
    </div>
    <div class="reg-success">
    	<p>注册成功</p>
        <p>会员号：<span id="useralias">A00000</span></p>
        <a href="home.php"><button type="button" class="primary-btn">购物</button></a>
        <button type="button" class="primary-btn recommend_customer">推荐优惠顾客</button>
        <button type="button" class="primary-btn recommend_dealer">推荐经销商</button>
        <button type="button" class="back-wx primary-btn">返回微信</button>
    </div>
     <script>
        $(function(){
            var userInfo=JSON.parse($.cookie("userInfo")||"{}"); 
            userInfo.openid='<?php echo $openid ?>';
            $.cookie('userInfo',JSON.stringify(userInfo))
            var userInfo=JSON.parse($.cookie("userInfo")||"{}"); 
            $("#useralias").html(userInfo.alias);
            var link = location.href;
            TRT.wxInit(link); 
            $(".back-wx").click(function(){
                wx.closeWindow();
            })
            $(".recommend_customer").click(function(){
                window.location.href="http://wechat.trtjklife.com/php/getScanCode.php?level=0"
            })
            $(".recommend_dealer").click(function(){
                window.location.href="http://wechat.trtjklife.com/php/getScanCode.php?level=1"
            })
        })
    </script>
</body>
</html>