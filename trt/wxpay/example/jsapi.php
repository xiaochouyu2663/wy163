<?php
session_start();
require_once "../lib/WxPay.Api.php";
require_once "WxPay.JsApiPay.php";


//①、获取用户openid
$tools = new JsApiPay();
$openId = isset($_GET['openId'])?$_GET['openId']:'oLn3lvzt913cx0cPycd6wjMR1qGY';
$orderBody=isset($_GET['orderBody'])?$_GET['orderBody']:'test';
$orderMoney=isset($_GET['orderMoney'])?$_GET['orderMoney'] * 100:'1';
$orderMoney='1';
$state=$_SESSION['uid'];
// echo $openId;
//②、统一下单
$input = new WxPayUnifiedOrder();
$input->SetBody($orderBody);                                      
$input->SetAttach($state); 
$input->SetOut_trade_no($orderBody);    //订单号
$input->SetTotal_fee($orderMoney);                                     //金额
$input->SetTime_start(date("YmdHis"));
$input->SetTime_expire(date("YmdHis", time() + 600));
// $input->SetGoods_tag($_GET['orderMoney']);                                
$input->SetNotify_url("http://qixingshangcheng.pstech360.com/wxpay/example/notify.php");
$input->SetTrade_type("JSAPI");                             //交易类型
$input->SetOpenid($openId);
$order = WxPayApi::unifiedOrder($input);
//echo '<font color="#f00"><b>统一下单支付单信息</b></font><br/>';
$jsApiParameters = $tools->GetJsApiParameters($order);
echo $jsApiParameters;
?>