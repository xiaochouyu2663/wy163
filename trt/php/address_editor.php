<?php
    session_start();
    //查询是否获取到session
      if (!isset($_SESSION['uid']))
      {      
        setcookie('urlValue','address-editor.php'); 
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
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
    <link rel="stylesheet" href="../font/iconfont.css" />
    <link rel="stylesheet" href="../css/new-address.css" />
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script src="../js/common.js"></script>
    <script src="../js/api.js"></script>
    <title>编辑地址</title>
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
            <p>编辑地址</p>
        </div>
        <div class="edit">
        
        </div>
    </div>
    
    <div class="box">
    <div class="form-fields">
    	<div class="name-aa">
    		<span>姓名</span>
    		<input type="text" placeholder="请输入姓名" class="user-name-c"/>
    	</div>
    	
    	<div class="name-aa">
    		<span>手机号</span>
    		<input type="number" placeholder="请输入手机号" class="mobile-num"/>
    	</div>
    	<div class="select-aa">
    		<select name="pr" id="sheng">
    		</select>
    		<select name="cr" id="shi">
    		</select>
    		
    		<select name="" id="xian">
    		</select>
    	</div>
    	<div class="name-aa">
    		<span>详细地址</span>
    		<input type="text" placeholder="例如街道名称，门牌号" id="add"/>
    	</div>
    	
    </div>
    <div class="default-aa">
    		<div class="defalt-text">设为默认</div>
    		<div class="default-icon-1">
    			<i class="iconfont icon-dui" style="display: none"></i>
    		</div>
    </div>
    	<div class="btn-aa">
    	确定
    	</div>
    </div>
</body>
<script src="../js/new-address.js"></script>
<script>
    var user_id=<?php echo $_SESSION['uid']?>;
    var addressId=location.search.slice(6);
    address_editor.getSingleAddress(user_id,addressId);
    $("#sheng").change(function(){
        address_editor.getCity($("#sheng").val())
        
    })
    $("#shi").change(function(){
        address_editor.getXian($("#shi").val())
    })
    $(".default-icon-1").click(function(){
        if(address_editor.is_default==0){
            $(".icon-dui").show()
            address_editor.is_default=1;
        }else{
            $(".icon-dui").hide()
            address_editor.is_default=0;
        }
    })
    $(".btn-aa").click(function(){

        address_editor.updataAddress(user_id,addressId)
    })
    $('.back').click(function(){
            window.history.go(-1)
        })
</script>
</html>