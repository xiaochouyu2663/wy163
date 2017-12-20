//新增地址页面
var address={
    //获得省信息，渲染
	getSheng:function(){
		var self=this;
		var province = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent=100';
		$.ajax({
			url:"../controller/getContent.php",
			type:"get",
            data:province,
			async:true,
			dataType:"json",
			success:function (data) {
                // var data = JSON.parse(data);
                sheng.innerHTML = '';
                for (var i = 0; i < data.length; i++) {
                    if (data[i].ID != 540000 && data[i].ID != 650000) {
                        var Option = document.createElement('option');
                        Option.innerHTML = data[i].TEXT;
                        Option.value = data[i].ID;
                        sheng.appendChild(Option);

                    }
                }

                self.getShi();
            }
		})
	},
    //获得市信息，渲染
	getShi:function(){
		var SId = sheng.value;
		var parent = 101;
		var city = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent='+parent+'&ex='+SId;
		$.ajax({
            url:"../controller/getContent.php",
            type:"get",
            data:city,
            async:true,
            dataType:"json",
			success:function(data) {
                // var data = JSON.parse(data);
                shi.innerHTML = '';
                for (var i = 0; i < data.length; i++) {
                    var Option = document.createElement('option');
                    Option.innerHTML = data[i].TEXT;
                    Option.value = data[i].ID;
                    shi.appendChild(Option);

                }
                var XId = shi.value;
                var parent = 102;
                var cas2 = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent=' + parent + '&ex=' + XId;
                $.ajax({
                    url:"../controller/getContent.php",
                    type:"get",
                    data:cas2,
                    async:true,
                    dataType:"json",
                    success: function (data) {
                        // var data = JSON.parse(data);
                        xian.innerHTML = '';
                        for (var i = 0; i < data.length; i++) {
                            var Option = document.createElement('option');
                            Option.innerHTML = data[i].TEXT;
                            Option.value = data[i].ID;
                            xian.appendChild(Option);

                        }
                    }
                });
            }
		})
	},
    //获得县信息，渲染
	getXian:function(){
		var SHId = shi.value;
		var parent = 102;
		var county = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent='+parent+'&ex='+SHId;
		$.ajax({
            url:"../controller/getContent.php",
            type:"get",
			data:county,
            async:true,
            dataType:"json",
			success:function (data) {
                // var data = JSON.parse(data);
                xian.innerHTML = '';
                for (var i = 0; i < data.length; i++) {
                    var Option = document.createElement('option');
                    Option.innerHTML = data[i].TEXT;
                    Option.value = data[i].ID;
                    xian.appendChild(Option);
                }
            }
    	})
	},
    //新增地址
	addAddress:function(user_ida,is_defaulta){
		var self=this;
		var addressa = document.querySelector('.qwer').value;
		var xian1a = document.querySelector('#xian').value;
		var citya = document.querySelector('#shi').value;
		var prova = document.querySelector('#sheng').value;
		var Namea= document.querySelector('.user-name-c').value;
		var mobia= document.querySelector('.mobile-num').value;
		if(addressa&&Namea&&mobia){
			if(TRT.verifyMobile(mobia)){
				var Case = 'trigger=1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8214A0FC29B30CFA2E0E9FC6DA2EFB7FEB1F0D3B9A47B7E4B28EBE5F4CB0C219852C4D2A439E794BCEA4219854B7166EE860932AF122EDD593D757C0B1A171D2E2CAE30E5406E3BBD35659C81CB4440C6886C5C7A28DEDE937DD1F5D277CA012B6F88BF30C49C9B50517A02861ABE9A08E3BDC9B5E1B6995379709C4118736C7A141A722A2532383776E9915BEE544E930D331F89604055C23AE3E5DC7810EE4CD0E4BEB15E5460EA4CFD37A7E86EBA4FDE2A8886CBBF2BAB0960925733CC824A6FF48F2FAC7E21A53F&user_id='+user_ida+'&formData=[{"MOBILE":'+mobia+',"NAME":"'+Namea+'","PROVINCE":'+prova+',"CITY":'+citya+',"XIAN":'+xian1a+',"ADDRESS":"'+addressa+'","IS_DEFAULT":'+is_defaulta+'}]';
				$.ajax({
                    url:"../controller/getContent.php",
                    type:"get",
					data:Case,
                    async:true,
                    dataType:"json",
					success:function (data) {
                        // var res = JSON.parse(data)
                        if (data.result == "SUCCESS") {
                            address.toast("添加新地址成功");
                            location.href = document.referrer;
                        } else {
                            address.toast(data.result)
                        }
                    }
            	})
			}else{
				address.toast("请输入正确的手机号");
			}
			
		}else{
			if(Namea==""){
				address.toast("请填写姓名");
			}else if(mobia==""){
				address.toast("请填写手机号");
			}else if(addressa==""){
				address.toast("请填详细地址");
			}
			
		}	
	},
    //显示提示信息的盒子 例如：添加成功
	toast:function(str){
		$div=$("<div>"+str+"</div>");
        $div.css({"color":"#fff","background":"rgba(0,0,0,0.8)",
            "border-radius":"5px","position":"absolute","bottom":"20px",
            "left":"50%","transform":"translateX(-50%)","padding":"5px 10px"
        });
        $("body").append($div);
        $div.fadeOut(4000);
	}
};
//修改地址信息页面
var address_editor={
	is_default:0,
	getSingleAddress:function(user_id,oid){
		var single = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C23691EC0B9D99CC500296E8E63812F039AF9442B35772BF454BE55FB1839BE2D290077A379D2372C237B643061387CC424059F4AEC504BBEB5227DB987DB90A0C098148ED2A4DC918AB87417B4B1E158844DD6D2649D527B19E8F0000E7D75D3C15&user_id='+user_id;
    	
	    $.ajax({
            url:"../controller/getContent.php",
            type:"get",
            async:true,
			data:single,
            dataType:"json",
			success:function (data) {
                $(data.data).each(function () {
                    if ($(this)[0].OID == oid) {
                        $(".user-name-c").val($(this)[0].CONSIGNEE);
                        $(".mobile-num").val($(this)[0].CONSIGNEE_MOBILE)
                        $("#xian").html("<option value='" + $(this)[0].XIAN + "'>" + $(this)[0].XIAN_DESC + "</option>")
                        address_editor.getProvince($(this)[0].PROVINCE)
                        address_editor.getCity($(this)[0].PROVINCE, $(this)[0].CITY)
                        address_editor.getXian($(this)[0].CITY, $(this)[0].XIAN)
                        $("#add").val($(this)[0].ADDRESS)
                        if ($(this)[0].IS_DEFAULT) {
                            address_editor.is_default = 1;
                            $(".icon-dui").show()
                        } else {
                            address_editor.is_default = 0;
                            $(".icon-dui").hide()
                        }
                    }
                })
            }
		})
	},
    //获得省信息，渲染
	getProvince:function(provinceId){
		var self=this;
		var province = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent=100';
		$.ajax({
            url:"../controller/getContent.php",
            type:"get",
			data:province,
            async:true,
            dataType:"json",
			success:function (data) {
                // var data = JSON.parse(data);
                $("#sheng").html("");
                $(data).each(function (index) {
                    if ($(this)[0].ID != 540000 && $(this)[0].ID != 650000) {
                        $ops = $("<option value='" + $(this)[0].ID + "'>" + $(this)[0].TEXT + "</option>")
                        $("#sheng").append($ops)
                    }

                });
                // self.getCity($("#sheng").find("option:selected").val())
                if (provinceId) {
                    $("#sheng").val(provinceId)
                } else {
                    self.getCity($("#sheng").find("option:selected").val())
                }
            }
		})
	},
    //获得市信息，渲染
	getCity:function(provinceId,cityId){
		var self=this;
		var parent = 101;
		var city = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent='+parent+'&ex='+provinceId;
		$.ajax({
            url:"../controller/getContent.php",
            type:"get",
            async:true,
			data:city,
            dataType:"json",
            success:function (data) {
                // var data = JSON.parse(data);
                $("#shi").html("");
                $(data).each(function () {
                    $ops = $("<option value='" + $(this)[0].ID + "'>" + $(this)[0].TEXT + "</option>")
                    $("#shi").append($ops)
                });
                // self.getXian($("#shi").find("option:selected").val())
                if (cityId) {
                    $("#shi").val(cityId)
                } else {
                    self.getXian($("#shi").find("option:selected").val())
                }
            }
		})
	},
    //获得县信息，渲染
	getXian:function(cityId,xianId){
		var parent = 102;
		var county = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4590E6F40E87BB9F8377407D6BF70567C05502E11BBCC42D91680834797BBCB10D052E04584629630458DF7566360BE2A4896EE0323699BBDBC&parent='+parent+'&ex='+cityId;
		$.ajax({
            url:"../controller/getContent.php",
            type:"get",
            async:true,
            data:county,
            dataType:"json",
            success:function (data) {
                // var data = JSON.parse(data);
                $("#xian").html("")
                $(data).each(function () {
                    $ops = $("<option value='" + $(this)[0].ID + "'>" + $(this)[0].TEXT + "</option>")
                    $("#xian").append($ops)
                });
                if (xianId) {
                    $("#xian").val(xianId)
                }
            }
		})
	},
    //修改后更新的地址
	updataAddress:function(user_id,Oid){
		var addressa=$('#add').val();
		var Namea=$('.user-name-c').val();
		var mobia=$(".mobile-num").val();
		if(addressa&&Namea&&mobia){
			if(TRT.verifyMobile(mobia)){
				var formData=[{
					"MOBILE":$(".mobile-num").val(),
					"NAME":$('.user-name-c').val(),
					"PROVINCE":$('#sheng').val(),
					"CITY":$('#shi').val(),
					"XIAN":$('#xian').val(),
					"ADDRESS":$('#add').val(),
					"IS_DEFAULT":address_editor.is_default
				}];
				var Case={
					trigger:'1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8211C13017B777DEA7DAC773FBD20043BFACAB4AD581CE52F08A3098B277458163264D578D16F7724D3E4E7B283507705B76EE1186A2808F88B3E0779FD26EEC451576C9546BEFCDDA42E0F5E25B7C31AC1D822F1B0D0ED21C01D29F61B698BB219CCABB24AF46E7E2FFCB9D2AE2DF6CBF51A02A4006849FB03AB1B44030C7F47E5EF0679BD19AC3EF7A79474BF7EEACDCE143557B624F50E356244D41ACB3B99CBDEEB835FE50C4902B124DA94AEBCF3F4CADADE9DDB1FE8821A9EC40F0CD7F1A611977EBA4B0AAEA82B6170FB3DFF4EEF893C24E4C5DF1527B89FF1A053A0A857',
					user_id:user_id,
					oid:Oid,
					formData:JSON.stringify(formData)
				};
				$.ajax({
					url:"../controller/getContent.php",
					type:"get",
					data:Case,
					dataType:"json",
					success:function(data){
						if(data.result=="SUCCESS"){
							$.cookie("hasAddress",Oid);
							location.href=document.referrer;
						}else{
                            address_editor.toast(data.result)
                        }
					}
				})
			}else{
				address_editor.toast("请输入正确的手机号");
			}
			
		}else{
			if(Namea==""){
				address_editor.toast("请填写姓名");
			}else if(mobia==""){
				address_editor.toast("请填写手机号");
			}else if(addressa==""){
				address_editor.toast("请填详细地址");
			}
			
		}	
		
	},
    //显示提示信息的盒子 例如：添加成功
	toast:function(str){
		$div=$("<div>"+str+"</div>");
        $div.css({"color":"#fff","background":"rgba(0,0,0,0.8)",
            "border-radius":"5px","position":"absolute","bottom":"20px",
            "left":"50%","transform":"translateX(-50%)","padding":"5px 10px"
        });
        $("body").append($div);
        $div.fadeOut(4000);
	}
};
//收货地址信息页面
var address_mainReceipt={
    //渲染页面
    Addressmaintenance:function (){
        var back = document.querySelector('.back');
        back.onclick=function(){
            window.history.go(-1);
        };
        userTrue(user_id);
        function userTrue(user_id){
            var user_message = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C23691EC0B9D99CC500296E8E63812F039AF9442B35772BF454BE55FB1839BE2D290077A379D2372C237B643061387CC424059F4AEC504BBEB5227DB987DB90A0C098148ED2A4DC918AB87417B4B1E158844DD6D2649D527B19E8F0000E7D75D3C15&user_id='+user_id;
            $.ajax({
                url:"../controller/getContent.php",
                type:"get",
                data:user_message,
                dataType:"json",
                async:true,
                success:function (data) {

                    $(data.data).each(function () {
                        if ($(this)[0].IS_DEFAULT == 1) {
                        }
                    });

                    var box = document.querySelector('.box');

                    box.innerHTML = '';
                    var box11 = document.createElement('div');
                    box11.className = 'box1';
                    box.appendChild(box11);
                    var box1 = document.querySelector('.box1');
                    for (var i = 0; i < data.data.length; i++) {
                        var address_mt = document.createElement('div');
                        address_mt.className = 'address-mt';
                        address_mt.setAttribute("sign", data.data[i].OID);

                        var user_infor = document.createElement('div');
                        user_infor.className = 'user-infor';
                        var user_address_mt = document.createElement('div');
                        user_address_mt.className = 'user-address-mt';
                        user_address_mt.innerHTML = data.data[i].ADDRESS;
                        var set_up = document.createElement('div');
                        set_up.className = 'set-up';


                        var name_z = document.createElement('div');
                        name_z.className = 'name-z';
                        name_z.innerHTML = data.data[i].CONSIGNEE;
                        var Mobile_phone_z = document.createElement('div');
                        Mobile_phone_z.className = 'Mobile-phone-z';
                        Mobile_phone_z.innerHTML = data.data[i].CONSIGNEE_MOBILE;

                        var set_default = document.createElement('div');
                        set_default.className = 'set-default';
                        var set_edit = document.createElement('div');
                        set_edit.className = 'set-edit';


                        var set_default_tb = document.createElement('div');
                        set_default_tb.className = 'set-default-tb';
                        var createI = document.createElement('i');
                        createI.className = 'iconfont icon-dui bj';
                        if (data.data[i].IS_DEFAULT == 1) {
                            createI.style.display = 'block';
                        } else {
                            createI.style.display = 'none';
                        }
                        var span = document.createElement('span');
                        span.innerHTML = '默认地址';


                        var set_default_1 = document.createElement('div');
                        set_default_1.className = 'set-default-1 bianji';
                        var createTow = document.createElement('i');
                        createTow.className = 'iconfont icon-bianji2';
                        var span1 = document.createElement('span');
                        span1.innerHTML = '编辑';

                        var set_default_1_a = document.createElement('div');
                        set_default_1_a.className = 'set-default-1';
                        var createThree = document.createElement('i');
                        createThree.className = 'iconfont icon-shanchu';
                        var span2 = document.createElement('span');
                        span2.innerHTML = '删除';
                        span2.className = 'delete';

                        var province_aa = document.createElement('div');
                        province_aa.className = 'province_aa';

                        var shengfen = document.createElement('div');
                        shengfen.className = 'province_aa_1 shengfen';
                        shengfen.innerHTML = data.data[i].PROVINCE_DESC;
                        shengfen.setAttribute("val", data.data[i].PROVINCE);
                        var shiqu = document.createElement('div');
                        shiqu.className = 'province_aa_1 shiqu';
                        shiqu.innerHTML = data.data[i].CITY_DESC;
                        shiqu.setAttribute("val", data.data[i].CITY);
                        var quxian = document.createElement('div');
                        quxian.className = 'province_aa_1 quxian';
                        quxian.innerHTML = data.data[i].XIAN_DESC;
                        quxian.setAttribute("val", data.data[i].XIAN);

                        province_aa.appendChild(shengfen);
                        province_aa.appendChild(shiqu);
                        province_aa.appendChild(quxian);

                        set_default_1_a.appendChild(createThree);
                        set_default_1_a.appendChild(span2);

                        set_default_1.appendChild(createTow);
                        set_default_1.appendChild(span1);

                        set_edit.appendChild(set_default_1);
                        set_edit.appendChild(set_default_1_a);

                        set_default_tb.appendChild(createI);
                        set_default.appendChild(set_default_tb);
                        set_default.appendChild(span);

                        user_infor.appendChild(name_z);
                        user_infor.appendChild(Mobile_phone_z);


                        set_up.appendChild(set_default);
                        set_up.appendChild(set_edit);


                        address_mt.appendChild(user_infor);
                        address_mt.appendChild(province_aa);
                        address_mt.appendChild(user_address_mt);
                        address_mt.appendChild(set_up);
                        if (data.data[i].IS_DEFAULT == 1) {
                            box1.appendChild(address_mt);
                        } else {
                            box.appendChild(address_mt);
                        }

                    }
                    var delete1 = document.querySelectorAll('.delete');
                    var set_default = document.querySelectorAll('.set-default');
                    var edit = document.querySelectorAll('.bj');
                    for (var i = 0; i < edit.length; i++) {
                        set_default[i].index = i;
                        set_default[i].onclick = function () {
                        }
                    }

                    var Address_mt = document.querySelectorAll('.address-mt');

                    for (var i = 0; i < delete1.length; i++) {
                        delete1[i].index = i;
                        delete1[i].onclick = function () {
                            var Oid = Address_mt[this.index].attributes["sign"].nodeValue;
                            var msg = "您真的确定要删除吗？\n\n请确认！";
                            if (confirm(msg) == true) {
                                var Case = 'trigger=1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E8218B407E39CCE82D5B3A1D62E360BE730581896D22EBCD54F89A475AF7894E075429AB777EEA1E37AE05C97EAC9727EDCC74A7C310D4E8A884E5DE6DA58C491D7AB8FEF8F3D224ADC0C78E330EEF318FD52A6E1673C429040ED193345CDA85542B9B33174D2F25C9DE5CB98A3CF708B8589BD2A1DA863BA6C052839EF7F254303D47C76E5984D9A0BC7C412D338DF05A4E26251756CE26593A9D1B69C5BD5E8EBC&user_id=' + user_id + '&oid=' + Oid;
                                $.ajax({
                                    url:"../controller/getContent.php",
                                    type:"get",
                                    data:Case,
                                    dataType:"json",
                                    async:true,
                                    success:function (data) {
                                        userTrue(user_id);
                                    }
                                });

                                return true;
                            } else {
                                return true;
                            }

                        }
                    }
                    var compile = document.querySelectorAll('.bianji');
                    var name_z_q = document.querySelectorAll('.name-z');
                    for (var i = 0; i < compile.length; i++) {
                        compile[i].index = i;
                        compile[i].onclick = function () {
                            window.location.href = '../php/address_editor.php?sign=' + Address_mt[this.index].attributes["sign"].nodeValue;
                        }
                    }

                    function nm(obj, i) {
                        return obj[i].innerHTML;
                    }
                }
            })
        }

    }
};