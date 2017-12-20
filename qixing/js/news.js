
//消息
var news={
	http:"../controller/getContent.php",
	getNews:function(user_id){
		var wrap = document.querySelector('.box');
		// var a = true;
		var back = document.querySelector('.back');
	 	back.onclick=function(){
	 		window.history.go(-1);
	 	};
		var cas = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C236E4C26163EFE20F23704B0DA08D27C00DDEF23565797275C6F27F4669FB87AB7E1AC50B7B7670FA54ED270F980B0C130919CE184ABC88FF8BB6B9DF9715A9A884458234AE90EFAA1436FCE6232B75141FBF1C3FC831BBF6D1EC1A94135C8D9A34FFA64693394509D5B42E5AA960834281981EF5B264639B82D421954CF7FF923E57362BC11EE5BF7C3A54F77CBD1630915BF3049C7DC86B2C&user_id='+user_id;
		$.ajax({
			url:news.http,
			type:"get",
			data:cas,
			dataType:"json",
			async:true,
			success:function (data) {
                for (var i = 0; i < data.data.length; i++) {
                    var Message = document.createElement('div');

                    Message.className = 'Message-center';
                    Message.index = i;
                    Message.setAttribute('data-oid', data.data[i].OID);
                    Message.onclick = function () {
                        window.location.href = '../php/read.php?text=' + data.data[this.index].OID;
                    };
                    var mailbox = document.createElement('div');
                    mailbox.className = 'mailbox-icon';
                    var caption = document.createElement('div');
                    caption.className = 'text-caption';
                    var box = document.createElement('div');
                    box.className = 'selection-box';


                    var read1 = document.createElement('i');
                    read1.className = 'iconfont icon-youxiang read1';
                    var unread = document.createElement('i');
                    unread.className = 'iconfont icon-youxiang1 unread';
                    if (data.data[i].ISREAD == 1) {
                        read1.style.display = 'none';
                        unread.style.display = 'block';
                    } else {
                        read1.style.display = 'block';
                        unread.style.display = 'none';
                    }

                    var text_title = document.createElement('p');
                    text_title.className = 'text-title';
                    text_title.innerHTML = data.data[i].MESSAGE_TITLE;
                    var text_time = document.createElement('p');
                    text_time.className = 'text-time';
                    var ti =
                        text_time.innerHTML = data.data[i].CREATION_TIME.replace('T', ' ');
                    var choice = document.createElement('i');
                    choice.className = 'iconfont icon-dui choice fjiu';
                    mailbox.appendChild(read1);
                    mailbox.appendChild(unread);
                    caption.appendChild(text_title);
                    caption.appendChild(text_time);
                    box.appendChild(choice);
                    Message.appendChild(mailbox);
                    Message.appendChild(caption);
                    Message.appendChild(box);
                    wrap.appendChild(Message);
                }

                var edit = document.querySelector('.edit1');
                var select1 = document.querySelector('.select-1');
                var remove_select = document.querySelector('.remove-select');
                var wrap_p = document.querySelector('.wrap-p');
                var selection_box = document.querySelectorAll('.selection-box');
                var unread = document.querySelectorAll('.unread');
                var read1 = document.querySelectorAll('.read1');
                var choice = document.querySelectorAll('.choice');
                var removal_message = document.querySelector('.removal-message');
                var read = document.querySelector('.read');
                var Delete = document.querySelector('.delete');
                edit.onclick = function () {
                    for (var i = 0; i < choice.length; i++) {
                        selection_box[i].style.display = "block";
                    }
                    wrap_p.style.display = "none";
                    select1.style.display = "block";
                    removal_message.style.display = "block";
                };
                select1.onclick = function () {
                    for (var i = 0; i < choice.length; i++) {
                        choice[i].style.display = "block";
                        selection_box[i].aa = 1;
                    }
                    wrap_p.style.display = "none";
                    this.style.display = "none";
                    remove_select.style.display = "block";
                };
                remove_select.onclick = function () {
                    for (var i = 0; i < choice.length; i++) {
                        choice[i].style.display = "none";
                        selection_box[i].aa = 0;
                    }
                    wrap_p.style.display = "none";
                    select1.style.display = "block";
                    remove_select.style.display = "none";
                };
                var b = true;
                for (var i = 0; i < selection_box.length; i++) {
                    selection_box[i].index = i;
                    selection_box[i].onclick = function (ev) {
                        var ev = ev || event;
                        if (this.aa) {
                            choice[this.index].style.display = "none";
                            this.aa = 0;
                        } else {
                            choice[this.index].style.display = "block";
                            this.aa = 1;
                        }
                        ev.cancelBubble = true;
                    }
                }

            }
		})
	},
	getSingleNew:function(oid,user_id){
		var cas = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C236E4C26163EFE20F23704B0DA08D27C00DDEF23565797275C6F27F4669FB87AB7E1AC50B7B7670FA54ED270F980B0C130919CE184ABC88FF8BB6B9DF9715A9A884458234AE90EFAA1436FCE6232B75141FBF1C3FC831BBF6D1EC1A94135C8D9A34FFA64693394509D5B42E5AA960834281981EF5B264639B82D421954CF7FF923EA1F118E254F640496080258E282759FFB81F4081DB23AC25B2E387F00266F6B20BE3CFFB7827BDAC&user_id='+user_id;
		$.ajax({
            url:news.http,
            type:"get",
            data:cas,
            dataType:"json",
            async:true,
            success:function (data) {
                $(data.data).each(function(){
                    if(this.OID == oid) {
                        $(".box .text").html(this.MESSAGE).parent().next().children(".time").html(this.CREATION_TIME.replace("T", " "))
                    }
                })
        	}
		})
	},
	readNews:function(user_id,formData){
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
                if(data.result=="SUCCESS"){
                	window.location.href = location.href+'?time='+((new Date()).getTime());
                }
                
            }
        })
	},
	deleteNews:function(user_id,formData){
		$.ajax({
            url:news.http,
            type:"get",
            dataType:"json",
            data:{
                trigger:'1DE0C2F5E42064849326890134DDF2360F0BCA58CEB777B233E371232795751FBF2F691C47EB41DB88E1B0FC84236E9E32ED050318492286859BC5129A382D633B3B79F76892DC1C92517B161018177F3A92084DFA98BD808165A09F09D0908010D7CA44F0BBAC59AA9240BDF9144EC45C3ABF93B502331A975AF42AFB52860E8104ECFE49B3A3AF54A8A5D8BB6BDFE7609D82E641A252AEEA1B2B3213FBF3A7A2D29D3E7975BBAE',
                user_id:user_id,
                formData:JSON.stringify(formData)
            },
            success:function(data){
                if(data.result=="SUCCESS"){
                	window.location.href = location.href+'?time='+((new Date()).getTime());
                }
            }
        })
	}
}

//推荐会员
var member={
	getMember:function(user_id){
		var data_list = document.querySelectorAll('.data-list'); 
		var information_main = document.querySelectorAll('.information-main');
		var b = true;
		var a = 1;
				
				
		var cas = 'trigger=1DE0C2F5E4206484F248E69D5B28B86CFFF89701A7C18404419DD09D26C52BEB8EDD4750BBEB591907B8BC2FD692F74ACF8CD268CF455B4789212104B9742A76B76625A4393664669470BC3D3345E6811F88457A1516645B49181F93C65124DC353E7CD2CFFBCEF31E9D33653A90850FBC8B89222187C81FCDDB726026F7DB047438E5CEBC1B97A9497E8B07E2A727F673BF57F51F56CFCBA2F48A0E4C7CBC06563D40D6248A5A52DBB5EEA96A98B36F44D9083A0BE52C70EC50DCD19635B5E515BA31A7D7F6753FDF1656186E90F69CDCE6D95EF2A9ECA9EC117BCEB3828E418A612EBDD3EF77128D55EDAC1D87578DFA66BE3BB5793E536D41D032D0ADA1A8980718766A8531463D615E78F2D574D3778905912D709EAD897AD732413ADC5E266D0F99A8CBCA8BA2889E0E0BBD8CF90E0FB15B46A4E4CF42E5DC8A298FE0CDA7B42B4A70071F6817C8FA0329101FCF1A92E0706441FEB3C9C24E991B155F9E&user_id='+user_id;
		$.ajax({
            url:news.http,
            type:"get",
            data:cas,
            dataType:"json",
            async:true,
            success:function (data) {
                $(data.data).each(function () {
                    $minfo = $('<div class="information information-main">'
                        + '<div class="name-1 common-data">' + $(this)[0].NAME + '</div>'
                        + '<div class="member-1 common-data">' + $(this)[0].USER_ALIAS + '</div>'
                        + '<div class="cumulative-1 common-data">' + $(this)[0].TOTAL_PV + '</div>'

                        + '</div>')
                    $('.member-information').append($minfo);
                    if ($(this)[0].ORDER_INFO) {
                        $orderInfo = JSON.parse($(this)[0].ORDER_INFO);
                        $orderDom = $('<div data-state=false class="data-list">'
                            + '<div class="data-list-1">'
                            + '<div class="time data-head">完成时间</div>'
                            + '<div class="amount-of-money data-head">订单金额</div>'
                            + '</div>'
                            + '</div>');
                        $($orderInfo).each(function () {
                            $oInfo = $('<div class="data-list-1">'
                                + '<div class="time-d data-body">'
                                + '<span>' + $(this)[0].time + '</span>'
                                + '</div>'
                                + '<div class="money data-body">' + $(this)[0].pv + '</div>'
                                + '</div>')
                            $orderDom.append($oInfo)

                        })
                        $('.member-information').append($orderDom)
                    } else {
                        $orderDom = $('<div data-state=false class="data-list" style="text-align:center">还没有订单</div>');
                        $('.member-information').append($orderDom)
                    }
                })
                $('.information-main').each(function () {
                    $(this).click(function () {
                        var state = $(this).next().attr('data-state');
                        if (state == "false") {
                            $(this).next().show();
                            $(this).next().attr('data-state', "true");
                        } else {
                            $(this).next().hide();
                            $(this).next().attr('data-state', "false");
                        }

                    })
                })
            }
		})
	}
};