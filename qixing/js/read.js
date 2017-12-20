window.onload=function(){
	read();
	function read(){
//		var user_id=1;
//		var oid = 1;
//		var cas = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C236E4C26163EFE20F23704B0DA08D27C00DDEF23565797275C6F27F4669FB87AB7E1AC50B7B7670FA54ED270F980B0C130919CE184ABC88FF8BB6B9DF9715A9A884458234AE90EFAA1436FCE6232B75141FBF1C3FC831BBF6D1EC1A94135C8D9A34FFA64693394509D5B42E5AA960834281981EF5B264639B82D421954CF7FF923E57362BC11EE5BF7C3A54F77CBD1630915BF3049C7DC86B2C&user_id='+user_id+'&oid='+oid;
	    //		ajax('get','wechat.trtjklife.com/controller/getContent.php',cas,function(data){
//			var data = JSON.parse(data);
//			
//			var txt = document.querySelector('.text');
//			txt.innerHTML = data.data[0].MESSAGE;
//		})
//		

		var Ourl = window.location.href;
		var zf = Ourl.indexOf('?');
		var zf1 = Ourl.slice(zf+1);
		var zf2 = zf1.indexOf('=');
		var zf3 = zf1.slice(zf2+1);
		var txt = document.querySelector('.text');
			txt.innerHTML = zf3;
	var back = document.querySelector('.back');
 	back.onclick=function(){
 		window.history.go(-1);
 	}
	}
}
function readNews(user_id,formData){
		$.ajax({
            url:news.http,
            type:"get",
            dataType:"json",
            data:{
                trigger:'1DE0C2F5E42064849326890134DDF236F8D32087B3DE4E37EA403266E79DB104E60647414B892CC4D660E09E8B827DA45CDF9A734ED2F2745E2056DAAA4914CDFFA93E6F59FE2AE21B73E5AACA229C99D72F6884630745977E714DC25B3BB685903818BC56A57B0CB5330329B1C3896C66E67B2246427A66981756CEB3F408DB48F5FCE3DAE697FF54EBBEEBFD210CB3F8C7CBF1123A7FBD517EF51456428550',
                user_id:user_id,
                formData:JSON.stringify(formData)
            },
            success:function(data){
                
                
            }
        })
	},