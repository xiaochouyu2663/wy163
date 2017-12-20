<?php
session_start();
    $ip  = $_SERVER["REMOTE_ADDR"].' ';
    $mem = memory_get_usage();
    function mylog(){
        $args = func_get_args();//获得传入的所有参数的数组
        $numargs = func_num_args(); //参数的个数
        if ($numargs == 0) {
            $log = "";
        } elseif ($numargs == 1) {
            $log = $args[0];
        } else {
            $format = array_shift($args); //分割掉函数第一个元素,并且做返回值返回,'$user_address:%s'
            $log = vsprintf($format, $args); //把参数代入$format中,
        }
        $log = date("[Y/m/d H:i:s] ") . $log . PHP_EOL;//加上时间
        $file = '../log.txt';
        $fp = fopen($file, 'a');
        fwrite($fp, $log);
        fclose($fp);
        return true;
    }
mylog('###############################');
	mylog($ip, $mem);
	mylog($mem);
	
  //查询是否获取到session
	  if (!isset($_SESSION['uid'])) 
	  {	
		mylog('重定向到登陆');	  
		setcookie('urlValue','personal-info.php');
         header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9161959d6c078a3c&redirect_uri=http://wechat.trtjklife.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
	 }else{
		$uid=$_SESSION['uid'];
}
mylog('###############################');
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
	<title>个人完善信息</title>
    
</head>
<body>
	<div class="header">
        <div class="back">
            
        </div>
        <div class="title">
            <p>完善信息</p>
        </div>
        <div class="edit">

        </div>
    </div>
    <div class="personal-info">
			<div class="input-group">
    		<label for="user-alias">会员号</label> 
    		<input type="text" id="user-alias"  readonly="readonly" >
    	</div>
    	<!-- <div class="input-group">
    		<label for="IDCode">身份证号</label> 
    		<input type="text" id="IDCode" placeholder="请输入身份证号">
    	</div> -->
    	<!-- <div class="input-group">
    		<label for="company">所属分公司</label>
            <select name="" id="company">

            </select>
    	</div> -->
    	<!-- <div class="input-group">
    		<label for="telephone">手机号</label>
    		<input type="text"  id="telephone" placeholder="输入手机号" readonly>
    	</div>-->
    	<!-- <div class="input-group">
    		<label for="bankName">开户行</label>
    		<select name="bank" id="bankName">
    			
    		</select>
    	</div> -->
    	<!-- <div class="input-group">
    		<label for="bankCard">银行账号</label>
    		<input type="text" id="bankCard" placeholder="输入银行账号">
    	</div> -->
    	<!-- <div class="input-group">
    		<label for="occupation">职业</label>
    		<select name="" id="occupation">
    			
    		</select>
    	</div> -->
    	<!--<div class="input-group">
    		<label for="lorg">法人的单位名称</label>
    		<input type="text" id="lorg" placeholder="法人的单位名称">
    	</div>-->
<!--
		<div class="input-group">
    		<label >是否提供发票</label>
    		<div id="agree-option">
                <input type="checkbox" id="checkbox-agree" class="checkbox-agree">
                <label for="checkbox-agree"></label>
            </div>
    	</div>
-->
    	<!-- <div class="input-group">
    		<label for="email">邮箱</label>
    		<input type="text" id="email" placeholder="请输入邮箱">
    	</div>
    	<div class="input-group">
    		<label for="phone">固话</label>
    		<input type="text" id="phone" placeholder="请输入固话">
    	</div> -->
    	<div class="file-upload">
    		<a href="javascript:void(0)" class="file-upload-option">
    			点击选择
    			
    		</a>
    		<span class="file-upload-description">上传身份证照片（正）</span>
    	</div>
    	<div class="file-upload">
    		<a href="javascript:void(0)" class="file-upload-option">
    			点击选择
    			
    		</a>
    		<span class="file-upload-description">上传身份证照片（反）</span>
    	</div>
    	<div class="file-upload">
    		<a href="javascript:void(0)" class="file-upload-option">
    			点击选择
    			
    		</a>
    		<span class="file-upload-description">合同签字页复印件</span>
    	</div>
    	<div class="file-upload">
    		<a href="javascript:void(0)" class="file-upload-option">
    			点击选择
    			
    		</a>
    		<span class="file-upload-description">营业执照复印件（可填）</span>
    	</div>
        <div class="file-upload">
            <a href="javascript:void(0)" class="file-upload-option">
                点击选择
                
            </a>
            <span class="file-upload-description">股东出资证明（可填）</span>
        </div>
    	<button class="submit primary-btn">确定</button>
    </div>

     <div class="dialog-wraper" >
        <div class="dialog-content state" >
            信息提交成功，请等待审核。审核成功前可进行修改<br>
            <a href="javascript:void(0)" class="back-wx">请点击返回微信页面</a>
        </div>
        <div class="dialog-content telephone-verify">

           <p class="show-tel"></p>
           <div class="">
                <input type="number" id="verifyCode" placeholder="请输入验证码">
                <button type="button" id="verifyBtn" class="verify">发送验证码</button>
           </div>
           <button type="button" class="confirm">确定</button>
        </div>
    </div>

    <script>
        $(function(){
            var userInfo=JSON.parse($.cookie("userInfo")||"{}");
            var user_id=<?php echo $uid ?>;
            var urlValue=$.cookie("urlValue");		
            var parent=1100010;    //是固定值
            $('#user-alias').val(userInfo.alias);
            var link = location.href;
            TRT.wxInit(link);
            TRT.getBank(parent,$("#bankName"))
            TRT.getOccupation($("#occupation"))
            TRT.getCompany("1100050",$("#company"))
            setTimeout(function(){
                TRT.getPersonInfo(user_id,$("#IDCode"),$("#company"))
            }, 0)


            //手机输入弹出验证码弹框
            $("#telephone").keyup(function(){
                if($(this).val().length==11){
                    if(TRT.verifyMobile($(this).val())){
                        $(".dialog-wraper").fadeIn(200).find(".telephone-verify").show().find(".show-tel").html($("#telephone").val())
                        $("#verifyBtn").click(function(){
                            TRT.sendVerifyCode($(this),$("#telephone").val())
                        })
                        $(".confirm").click(function(){
                            TRT.verifyCode=$("#verifyCode").val()
                            $(".dialog-wraper").hide();
                        })
                    } 
                }
            })
            $("#IDCode").keyup(function(){
                TRT.isCardNo($(this).val())
            })
            $(".submit").click(function(){
               if($(".personal-info").attr("data-upload")=="1"){
                    TRT.toast('照片正在上传，请稍后')
                }else{
                     TRT.updatePersonInfo($(this),user_id)
                } 
               
            })
           
           $(".file-upload-option").each(function(index){
                
                $(this).click(function(event){
                    if($(this).parent().attr('data-status')==1){
                        TRT.toast('审核已通过，不能重复上传')
                    }else{
                        if($(this).parents(".personal-info").attr("data-upload")=="1"){
                            TRT.toast('照片正在上传，请稍后')
                        }else{
                             TRT.camera($(this),user_id,"person"+index);
                        } 
                    } 
                })
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