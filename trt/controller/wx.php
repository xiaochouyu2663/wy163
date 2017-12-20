<?php
require_once "jssdk.php";
$appid = 'wxfb57920a0612c8f0';
$APPSECRET = '1e3b8c903a09d62510f596ed7f39b3ea';
$url = $_GET['url'];
$jssdk = new JSSDK($appid, $APPSECRET,$url);
$signPackage = $jssdk->getSignPackage();
echo json_encode($signPackage);
?>
