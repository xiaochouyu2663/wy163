<?php

    $openid=isset($_COOKIE["openid"])?$_COOKIE["openid"]:"";
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
    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
	<title>登录</title>
</head>
<body style="background: #f0f0f0">
	<div class="header">
        <div class="title" style="color:#fff">
            <p>登录</p>
        </div>
    </div>
    <div class="login-wraper">
    	<div class="input-group"> 
            <label for="username">
                <span class="iconfont icon-yonghu"></span>
            </label>
            <input type="text" id="useralias" placeholder="用户名">
        </div>
        <div class="input-group">
            <label for="password">
                <span class="iconfont icon-mima"></span>
            </label>
            <input type="password" id="password" placeholder="登录密码">
        </div>
       <div class="pwd-option">
            <div class="agree-option">
                <input type="checkbox" id="remember" checked class="checkbox-agree">
                <label for="remember"></label>
                 <span class="">
                    记住密码
                </span>
            </div>
           
            <a href="reset-pwd.php" class="reset-pwd">重置密码</a>
        </div>
    	<button class="login primary-btn">登&ensp;&ensp;录</button>
        
    </div>
    <script>
        var openid='<?php echo htmlspecialchars($openid) ?>';
        var userInfo=JSON.parse($.cookie("userInfo")||"{}");
        var urlValue=$.cookie("urlValue");  
        $("#useralias").val(userInfo.alias);  
        if(userInfo.pswd){
            $("#password").val(userInfo.pswd)
        }
        $("#remember").change(function(){
            if($(this).is(":checked")){
                userInfo.pswd=$("#password").val();
            }else{
                delete userInfo.pswd;
            }
        })
        $("#useralias").focus(function(){
            $(this).addClass("active").prev().children().css("color","#00c7f2").parents(".input-group").css("border-color","#00c7f2")
        }).blur(function(){
             $(this).removeClass("active").prev().children().css("color","#acabab").parents(".input-group").css("border-color","#acabab")
        })
        $("#password").focus(function(){
            $(this).addClass("active").prev().children().css("color","#00c7f2").parents(".input-group").css("border-color","#00c7f2")
        }).blur(function(){
             $(this).removeClass("active").prev().children().css("color","#acabab").parents(".input-group").css("border-color","#acabab")
        })
        $(".login").click(function(){
        if($("#useralias").val()==""||$("#password").val()==""){
            TRT.toast("请输入用户名或密码")
        }else{
            $(".login").prop("disabled",true);
            TRT.loginFn(userInfo,openid)
        }
     })
     </script>
    
</body>
</html>