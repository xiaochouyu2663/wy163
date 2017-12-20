<?php
    session_start();
    //查询是否获取到session
    if (!isset($_SESSION['uid'])){     
        setcookie('urlValue','contact-info.php'); 
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
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<title>完善联系人信息</title>
</head>
<body>
	<div class="header">
        <div class="back">
            
        </div>
        <div class="title">
            <p>完善联系人信息</p>
        </div>
        <div class="edit">
        </div>
    </div>
    <div class="customer-info">
    	<div class="input-group">
    		<label for="name">姓名</label>
    		<input type="text" id="name" placeholder="请输入姓名">
    	</div>
    	<div class="input-group">
    		<label for="IDCode">身份证号</label>
    		<input type="text" id="IDCode" placeholder="请输入身份证号">
    	</div>
    	<div class="input-group">
    		<label for="telephone">手机号</label>
    		<input type="text" id="telephone" placeholder="请输入手机号">
    	</div>
    	<div class="input-group">
            <label for="verifyCode">验证码</label>
            <input class="verify" id="verifyCode" type="text" placeholder="请输入验证码">
            <button class="verify" type="button" id="verifyBtn">获取验证码</button>
        </div>
    	<div class="file-upload">
    		<a href="javascript:void(0)" class="file-upload-option" >
    			点击上传结婚证照片
    		</a>
           
    	</div>
    	<button class="submit primary-btn">确定</button>
    </div>
    <div class="dialog-wraper" style="display: none">
        <div class="dialog-content" style="display: block">
            信息提交成功，请等待审核。审核成功前可进行修改<br>
            <a href="javascript:void(0)" class="back-wx">请点击返回微信页面</a>
        </div>
    </div>
    <script>
        $(function(){

            var link = location.href;
            var user_id=<?php echo $user_id ?>; 
            TRT.wxInit(link);
            $(".submit").click(function(){
                if($(".file-upload-option").parent().attr('data-status')==1){
                    TRT.toast('审核已通过，不能重复上传')
                }else{
                    TRT.updateInfo($(this),user_id)
                }
                
            })          
            
            //拍照功能
            $(".file-upload-option").click(function(){
                if($(this).parent().attr('data-status')==1){
                    TRT.toast('审核已通过，不能重复上传')
                }else{
                    TRT.camera($(this),user_id,"wedding");
                }
               
            })
            TRT.getContactInfo(user_id)
            $("#verifyBtn").click(function(){
                if(TRT.verifyMobile($("#telephone").val())){
                    TRT.sendVerifyCode($(this),$("#telephone").val())
                }
                
            })
            $(".back-wx").click(function(){
                wx.closeWindow();
            })
            $(".back").click(function(){
                wx.closeWindow();
            }) 
        })

    </script>
</body>
</html>