var TRT={};
(function(obj){
	//拍照上传照片功能
	obj.url="../controller/getContent.php";
	obj.spread_code="";
	obj.photoObj={};
	obj.verifyCode="";
	obj.wxInit=function(link){
	    $.ajax({
	        url:"../controller/wx.php",//后台给你提供的接口
	        type:"GET",
	        data:{"url":link},
	        async:true,
	        dataType:"json",
	        success:function (data){
	            wx.config({
	                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
	                appId: data.appId, // 必填，公众号的唯一标识
	                timestamp: data.timestamp, // 必填，生成签名的时间戳
	                nonceStr: data.nonceStr, // 必填，生成签名的随机串
	                signature: data.signature,// 必填，签名，见附录1
	                jsApiList: [
	                    "onMenuShareTimeline",
	                    "onMenuShareAppMessage",
	                    "chooseImage",
	                    "uploadImage",
	                    "closeWindow"
	                ] 
	            });
	            wx.error(function (res) {
	            });
	        },
	        error:function (res){
	        }
	    });
	}

	obj.wxInitShare=function(local_link,share_link){
		var share_link=share_link;
	    $.ajax({
	        url:"../controller/wx.php",//后台给你提供的接口
	        type:"GET",
	        data:{"url":local_link},
	        async:true,
	        dataType:"json",
	        success:function (data){
	            wx.config({
	                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
	                appId: data.appId, // 必填，公众号的唯一标识
	                timestamp: data.timestamp, // 必填，生成签名的时间戳
	                nonceStr: data.nonceStr, // 必填，生成签名的随机串
	                signature: data.signature,// 必填，签名，见附录1
	                jsApiList: [
	                    "onMenuShareTimeline",
	                    "onMenuShareAppMessage",
	                    "chooseImage",
	                    "uploadImage",
	                    "closeWindow",
	                    "hideMenuItems"
	                ] 
	            });
	            wx.ready(function (){
	            	wx.onMenuShareAppMessage({
					    title: '推荐好友', // 分享标题
					    desc: '推荐好友', // 分享描述
					    link: share_link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					    imgUrl: '', // 分享图标
					    success: function () { 
					        var M = {};
	                        if(M.dialog1) {
	                            return M.dialog1.show();
	                        };
	                        M.dialog1 = jqueryAlert({
	                            'className': "myDialog1", //给弹层添加一个特殊的类名，方便调整自己的样式
	                            'title': '',
	                            'content': '<div class="set_head_pic_modal">分享成功</div>',
	                            'contentTextAlign': "center",
	                            'width': "70%",
	                            'height': "2rem",
	                            'modal': true,
	                            'buttons': {
	                                '确定': function() {
	                                    M.dialog1.close();
	                                }
	                            }
	                        });
					    },
					    cancel: function () { 
					        var M = {};
	                        if(M.dialog1) {
	                            return M.dialog1.show();
	                        };
	                        M.dialog1 = jqueryAlert({
	                            'className': "myDialog1", //给弹层添加一个特殊的类名，方便调整自己的样式
	                            'title': '',
	                            'content': '<div class="set_head_pic_modal">您取消了分享</div>',
	                            'contentTextAlign': "center",
	                            'width': "70%",
	                            'height': "2rem",
	                            'modal': true,
	                            'buttons': {
	                                '确定': function() {
	                                    M.dialog1.close();
	                                }
	                            }
	                        });
					    }
					});
					wx.hideMenuItems({
					    menuList: ["menuItem:share:timeline"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
					});
	            });
	            wx.error(function (res) {
	            	TRT.toast(res)
	            });
	        },

	        error:function (res){
	        }
	    });
	}
	//登陆
	obj.loginFn=function(userInfo,openid){
		$.ajax({
            url: obj.url,
            type:"get",
            dataType:"json",
            async:false,
            timeout:10000,
            data: {
                trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459700EB56F09776EA5BCB193EC28FBF63F599A9336E097BB6B18CB4A524FC949F644B434B676CC42405DC4595703C00A2147835B76A94E3DFD", 
                username: $("#useralias").val(), 
                password: $("#password").val()
            },
            success:function (data) {
                $(".login").prop("disabled",false)     
                if(data.result=="SUCCESS"){
                    userInfo.userId=data.userid;
                    userInfo.name=data.name;
                    userInfo.status=data.status;
                    userInfo.mobile=data.mobile;
                    userInfo['is_customer']=data['is_customer'];
                    $.ajax({
                        url:"logingra.php",
                        type:"get",
                        data:{uid:data.userid},
                        success:function(){
                            obj.bindOpenid(data.userid,openid);  
                        }
                    })
                     
                }else{
                    TRT.toast(data.result)
                }
            },
            error:function(res){
                $(".login").prop("disabled",false)
            }
        })
	}

	//绑定openId
	obj.bindOpenid=function(user_id,openid){
		$.ajax({
            url:obj.url,
            type:"get",
            dataType:"json",
            async:false,
            timeout:10000,
            data: {
                trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821235E7AB421CA32BD784CBA3D330E1B02FBD5A57CFD9EA4493D3E18BD0E9555A0EC88623D96FA70F2733DA0DEB73D6DB74B74CF27B2BAB04B2F4A4627F59775BA817ABE35D98BA2AF0EFEA15D44D3594491CC335A24FBD5F1F53C0DEE6CCE3A15FBA6539D341631CF68C0158CCFEC4FAFD4DF29C2D31BBB5444531B4107B0F57F63AC4650E256F32AF8D9ED788807F372", 
                user_id:user_id,
                formData:JSON.stringify([{"OPEN_ID":openid}])
            },
            success:function(data){
                if(data.result=="SUCCESS"){
                    userInfo.alias=$("#useralias").val();
                    userInfo.openid=openid;
                    userInfo.pswd=$("#remember").is(":checked")?$("#password").val():"";
                    TRT.toast("登录成功")
                    $.cookie("userInfo",JSON.stringify(userInfo));
                    if($.cookie("urlValue")){
                        location.href=$.cookie("urlValue");
                        $.cookie("urlValue","")
                    }else{
                        location.href="home.php";
                    }
                }else{
                	TRT.toast(data.result)
                }
            },
            error:function(res){
            }
        })
	}

	//掉微信摄像头拍照上传照片
	obj.camera=function(imgWrap,user_id,photo_type){
		var localId="";
	    var serverId="";
        wx.chooseImage({
            count: 1, 
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType:['camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                localId = res.localIds[0]; 
                var imgSrc=localId;
                imgWrap.parents('.personal-info').attr("data-upload","1");
                if(localId){
                    wx.uploadImage({
					    localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
					    isShowProgressTips: 1, // 默认为1，显示进度提示
					    success: function (res) {
					    	obj.toast("正在上传");
					        serverId = res.serverId; // 返回图片的服务器端ID
					        if(serverId){
					        	$.ajax({
					        		url:obj.url,
					        		type:"post",
					        		timeout:30000,
					        		data:{
					        			serverId:serverId,
					        			trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459CA708E26D86263C97974CD6468E34A907E132CB131303E8694CC8CFF8A70F98FA1428D76661CC4A46FB1C944212F85D35A63F3149FE43466",
				                        user_id:user_id
					        		},
					        		success:function(data){
					        			if(data.length>0){
					        				obj.photoObj[photo_type]=data;
						        			imgWrap.parents('.personal-info').attr("data-upload","0");			
						        			obj.toast("上传成功")
						        			$oImg=$("<img src='"+imgSrc+"'>");
                							imgWrap.html($oImg);
					        			}
					        			
					        		},
					        		error:function(err){
					        			obj.toast("上传失败，请重新上传")
					        			imgWrap.parents('.personal-info').attr("data-upload","0");
					        		}
					        	})
					        }
					    }
					});
                }
            }
        });
	}

	obj.getContactInfo=function(user_id){
		$.ajax({
	        url:obj.url,
	        type:"get",
	        dataType:"json",
	        timeout:10000,
	        data:{
	            trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8218595695485296E7678B54BF34E028548696EEE050A36429F84B49070796D80FD780EC3F14204690D4F0DD8BE229C7BDDC978541DF5CD4DB10B3A11EEA1BE80E6975453BB805009DB4A3FD87A3A1FF74234022FA00AA0C28B4851F3488A275CE335564615CADE44B201B3757D595B89DAD455E416DBD04C1BB07E6DAE0512A830E6743BE631C27740",
	            user_id:user_id
	        },
	        success:function(data){
	            if (data.result == "SUCCESS"){
	            	$("#name").val(data["NAME"]);
	                $("#IDCode").val(data["ID_CARD"]);
	                $("#telephone").val(data["MOBILE"]);
	                $('.file-upload').eq(0).attr("data-status",data["MATE_STATUS"]);
	                if (data['PHOTO1']) {
						obj.photoObj["wedding"]=data['PHOTO1'];
						obj.getImagesById(data['PHOTO1'],user_id).then(function (res) {
							$('.file-upload').eq(0).find(".file-upload-option").html($("<img src='"+res.path+"'>"))
						})
					}
					if(data["MATE_STATUS"]==1){
						$("#name").prop("readonly",true);
						$("#IDCode").prop("readonly",true);
						$("#telephone").prop("readonly",true);
						$("#verifyCode").parent().hide();
					}
	            }else{
	                obj.toast(data.result)
	            }
	        },
	        error:function(res){
	        }
	    }) 
	}
	//信息提交审核确定
	obj.updateInfo=function(btn,user_id){
		var name=$("#name").val();
        var tel=$("#telephone").val();
        var verify=$("#verifyCode").val();
        var idcard=$("#IDCode").val();
        if(name&&tel&&verify&&idcard&&obj.photoObj["wedding"]){
            if(TRT.isCardNo($('#IDCode').val())&&TRT.verifyMobile($("#telephone").val())){
	        	var formData=[{
		             "MOBILE":$("#telephone").val(),
		             "ID_CARD":$("#IDCode").val(),
		             "CAPTCHA":$("#verifyCode").val(),
		             "PHOTO_ID":obj.photoObj["wedding"],
		             "NAME":$("#name").val()
		        }];
			    btn.prop("disabled",true).css("background","#00c7f2");
			    $.ajax({
			        url:obj.url,
			        type:"get",
			        dataType:"json",
			        timeout:10000,
			        data:{
			            trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821D882FAA481E0457033E6ED0DA7E1B020CBC26EABC60D5636BAE39674CCAA043833966A08BC3BA8FBA7A6C085D9824651D0122F8AB2A541FCE4C3F9A6A61B3BFB3699A8B75183D83B6FF702A46E77A64F06E37E10EB0A8FC759BD928357D756B150D7550C28378E0B1804F7ADB137F58A90B701A9487B4E63CA76278A3C6C9DECC5870C739BD92AF5FC55C948769B45B588293E8717D6BE59042FDF76C9CB3724C4CAE69EB782ADCBF61761D166C9286E2DB86692356485FC",
			            user_id:user_id,
			            formData:JSON.stringify(formData)
			        },
			        success:function(data){
			            btn.prop("disabled",false)
			            if (data.result == "SUCCESS"){
			                $(".dialog-wraper").fadeIn(200);
			                $('.dialog-wraper').css({"display":"block"});
			            }else{
			                obj.toast(data.result)
			            }
			        },
			        error:function(res){
			            btn.prop("disabled",false)
			        }
			    }) 
			}
        }else{
        	if(name==""){
                TRT.toast("请输入姓名")
            }else if(idcard==""){
                TRT.toast("请输入身份证号")
            }else if(tel==""){
                TRT.toast("请输入手机号")
            }else if(verify==""){
                TRT.toast("请输入验证码")
            }else if(!obj.photoObj["wedding"]){
            	TRT.toast("请上传结婚照")
            }
        }    
	}

	//发送验证码
	obj.sendVerifyCode=function(btn,tel){
		formData=[{"MOBILE":tel}];
	    var trigger="1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E82114825FB460A7B6E1993D276767A24909F438CF0B04C8000A9163F2ADD1E9F417B79E3E779CDC0DFFFE04B18D13C6C4DB7133930EB72E17FC1ACCA0F65843A740DAFFD34B51DAC2C222C74DEFFF89802DF6CAF51D6D1EB38B55C7E6E7568A494F9401F74E1F8F46E2F204A9A477DD365ABDF966335F2ECB644C81ED3D207579049DB58C8CEE95BED5";
	    var data={
	        trigger:trigger,
	        formData:JSON.stringify(formData)
	    }
	    $.ajax({
	        url: obj.url,
	        type: 'get',
	        dataType: 'json',
	        timeout: 5000,
	        data:data,
	        success: function (data, status) {
	            if(data.result=="SENT"){
	                var time=60;
	                var t=setInterval(function(){
	                    time--;
	                    btn.text(time+"秒")
	                    btn.prop("disabled",true)
	                    if (time==0){
	                        clearInterval(t)
	                        btn.text("获取验证码")
	                        btn.prop("disabled",false)
	                    }
	                },1000)
	               
	                obj.toast("验证码已发送")
	            }else{
	                obj.toast("发送验证码失败")
	            }
	        },
	        error: function (res) {
	        }
	    })
	}

	//经销商注册协议获取
	obj.getProtocol=function(dataObj,contentWrap){
		$.ajax({
			url:obj.url,
			type:"get",
			dataType:"json",
			timeout:10000,
			data:dataObj,
			success:function(data){
				contentWrap.html(data.result)
			},
			error:function(res){
			}
		})
	}
	obj.getSpread=function(spread_code,inp1,inp2){
    	$.ajax({
            url:obj.url,
            type:"get",
            dataType:"json",
            timeout: 10000,
            data:{
                trigger:"1DE0C2F5E42064844C07580845C3EC4893010CE7601879DDF2CA2B3504CDA8056A805D9B052711D1126AFE498367354FAE072655B8F0D6EBFF957E35738B070E116B13C3376A232A9EAC758C20860764BF7671EC94C8160CE5C9726DE91560955CC5C8F5544608B85797800C51E4B849BC090351BA8BBC2C2CABC31330EFBE586461B41BC0EF54BF7BE8FF7D176407F5",
                formData:JSON.stringify([{"CODE":spread_code}])
            },
            success:function(data){
            	if(data.RESULT=='true'){
            		inp1.val(data.NAME).prop("readonly",true)
                	inp2.val(data["USER_ALIAS"]).prop("readonly",true)
                	
            	}else{
            		$('.dialog-wraper').show().find('p').html(data.MESSAGE)
            	}
                
            },
            error:function(res){
            }
        })
	}

	//开户行
	obj.getBank=function(parent,wraper){
		$.ajax({
			url:obj.url,
			type:"get",
			dataType:"json",
			timeout:10000,
			data:{
                trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC",
                parent:parent
            },
			success:function(data){
				$(data).each(function(index,value){
                    var $ops=$("<option value='"+value.ID+"'>"+value.TEXT+"</option>");
                    wraper.append($ops)
                })
			},
			error:function(res){
			}
		})
	}

	//职业
	obj.getOccupation=function(wraper){
		$.ajax({
			url:obj.url,
			type:"get",
			dataType:"json",
			timeout:10000,
			data:{
                trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC",
                parent:17728
            },
			success:function(data){
				$(data).each(function(index,value){
                    var $ops=$("<option value='"+value.ID+"'>"+value.TEXT+"</option>");
                    wraper.append($ops)
                })
			},
			error:function(res){
			}
		})
	}

	//信息修改初始信息
	var imageIdArr = []
	obj.getPersonInfo=function(user_id,inp1,inp2){
		var _ = this
		$.ajax({
			url:obj.url,
			type:"get",
			dataType:"json",
			timeout:10000,
			data:{
                trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8212E293F9E03D0FF31E9B7F8FFE64F37543C58D807295224E47B1358721DF76697D6FCC20F486FEE16F0F56BDB0EEE9EE20C6FDA04D9A90A47243291D27E105AF1DFDD8B2D0CEBF035222C1EA81DBA5E671511514905136966DC9F75F13B6F8FB3C7F0715C07055C94ECFB8DB9BB2DF878C6D399102262BA8496148FBFC8A8D35E5A404B069AA7CF7B",
                user_id: user_id
            },
			success:function(data){
				if(data.result=="SUCCESS"){
					if (data["ID_CARD"]) {
						$("#IDCode").val(data["ID_CARD"]).prop("readonly",true)
					}
				
					$("#bankCard").val(data['BANK_CARD'])
					$("#email").val(data['EMAIL'])
					$("#lorg").val(data['LEGAL_CR'])
					$("#telephone").val(data['MOBILE'])
					$("#phone").val(data['PHONE'])
					$('.file-upload').eq(0).attr("data-status",data["ID_STATUS"]);
					$('.file-upload').eq(1).attr("data-status",data["ID_STATUS"]);
					$('.file-upload').eq(2).attr("data-status",data["CONTRACT_STATUS"]);
					$('.file-upload').eq(3).attr("data-status",data["LICENSE_STATUS"]);
					$('.file-upload').eq(4).attr("data-status",data["LICENSE_STATUS"]);
					if (data['BANK_ID']) {
						$("#bankName").val(data["BANK_ID"])
					}
					if (data["COMPANY"]) {
						$("#company").val(data["COMPANY"])
					}
					if (data["OCCUPATION"]) {
						$("#occupation").val(data["OCCUPATION"])
					}
					if (data['PHOTO1']) {
						obj.photoObj["person0"]=data['PHOTO1'];
						_.getImagesById(data['PHOTO1'],user_id).then(function (res) {
							$('.file-upload').eq(0).find(".file-upload-option").html($("<img src='"+res.path+"'>"))
						})
					}
					if (data['PHOTO2']) {
						obj.photoObj["person1"]=data['PHOTO2'];
						_.getImagesById(data['PHOTO2'],user_id).then(function (res) {
							$('.file-upload').eq(1).find(".file-upload-option").html($("<img src='"+res.path+"'>"))
						})
					}
					if (data['PHOTO3']) {
						obj.photoObj["person2"]=data['PHOTO3'];
						_.getImagesById(data['PHOTO3'],user_id).then(function (res) {
							$('.file-upload').eq(2).find(".file-upload-option").html($("<img src='"+res.path+"'>"))
						})
					}
					if (data['PHOTO4']) {
						obj.photoObj["person3"]=data['PHOTO4'];
						_.getImagesById(data['PHOTO4'],user_id).then(function (res) {
							$('.file-upload').eq(3).find(".file-upload-option").html($("<img src='"+res.path+"'>"))
						})
					}
					if (data['PHOTO5']) {
						obj.photoObj["person4"]=data['PHOTO5'];
						_.getImagesById(data['PHOTO5'],user_id).then(function (res) {
							$('.file-upload').eq(4).find(".file-upload-option").html($("<img src='"+res.path+"'>"))
						})
					}
				}
			},
			error:function(res){
				console.log(res)
			}
		})
	}

	obj.getImagesById = function (id,userId) {
		var userInfo=JSON.parse($.cookie("userInfo")||"{}");
		return $.ajax({
			url: '../controller/getImage.php',
			type:"post",
			dataType:"json",
			timeout:10000,
			data: {
				userid: userId,
				fileid: id
			},
			success:function(data){
				
			}
		})
	}

	//个人信息修改
	obj.updatePersonInfo = function (btn, user_id) {
	   
        var tel=$("#telephone").val();
        var bank_id=$("#bankName").val();
        var bank_card=$("#bankCard").val();
        var occupation=$("#occupation").val();
        var lorg=$("#lorg").val();
        var verify=obj.verifyCode;
        var receipt=$("#checkbox-agree").is(":checked")?1:0;
        var email=$("#email").val();
        var phone=$("#phone").val();
        var photo1=obj.photoObj["person0"];
        var photo2=obj.photoObj["person1"];
        var photo3=obj.photoObj["person2"];
        var photo4=obj.photoObj["person3"];
        var photo5=obj.photoObj["person4"];
        if (photo1 && photo2 && photo3) {
		 	btn.prop("disabled",true)
		 	var formData=[{
                "OCCUPATION":occupation||"",
                "EMAIL":email||"",
                "MOBILE":tel||"",
                "PHONE":phone||"",
                "BANK_ID":bank_id||"",
                "BANK_NAME":$("#bankName").find("option:selected").text(),
                "BANK_CARD":bank_card||"",
                "COMPANY":$("#company").val()||"",
                "LORG":lorg||"",
                "RECEIPT":receipt,
                "CAPTCHA":verify||"",
                "PHOTO1": photo1,
                "PHOTO2": photo2,
                "PHOTO3": photo3,
                "PHOTO4": photo4||"",
                "PHOTO5": photo5||""
		 	}];
            $.ajax({
                url: obj.url,
              
                type:"get",
                dataType:"json",
                timeout:10000,
                data:{
                    trigger: "1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8217223B34A15FE71E802CCAE6563C71595D189C514B6C38637860BFE5E389626F1F0D72B21922342766C9559D475C0F13C6B21E58C2027B43DADC9E2CF26470D3DCB8BA7D47C3B461D234444B84B5F4D4CC42C1EFEBA2AFA622C654E68374E9EA244A963CE6DB9573E81603350C62C894A8DF6260B18BEA86B69C83615653D30989A07C43F6EE1F78B864D43E62F1FF055401642A98EC26C0BEDCBE2D752A088446EA5E2C9E8158910EFC1CAE6B929D7B88148D63A6A469CFD391A3436B1C6D2B3D76E029CED473C8091747428ACA9D17D8F4317E45556B9A90B4D0EDE1724829140D155BF433BAE4116641EE2BC9743B3F2CEB03DB3FC434184DCAC6C382DB0257010458E12974F365B454A27DDFB55F8C75045A8FED6AD8F9F75F12F96FADCDC",
                    user_id: user_id,
                    formData:JSON.stringify(formData)
                },
                success: function (data) {
                    
                    btn.prop("disabled",false)
                    if (data.result.indexOf("SUCCESS")!=-1) {
                        $(".dialog-wraper").fadeIn(200).find(".dialog-content.state").show().find('span').html(data.result.slice(8)).parent().next().hide()
                    }
                },
                error:function(res){
                    btn.prop("disabled",false)
                }
            })		 	
		}else{
			if(!photo1){
				obj.toast("请上传身份证照片（正面）")
			}else if(!photo2){
				obj.toast("请上传身份证照片（反面）")
			}else if(!photo3){
				obj.toast("请上合同签字复印件")
			}
		}
	}
	//分公司列表
	obj.getCompany=function(){

        $.ajax({
            url:obj.url,
            type:"get",
            dataType: 'json',
            timeout: 10000,
            data:{
                trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459CE8CA0A8159AEB060131C4DCEF5767E6F482EBB65E29AD086792D3467E518D69A97ADD7075A23DC360FA1AB1CD3C92872F957E1FED6CBEDC",
                parent: "1100050"

            },
            success:function(data){
                $(data).each(function(index,value){
                    var $ops=$("<option value='"+value.ID+"' text='"+value.TEXT+"'>"+value.TEXT+"</option>");
                    $("#company").append($ops)
                })
            },
            error:function(res){
            }
        })
	}
	//优惠顾客注册
	obj.customerReg=function(code){
		var name=$("#name").val();
        var tel=$("#telephone").val();
        var verify=$("#verifyCode").val();
        var pswd1=$("#loginPwd").val();
        var pswd2=$("#loginPwd2").val();
        if(name&&tel&&verify&&pswd1&&pswd2){
            if(pswd2!=pswd1){
                TRT.toast("两次输入密码不一致")
            }else{
                var formData=[{
                    "NAME":$("#name").val(),
                    "MOBILE":$("#telephone").val(),
                    "CAPTCHA_CODE":$("#verifyCode").val(),
                    "PASSWORD":$("#loginPwd").val(),
                    "PASSWORD2":$("#loginPwd2").val(),
                    "SPREAD_CODE":code
                }]
				$('.submit').prop('disabled',true)
				$mo=$('<div style="background: rgba(0,0,0,0.2);width:100%;height:100%;position:absolute;top:0;z-index: 9999;"></div>');
				$('body').append($mo);
				
                $.ajax({
                    url:obj.url,
                    type:"get",
                    dataType:"json",
                    timeout:10000,
                    data:{
                        trigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8214B5C3E743FE691DF564CAC8A4AD3AE3436731C31C93DD8BF032213BCC79DF81C9C1678892017FB5D4EEE4C72DE5749E0D8456F1298050FC425880A972DF99EE65939206182E9E59230B8D1C91C5554F567607726DD4C4A529D2F86BDEAF76BFFFFA16EB082E6C710E89E9D3831F74839185ED5481D805C739BD905F4164192FD5A38386A9B56880490AD9C4A7C51520ED291F3F60A18FF2EF7DF216B88AA7393DE0AFE39EB47D409E375F3AFAC5E0C48",
                        user_id:0,
                        formData:JSON.stringify(formData)
                    },
                    success:function(data){
                        if(data.result.indexOf("SUCCESS")!=-1){
                            var userInfo={};
                            userInfo.alias=data.result.slice(data.result.indexOf(":")+1);
                            $.ajax({
                            	url: obj.url,
	                            type:"get",
	                            dataType:"json",
	                            async:false,
	                            timeout:10000,
	                            data: {
	                                trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459700EB56F09776EA5BCB193EC28FBF63F599A9336E097BB6B18CB4A524FC949F644B434B676CC42405DC4595703C00A2147835B76A94E3DFD", 
	                                username: userInfo.alias, 
	                                password: $("#loginPwd").val()
	                            },
	                            success:function (data) {
	                                if(data.result=="SUCCESS"){
	                                    userInfo.userId=data.userid;
	                                    userInfo.name=data.name;
	                                    userInfo.status=data.status;
	                                    userInfo.mobile=data.mobile;
	                                    userInfo['is_customer']=data['is_customer'];
	                                    $.cookie("userInfo",JSON.stringify(userInfo));
	                                    $.ajax({
	                                        url:"logingra.php",
	                                        type:"get",
	                                        data:{uid:data.userid},
	                                        success:function(){
	                                            location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/customer-regsuccess.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect';
	                                        }
	                                    })  
	                                }
                            	}
	                        })
                        }else{
                        	$mo.hide()
                        	$('.submit').prop('disabled',false)
                            obj.toast(data.result)
                        }
                    },
                    error:function(res){
                    	$mo.hide()
						$('.submit').prop('disabled',false)
                    }
                })
            }
            
        }else{
            if(name==""){
                TRT.toast("请输入姓名")
            }else if(tel==""){
                TRT.toast("请输入手机号")
            }else if(verify==""){
                TRT.toast("请输入验证码")
            }else if(pswd1==""){
                TRT.toast("请设置登录密码")
            }else if(pswd2==""){
                TRT.toast("请再次确认登录密码")
            }
        }
	}

	//经销商注册
	obj.dealerReg=function(code){
		var name=$("#name").val();
        var tel=$("#telephone").val();
        var verify=$("#verifyCode").val();
        var pswd1=$("#pswd").val();
        var pswd2=$("#pswd2").val();
        var company=$("#company").val();
        var idcard=$("#IDCode").val();
        if(name&&tel&&verify&&pswd1&&pswd2&&company&&idcard){
        	if(pswd2!=pswd1){
                TRT.toast("两次输入密码不一致")
            }else{
            	var reg_data=[{
		           "NAME":$("#name").val(),
		           "ID_CARD":$("#IDCode").val(),
		           "COMPANY":$("#company").val(),
		           "MOBILE":$("#telephone").val(),
		           "PASSWORD":$("#pswd").val(),
		           "PASSWORD2":$("#pswd2").val(),
		           "SPREAD_CODE":code,
		           "CAPTCHA_CODE":$("#verifyCode").val()
		        }];
		        $('.submit').prop('disabled',true)
		        $.ajax({
		            url:obj.url,
		            type:"get",
		            dataType:"json",
		            timeout:5000,
		            data:{
		                trigger: "1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821D8581B8AA3A36EA9F154E3841F0FEA9B1A9BB41871676A9D2B8A1FDDC3EAB44418E3C984CC55634A34681919667AE01802FCC6D7222B570D435AF7B3FD01F2EC623353EE2BA2613D4CC35120D56B712895BDDA0C8D36456FB8B6D1620B319BBDD1BD8E7C0052DF3AF0717D6A3B020E54DF46FF89BC1F1313FD1B0A0247977170DFB7BF2FBA9B90E07E1CD7D4503CAF76A643CB5FAC953A03759D3186CF51324272772EB5AFE8CE74FBAA10D3EB30F1B912319ABC308DDE240A974DD2705FEB66589323772AA3D8B4",
		                user_id: 0,
		                formData:JSON.stringify(reg_data)
		            },
		            success:function(data){
		                
		                if(data.result.indexOf("SUCCESS")!=-1){
		                    var userInfo={};
		                    userInfo.alias=data.result.slice(data.result.indexOf(":")+1);
		                    obj.toast("注册成功")
		                    $.ajax({
                            	url: obj.url,
	                            type:"get",
	                            dataType:"json",
	                            async:false,
	                            timeout:10000,
	                            data: {
	                                trigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459700EB56F09776EA5BCB193EC28FBF63F599A9336E097BB6B18CB4A524FC949F644B434B676CC42405DC4595703C00A2147835B76A94E3DFD", 
	                                username: userInfo.alias, 
	                                password: $("#pswd").val()
	                            },
	                            success:function (data) {
                                	
	                                if(data.result=="SUCCESS"){
	                                    userInfo.userId=data.userid;
	                                    userInfo.name=data.name;
	                                    userInfo.status=data.status;
	                                    userInfo.mobile=data.mobile;
	                                    userInfo['is_customer']=data['is_customer'];
	                                    $.cookie("userInfo",JSON.stringify(userInfo));
	                                    $.ajax({
	                                        url:"logingra.php",
	                                        type:"get",
	                                        data:{uid:data.userid},
	                                        success:function(){
	                                            location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/dealer-regsuccess.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect';
	                                        }
	                                    })  
	                                }
                            	}
	                        })
		                }else{
		                	$('.submit').prop('disabled',false)
                            obj.toast(data.result)
                        }
		            },
		            error:function(res){
		            	$('.submit').prop('disabled',false)
		            }
		        })
            }
        }else{
        	if(name==""){
                TRT.toast("请输入姓名")
            }else if(tel==""){
                TRT.toast("请输入手机号")
            }else if(verify==""){
                TRT.toast("请输入验证码")
            }else if(idcard==""){
            	TRT.toast("请输入身份证号")
            }else if(pswd1==""){
                TRT.toast("请设置登录密码")
            }else if(pswd2==""){
                TRT.toast("请再次确认登录密码")
            }else if(company==""){
            	TRT.toast("请选择分公司")
            }
        }     
	}

	//升级为经销商
	obj.upgradeDealer=function(user_type,products,user_id){
		var name=$("#name").val();
		var idcard=$("#IDCode").val();
		var company=$("#company").val();
		if(name&&company&&idcard){
            if(TRT.isCardNo($('#IDCode').val())){
            	var formData=[{
                "NAME":$("#name").val(),
                "ID_CARD":$("#IDCode").val(),
                "COMPANY":$("#company").val()
	            }];
	            $.cookie('upgradeData',JSON.stringify(formData));
	            window.location.href="../php/upgrade.php";
            }
		}else{
			if(name==""){
                TRT.toast("请输入姓名")
            }else if(idcard==""){
                TRT.toast("请输入身份证号")
            }else if(company==""){
            	TRT.toast("请选择分公司")
            }
		}
	}
	obj.load=function(){
        var oDiv=document.createElement("div");
        oDiv.className="toast-load";
        var oImg=document.createElement("img");
        oImg.src="../images/loading.gif";
        oImg.className="loading";
        var oSpan=document.createElement("span");
        oSpan.innerHTML="正在加载...";
        oDiv.append(oImg);
        oDiv.append(oSpan);
        document.body.append(oDiv)
    }
 
	obj.toast=function(str){
		$div=$("<div>"+str+"</div>");
		$div.addClass("toast").css("color","#fff");
		$("body").append($div);
		$div.fadeOut(4000);
	}
	obj.verifyMobile=function(str){
      	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
	    if (!myreg.test(str)) {  
	        obj.toast("请输入正确的手机号")  
	    } else {  
	        return true;  
	    }   
	}
	obj.checkEmail=function(str){
	    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
	    if (re.test(str)) {
	        return true;
	    } else {
	        obj.toast("请输入正确的邮箱地址")
	    }
	}
	obj.isCardNo=function(card){ 
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
		if(reg.test(card) === false){ 
			obj.toast("身份证输入不合法"); 
			return false; 
		}else{
			return true;
		}
	}
})(TRT)


	

