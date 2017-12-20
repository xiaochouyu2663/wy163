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
    <script type="text/javascript" src="../js/api.js"></script>
    
	<title>优惠顾客注册协议</title>
</head>
<body>
	<div class="header">
        <div class="back">
            
        </div>
        <div class="title">
            <p>优惠顾客注册协议</p>
        </div>
        <div class="edit">

            </div>
    </div>
    <div class="protocol-content">
    	
    </div>
    <script>
    	var dataObj={
    		trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E82122F536C94B8053284B1E782E7A212DF1CAAB5F9540DC3AC83B5CEE66A8D30EC5A1AB94A697F23C998454A4CE5C1EEAA53F6D2918E7C2CCD07EC803A3ECB69E89F3310D91E101EC4F945E58959B25B0FD98FB435CA4160BCD271FD3A5F9A3129BA1203D4AF09E216D434611CEC05D11AF"
    	}
        TRT.getProtocol(dataObj,$(".protocol-content"));
        $('.back').click(function(){
            window.history.go(-1)
        })
    </script>
</body>
</html>