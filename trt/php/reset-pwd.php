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
	<title>密码重置</title>
</head>
<body style="background: #f0f0f0">
	<div class="header" >
    <div class="back" >
            
        </div>
        <div class="title">
            <p>密码重置</p>
        </div>
        <div class="edit">
        </div>
    </div>
    <div class="reset-pwd">
        <div class="input-group">
            <label for="useralias">会员号</label>
            <input type="text" id="useralias" placeholder="请输入会员号">
        </div>
        <div class="input-group">
            <label for="telephone">手机号</label>
            <input type="text" id="telephone" placeholder="输入注册时手机号">
        </div>
        <div class="input-group">
            <label for="verifyCode">验证码</label>
            <input class="verify" id="verifyCode" type="text" placeholder="请输入验证码">
            <button class="verify" id="verifyBtn" type="button">获取验证码</button>
        </div>
        <button id="resetPwdBtn" class="primary-btn">重置密码</button>
    </div>
    <div class="dialog-wraper" style="display: none">
        <div class="dialog-content" style="display:block">
            新密码已发送至手机<br>
            请<a class="go_log" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect">登录</a>
        </div>
    </div>

    <script>
        $(function(){

            var userInfo=JSON.parse($.cookie("userInfo")||"{}");
            var useralias=$("#useralias").val();
            var mobile=$("#telephone").val();
            var captcha=$("#verifyCode").val();

            $("#useralias").change(function(){
                useralias=$("#useralias").val();
            })

            $("#telephone").change(function(){
                TRT.verifyMobile($(this).val())
            })

            $("#verifyCode").change(function(){
                captcha=$("#verifyCode").val();
            })
		  
            $("#resetPwdBtn").click(function(){
                var formData=[{
                    "USER_ALIAS":$("#useralias").val(),
                    "MOBILE":$("#telephone").val(),
                    "CAPTCHA":$("#verifyCode").val()
                }];
                if($("#useralias").val()!=""&&$("#telephone").val()!=""&&$("#verifyCode").val()!=""){
                    $.ajax({
                        url:"../controller/getContent.php",
                        type:"get",
                        dataType:"json",
                        timeout:10000,
                        data:{
                            trigger:"1DE0C2F5E4206484BE9BB984E5A8593279387A7531FE8E95CB70276A547FAA0A1BB5CA9546D1AB158AE6BC53272888C8892E45E6F36BCC6B3E590E30A5EA4340CD67D0E95C9AB80BBAEEB6467F76B3E49094E828699A95A09A3FBE431A5ABE799E8CC5C19CB2106D6211F3CC7FA923B95325E6E5D3A7BC565A091D33442A23CC9D75CC9BFD8CC327896E0E3BFAF347AF121CC2CFCD6F42B223ABBDA3F54AA7E2D0228195902501695D64CEE06B1F46EA",
                            user_id:0,
                            formData:JSON.stringify(formData)
                        },
                        success:function(data){
                            if(data.result=="SUCCESS"){
                                delete userInfo.pswd;
                                $.cookie("userInfo",JSON.stringify(userInfo));
                                $(".dialog-wraper").fadeIn(200)
                                
                            }else{
                                TRT.toast(data.result)
                            }
                        },
                        fail:function(err){
                            TRT.toast(err)
                        }
                    })
                }else{
                    TRT.toast("信息填写不完整")
                }
            })
            $("#verifyBtn").click(function(){
                if(TRT.verifyMobile($("#telephone").val())){
                    sendVerifyCode($(this),$("#useralias").val(),$("#telephone").val())
                }
                
            })
            $('.back').click(function(){
                window.history.go(-1)
            })
            function sendVerifyCode(btn,alias,tel){
                var formData=[{"USER_ALIAS":alias,"MOBILE":tel}];
                $.ajax({
                    url: "../controller/getContent.php",
                    type: 'get',
                    dataType: 'json',
                    timeout: 5000,
                    data:{
                        trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821DD7B18A78C0C28B353040FF2EC43EB69AD9E3E08BF194574DB26F21D938E2F0F0D20BC5A666D0632980455BAE7017B53445A77625F111DCA5D10F8C710B756AB986B160CC0457FE139CA8812FBAB06A2C03C21F30F825303A2D3526A4EE526525CF02545BCC4B5C9D7DF7FF03A6E57670F0B8C86A10F32C417F7321871FE33DA0F8B7C3A6F5000DF",
                        formData:JSON.stringify(formData)
                    },
                    success: function (data, status) {
                        if(data.result=="SENT"){
                            var time=60;
                            var t=setInterval(function(){
                                time--;
                                btn.text(time+"秒")
                                btn.prop("disabled",true)
                                if (time==0){
                                    clearInterval(t)
                                    btn.text("获取验证码")
                                    btn.prop("disabled",false)
                                }
                            },1000)
                           
                            TRT.toast("验证码已发送")
                        }else{
                            TRT.toast(data.result)
                        }
                    },
                    fail: function (err, status) {
                        TRT.toast(err)
                    }
                })
            }
        })
    </script>
</body>
</html>