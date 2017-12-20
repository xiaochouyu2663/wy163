// (function(){
	var createOrder={
	//运费trigger
	freightTrigger:"1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E82161BD7CB0D888EE4A5DC98E185943E8FC4B368B33AABFD61D7203A73836B495F1A14FBA23B2DE1744A6F22BC73C515DB167E9D9886AACCD41720F4CC4AA9E5DB221B8BB51899251712001A5FF0B6598E1EA8265DCD15EEC64B1BD75653E761086D0B0E615E7BD2CC421662986975C0354FDA31EBFC24426A9E2A84066536DCC1CA2F1C5C7DA3F4892A9A10E24D81C559733F9A4979E597678A5D8C82A66F1318555008E3EDFB7FAB23D3EB37DFAF561AE",
	addressTigger:"1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C23691EC0B9D99CC500296E8E63812F039AF9442B35772BF454BE55FB1839BE2D290077A379D2372C237B643061387CC424059F4AEC504BBEB5227DB987DB90A0C098148ED2A4DC918AB87417B4B1E158844DD6D2649D527B19E8F0000E7D75D3C15",
	getYreight:function(){
		$.ajax({
			url:http,
			type:"get",
			success:function(data){
			}
		})
	},
	getAddress:function(addressTigger,user_id){
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
				}else{
					var resultData=res.data
					$(resultData).each(function(index){
						if($(this)[0]['IS_DEFAULT']){
							$str=$('<a href="./address_editor.php"><div class="modify">修改</div></a>'
					    	+'<h3>配送信息</h3>'
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
							$str=$('<a href="./new-address.php"><div class="modify">修改</div></a>'
					    	+'<h3>配送信息</h3>'
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
					})
				}

			}
		})
	}
}

