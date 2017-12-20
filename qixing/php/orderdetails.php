<?php
    session_start();
    //查询是否获取到session
      if (!isset($_SESSION['uid'])) 
      {  
        setcookie('urlValue','order.php');     
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
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" type="text/css" href="../css/details.css">
    <title>订单详情</title>
    <script src="../js/common.js"></script>
    <style>
        body {
            line-height: 1.3;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="back">

        </div>
        <div class="title">
            <p>订单详情</p>
        </div>
        <div class="edit">

        </div>
    </div>
    <div class="details_container">
        <div class="details_box">
            <div class="details_list">
                <p class="details_list_title">
                    <span>订单号&nbsp;:&nbsp;</span>
                    <span></span>
                </p>
                <!-- <div class="details_list_main">
                    <div class="details_img">

                    </div>
                    <div class="details_shopname">
                        <p></p>
                    </div>
                    <div class="details_price">
                        <p class="details_actual_price">
                            <span>￥</span>
                            <span></span>
                        </p>
                        <p class="details_delete_price">
                            <s>
                                <span>￥</span>
                                <span></span>
                            </s>
                        </p>
                        <p class="details_sum">
                            <span>x</span>
                            <span>1</span>
                        </p>
                    </div>

                </div> -->
                
                <div class="details_list_footer">
                    <div class="details_list_discount">
                        <p>优惠</p>
                        <p class="details_list_fr">
                            <span>￥</span>
                            <span></span>
                        </p>
                    </div>
                    <div class="details_list_freight">
                        <p>运费</p>
                        <p class="details_list_fr">
                            <span>￥</span>
                            <span></span>
                        </p>
                    </div>
                    <div class="details_list_pay">
                        <p>实付款</p>
                        <p class="pay_money">
                            <span>￥</span>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="details_list_time">
                <div class="details_time li_time1">
                    <span>创建时间&nbsp;:&nbsp;</span>
                    <span></span>
                </div>
                <div class="details_time li_time2">
                    <span>支付方式&nbsp;:&nbsp;</span>
                    <span></span>
                </div>
                <div class="details_time li_time3">
                    <span>购&nbsp;&nbsp;买&nbsp;人&nbsp;:&nbsp;</span>
                    <span></span>
                </div>
                <div class="details_time li_time4">
                    <span>支付状态&nbsp;:&nbsp;</span>
                    <span></span>
                </div>
            </div>
            <div class="details_list_time">
                <div class="details_time li_time5">
                    <span>收&nbsp;&nbsp;货&nbsp;人&nbsp;:&nbsp;</span>
                    <span class="address"></span>
                </div>
                <div class="details_time li_time6">
                    <span>联系方式&nbsp;:&nbsp;</span>
                    <span class="address"></span>
                </div>
                <div class="details_time li_time7">
                    <span>收货地址&nbsp;:&nbsp;</span>
                    <span class="address"></span>
                </div>
                <div class="details_time li_time8">
                    <span>物流状态&nbsp;:&nbsp;</span>
                    <span class="address"></span>
                </div>
            </div>
        </div>
    </div>

</body>
<script src="../js/jquery-1.11.0.js"></script>
<script src="../js/jquery.cookie.js"></script>
<script src="../js/http.js"></script>
<script>				
	$(function(){
    	var orderHeadUrl = '1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB03A0F907285BF231385E8762FBCE1A343C3B5E879B5D860D2A653E6591AC499B5CAC7979A76E17933E079571537B236D06C4C1B032C01E4451937C08E0EE9214DF0D829EE6BFB719778FAC9241092CD370428C361A4E4BC12A9AF88993C1762293086EA049F58ABE018572EF655E943C8618BD82BB480503B43AEDD523241A3E63ED963D35B31470E31F501D39CAC93B9';
    	var aa = '1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB055F724513722BCF2637E950B31264A4C6B75AEF1C09BB7611358B0B3F0BFC26428E741FBC71C82924DC92C230BBE26E812BB49BA6A166879B9641CD5B53DA46CEE20637AC028CFBAFD7AC3F4CC581C14FBADFBB9FFA9D4DC864E4AC8E332B6BDF4D46C1444A515A8CCD43EE8A80F2298E7494E4BBC045B16CBA2D7A39BAD053CFC104D89BDE3CF5CFD38A73DE232735B2809637BBA787608A85E7FA38C68B50AA9860C24ADCBE888010ADC327FE3D79F17649D247A673BBB77F6B2A1A20D3202F4681E05F5868D502FD6B7FCB2D6586A3A8DABB1189B18F6262013C1B444C059B4102626A131217D';
		var user_id=<?php echo $user_id ?>;   
		var oid = location.search.slice(6);   //订单id
		$.ajax({
			type: 'get',
        	url: "../controller/getContent.php",
        	dataType: 'json',
        	data: {
        		"trigger":orderHeadUrl,
            	"user_id": user_id,
            	"oid":oid
        	},
        	success: function(ags) {
        		var data = ags.data;
           		$('.details_list_title span').eq(1).html(data[0].ORDER_NUMBER);    //订单号
           		$('.details_list_discount .details_list_fr span').eq(1).html(0);       //优惠
                $('.details_list_freight .details_list_fr span').eq(1).html(data[0].FREIGHT_FEE)   //运费
           		$('.pay_money span').eq(1).html(data[0].REAL_AMOUNT);
           		
                $('.li_time1 span').eq(1).html(data[0].CREATION_TIME.replace("T"," "));
           		if(data[0].PAYMENT_METHOD==5){
           			$('.li_time2 span').eq(1).html('微信');
           		}else{
           			$('.li_time2 span').eq(1).html('默认');
           		}
           		$('.li_time3 span').eq(1).html(data[0].NAME);           //购买人
           		if(data[0].PAYMENT_STATUS==1){
           			$('.li_time4 span').eq(1).html('已支付');
           		}else{
           			$('.li_time4 span').eq(1).html('未支付');
           		}
           		$('.li_time5 span').eq(1).html(data[0].CONSIGNEE);
           		$('.li_time6 span').eq(1).html(data[0].CONSIGNEE_MOBILE);
           		$('.li_time7 span').eq(1).html(data[0].PROVINCE_DESC+data[0].CITY_DESC+data[0].XIAN_DESC+data[0].ADDRESS);
                switch(data[0].SHIPMENT_STATUS){
                    case 0:
                        $('.li_time8 span').eq(1).html("未发货");
                    break;
                    case 1:
                        $('.li_time8 span').eq(1).html("已发货");
                    break;
                    case 2:
                        $('.li_time8 span').eq(1).html("部分发货");
                    break;
                    default:
                    break;
                }
           			
           	}
		})
		
		$.ajax({
			type: 'get',
        	url: "../controller/getContent.php",
        	dataType: 'json',
        	data: {
        		"trigger":aa,
            	"user_id": user_id,
            	"oid":oid
        	},
        	success: function(ags) {
            	var data = ags.data;
                $(data).each(function(){
                    $details_main=$('<div class="details_list_main">'
                    +'<div class="details_img">'
                    +'<img src="'+this.PREVIEW_IMAGE+'" />'
                    +'</div>'
                    +'<div class="details_shopname">'
                        +'<p></p>'
                    +'</div>'
                    +'<div class="details_price">'
                        +'<p class="details_actual_price">'
                            +'<span>￥</span>'
                            +'<span>'+this.PRICE+'</span>'
                        +'</p>'
                        +'<p class="details_delete_price">'
                            +'<s>'
                                +'<span>￥</span>'
                                +'<span>'+this.PRICE+'</span>'
                            +'</s>'
                        +'</p>'
                        +'<p class="details_sum">'
                            +'<span>x</span>'
                            +'<span>'+this.QTY+'</span>'
                        +'</p>'
                    +'</div>'
                +'</div>');
                    $('.details_list_title').after($details_main);
                })
            	$('.details_shopname p').html(data[0].PRODUCT_NAME);	
           	}
		})
         $('.back').click(function(){
            window.history.go(-1)
        })
	})
</script>

</html>