<?php
require_once "jssdk.php";
$appid = 'wx9161959d6c078a3c';
$APPSECRET = '3850b193d664408ff1924beba73c854a';
$url = $_GET['url'];
$jssdk = new JSSDK($appid, $APPSECRET,$url);
$signPackage = $jssdk->getSignPackage();
echo json_encode($signPackage);
?>
