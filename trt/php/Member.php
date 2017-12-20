<?php
    session_start();
    $user_id = '';
    if (!isset($_SESSION['uid']))  
    {     
        setcookie('urlValue','Member.php');  
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
    } else {
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
    <link rel="stylesheet" href="../css/Member.css" />
    <script src="../js/ajax.js"></script>
    <script src="../js/news.js"></script>
    <script src="../js/common.js"></script>
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <title>会员信息</title>
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
            <p>会员信息</p>
        </div>
        <div class="edit">
        </div>
    </div>
    
    <div class="box">
	    <div class="member-information">
	    	<div class="information">
	    		<div class="name-1 common">姓名</div>
	    		<div class="member-1 common">会员号</div>
	    		<div class="cumulative-1 common">购物累计PV</div>
	    	</div>
	    	
	    
	    	
	    </div>
    </div>
    <script>
        var link = location.href;
        TRT.wxInit(link);
        $(".back").click(function(){
            wx.closeWindow();
        })
        var user_id = <?php echo $user_id?>;
        member.getMember(user_id);
    </script>
</body>

</html>