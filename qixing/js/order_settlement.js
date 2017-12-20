var productInfo=JSON.parse($.cookie("productInfo")||"{}");   //获取产品信息cookie
var orderType=JSON.parse($.cookie("orderType")||"{}");   //获取订单类型cookie
var userType=JSON.parse($.cookie("userType")||"{}");   //获取订单类型cookie
var allPrice=0;
var allPV=0;
var productStr="";

if(orderType['order_type_id']==5){   //order_type_id==5 是积分订单和其他订单结算方式不一样
	$(".verification").show()
	if(productInfo.length>0){
		$(productInfo).each(function(){
		    allPrice+=$(this)[0].allPrice
		    allPV+=$(this)[0].allPV
		    $(".order-type .type").html(orderType["order_type_name"])
		    $(".order-type .allPrice").parent().hide()
		    $(".order-type .allPV").html(allPV)
		    $prodiv=$('<div class="commodity-name">'
		            +'<div class="commodity-name-title">'
		                +$(this)[0].name
		            +'</div>'
		            +'<div class="unit-price">'
		               +$(this)[0].price
		            +'</div>'
		            +'<div class="commodity-number">'
		                +$(this)[0].num
		            +'</div>'
		        +'</div>')
		    $(".commodity-box").append($prodiv)
		    productStr+=$(this)[0].id+'`'+$(this)[0].num+'~';
	    
		})
		productStr=productStr.slice(0,-1);
	}
	
}else{
	$(".verification").hide()
	if(productInfo.length>0){
		$(productInfo).each(function(){
		    allPrice+=$(this)[0].allPrice
		    allPV+=$(this)[0].allPV
		    $(".order-type .type").html(orderType["order_type_name"])
		    $(".order-type .allPrice").html(allPrice)
		    $(".order-type .allPV").html(allPV)
		    $prodiv=$('<div class="commodity-name">'
		            +'<div class="commodity-name-title">'
		                +$(this)[0].name
		            +'</div>'
		            +'<div class="unit-price">'
		               +$(this)[0].price
		            +'</div>'
		            +'<div class="commodity-number">'
		                +$(this)[0].num
		            +'</div>'
		        +'</div>')
		    $(".commodity-box").append($prodiv)
		    productStr+=$(this)[0].id+'`'+$(this)[0].num+'~';
		})

		productStr=productStr.slice(0,-1);
		
	}
	
}
var createOrder={
	//运费trigger
	freightTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E82161BD7CB0D888EE4A5DC98E185943E8FC4B368B33AABFD61D7203A73836B495F1A14FBA23B2DE1744A6F22BC73C515DB167E9D9886AACCD41720F4CC4AA9E5DB221B8BB51899251712001A5FF0B6598E1EA8265DCD15EEC64B1BD75653E761086D0B0E615E7BD2CC421662986975C0354FDA31EBFC24426A9E2A84066536DCC1CA2F1C5C7DA3F4892A9A10E24D81C559733F9A4979E597678A5D8C82A66F1318555008E3EDFB7FAB23D3EB37DFAF561AE",
	addressTigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C23691EC0B9D99CC500296E8E63812F039AF9442B35772BF454BE55FB1839BE2D290077A379D2372C237B643061387CC424059F4AEC504BBEB5227DB987DB90A0C098148ED2A4DC918AB87417B4B1E158844DD6D2649D527B19E8F0000E7D75D3C15",
	lingshouTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8215FE2337AD97615F8A449B98FFD4B5DE2543FE9B902483E873426D5AE6769F2E623A81D699D40C133873BC95F0069CC7953E3700D3ADE2B955F156B389EF49A004F7BE4796CF5C3CCF86B39C73D271E9730E7F1AF58F3C84E970FFE8D59745991F7137022C4E1E84E710BFF24C394683A2406F0277DB1E2E51F88CD1647A6953D810579517A4AFF10A1318EF724E5BF6B50F4953D688C713898C73D2AFF675B5D7AD4002313F012E3",
	chongxiaoTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8215166AE16197656A0459B83029A8FC5AF3F7BF7FBB9D1BF7D7ED3732837389124B5E18E3CA07526B0B02C836AD8BE66D9FA4CAF581F591B8B6CEA252CF5D1842F1F7ADFB5B7A14FE1D65FEF91F0CC729E71DE8E1147373CB829818129793808916618C5F1A416CD47E2AAC572F18F918731320113B7E3672866A22AFB22F71AE9A9CDF4B07911769CABF4938D37B6869D06C2D4BA74D5F1C041FE0E25A6B7662711EDAA3E473D4C6E",
	jiamengTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821E927339F5C10E3AD06B9FDEC87F63748D70C4E3C5867142D8A2B0DC4B27688232CAF32E69B13D7D832E37E08D39C4BBF5DF89BD88CCBA3A431771BDBDCA0F5BC5F609AFAE15352B011FF147D3CE70B8CF7618E0C1A1A45000796714B012DC892E4DB81F0AC4AE5F8CE0C0BA158E04E40073171809E7FB52FA29494C58988AEA3F76FB31773236359812A6DA640508DAD4AEA345B8D175AA0F2CB147FFD87C0A04E35C77F2837180B3AF710D1E7A656B4",
	shengjiTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8218C7BC9EC16156E7B905D1796787457E133DAE596C50D8D1D1745F11B98E8930C322ACB866EC218976F19E599D2CEC7FB411620D9133DB70C90AE251DB7BE3A69EDCC02DE69DE233FBF3BC8390B8C1283F1899DB8427A988D79782D1749189C81DFE02416E793545932AFC4B255E80E13D66F57F44F78129FA1F4E75160A09769E54162C5C2E558E9F28528538198A283DEF73C679D2301693E3D360325C3F97C280CBCB1BBF34ED810ECF4DF35198B40",
	jifenTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821A9217744EC7B9E710504DC620BB8A6BB5491A904FEA16C628D9D5AD29B86294DD2911FF1061DCC4BEE2858297B82CD463B9D6C28DDCFF8AC5A5F673124AE742EB85083EF9F9B03952FB76305E52DABCBA884A5000217920DFDF561C4BAB5DDEDB40058C4BD1E6C9DD13D47F2AD7D64B4BDE9D53286C973EBD926B2071A216161C1E54EDAB1BBD81F1477009CC91C8ACC1F96FFBFCCC591B969C61D7D33709736439A84389C63C3A650F707E9158701B5",
	youhuiTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8218034AA753891DD76B31CA87A3113AF3399AFBF0C9DADC734A89B6DACF87BEB2C603B59F577DA7177292E009A7F1599176CA45605124EA05A67E93FC19A8DD29660DD56A2C6327DFDAA00ED2A17BD598C2E5278A3C9F6FE671036B073624D69BD5DCE710DC2BC8B6C39CC38E1E001C836076E18495C9ED470A5BD82E416A10AAC55AB08E4E649AB8748B7AEC70B0590531873749D40B23620FFA8E17C4F51CAC10601DFE51B66AD44",
	jifenpayTrigger:"1DE0C2F5E4206484A610F3DE3F72E1E7E6ECE3B74D68015F1D27C038BD87F3AB9CC847FCAA5AAB73D267E8051E1497BA47260C602A6F286AA0621FE62CDB63419332D16F65FDDF7E05E6CF90BF7F89F0150F673AB101D0A445FEDD389B2C436FB11A3473DF9D35E2356D866D3DF9918BD50F7A39BB79E48796682DA5941E361EAA3E96FFB4FA8823BE33576155F8EDE573C74BB9C480DD77472F0E3137ACA2959BFA9EE4678080EF61B8E7D841C097F129E9814181121AC720DB9FCF530C1332A8E904B131B0FBCACB9188934712DABD",
	freight:0,    //运费
	address_id:0,  //地址id
	getYreight:function(freightTrigger,user_id,formData){
		$.ajax({
			url:http+freightTrigger,
			type:"get",
			dataType:"json",
			data:{
				user_id:user_id,
				formData:formData
			},
			success:function(data){
				this.freight=data.result
				if(data.result!=""){
					$(".yreight").html('￥'+data.result)
				}
				
				if(orderType['order_type_id']==5){   //order_type_id==5 是积分订单和其他订单结算方式不一样
					
					$(".Amount-of-money .money-1 span").html(allPV+Number(data.result))
				}else{
					
					$(".Amount-of-money .money-1 span").html(allPrice+Number(data.result));
				}
			}
		})
	},
	getAddress:function(addressTigger,freightTrigger,user_id){
		var self=this;
		$.ajax({
			url:http+addressTigger,
			type:"get",
			data:{
				user_id:user_id
			},
			dataType:"json",
			success:function(res){
				if(res.total==0){
					$str=$("<a href='./new-address.php'>请选择配送地址</a>")
					$(".distribution-information").html($str)
					$wraper=$('<div style="position:fixed;top:0;z-index:99999;width:100%;height:100%;background:rgba(0,0,0,0.8)">'
						+'<div style="display:block;width:200px;height:80px;background:#fff;border-radius:5px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;">'
						+'<p style="margin-top:5px">您还没有配送地址</p>'
						+'<a href="./new-address.php" style="display:block;line-height:30px;margin-top:10px;">添加配送地址</a></div>'
						+'</div>')
					$(document.body).append($wraper)
				}else{
					var resultData=res.data
					$(resultData).each(function(index){
						var oid=$.cookie("hasAddress")
						if(oid==$(this)[0].OID){
							$str=$('<a href="./address_editor.php?sign='+$(this)[0].OID+'"><div class="modify">修改</div></a>'
					    	+'<h3 data-address-id="'+$(this)[0].OID+'">配送信息</h3>'
					    	+'<div class="user-name">'
					    		+'<input type="text"  class="user-name-ipt"/>'
					    		+'<p class="user-p">'+$(this)[0].CONSIGNEE+'</p>'
					    	+'</div>'
					    	+'<div class="cell-phone">'
					    		+'<input type="text"  class="cell-phone-ipt"/>'
					    		+'<p class="cell-p">'+$(this)[0]["CONSIGNEE_MOBILE"]+'</p>'
					    	+'</div>'
					    	+'<div class="address">'
					    		+'<input type="text"  class="address-ipt"/>'
					    		+'<p class="address-p">'+$(this)[0]["PROVINCE_DESC"]+
					    		'-'+$(this)[0]["CITY_DESC"]+'-'+$(this)[0]["XIAN_DESC"]+
					    		'-'+$(this)[0]["ADDRESS"]+'</p>'
					    	+'</div>')
					    	$(".distribution-information").html($str)
					    	$.cookie("hasAddress",null,{expires:-1})
						}else{
							if($(this)[0]['IS_DEFAULT']){
								$str=$('<a href="./address_editor.php?sign='+$(this)[0].OID+'"><div class="modify">修改</div></a>'
						    	+'<h3 data-address-id="'+$(this)[0].OID+'">配送信息</h3>'
						    	+'<div class="user-name">'
						    		+'<input type="text"  class="user-name-ipt"/>'
						    		+'<p class="user-p">'+$(this)[0].CONSIGNEE+'</p>'
						    	+'</div>'
						    	+'<div class="cell-phone">'
						    		+'<input type="text"  class="cell-phone-ipt"/>'
						    		+'<p class="cell-p">'+$(this)[0]["CONSIGNEE_MOBILE"]+'</p>'
						    	+'</div>'
						    	+'<div class="address">'
						    		+'<input type="text"  class="address-ipt"/>'
						    		+'<p class="address-p">'+$(this)[0]["PROVINCE_DESC"]+
						    		'-'+$(this)[0]["CITY_DESC"]+'-'+$(this)[0]["XIAN_DESC"]+
						    		'-'+$(this)[0]["ADDRESS"]+'</p>'
						    	+'</div>')
						    	$(".distribution-information").html($str)
							}else if(index==0){
								$str=$('<a href="./address_editor.php?sign='+$(this)[0].OID+'"><div class="modify">修改</div></a>'
						    	+'<h3 data-address-id="'+$(this)[0].OID+'">配送信息</h3>'
						    	+'<div class="user-name">'
						    		+'<input type="text"  class="user-name-ipt"/>'
						    		+'<p class="user-p">'+$(this)[0].CONSIGNEE+'</p>'
						    	+'</div>'
						    	+'<div class="cell-phone">'
						    		+'<input type="text"  class="cell-phone-ipt"/>'
						    		+'<p class="cell-p">'+$(this)[0]["CONSIGNEE_MOBILE"]+'</p>'
						    	+'</div>'
						    	+'<div class="address">'
						    		+'<input type="text"  class="address-ipt"/>'
						    		+'<p class="address-p">'+$(this)[0]["PROVINCE_DESC"]+
						    		'-'+$(this)[0]["CITY_DESC"]+'-'+$(this)[0]["XIAN_DESC"]+
						    		'-'+$(this)[0]["ADDRESS"]+'</p>'
						    	+'</div>')
						    	$(".distribution-information").html($str)
							}
						}
						
					})
					self['address_id']=$(".distribution-information h3").attr("data-address-id")
				}
				var freightObj=[{
				    "ORDER_TYPE":orderType['order_type_id'],
				    "ADDRESS_ID":createOrder['address_id'],
				    "PRODUCTS":productStr
				}];
				self.getYreight(freightTrigger,user_id,JSON.stringify(freightObj));
				jiamengdataObj=[{"USER_TYPE":userType,"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
				jiamengdataObj1=[{"USER_TYPE":userType,"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
				shengjidataObj=[{"USER_TYPE":userType,"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
				lingshoudataObj=[{"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
				chongxiaodataObj=[{"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
				jifendataObj=[{"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
				youhuidataObj=[{"PRODUCTS":productStr,"ADDRESS_ID":createOrder['address_id']}];
			}
		})
	},
	createOrder:function(trigger,user_id,openId,dataObj){
		if(dataObj[0].ADDRESS_ID==undefined||dataObj[0].ADDRESS_ID==""){
			alert("请选择配送地址")
		}else{
			var self=this;
			$.ajax({
				url:http+trigger,
				type:"get",
				dataType:"json",
				data:{
					user_id:user_id,
					formData:JSON.stringify(dataObj)
				},
				success:function(data){
					if(data.result.indexOf("SUCCESS")!=-1){
						window.sessionStorage.removeItem("productCar");
						if(data.result.length>7){
							if(orderType['order_type_id']==5){      //积分订单
								var oid=data.result.slice(8)
								$(".popup").show().find(".order_id").html("订单号："+oid)
							}else{                                 //其他订单
								var currentOrder={
									orderId:data.result.slice(8),
									orderMoney:$(".Amount-of-money .money-1 span").html()
								}
								$.cookie("hasCurrentOrder",JSON.stringify(currentOrder))
								var orderId=data.result.slice(8);
								createOrder.wxpay(user_id,orderId,$(".Amount-of-money .money-1 span").html(),openId)
							}
						}else{
							$(".popup").show().find("p").eq(0).html("累计购物业绩已达到所选级别").next().html("升级成功");
							userInfo.is_customer=0;
                    		$.cookie("userInfo",JSON.stringify(userInfo));
						}
					}else{
						alert(data.result)
					}
				}
			})
		}
		
	},
    wxpay:function(user_id,oid,orderMoney,openId){
         $.ajax({
            url:"../wxpay/example/jsapi.php",
            type:'get',
            data:{
                openId:openId,
                orderBody:oid,
                orderMoney:orderMoney
            },
            dataType:'json',
            success:function(res){
                function jsApiCall()
                {
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                           "appId":res.appId,     //公众号名称，由商户传入     
                           "timeStamp":res.timeStamp,         //时间戳，自1970年以来的秒数     
                           "nonceStr":res.nonceStr, //随机串     
                           "package":res.package,     
                           "signType":res.signType,         //微信签名方式：     
                           "paySign":res.paySign //微信签名 
                       },
                        function(res){
                            WeixinJSBridge.log(res.err_msg);
                            var msg = res.err_msg; 
                            if (msg == "get_brand_wcpay_request:ok") { 
                            	$.cookie("hasCurrentOrder",null,{ expires: -1 })
                            	if(orderType["order_type_id"]==1&&userInfo['is_customer']==1){
			                    	userInfo.is_customer=0;
			                    	$.cookie("userInfo",JSON.stringify(userInfo));
			                    }
			                    if(userInfo['is_customer']==0&&userInfo['status']==0){
			                    	userInfo['status']=1;
			                    	$.cookie("userInfo",JSON.stringify(userInfo));
			                    }
			                    $('.popup').show().find('.dd').html('订单号：'+oid)
                            }else { 
                                if (msg == "get_brand_wcpay_request:cancel") { 
                                    var err_msg = "您取消了微信支付"; 
                                } else if (msg == "get_brand_wcpay_request:fail") { 
                                    var err_msg = "微信支付失败错误信息：" + res.err_desc; 
                                } else { 
                               
                                } 
                                // alert(err_msg);
                            }
                        }
                    );
                }

                function callpay()
                {
                    if (typeof WeixinJSBridge == "undefined"){
                        if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
                            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
                        }
                    }else{
                        jsApiCall();
                    }
                }
                callpay()
            }
        })
    }
}
var jiamengdataObj;
var jiamengdataObj1;
var lingshoudataObj;
var chongxiaodataObj;
var shengjidataObj;
var jifendataObj;
var youhuidataObj;



