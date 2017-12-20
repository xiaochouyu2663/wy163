<?php
    session_start();

    //查询是否获取到session
    if (!isset($_SESSION['uid']))
    {   
       setCookie("parentUrl","read.php"); 
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
    <link rel="stylesheet" href="../font/iconfont.css" />
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" href="../css/read.css" />
    <script src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script src="../js/news.js"></script>
    <script src="../js/common.js"></script>
    <title>系统消息</title>
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
            <p>系统消息</p>
        </div>
        <div class="edit">
        </div>
    </div>
    <div class="box" style="">
	    <div class="content">
	    	<h3>尊敬的会员：</h3>
	    	<p class="text"></p>
	    </div>
	    <div class="company">
	    	<p>同仁堂有限公司</p>
	    	<p class="time"></p>
	    </div>
    </div>
    <script type="text/javascript">

        var user_id=<?php echo $user_id ?>; 
        var queryString=location.search;
        news.getSingleNew(queryString.slice(6),user_id);

        $('.back').click(function(){
            window.history.go(-1) 
        })
        var formData=[{'OIDS':location.search.slice(6)}]
        readNews(user_id,formData)
        function readNews(user_id,formData){
            $.ajax({
                url:news.http,
                type:"get",
                dataType:"json",
                data:{
                    trigger:'1DE0C2F5E42064849326890134DDF236F8D32087B3DE4E37EA403266E79DB104E60647414B892CC4D660E09E8B827DA45CDF9A734ED2F2745E2056DAAA4914CDFFA93E6F59FE2AE21B73E5AACA229C99D72F6884630745977E714DC25B3BB685903818BC56A57B0CB5330329B1C3896C66E67B2246427A66981756CEB3F408DB48F5FCE3DAE697FF54EBBEEBFD210CB3F8C7CBF1123A7FBD517EF51456428550',
                    user_id:user_id,
                    formData:JSON.stringify(formData)
                },
                success:function(data){
                    if(data.result=="SUCCESS"){
                        $.cookie("isRead",true)
                    }
                    
                }
            })
        }
    </script>
   
</body>
</html>

