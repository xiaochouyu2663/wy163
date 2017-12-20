<?php
	session_start();
  //查询是否获取到session
	  if (!isset($_SESSION['uid'])) 
	  {	
        setcookie('urlValue','new-address.php'); 	  
		header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
     } 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" href="../font/iconfont.css" />
    <link rel="stylesheet" href="../css/new-address.css" />
    <script src="../js/common.js"></script>
    <script src="../js/jquery-1.11.0.js"></script>
    <title>新增地址</title>
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
            <p>新增地址</p>
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
    			<option value="选择省" >选择省</option>
    		</select>
    		<select name="cr" id="shi">
    			<option value="选择市" >选择市</option>
    		</select>
    		
    		<select name="" id="xian">
    			<option value="选择县" >选择县(区)</option>
    		</select>
    	</div>
    	<div class="name-aa">
    		<span>详细地址</span>
    		<input type="text" placeholder="例如街道名称，门牌号" id="add" class="qwer"/>
    	</div>
    	
    </div>
    <div class="default-aa">
    		<div class="defalt-text">设为默认</div>
    		<div class="default-icon-1">
    			<i class="iconfont icon-dui"></i>
    		</div>
    </div>
    <!--<a href="./Address-maintenance.html">-->
    	<div class="btn-aa">
    	确定
    	</div>
    <!--</a>-->
    </div>
</body>
</html>
<script src="../js/api.js"></script>
<script src="../js/new-address.js"></script>
<script>

        ;(function(){
            var user_id=<?php echo $_SESSION['uid']?>;
            var back = document.querySelector('.back');
            back.onclick=function(){
                window.history.go(-1);
            } 
            var is_defaulta=1;
            var b = true;
            var isd = document.querySelector('.default-icon-1');
            var isdd = document.querySelector('.icon-dui');
            isd.onclick=function(){
                if(b==true){
                    is_defaulta=0;
                    isdd.style.display="none";
                }else{
                    is_defaulta=1;
                    isdd.style.display="block";
                }
                b=!b;
            }
            var sheng = document.querySelector('#sheng');
            var shi = document.querySelector('#shi');
            var xian = document.querySelector('#xian');
            sheng.onchange=function(){
                address.getShi()
            }
            
            shi.onchange=function(){
                address.getXian()
            }
            address.getSheng();
            address.getSheng();
            var btn_aa = document.querySelector('.btn-aa');
            btn_aa.onclick=function(){
                address.addAddress(user_id,is_defaulta);
            }
            
        })();

</script>
