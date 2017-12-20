window.onload=function(){
        details();
        function details(){
			var btn = document.querySelector('.btn');
				btn.onclick=function(){
					window.history.go(-1);
				}
        }
        var back = document.querySelector('.back');
			 	back.onclick=function(){
			 		window.history.go(-1);
		 }
		var Ourl = window.location.href;

		var Ourl1 = Ourl.toString();
		var OId = Ourl1.indexOf('PRODUCT_ID');
		var Oimg = Ourl1.indexOf('&PREVIEW_IMAGE');
		var Oidd = Ourl1.slice(OId,Oimg);
		var dd = Oidd.indexOf('=');
		var user_id = Oidd.slice(dd+1);
		var pname = Ourl1.indexOf('&PRODUCT_NAME');
		var jq = Ourl1.slice(Oimg,pname);
		var dda = jq.indexOf('=');
		var dq_img = jq.slice(dda+1)
		var price = Ourl1.indexOf('&RP_PRICE');
		var jqb = Ourl1.slice(pname,price);
		var ddb = jqb.indexOf('=');
		var mc = jqb.slice(ddb+1);
		var spec = Ourl1.indexOf('&SPEC');
		var jqc = Ourl1.slice(price,spec);
		var ddc = jqc.indexOf('=');
		var jg = jqc.slice(ddc+1);
		var description = Ourl1.indexOf('&DESCRIPTION');
		var jqd = Ourl1.slice(spec,description);
		var ddd = jqd.indexOf('=');
		var zl = jqd.slice(ddd+1);
		var description = Ourl1.indexOf('&DESCRIPTION');
		var jqe = Ourl1.slice(description);
		var dde = jqe.indexOf('=');
		var js = jqe.slice(dde+1);
		if(js=="null"){
			js=""
		}
		var details_img = document.querySelector('.details-img');
		var com_name = document.querySelector('.com-name');
		var Oprice = document.querySelector('.danjia');
		var weight = document.querySelector('.weight');
		var commodity_comment = document.querySelector('.commodity-comment');
		details_img.src = dq_img;
		com_name.innerHTML = decodeURI(mc);
		Oprice.innerHTML = jg;
		weight.innerHTML = decodeURIComponent(zl);
		commodity_comment.innerHTML =decodeURI(js);
		
}