<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>    
	<title>经销商注册</title>
</head>
<body>
	<div class="header">
       <div class="back">
            
        </div>
        <div class="title">
            <p>注册</p>
        </div>
        <div class="edit">
        </div>
    </div>
    <div class="dealer-reg">
    	<div class="input-group">
    		<label for="name">推荐人姓名</label>
    		<input id="refree-name" type="text" placeholder="推荐人姓名">
    	</div>
    	<div class="input-group">
    		<label for="member-numb">会员号</label>
    		<input id="member-numb" type="text" placeholder="推荐人会员号">
    	</div>
    	<div class="input-group">
    		<label for="name">姓名</label>
    		<input id="name" type="text" placeholder="请输入姓名">
    	</div>
    	<div class="input-group">
    		<label for="telephone">手机号</label>
    		<input type="text"  id="telephone" placeholder="请输入手机号">
    	</div>
    	<div class="input-group">
    		<label for="verifyCode">验证码</label>
    		<input class="verify"  type="text" id="verifyCode" placeholder="请输入验证码">
    		<button class="verify" type="button" id="verifyBtn">获取验证码</button>
    	</div>
    	<div class="input-group">
    		<label for="IDCode">身份证号</label>
    		<input id="IDCode" type="text" placeholder="请输入身份证号">
    	</div>
    	<div class="input-group">
    		<label for="pswd">登录密码</label>
    		<input id="pswd" type="password" placeholder="请设置登录密码">
    	</div>
    	<div class="input-group">
    		<label for="pswd2">确认密码</label>
    		<input id="pswd2" type="password" placeholder="请再次输入登录密码">
    	</div>
    	<div class="input-group">
    		<label for="company">分公司</label>
    		<select name="" id="company" >
    			
    		</select>
    	</div>
    	<div class="read-protocol">
    		<div class="agree-option">
    			<input type="checkbox" id="checkbox-agree" class="checkbox-agree">
    			<label for="checkbox-agree"></label>
    		</div>
    		
    		<span class="agree-content">
    			我已阅读并同意
    			<a href="protocol.php" class="protocol-content">《经销商注册协议》</a>
    		</span>
    	</div>
    	
        <button class="submit primary-btn">注&ensp;&ensp;册</button>
        
    </div>
    <div class="dialog-wraper" style="display: none">
        <div class="dialog-content" style="display: block"> 
            <p></p>
            <a href="javascript:void(0)" class="back-wx">确定</a>
        </div>
        
    </div>
    <script>
       
        $(function(){
            //根据邀请码带出邀请人信息
            var userInfo=JSON.parse($.cookie("userInfo")||"{}");
            if(location.search.indexOf('&')==-1){
                var code=window.location.search.slice(6);
            }else{
                var code=window.location.search.slice(6,location.search.indexOf('&'));
            }
            TRT.getSpread(code,$("#refree-name"),$("#member-numb"));
            TRT.getCompany();
            var link=window.location.href;
            TRT.wxInit(link);
            $(".submit").click(function(){
                TRT.dealerReg(code)
            })

            //发送验证码
             $("#verifyBtn").click(function(){
                if(TRT.verifyMobile($("#telephone").val())){
                    TRT.sendVerifyCode($(this),$("#telephone").val());
                }
                
            })

            $("#IDCode").change(function(){
                TRT.isCardNo($(this).val())
            })
           

            //勾选阅读协议
            $("#checkbox-agree").change(function(){
                if($(this).is(":checked")){
                    $(".submit").prop("disabled",false)
                }else{
                    $(".submit").prop("disabled",true)
                }
            })
            if($("#checkbox-agree").is(":checked")){
                $(".submit").prop("disabled",false)
            }else{
                $(".submit").prop("disabled",true)
            }
            $(".back-wx").click(function(){
                wx.closeWindow();
            })
        })
    </script>
</body>
</html>