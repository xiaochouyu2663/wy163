<?php

$userid=$_POST['userid'];

$fileid=$_POST['fileid'];

$url2=isset($_POST['url2'])?$_POST['url2']:"http://wx.trtjklife.biz/Data/GetImage.ashx";
$url = $url2.'?user_id='.$userid.'&file_id='.$fileid.'&ip=192.168.1.1';

$res = httpGet($url);

$res = substr($res,4);

$base64_img = base64EncodeImage($res);
  
echo json_encode(['path'=>$base64_img]);
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


  
function base64EncodeImage ($image_data) {
  $base64_image = 'data:' . 'jpg' . ';base64,' . chunk_split(base64_encode($image_data));
  return $base64_image;
}

?>