
window.onload=function(){
	var back = document.querySelector('.back');
			 	back.onclick=function(){
			 		window.history.go(-1);
			 }
	var user_id=<?php echo $_SESSION['uid']?>;
	var Oid = 555666775119157;
	var cas = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C236AC75EBAADDF608FBC4C2B864A006ABEC82FF6284697BF1075975BC67CAA0D2A5FD43F41494CF45BCEF62FB09A44D3185BD0EDC28B5386220D5332419D7331660BBDBEF3E3235E3D9854F16FBB06E4F2DA4C9AC02F924808C68D1EC7862B863D1&oid='+Oid+'&user_id='+user_id;
	ajax('get', 'http://qixingshangcheng.pstech360.com/controller/getContent.php', cas, function (data) {
		var hw = document.documentElement.clientWidth;
		
		var data = JSON.parse(data);
		var data_set = data.data[0];
		var order_number = document.querySelector('.order_number');
		var consignee_name = document.querySelector('.consignee_name');
		var add_infor = document.querySelector('.add_infor');
		var logistics_information = document.querySelector('.logistics-information');
		order_number.innerHTML = data_set.DELIVERY_HEADER_ID;
		consignee_name.innerHTML = data_set.CONSIGNEE;
		add_infor.innerHTML = data_set.CONSIGNEE_ADDRESS;
		for(var i = 0;i<data.data.length;i++){
			if(i==data.data.length-1){
				var div_wrap = document.createElement('div');
				div_wrap.className = 'logistics-time';
				var div_parent1 = document.createElement('div');
				div_parent1.className = 'logi-time';
				var div_parent2 =  document.createElement('div');
				div_parent2.className = 'logi-information';
				div_parent2.innerHTML = data.data[i].NEXT_STATION+' : '+data.data[i].TRACK_INFO;
				var div_icon = document.createElement('div');
				div_icon.className='flow-chart';
				if(hw>=750){
					div_icon.style.left = '3.5rem';
				}
				var div_date = document.createElement('div');
				div_date.className = 'data';
				div_date.innerHTML = data.data[i].CREATION_DATE;
				var div_hour = document.createElement('div');
				div_hour.className = 'hour';
				div_hour.innerHTML = data.data[i].CREATION_TIME;
				var div_circle = document.createElement('div');
				div_circle.className = 'circle';
				if(data.data[i].STATUS == 1){
					div_circle.style.background="rgb(0,199,242)";
				}else{
					div_circle.style.background="rgb(187,187,187)";
				}
				div_parent1.appendChild(div_date);
				div_parent1.appendChild(div_hour);
				div_icon.appendChild(div_circle);
				div_wrap.appendChild(div_parent1);
				div_wrap.appendChild(div_parent2);
				div_wrap.appendChild(div_icon);
				div_wrap.appendChild(div_parent1);
				div_wrap.appendChild(div_parent2);
				div_wrap.appendChild(div_icon);
				logistics_information.appendChild(div_wrap);
				return;
			}
			var div_wrap = document.createElement('div');
				div_wrap.className = 'logistics-time';
				var div_parent1 = document.createElement('div');
				div_parent1.className = 'logi-time';
				var div_parent2 =  document.createElement('div');
				div_parent2.className = 'logi-information';
				div_parent2.innerHTML = data.data[i].NEXT_STATION+' : '+data.data[i].TRACK_INFO;
				var div_icon = document.createElement('div');
				div_icon.className='flow-chart';
				if(hw>=750){
					div_icon.style.left = '3.5rem';
				}
				var div_date = document.createElement('div');
				div_date.className = 'data';
				div_date.innerHTML = data.data[i].CREATION_DATE;
				var div_hour = document.createElement('div');
				div_hour.className = 'hour';
				div_hour.innerHTML = data.data[i].CREATION_TIME;
				var div_circle = document.createElement('div');
				div_circle.className = 'circle';
				var div_rectangle = document.createElement('div');
				div_rectangle.className = 'rectangle';
				if(data.data[i].STATUS == 1){
					div_circle.style.background="rgb(0,199,242)";
					div_rectangle.style.background="rgb(0,199,242)";
				}else{
					div_circle.style.background="rgb(187,187,187)";
					div_rectangle.style.background="rgb(187,187,187)";
				}
				div_parent1.appendChild(div_date);
				div_parent1.appendChild(div_hour);
				div_icon.appendChild(div_circle);
				div_icon.appendChild(div_rectangle);
				div_wrap.appendChild(div_parent1);
				div_wrap.appendChild(div_parent2);
				div_wrap.appendChild(div_icon);
				div_wrap.appendChild(div_parent1);
				div_wrap.appendChild(div_parent2);
				div_wrap.appendChild(div_icon);
				logistics_information.appendChild(div_wrap);

		}
	})
}

