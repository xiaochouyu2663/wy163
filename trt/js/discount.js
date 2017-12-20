//优惠顾客购物页函数处理

//产品分类
var productUrl = "1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB050ADF9D4DC9DA3D661F98FBD2789BCC5034A5DE2C9FFFE932D5117309D9D2B9BD74C01D3C7851E5BAA18DCC28C1C2E99F35C7B9A239E5EBEDFB28F035A7096066C0507FCE0B8D7C2BDE6EBA649F49F18B856B30CFC6351C01569F96C20D0E336";
var customerTrigger = '1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C23634F90A50F4BA3BC8B30515296F7083E274169BDBBEF7634192B623EF55957501FD3C3125C59AE2A291784364EBB7C00AD788F70B1DF803A188B4909F85C34AC2E537B6197D0D0202CE4FBEEAF143DB6DB9F4D449A4FD799C4AC22D3F27F09929E80F2F4ED9CA7F6C566B336A34D677A880746935682AA1EBDD1EE0038CCE0212AE1F1E0AD2853CAC1379E54278B29C29183B937CFF0D6D9C178A06AC9A7832E15A3703F6C037AFC4E35938694A09B651817E6D47415F5C7877F038F41DF75AFB330C890A5649DDB8DC59B16A44F156159F58DB07D41FF88D33F9298CA628F95D4D92B94ED4302B8A74814DCF0EC97C6170891D7BD24B36D87B6D107250F2F9BF8E2C6AC665903E1F8862CD0D19C91B3824234A6ABA33F203F5CC5BEB4A69799B76DBE1557A8845CA11E02ABAA6564CB7E5CA5AAB88AB22D43CAE88278CA65D08E3D7FB8E67B8EB30751A3CD01AD10C34F65B48F0D5C23C7D7590A121E0A294A480EAB476379B1260CD8D7A1AEA412EF219771C46C49FADEDE3D2ED8C819723ED1B3BD2AF77AE7BD304099ACF98C41291E8FC891C1054C2D604C2753E25A3C04CCEE2D507DF94E825499296417963A9D8B7F4B43CDDD99D411E71764E99C4672A5C633B2B727E50971F4DCF71E6A8A5CB42A1FFA53B31B1ABEFB2B395D77803B0AA2C5F6C8309EF613C612D6BE6227F2FB573152DA8DC4C34EC2956943FC6B0570DFE0D228FABD2914B8A88CD894A7D455F88F6DB80014BFB2B95D09907FA1F97C1487EF9865E36D0';
//会员级别url&parent=1000
var memberLevel = '1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459CE8CA0A8159AEB060131C4DCEF5767E6F482EBB65E29AD086792D3467E518D69A97ADD7075A23DC38BBE3FA3FC6DC67B67551D8A5EB57119&parent=1000';
 //积分 需要配置user_id参数 &user_id=1
var balanceUrl = '1DE0C2F5E42064848AD83EDCA6BC0A14EC420C21A4B05C9228E747FB0D945FBB1308F6D7F1F6C2E9551CFFBCF16C7C26FA57B65684467E0B1352260B5E39F0577D86129368856AA1E68DCD1C8F27B5A99E93FE9307CBD08590695EB9F72E2A500D0A07EFE0CDA111E568276DD01AD87A10E009D2099A0996FE5C400CD6DB64455E7C66F0D29E332118A986DE4D3DE3DF45528426D96655242B34943EFF7AA80196BF36741A994650';
    //升级url
var currentOrderType=customerTrigger;
var userInfo=JSON.parse($.cookie("userInfo")||"{}");
var productArr=[];
var order_type={
    order_type_id:6.0,
    order_type_name:"优惠订单"
}
function product(http,user_id, url) {
        $.ajax({
            type: 'GET',
            url: http + url,
            async: true,
            dataType: 'json',
            success: function(res) {
                var list = '';
                var data = res.data;
                var all = '<div class="swiper-slide active"><span>全部</span></div>';
                for (var i = 0; i < data.length; i++) {
                    list += '<div class="swiper-slide" data-id=' + data[i].TYPE_ID + '><span>' + data[i].TYPE_NAME + '</span></div>';
                }
                var listAll = all + list;
                $('#productNav').html(listAll);
                var mySwiper2 = new Swiper('#topNav',{
                    slidesPerView: 3,
                    // centeredSlides: true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                })
                $("#topNav .swiper-slide span").each(function(){
                    $(this).click(function(){
                        $("#topNav .swiper-slide").removeClass("active")
                        $(this).parent().addClass("active")
                        var pro_typeid=$(this).parent().attr("data-id");
                        listQuery(http,currentOrderType,user_id,pro_typeid);
                    })
                    
                })
            },
            error: function(err) {
                console.log(err)
            }
        });
}

//根据产品类型获取产品list
function listQuery(http, url,user_id,pro_typeid) {

    var obj = [{
        "CATEGORY_ID": 0
    }];
    var formData = JSON.stringify(obj);
    $.ajax({
        url: http + url,
        type: 'get',
        async: true,
        data: {
            user_id: user_id,
            formData: formData,
        },
        dataType: 'json',
        success: function(res) {
            $('#upgrade').html('');
            var list = '';
            var listArr = res.data;
            for (var i = 0; i < listArr.length; i++) {
                if(pro_typeid==listArr[i].ORIG_CATEGORY_ID){
                     list += '<div class="upgrade_list">' +
                    '<div class="upgrad_list_box">' +
                    '<a href="details-pro.php?PRODUCT_ID=' + listArr[i].PRODUCT_ID + '&PREVIEW_IMAGE=' + listArr[i].PREVIEW_IMAGE+'&PRODUCT_NAME=' + listArr[i].PRODUCT_NAME+ '&RP_PRICE=' 
                    + listArr[i].RP_PV + 
                    '&SPEC=' + listArr[i].SPEC+'&DESCRIPTION=' + listArr[i].DESCRIPTION+'">' +
                    '<div class="upgrade_list_img">' +
                    '<img src="' + listArr[i].PREVIEW_IMAGE + '"></img>' +
                    '</div>' +
                    '<div class="upgrade_list_panel">' +
                    '<p class="upgrade_shop_name">' + listArr[i].PRODUCT_NAME + '</p>' +
                    '<div class="upgrade_shop_sort" data-product_type='+listArr[i].PRODUCT_TYPE+' data-product_id='+listArr[i].PRODUCT_ID+'>' +
                    '<p class="upgrade_shop_price upgrade_shop_price1">' +
                    '<span>积分:</span>' +
                    '<span class="upgrade_price1">' + listArr[i].RP_PV + '</span>' +
                    '</p>' +
                    '<p class="upgrade_shop_price upgrade_shop_price2">' +
                    '<span>￥</span>' +
                    '<span class="upgrade_price">' + listArr[i].RP_PRICE + '</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '<div class="upgrade_count">' +
                    '<p class="upgrade_reduce" >-</p>' +
                    '<p class="upgrade_num">0</p>' +
                    '<p class="upgrade_add">+</p>' +
                    '</div>' +
                    '</div>'
                    $('#upgrade').html(list);
                }else if(pro_typeid==undefined){
                   
                     list += '<div class="upgrade_list">' +
                    '<div class="upgrad_list_box">' +
                    '<a href="details-pro.php?PRODUCT_ID=' + listArr[i].PRODUCT_ID + '&PREVIEW_IMAGE=' + listArr[i].PREVIEW_IMAGE+'&PRODUCT_NAME=' + listArr[i].PRODUCT_NAME+ '&RP_PRICE=' 
                    + listArr[i].RP_PV + 
                    '&SPEC=' + listArr[i].SPEC+'&DESCRIPTION=' + listArr[i].DESCRIPTION+'">' +
                    '<div class="upgrade_list_img">' +
                    '<img src="' + listArr[i].PREVIEW_IMAGE + '"></img>' +
                    '</div>' +
                    '<div class="upgrade_list_panel">' +
                    '<p class="upgrade_shop_name">' + listArr[i].PRODUCT_NAME + '</p>' +
                    '<div class="upgrade_shop_sort" data-product_type='+listArr[i].PRODUCT_TYPE+' data-product_id='+listArr[i].PRODUCT_ID+'>' +
                    '<p class="upgrade_shop_price upgrade_shop_price1">' +
                    '<span>积分:</span>' +
                    '<span class="upgrade_price1">' + listArr[i].RP_PV + '</span>' +
                    '</p>' +
                    '<p class="upgrade_shop_price upgrade_shop_price2">' +
                    '<span>￥</span>' +
                    '<span class="upgrade_price">' + listArr[i].RP_PRICE + '</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '<div class="upgrade_count">' +
                    '<p class="upgrade_reduce" >-</p>' +
                    '<p class="upgrade_num">0</p>' +
                    '<p class="upgrade_add">+</p>' +
                    '</div>' +
                    '</div>'
                    $('#upgrade').html(list);
                }
               
            }
            
            // countAdd(res.data);
            $(".upgrade_add").each(function(index){
                var productObj={};
               
                $(this).click(function(){
                    var allPrice=0;
                    var allPV=0;
                    $self=$(this);
                    var id=$self.parent().prev().find(".upgrade_shop_sort").attr("data-product_id");
                    var isHas=false;
                    $num=$(this).prev().html();
                    $num++;
                    $(this).prev().html($num);
                    

                    //每点击一次往产品数据里添加数据包括产品id,产品数量，产品总价格
                   
                    if(productArr.length==0){
                        sHas=false;
                    }else{
                        $(productArr).each(function(){
                            if($(this)[0].id==id){
                                isHas=true;
                                return false;
                            }else{
                                sHas=false;
                            }
                            
                        })
                    }
                    if(isHas){
                        $(productArr).each(function(){
                            if($(this)[0].id==id){
                                $(this)[0].name=$self.parent().prev().find(".upgrade_shop_name").html();
                                $(this)[0].allPrice=$self.parent().prev().find(".upgrade_price").html()*$num;
                                $(this)[0].allPV=$self.parent().prev().find(".upgrade_price1").html()*$num;
                                $(this)[0].price=$self.parent().prev().find(".upgrade_price").html();
                                $(this)[0].type=$self.parent().prev().find(".upgrade_shop_sort").attr("data-product_type")
                                $(this)[0].num=$num;

                            }
                           
                        })
                    }else{
                        productObj.name=$self.parent().prev().find(".upgrade_shop_name").html();
                        productObj.id=$self.parent().prev().find(".upgrade_shop_sort").attr("data-product_id");
                        productObj.allPrice=$self.parent().prev().find(".upgrade_price").html()*$num;
                        productObj.allPV=$self.parent().prev().find(".upgrade_price1").html()*$num;
                        productObj.price=$self.parent().prev().find(".upgrade_price").html();
                        productObj.type=$self.parent().prev().find(".upgrade_shop_sort").attr("data-product_type")
                        productObj.num=$num;
                        productArr.push(productObj);
                    }
                    $(productArr).each(function(){
                        allPrice+=$(this)[0].allPrice;
                        allPV+=$(this)[0].allPV;
                    })
                    
                    $("#money").html(allPrice)
                    $("#integralSum").html(allPV)
                })
            })
            $(".upgrade_reduce").each(function(index){
                var productObj={};
                $(this).click(function(){
                    var allPrice=0;
                    var allPV=0;
                    $self=$(this);
                    var id=$self.parent().prev().find(".upgrade_shop_sort").attr("data-product_id");
                    var isHas=false;
                    $num=$(this).next().html();
                    if($num>=1){
                        $num--;
                    }else{
                        $num=0;
                    }
                   if(productArr.length==0){
                        sHas=false;
                    }else{
                        $(productArr).each(function(){
                            if($(this)[0].id==id){
                                isHas=true;
                                return false;
                            }else{
                                sHas=false;
                            }
                            
                        })
                    }
                    if(isHas){
                        $(productArr).each(function(){
                            if($(this)[0].id==id){
                                $(this)[0].allPrice=$self.parent().prev().find(".upgrade_price").html()*$num;
                                $(this)[0].allPV=$self.parent().prev().find(".upgrade_price1").html()*$num;
                                $(this)[0].price=$self.parent().prev().find(".upgrade_price").html();
                                $(this)[0].num=$num;
                            }
                           
                        })
                    }else{
                        productObj.id=$self.parent().prev().find(".upgrade_shop_sort").attr("data-product_id");
                        productObj.allPrice=$self.parent().prev().find(".upgrade_price").html()*$num;
                        productObj.allPV=$self.parent().prev().find(".upgrade_price1").html()*$num;
                        productObj.price=$self.parent().prev().find(".upgrade_price").html();
                        productObj.num=$num;
                        productArr.push(productObj);
                    }
                    $(productArr).each(function(){
                        allPrice+=$(this)[0].allPrice;
                        allPV+=$(this)[0].allPV;
                    })
                    
                    $("#money").html(allPrice)
                    $("#integralSum").html(allPV)
                    $(this).next().html($num)
                })
            })
        },
        error: function(err) {
            console.log(err)
        }
    })
};
 //会员级别ajax
function VIP(http, url) {
    $.ajax({
        url: http + url,
        async: true,
        dataType: 'json',
        success: function(res) {
            var options = '';
            for (var i = 0; i < res.length; i++) {
                options += ' <option value=' + res[i].ID + ' >' + res[i].TEXT + '</option>'
            }
            $('#select').html(options);
            $('#select').find('option').eq(0).attr('selected', true);
            user_type = $('#select').val();
            $('#select').change(function() {
                user_type = $(this).val()
            })
        },
        error: function(err) {
            console.log(err)
        }
    });
}

//积分查询
function integralQuery(http, url,user_id) {
    $.ajax({
        type: 'GET',
        url: http + url,
        async: true,
        data: {
            user_id: user_id
        },
        dataType: 'json',
        success: function(res) {
            $('#user_integral_sum').html(res.result);
        },
        error: function(err) {
            console.log(err)
        }
    });
}

VIP(http, memberLevel)
product(http, productUrl)
listQuery(http, currentOrderType)
$(".discount_integral .user_name").html(userInfo.name)
$(".discount_integral .user_phone").html(userInfo.mobile)
$('#settlement').click(function() {
    if($("#money").html()>0){
        $.cookie("productInfo",JSON.stringify(productArr))   //产品信息存cookie
        $.cookie("orderType",JSON.stringify(order_type))      //产品类型存cookie
        window.location.href = 'order_settlement.php';
    }

})