<?php
    session_start();

    //查询是否获取到session
    if (!isset($_SESSION['uid']))
    {      
        setcookie('urlValue','news.php'); 
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9161959d6c078a3c&redirect_uri=http://wechat.trtjklife.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
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
    <link rel="stylesheet" href="../css/news.css" />
    <script src="../js/news.js"></script>
    <script src="../js/common.js"></script>
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <title>信息中心</title>
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
            <p>信息中心</p>
        </div>
        <div class="edit">
        	<p class="select-1">全选</p>
        	<p class="remove-select">取消</p>
            <p class="wrap-p"><i class="iconfont icon-bianji2 edit1"></i></p>
        </div>
    </div>
    <div class="box"></div>
     <div class="removal-message">
	    	<div class="read">已读</div>
	    	<div class="delete">删除</div>
	    </div>
        <script type="text/javascript">
            var user_id=<?php echo $user_id ?>;    
            news.getNews(user_id);

            $('.read').click(function(){
                var num=0;
                var oidStr='';
                
                $('.icon-dui').each(function(){
                    if($(this).css('display')=="block"){
                        num++;
                        oidStr+=$(this).parents('.Message-center').attr('data-oid')+',';
                        
                    };

                })
                oidStr=oidStr.slice(0,-1);
                var formData=[{"OIDS":oidStr}];
                news.readNews(user_id,formData)
            }) 
            $('.delete').click(function(){
                var num=0;
                var oidStr='';
                $('.icon-dui').each(function(){
                    if($(this).css('display')=="block"){
                        num++;
                        oidStr+=$(this).parents('.Message-center').attr('data-oid')+',';  
                    };

                })
                oidStr=oidStr.slice(0,-1);
                var formData=[{"OIDS":oidStr}];
                news.deleteNews(user_id,formData)
            }) 
            var link = location.href;
            TRT.wxInit(link);
            $(".back").click(function(){
                wx.closeWindow();
            })
            if($.cookie('isRead')==true){
                window.location.href = location.href+'?time='+((new Date()).getTime());
                alert('刷新')
                $.cookie('isRead',null,{expires:-1})
            }


            var isPageHide = false;   
            window.addEventListener('pageshow', function () {   
                if (isPageHide) {   
                  window.location.reload();   
                }   
              });   
            window.addEventListener('pagehide', function () {   
                isPageHide = true;   
            });
        </script>
</body>
</html>
