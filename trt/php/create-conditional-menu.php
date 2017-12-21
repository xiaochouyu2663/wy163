<?php
  include "../controller/curl.php";
  $appid = 'wxfb57920a0612c8f0';
  $APPSECRET = '1e3b8c903a09d62510f596ed7f39b3ea';
  $access_token=getToken($appid,$APPSECRET);
  // echo $access_token;
  $data='{
     "button":[
        {  
          "name":"会员",
          "sub_button":[
            {
               "type":"view",
               "name":"推荐经销商",
               "url":"http://qixingshangcheng.pstech360.com/php/getScanCode.php?level=1"
            },
            {
               "type":"view",
               "name":"推荐优惠顾客",
               "url":"http://qixingshangcheng.pstech360.com/php/getScanCode.php?level=0"
            },
            {
               "type":"view",
               "name":"会员",
               "url":"http://qixingshangcheng.pstech360.com/php/Member.php"
            }
          ]
      },
      {
           "name":"购物",
           "sub_button":[
            {
               "type":"view",
               "name":"购物",
               "url":"http://qixingshangcheng.pstech360.com/php/home.php"
            },
            {
               "type":"view",
               "name":"积分购物",
               "url":"http://qixingshangcheng.pstech360.com/php/integral.php"
            },
            
            {
               "type":"view",
               "name":"登录",
               "url":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb57920a0612c8f0&redirect_uri=http://qixingshangcheng.pstech360.com/php/getOpenid.php&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
            }]
       },
       {
           "name":"个人信息",
           "sub_button":[
           
            {
               "type":"view",
               "name":"订单信息",
               "url":"http://qixingshangcheng.pstech360.com/php/order.php"
            },
            
            {
               "type":"view",
               "name":"个人信息完善",
               "url":"http://qixingshangcheng.pstech360.com/php/personal-info.php"
            },
            {
               "type":"view",
               "name":"联系人信息完善",
               "url":"http://qixingshangcheng.pstech360.com/php/contact-info.php"
            },
            {
               "type":"view",
               "name":"地址维护",
               "url":"http://qixingshangcheng.pstech360.com/php/address-maintenance.php"
            },
            {
               "type":"view",
               "name":"消息中心",
               "url":"http://qixingshangcheng.pstech360.com/php/news.php"
            }]
       }],
       "matchrule":{
        "tag_id":"101",
        "sex":"",
        "country":"",
        "province":"",
        "city":"",
        "client_platform_type":"",
        "language":""
        }
  }';
  $ch = curl_init();
  $url = "https://api.weixin.qq.com/cgi-bin/menu/addconditional?access_token=".$access_token;   //创建自定义菜单
  // $url="https://api.weixin.qq.com/cgi-bin/menu/trymatch?access_token=".$access_token;     //测试自定义菜单
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  $output = curl_exec($ch);
  curl_close($ch);
  echo $output;
?>