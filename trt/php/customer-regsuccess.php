<?php
    $code=$_GET["code"];
    $url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxfb57920a0612c8f0&secret=1e3b8c903a09d62510f596ed7f39b3ea&code=".$code."&grant_type=authorization_code";
    $oauth2=getJson($url);
    $openid=$oauth2["openid"];
    function getJson($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return json_decode($output, true);
    }
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
        <p>会员号：<span id="useralias"></span></p>
        <a href="home.php"><button type="button" class="primary-btn">购物</button></a>
        <button type="button" class="primary-btn recommend_customer">推荐好友</button>
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
                window.location.href="../php/getScanCode.php?level=0"
            })
        })
    </script>
</body>
</html>