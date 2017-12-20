var orderType={};
var order={
    //订单列表
    orderUrl:'1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB03A0F907285BF231385E8762FBCE1A343C3B5E879B5D860D2A653E6591AC499B5CAC7979A76E17933E079571537B236D06C4C1B032C01E4451937C08E0EE9214DF0D829EE6BFB719778FAC9241092CD37150027E2FD947EC87598D8D26DEB118DD9CD58EAAE1694E371F524FCA62861AB335D9C2F8E890887',
    //订单头
    orderHeadUrl:'1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB03A0F907285BF231385E8762FBCE1A343C3B5E879B5D860D2A653E6591AC499B5CAC7979A76E17933E079571537B236D06C4C1B032C01E4451937C08E0EE9214DF0D829EE6BFB719778FAC9241092CD370428C361A4E4BC12A9AF88993C1762293086EA049F58ABE018572EF655E943C8618BD82BB480503B43AEDD523241A3E63ED963D35B31470E31F501D39CAC93B9',
    //取订单行
    orderBodyUrl:'1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB055F724513722BCF2637E950B31264A4C6B75AEF1C09BB7611358B0B3F0BFC26428E741FBC71C82924DC92C230BBE26E812BB49BA6A166879B9641CD5B53DA46C76A48CB828F3BE500B87142A61D80C92485E3838E5DD632D915A4D47E011644740408B02DC32029D508CE84A4D580C722DB631E82D7E14036F7AA8328DCB970060BC66E81B5A66CA1767E6776C47B9095ECDB799586A0AE7048ACD0839599ADA2387E5ADFA47D3DB1569AD63CDE36B8118D396C5882E16CD5C2D7B7FC2892360D5B7BB811D41E7653B44019A8C12E886',
    getAllOrder:function(orderUrl,user_id,payStatus){
        $.ajax({
            type: 'get',
            url: "../controller/getContent.php",
            dataType: 'json',
            data: {
                "trigger":orderUrl,
                "user_id": user_id
            },
            success: function(ags) {
                var data = ags.data;
                var main = $('.order_main');
                main.html("")
                $(data).each(function(){

                    if($(this)[0].ORDER_TYPE==5){
                        switch (payStatus) {
                            case 0:
                        
                                if($(this)[0].PAYMENT_STATUS==0){
                                   zt1 = '去支付';
                                    var content1 = $('<div class="order_main_list" type="'+$(this)[0].ORDER_TYPE+'" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>未付款</span><span class="order_main_integral">积分订单</span></p><a class="order_main_btn quzhifu ">'+zt1+'</a></div></div>')  
                                
                                }
                                main.append(content1);
                            break;
                            case 1:
                           
                                if($(this)[0].PAYMENT_STATUS==1){
                                    zt1 = '支付完成';
                                    var content1 = $('<div class="order_main_list" type="'+$(this)[0].ORDER_TYPE+'" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>已付款</span><span class="order_main_integral">积分订单</span></p><a class="order_main_btn zhifuwancheng ">'+zt1+'</a></div></div>')
                                
                                }
                                main.append(content1);
                            break;
                            default:
                            
                                if($(this)[0].PAYMENT_STATUS==1){
                                    zt1 = '支付完成';
                                    var content1 = $('<div class="order_main_list" type="'+$(this)[0].ORDER_TYPE+'" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>已付款</span><span class="order_main_integral">积分订单</span></p><a class="order_main_btn zhifuwancheng ">'+zt1+'</a></div></div>')
                                
                                }else{
                                    zt1 = '去支付';
                                    var content1 = $('<div class="order_main_list" type="'+$(this)[0].ORDER_TYPE+'" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li" sign='+$(this)[0].ORDER_HEADER_ID+' ><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>未付款</span><span class="order_main_integral">积分订单</span></p><a class="order_main_btn quzhifu ">'+zt1+'</a></div></div>')  
                                
                                }
                                main.append(content1);
                            break;
                        }
                    }else{
                        switch (payStatus) {
                            case 0:

                                if($(this)[0].PAYMENT_STATUS==0){
                                zt1 = '去支付';
                                var content = $('<div class="order_main_list" sign='+$(this)[0].ORDER_HEADER_ID+'><div class="order_main_li"><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>未付款</span></p><a class="order_main_btn quzhifu1 ">'+zt1+'</a></div></div>');
                                }
                                main.append(content);
                            break;
                            case 1:
                           
                        if($(this)[0].PAYMENT_STATUS==1){
                            zt1 = '支付完成';
                                var content = $('<div class="order_main_list" sign='+$(this)[0].ORDER_HEADER_ID+'><div class="order_main_li"><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>已付款</span></p><a class="order_main_btn zhifuwancheng1">'+zt1+'</a></div></div>');
                            
                                }
                                main.append(content);
                            break;
                            default:
                            
                            if($(this)[0].PAYMENT_STATUS==1){
                                zt1 = '支付完成';
                                var content = $('<div class="order_main_list" sign='+$(this)[0].ORDER_HEADER_ID+'><div class="order_main_li"><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>已付款</span></p><a class="order_main_btn zhifuwancheng1">'+zt1+'</a></div></div>');
                            
                            }else{
                                zt1 = '去支付';
                                var content = $('<div class="order_main_list" sign='+$(this)[0].ORDER_HEADER_ID+'><div class="order_main_li"><div class="order_main_li_fl order_main_li_pt"><p class="order_main_goods">'+$(this)[0].ORDER_NUMBER+'</p><p>￥<span>'+$(this)[0].REAL_AMOUNT+'</span></p></div><div class="order_main_li_fl"><p class="order_main_goods">积分&nbsp;:&nbsp;<span>'+$(this)[0].TOTAL_PV+'</span></p><p>'+$(this)[0].CREATION_TIME.replace("T"," ")+'</p></div></div><div class="order_main_state"><p class="order_main_goods"><span>状态&nbsp;:&nbsp;</span><span>未付款</span></p><a class="order_main_btn quzhifu1 ">'+zt1+'</a></div></div>');
                                
                            }
                            main.append(content);
                             break;
                        }
                        
                    }   
                })
                $('.order_main_list').click(function(){
                    window.location.href = './orderdetails.php?sign='+$(this).attr('sign');
                })
                $('.zhifuwancheng').css({"background":"#fff","color":"#f00","border":"1px solid gray"});
                $('.zhifuwancheng1').css({"background":"#fff","color":"#f00","border":"1px solid gray"});
                $('.zhifuwancheng').each(function(){
                    $(this).click(function(){
                        $(this).css({"outline":"none"})
                         event.stopPropagation();
                    }) 
                })
                $('.zhifuwancheng1').each(function(){
                    $(this).click(function(){
                       $(this).css({"outline":"none"})
                         event.stopPropagation();
                    })
                })
                $('.quzhifu1').each(function(v,o){
                    $(o).click(function(){
                        event.stopPropagation();
                        window.location.href = './settlement.php?sign='+$(this).parents(".order_main_list").attr('sign');
                    })
                })
            }
        })
    },
    getSingleOrder:function(user_id,oid,openId){
        $.ajax({
            type: 'get',
            url: "../controller/getContent.php",
            dataType: 'json',
            data: {
                "trigger":order.orderHeadUrl,
                "user_id": user_id,
                "oid":oid
            },
            success: function(ags) {
                
                $str=$('<h3>配送信息</h3>'
                        +'<div class="user-name">'
                            +'<input type="text"  class="user-name-ipt"/>'
                            +'<p class="user-p">'+ags.data[0].CONSIGNEE+'</p>'
                        +'</div>'
                        +'<div class="cell-phone">'
                            +'<input type="text"  class="cell-phone-ipt"/>'
                            +'<p class="cell-p">'+ags.data[0].CONSIGNEE_MOBILE+'</p>'
                        +'</div>'
                        +'<div class="address">'
                            +'<input type="text"  class="address-ipt"/>'
                            +'<p class="address-p">'+ags.data[0].PROVINCE_DESC+'-'+ags.data[0].CITY_DESC+'-'+ags.data[0].XIAN_DESC+'-'+ags.data[0].ADDRESS+'</p>'
                        +'</div>');
                $('.distribution-information').html($str);
                var order_type_name="";
                switch (ags.data[0].ORDER_TYPE){
                    case 1:
                    order_type_name='加盟订单';
                    break;
                    case 2:
                    order_type_name="升级订单";
                    break;
                    case 3:
                    order_type_name="重消订单";
                    break;
                    case 4:
                    order_type_name="零售订单";
                    break;
                    case 5:
                    order_type_name="积分订单";
                    break;
                    case 6:
                    order_type_name="优惠订单";
                    break;
                    default:
                    break;
                }
                orderType['order_type_id']=ags.data[0].ORDER_TYPE;
                $('.order-type .content').eq(0).html(order_type_name);
                $('.order-type .content').eq(1).html('&yen;'+ags.data[0].AMOUNT)
                $('.order-type .content').eq(2).html(ags.data[0].TOTAL_PV)
                $('.order-type .content').eq(3).html('&yen;'+ags.data[0].FREIGHT_FEE)
                $('.money-1 span').html(ags.data[0].REAL_AMOUNT)
                var orderMoney=ags.data[0].REAL_AMOUNT;
                $('#wxpay').click(function(){
                    order.wxpay(user_id,oid,orderMoney,openId)
                })
            }
        });
        $.ajax({
            type: 'get',
            url: "../controller/getContent.php",
            dataType: 'json',
            data: {
                "trigger":order.orderBodyUrl,
                "user_id": user_id,
                "oid":oid
            },
            success: function(ags) {
                $(ags.data).each(function(){
                    $prolist=$('<div class="commodity-name">'
                                +'<div class="commodity-name-title">'
                                    +$(this)[0].PRODUCT_NAME.toString()
                                +'</div>'
                                +'<div class="unit-price">'
                                    +'&yen;<span>'+$(this)[0].PRICE+'</span>'
                                +'</div>'
                                +'<div class="commodity-number">'
                                    +'X <span>'+$(this)[0].QTY+'</span>'
                                +'</div>'
                            +'</div>');
                    $(".commodity-box").append($prolist)
                })
               
            }
        })
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
                    
                                $mod=$('<div class="popup" style="display: block">'+
                                    '<div class="popup-1">'+
                                        '<p>付款成功</p>'+
                                        '<p class="dd order_id">订单号:'+oid+'</p>'+
                                        '<a href="./home.php"><div class="again">再次购物</div></a>'+
                                        '<a href="../php/getScanCode.php?level=0"><div class="discount">推荐优惠顾客</div></a>'+
                                        '<a href="../php/getScanCode.php?level=1"><div class="distributor">推荐经销商</div></a>'+
                                    '</div>'+
                                '</div>')
                                $('.box').append($mod)
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