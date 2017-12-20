
<?php
    session_start();
  //查询是否获取到session
       if (!isset($_SESSION['uid'])) 
      {       
        setcookie('urlValue','customer-upgrade.php');
         header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9161959d6c078a3c&redirect_uri=http://wechat.trtjklife.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
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
    <link rel="stylesheet" href="../css/iconfont.css">
    <script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/jquery.cookie.js"></script>
    <script type="text/javascript" src="../js/api.js"></script>
	<title>升级经销商</title>
</head>
<body>
	<div class="header">
    <div class="back" >
            
        </div>
        <div class="title">
            <p>升级经销商</p>
        </div>
        <div class="edit">
        
        </div>
    </div>
    <div class="reset-pwd" style="display: none;">
        <div class="input-group">
            <label for="useralias">会员号</label>
            <input type="text" id="useralias" placeholder="请输入会员号">
        </div>
        <div class="input-group">
            <label for="telephone">手机号</label>
            <input type="text" id="telephone" placeholder="输入注册时手机号">
        </div>
        <div class="input-group">
            <label for="name">姓名</label>
            <input type="text" id="name" placeholder="输入姓名">
        </div>
         <div class="input-group">
            <label for="IDCode">身份证号</label>
            <input type="text" id="IDCode" placeholder="输入身份证号">
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
        <button class="upgrate primary-btn">去升级</button>
    </div>
   <script>
       
      $(function(){
            var userInfo=JSON.parse($.cookie("userInfo")||"{}");
            var user_id=<?php echo $_SESSION['uid']?>;

            $.ajax({
                url: '../controller/getContent.php',
                async: true,
                data:{
                    trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E82106F8EFCC5716DFEB87CE963AA2EBC952768801E10C848306D32CA92029D399D85DCE628A8D1A334BF8BE7ABA258D70D2496010A67B447BD00CDE864B49ABDD7AB1D4B99FB70DAEE85D75C0B67C298F895963C581099354E520EACB7A420AE9F812E9FC3A4D3C7339052686BD02635C114EB31F37B151E23D8A52CF937A0873ED0ABE606F8AEC765548674F796594F5EC",
                    user_id:user_id
                },
                dataType: 'json',
                success: function(res) {
                    if(res.result=='SUCCESS'){
                        userInfo['is_customer']=res.is_customer;
                        userInfo['status']=res.status;
                        if(res.is_customer==1){
                            $('.reset-pwd').show()
                            $("#useralias").val(userInfo.alias).prop("readonly",true);
                            $("#telephone").val(userInfo.mobile).prop("readonly",true);
                            //分公司列表
                            TRT.getCompany()
                            $(".upgrate").click(function(){
                               TRT.upgradeDealer(userInfo.user_type,userInfo.products,user_id)
                            })
                        }else{
                            $('.reset-pwd').html('<p style="text-align:center">您已经是经销商</p>')
                            $('.reset-pwd').show()
                        }
                    }
                },
                error: function(err) {
                    console.log(err)
                }
            });
            

            
            
            //勾选阅读协议
            $("#checkbox-agree").change(function(){
                if($(this).is(":checked")){
                    $(".upgrate").prop("disabled",false)
                }else{
                    $(".upgrate").prop("disabled",true)
                }
            })
            if($("#checkbox-agree").is(":checked")){
                $(".upgrate").prop("disabled",false)
            }else{
                $(".upgrate").prop("disabled",true)
            }
            
            
            $('.back').click(function(){
                history.go(-1)
            })
        })
   </script>
</body>
</html>