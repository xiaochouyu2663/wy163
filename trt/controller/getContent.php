<?php
session_start();
$userID = isset($_SESSION['uid'])?$_SESSION['uid']:"127725";
$trigger = isset($_GET['trigger'])?$_GET['trigger']:"";
$formData = isset($_GET['formData'])?$_GET['formData']:"";
$filter = isset($_GET['filter'])?$_GET['filter']:"";
$oid = isset($_GET['oid'])?$_GET['oid']:"";
$pageIndex = isset($_GET['pageIndex'])?$_GET['pageIndex']:"0";
$pageSize = isset($_GET['pageSize'])?$_GET['pageSize']:"20";
$ex = isset($_GET['ex'])?$_GET['ex']:"";
$parent = isset($_GET['parent'])?$_GET['parent']:"";
$username = isset($_GET['username'])?$_GET['username']:"";
$password = isset($_GET['password'])?$_GET['password']:"";
$openid = isset($_GET['openid'])?$_GET['openid']:"";
$parameter = "?trigger=".$trigger."&password=".$password."&username=".$username."&parent=".$parent."&formData=".$formData."&filter=".$filter."&USER_ID=".$userID."&oid=".$oid."&pageIndex=".$pageIndex."&pageSize=".$pageSize."&ex=".$ex."&OPEN_ID=".$openid;
$data=array();
// 执行过滤程序
str_check($trigger);
str_check($formData);
str_check($filter);
str_check($userID);
str_check($oid);
str_check($pageIndex);
str_check($pageSize);
str_check($username);
str_check($password);
str_check($openid);

num_check($ex);
num_check($parent);

if(isset($_POST['serverId'])){
	$serverId = $_POST['serverId'];
	$appid = 'wxfb57920a0612c8f0';
	$APPSECRET = '1e3b8c903a09d62510f596ed7f39b3ea';
	$access_token=getToken($appid,$APPSECRET);
	$url="http://file.api.weixin.qq.com/cgi-bin/media/get?access_token=".$access_token."&media_id=".$serverId;
	
	$ch= curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 500);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_URL, $url);
    $res = curl_exec($ch);
    file_put_contents("./temp".".jpg",$res);
    $im = imagecreatefromjpeg("temp.jpg");
    $base64=resizeImage($im,500,500,'xinde','.jpg');
    curl_close($ch);
    $base=str_replace("+", "`", $base64);
    $data["file_content"]=$base;
    $data["file_ext"]="jpg";
    $data["trigger"]=$_POST['trigger'];
    $data["USER_ID"]=$_POST['user_id'];
    $url = "wx.trtjklife.biz/data/getContent.ashx";
}
else{
    $url = "wx.trtjklife.biz/data/getContent.ashx".$parameter;
}
$request = curl($url,$data);
echo $request;

//整型过滤函数  
function num_check($id) {  
    if (!$id) {  
        return ;   
    } //是否为空的判断  
    else if (inject_check($id)) {  
        $response = ['result' => '检查输入的内容是否有效'];
        die(json_encode($response, JSON_UNESCAPED_UNICODE));  
    } //注入判断  
    else if (!is_numeric($id)) {  
        $response = ['result' => '检查输入的内容是否有效'];
        die(json_encode($response, JSON_UNESCAPED_UNICODE));  
    }
} 

//防注入函数  
function inject_check($sql_str) {  
    $pattern = '/alert|script|and|or|union|select|chr\(|cast\(|dbms_/';
    return preg_match($pattern, $sql_str);
}

function str_check($str) {  
    if (inject_check($str)) {  
        $response = ['result' => '检查输入的内容是否有效'];
        die(json_encode($response, JSON_UNESCAPED_UNICODE)); 
    }
} 

function curl($url,$data){
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_TIMEOUT,300);  
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);
    curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);//严格校验
    curl_setopt($ch,CURLOPT_HEADER,FALSE);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,TRUE);
    curl_setopt($ch,CURLOPT_POST,TRUE);
    curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
    $res = curl_exec($ch);
    curl_close($ch);
    return $res;
}
function getToken($appid,$APPSECRET) {
    $data = json_decode(file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR."access_token.json"));
    if ($data->expire_time < time()) {
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$APPSECRET;
        $result = httpGet($url);
        $res = json_decode($result);
        if(isset($res->errcode) && $res->errcode > 0){
            call_back_exit($result);
        }
      $access_token = $res->access_token;
      if ($access_token) {
        $data->expire_time = time() + 7000;
        $data->access_token = $access_token;
        $fp = fopen(dirname(__FILE__).DIRECTORY_SEPARATOR."access_token.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
      }
    } else {
      $access_token = $data->access_token;
    }
    return $access_token;
}
function call_back_exit($json = ''){
    if($json){
      $callback = isset($_GET['callback'])?$_GET['callback']:'';
      echo $callback.'('.$json.')';
      exit;
    }
}

function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_URL, $url);
    $res = curl_exec($curl);
    curl_close($curl);
    return $res;
}

function resizeImage($im,$maxwidth,$maxheight,$name,$filetype)
{
    $pic_width = imagesx($im);
    $pic_height = imagesy($im);
    if(($maxwidth && $pic_width > $maxwidth) && ($maxheight && $pic_height > $maxheight))
    {
    if($maxwidth && $pic_width>$maxwidth)
    {
    $widthratio = $maxwidth/$pic_width;
    $resizewidth_tag = true;
    }
    if($maxheight && $pic_height>$maxheight)
    {
    $heightratio = $maxheight/$pic_height;
    $resizeheight_tag = true;
    }
    if($resizewidth_tag && $resizeheight_tag)
    {
    if($widthratio<$heightratio)
    $ratio = $widthratio;
    else
    $ratio = $heightratio;
    }
    if($resizewidth_tag && !$resizeheight_tag)
    $ratio = $widthratio;
    if($resizeheight_tag && !$resizewidth_tag)
    $ratio = $heightratio;
    $newwidth = $pic_width * $ratio;
    $newheight = $pic_height * $ratio;
    if(function_exists("imagecopyresampled"))
    {
    $newim = imagecreatetruecolor($newwidth,$newheight);
    imagecopyresampled($newim,$im,0,0,0,0,$newwidth,$newheight,$pic_width,$pic_height);
    }
    else
    {
    $newim = imagecreate($newwidth,$newheight);
    imagecopyresized($newim,$im,$newwidth,$newheight,$pic_width,$pic_height);
    }
    $name = $name.$filetype;
    imagejpeg($newim,$name);
    imagedestroy($newim);
    $resimg=file_get_contents($name);
    $res64=base64_encode($resimg);
    // unlink($name);
    return $res64;
    }
    else
    {
    $name = $name.$filetype;
    imagejpeg($im,$name);
    $resimg=file_get_contents($name);
    $res64=base64_encode($resimg);
    // unlink($name);
    return $res64;
    }
}