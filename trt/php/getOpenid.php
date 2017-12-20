<?php
	$code=$_GET["code"];
	$url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxfb57920a0612c8f0&secret=1e3b8c903a09d62510f596ed7f39b3ea&code=".$code."&grant_type=authorization_code";
	$oauth2=getJson($url);
    $openid=$oauth2["openid"];
    setcookie("openid", $openid);
	if($openid)
     {

     	header('Location: http://qixingshangcheng.pstech360.com/php/login.php');
     }
	function getJson($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return json_decode($output, true);
    }
?>