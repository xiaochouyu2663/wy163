function getScan(user_id){
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
                $.ajax({
		            url:'../controller/getContent.php',
		            type:"get",
		            dataType:"json",
		            timeout:10000,
		            data:{
		                trigger:"1DE0C2F5E42064844C07580845C3EC4893010CE7601879DD36748572A858734DC30153D22D914E64BED1F86FE5FD716CDBAF050DB0C33FE9995837C04780FF7534BFBCD541F6E6FB66D06368A4A35FAAED572A9F828C527F6E34887D57D1B4627F3AC5484685563FF77C076CE10DAF43E1700340C835E9B77A8DC84C294F58907BCCA2ADA1D332734420270A08E50D5B339A8A2CA73EE3F7632CBA248B05C19E36B6716C71B37B16",
		                user_id:user_id
		            },
		            success:function(data){
		            	$('#code_time').html('二维码有效期'+data.TIME+'天')
		                code=data.result;
		                if(userInfo.status==0&&userInfo.is_customer==0&&level==1){
				        	$('.scode_wrapper').hide()
				        	$('.wrapper3').show()
				        	$('.join').click(function(){
				        		location.href="join.php"
				        	})
				        }else{
				        	if(userInfo.is_customer==1&&level==0){
					        	$('.scode_wrapper').hide()
					        	$('.wrapper1').show()
					        	str="http://wechat.trtjklife.com/php/customer-reg.php?code="+code;
					        	share_link="http://wechat.trtjklife.com/php/customer-reg.php?code="+code;
					        	$("#qrcode").qrcode({width:200,height:200,correctLevel:0,text:str});
								var myCanvas = document.getElementsByTagName("canvas")[0];
						        var img = convertCanvasToImage(myCanvas);
						        $("#convertedImg").append(img);
					        }else if(userInfo.is_customer==0&&level==1){
					        	$('.scode_wrapper').hide()
					        	$('.wrapper1').show()
					        	str="http://wechat.trtjklife.com/php/dealer-reg.php?code="+code;
					        	share_link="http://wechat.trtjklife.com/php/dealer-reg.php?code="+code;
					        	$("#qrcode").qrcode({width:200,height:200,correctLevel:0,text:str});
								var myCanvas = document.getElementsByTagName("canvas")[0];
						        var img = convertCanvasToImage(myCanvas);
						        $("#convertedImg").append(img);
					        }else if(userInfo.is_customer==0&&level==0){
					        	$('.scode_wrapper').hide()
					        	$('.wrapper1').show()
					        	str="http://wechat.trtjklife.com/php/customer-reg.php?code="+code;
					        	share_link="http://wechat.trtjklife.com/php/customer-reg.php?code="+code;
					        	$("#qrcode").qrcode({width:200,height:200,correctLevel:0,text:str});
								var myCanvas = document.getElementsByTagName("canvas")[0];
						        var img = convertCanvasToImage(myCanvas);
						        $("#convertedImg").append(img);
					        }else if(userInfo.is_customer==1&&level==1){
					        	$('.scode_wrapper').hide()
					        	$('.wrapper2').show()
					        	$('.upgrade_dealer').click(function(){
					        		location.href="customer-upgrade.php"
					        	})

					        	$('.back_wx').click(function(){
					        		wx.closeWindow();
					        	})
					        }else{
					        	$('.scode_wrapper').hide()
					        	alert('出错')
					        }
					        
				        }
				        var local_link = location.href;
			        	TRT.wxInitShare(local_link,share_link);
				        
		            },
		            error:function(err){
		                console.log(err)
		            }
		        })
            }
        },
        error: function(err) {
            console.log(err)
        }
    });
}	
        
        
function utf16to8(str) {  
    var out, i, len, c;  
    out = "";  
    len = str.length;  
    for(i = 0; i < len; i++) {  
    c = str.charCodeAt(i);  
    if ((c >= 0x0001) && (c <= 0x007F)) {  
        out += str.charAt(i);  
    } else if (c > 0x07FF) {  
        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
        out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));  
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
    } else {  
        out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));  
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
    }  
    }  
    return out;  
}  

function convertImageToCanvas(image){
    //创建canvas DOM对象,并设置其宽高和图片一样
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    //坐标(0,0)表示从此处开始绘制,相当于偏移
    canvas.getContext("2d").drawImage(image,0,0);
    return canvas;
}

// 把canvas转换为image的,可以实现长按扫码


// canvas-->image 
function convertCanvasToImage(canvas){
    //新Image对象,可以理解为DOM;
    var image = new Image();
    //canvas.toDataURL返回的是一串Base64编码的URL,当然,浏览器自己肯定支持
    //指定格式PNG
    image.src = canvas.toDataURL("image/png");
    return image;
}