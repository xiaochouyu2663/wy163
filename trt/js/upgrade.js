//产品分类
var productUrl = "1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C081F6AB7280864EBB050ADF9D4DC9DA3D661F98FBD2789BCC5034A5DE2C9FFFE932D5117309D9D2B9BD74C01D3C7851E5BAA18DCC28C1C2E99F35C7B9A239E5EBEDFB28F035A7096066C0507FCE0B8D7C2BDE6EBA649F49F18B856B30CFC6351C01569F96C20D0E336";
var upUrl = '1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE4594165D968F80584E61FE8D0BF3C40DBE8B19224038AA6D940D5DB973A3C713C087A424956C5A9C23634F90A50F4BA3BC8B30515296F7083E2F2505C8E99A9C8BDB5F43FD77EDB09E344EFDEDEFD771C7802E16A945A2102787F87C67E0264AD0C1A66BD378DBC3BE1DFE166149547548169B3A8CABCFA6CB2AAD00E2D0BB5A28ECBFCD79A537210B9CFA2B7A4CC42805380D26E82C1DA0091AA86E7F41C6BD241198D23C8B4E5976DBCA91AD3F10EA75D044084BDA4BDE6DED236E71D7A7890E380394993DD824039472A14DF8E48D5F57997929AAAEFE32AABBFACE4C43532FA802CEFDF41BB2B2F4AB7CD9C755B4BD6671B8E09D82126E175883DCD599526AEC7AEF66DF715B07E1BB3FE9E49A834AEF90EC2E558BE9FDD3AF94EACE6343A2DD7F3DA644E1CC3902DC0DC275FB5327BB8BAC5F888C57B5BEC7CB4A14C42BC804285680E9EC8B99AC0B1E6F7F66B47D519C492AC77C29DEB22711F6A78386BC0477A33FE10AE5BFC5333C8FE31B2A10EDCB0D78F77178DF789B80537A90AC2E7783E795F6A71ED2DC1250410A3DFE1B250485A84719980FB7D8C5C2981876BA3007209D7B8B489A38B954DC568D816A12D466346789658AAF2396D6B4C9797D5AE56DCC9E12982C4E86BCC6325428536D2A99D2A57CB336C97C5BCB8B891D1CAD7686A4975C2D1E0FBE938EAB98AF40B6CD5FF0B231A158B4B73857772BE1207AFF822F2662199FBB35652BE9752FFE3B5C454954C384C45C6898C26FBA83BD4DD9C5FFA51B588BC7C986DE7A7D15D1AF56F58EA52E051DF529483D5576372C8487D66A840483C5E36C4CAE1CB15261306C917D1B8633B1460D5CAB20271625DF3F8012CA1990164B752589C024E0B38A4AB2A6499860CCB15714B5131DBF69CA298B8D57CFC8F1546AD393ECA610F258BFE0579C946093FA3754A16D8B8AE759C6D80DB34D6CE34ABB054E7CDD411B93BCB2A9E8FD0D9568FCC996B0172497FDAE4E44D2FF83520479CCBE397358E3FA7F6427F43A3FFEAC72EE7EC5B04330F630F5AD4E3E9C7665149B15F853FF15F66BC850E735222EF302D4CDDD247145F';
//会员级别url&parent=1000
var memberLevel = '1DE0C2F5E4206484F248E69D5B28B86CCE0549C2D5FCECB769106BCFA0692CB4714276682DAA382054129DB4F626D2679A3D2CE9D5D920683F7B99FEBA8AE459CE8CA0A8159AEB060131C4DCEF5767E6F482EBB65E29AD086792D3467E518D69A97ADD7075A23DC38BBE3FA3FC6DC67B67551D8A5EB57119&parent=1000';
var currentOrderType=upUrl;
var userInfo=JSON.parse($.cookie("userInfo")||"{}");
var user_id=userInfo.userId;
var productArr=[];
function product(http, url) {
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
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                })
                $("#topNav .swiper-slide span").each(function(){
                    $(this).click(function(){
                        $("#topNav .swiper-slide").removeClass("active")
                        $(this).parent().addClass("active")
                        var pro_typeid=$(this).parent().attr("data-id");
                        listQuery(http,currentOrderType,pro_typeid);
                    })
                    
                })
            },
            error: function(err) {
                console.log(err)
            }
        });
}

//根据产品类型获取产品list
function listQuery(http, url,pro_typeid) {

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

VIP(http, memberLevel)
product(http, productUrl)
listQuery(http, upUrl)
$(".discount_integral .user_name").html(userInfo.name)
$('#settlement').click(function() {
    if($("#money").html()>0){
        var str=JSON.stringify(productArr);
        $.cookie("productInfo",JSON.stringify(productArr))
        window.location.href = 'order_settlement.php';
    }
})