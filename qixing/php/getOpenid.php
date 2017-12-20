<?php
	$code=$_GET["code"];
	$url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx9161959d6c078a3c&secret=3850b193d664408ff1924beba73c854a&code=".$code."&grant_type=authorization_code";
	$oauth2=getJson($url);
    $openid=$oauth2["openid"];
    setcookie("openid", $openid);
	if($openid)
     {

     	header('Location: http://wechat.trtjklife.com/php/login.php');
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