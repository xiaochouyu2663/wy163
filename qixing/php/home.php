<?php
    session_start();
    //查询是否获取到session
    if (!isset($_SESSION['uid'])){     
        setcookie('urlValue','home.php'); 
        header('Location: https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9161959d6c078a3c&redirect_uri=http://wechat.trtjklife.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect');
     }else{
        $user_id=$_SESSION['uid'];
     }
?>
<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="renderer" content="webkit">

    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/header.css">
    <link rel="stylesheet" type="text/css" href="../css/footer.css">
    <link rel="stylesheet" type="text/css" href="../css/upgrade.css?v=2">
    <link rel="stylesheet" type="text/css" href="../css/swiper-3.4.2.min.css">
    <link rel="stylesheet" type="text/css" href="../css/discount.css?v=1">
    <title>购物</title>
    <script src="../js/common.js"></script>
    <style>
        body {
            line-height: 1.3;
        }
        
        #topNav {
            font-size: 0.28rem;
            position: relative;
        }
        
        #topNav .swiper-slide {
            display: flex;
            justify-content:center;
            text-align: center;
        }
        
        #topNav .swiper-slide span {
            display: block;
            padding: 0.08rem;
        }
        
        #topNav .active span {
            background-color: #00c7f2;
            border-radius: 0.3rem;
            padding-left:10px;
            padding-right:10px;
        }
        
        #Order {
            font-size: 0.28rem;
            position: relative;
            /*padding:0 1rem;*/
        }
        #Order .swiper-wrapper{
            /*overflow: hidden;*/
        }
        #Order .swiper-slide {
            display: flex;
            justify-content:center;
            text-align: center;
        }
        
        #Order .swiper-slide span {
            /* transition: all .3s ease; */
            display: block;
            padding: 0.08rem;
            color: #000000;
        }
        
        #Order .active span {
            /* transform: scale(1.1); */
            /* color: #FF2D2D */
            height:100%;
             padding-left:10px;
            padding-right:10px;
            background-color: #00c7f2;
            border-radius: 0.3rem;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
            width:0.5rem;
            height: 0.3rem;
            top: 0.25rem;
            margin-top: 0;
            position: absolute;
            top:50%;
            transform:translateY(-50%);
        }
        .swiper-button-prev{
            left:0;
        }
        .swiper-button-next{
            right:0;
        }
        /* .upgrade_container {
            padding-bottom: 1.2rem;
        } */
        
        .upgrade_container .upgrade_list .upgrad_list_box a .upgrade_list_panel .upgrade_shop_sort .upgrade_shop_price1 {
            font-size: 0.24rem;
        }
        
        .mask .mask_box {
            width: 5.6rem;
            height: 3.2rem;
        }
        
        .mask .mask_box .prompt {
            font-size: 0.36rem;
            font-weight: bold;
        }
        
        .mask .mask_box .activation {
            font-size: 0.28rem;
            padding: 0.2rem 0;
        }
        
        .mask .mask_box {
            position: relative;
        }
        
        .mask .mask_box .mask_btn {
            position: absolute;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.9rem;
            border-top: 1px solid #bbbbbb;
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            padding: 0;
        }
        
        .mask .mask_box .mask_btn div {
            flex: 1;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            text-align: center;
            line-height: 0.9rem;
            font-size: 0.32rem;
        }
        
        .mask .mask_box .mask_btn .cancel {
            color: #888888;
            border-right: 1px solid #bbbbbb;
        }
        
        .mask .mask_box .mask_btn .OK {
            color: #1C74D9;
        }
        
        .upgrade_container .upgrade_list .upgrad_list_box a .upgrade_list_panel .upgrade_shop_sort .upgrade_shop_price {
            margin-top: 0.1rem;
        }
    </style>
</head>

<body>
    <div id="app">


        <!-- 导航头部 -->
        <div class="header">
            <div class="back">

            </div>
            <div class="title">
                <p>首页</p>
            </div>
            <div class="edit">

            </div>
        </div>

        <!-- 主体 -->
        <div class="upgrade_container">
            <!-- 积分头部 -->
            <div class="discount_integral">
                <div class="user_name">
                    
                </div>
                <div class="user_phone">
                    
                </div>
                <div class="user_integral">
                    <span>积分&nbsp;:&nbsp;</span>
                    <span id="user_integral_sum"></span>
                </div>
            </div>
            <!-- 订单导航 -->
            <div class="upgrade_header">
                <div id="Order" class="swiper-container">
                    <div class="swiper-wrapper" id="orderNav">
                       <!--  <div class="swiper-slide" data-type="1"><span>加盟1</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟2</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟3</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟4</span></div> -->
                    </div>
                    <div class="swiper-button-prev "></div>
                    <div class="swiper-button-next "></div>
                </div>
            </div>
            <div class="upgrade_header">
                <div id="topNav" class="swiper-container">
                    <div class="swiper-wrapper" id="productNav">
                        <!-- <div class="swiper-slide" data-type="1"><span>加盟2</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟3</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟4</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟2</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟3</span></div>
                        <div class="swiper-slide" data-type="1"><span>加盟4</span></div> -->
                    </div>
                    <div class="swiper-button-prev "></div>
                    <div class="swiper-button-next "></div>
                </div>
                
            </div>


            <div id="upgrade">


            </div>

        </div>



        <!-- 遮罩 -->
        <div class="mask">
            <div class="mask_box">
                <p class="prompt">
                    提示
                </p>
                <p class="activation">
                    未激活请先激活
                </p>
                <div class="mask_btn">
                    <div class="cancel">
                        取消
                    </div>
                    <div class="OK">
                        确定
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class="upgrade_select" style="display:none">
            <p>请选择计入级别</p>
            <select class="select" id="select">
                   
            </select>
        </div>
        <div class="footer">
            <div class="integral">
                <p>
                <span class="price">总价格:</span>
                <span class="money">
                    &nbsp;&nbsp;￥
                    <span  class="money" id="money">0</span>
                </span>
                </p>
                <p><span class="total">总积分:</span><span class="sum">&nbsp;&nbsp;&nbsp;<span id="integralSum">0</span></span>
                </p>
            </div>
            <div class="settlement" id="settlement">
                <p>去结算</p>
            </div>
        </div>
    </div>
</body>
<script src="../js/jquery-1.11.0.js"></script>
<script src="../js/jquery.cookie.js"></script>
<script src="../js/swiper-3.4.2.min.js"></script>
<script src="../js/http.js"></script>
<script src="../js/api.js"></script>
<script src="../js/home.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
    var userInfo=JSON.parse($.cookie("userInfo")||"{}")
    $.cookie("productInfo",null,{expires:-1})
    $.cookie("orderType",null,{expires:-1})
    var user_id=<?php echo $user_id ?>; 
    getUserInfo(orderTrigger,user_id,order_type,userCurrent);  //获得用户身份以后获取订单类型
    integralQuery(user_id);         //获取积分余额
    // OrderList(orderTrigger,user_id,order_type,userCurrent);       
    product(user_id,activeItem);   //获得产品类型 
     //结算
    $('#settlement').click(function() {
            $(productArr).each(function(index){        
                if($(this)[0].num==0){                    //去掉为数量为0的产品
                    productArr.splice(index,1)
                }
            })
            
            $.cookie("productInfo",JSON.stringify(productArr))
            $.cookie("orderType",JSON.stringify(order_type))
            $.cookie("userType",JSON.stringify($("#select").val()))
            
            if(currentOrderType==JMOrderTrigger||currentOrderType==SJOrderTrigger){
                var productStr="";
                $(productArr).each(function(){
                     productStr+=$(this)[0].id+'`'+$(this)[0].num+'~'
                })
                upgradeArr=[{
                    "USER_TYPE":$("#select").val(),
                    "ORDER_TYPE":order_type['order_type_id'],
                    "PRODUCTS":productStr.slice(0,-1)
                }];
                isUpgradeSuccsee(user_id,upgradeArr)
            }else{
                if($("#money").html()>0){
                    var productCar={};
                    productCar["productInfo"]=productArr;
                    productCar["orderType"]=order_type;
                    productCar["productType"]={
                        product_id:$('#productNav .swiper-slide.active').attr('data-id'),
                        product_name:$('#productNav .swiper-slide.active span').html()
                    }
                    window.sessionStorage.setItem("productCar",JSON.stringify(productCar));
                    window.location.href = 'order_settlement.php';
                }else{
                    alert("请先选择产品");
                }
                
            }
        })

    
    var link = location.href;
    TRT.wxInit(link);
    $(".back").click(function(){
        wx.closeWindow();
    }) 
</script>
