<?php
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
        $result = curl($url,$data);
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
function curlFn($url,$data){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,$data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $output = curl_exec($ch);
    curl_close($ch);
    // echo $output;
}
  //获取公众号已经创建的所有标签函数
function getTags($access_token){
    $url = "https://api.weixin.qq.com/cgi-bin/tags/get?access_token=".$access_token;    //获取公众号已经创建的标签
    curlFn($url);
}
  //批量给用户打上标签
function batchMemTags($openid,$access_token){
    $url="https://api.weixin.qq.com/cgi-bin/tags/members/batchtagging?access_token=".$access_token;  //批量给用户打标签
    $data='{
      "openid_list" : ["'.$openid.'"],
      "tagid" : 101
    }';
    // echo $data;
    curlFn($url,$data);
}
function getMember($access_token){
    $url="https://api.weixin.qq.com/cgi-bin/user/tag/get?access_token=".$access_token;         //获取标签下粉丝列表
    $data='{
      "tagid" : 101,
      "next_openid":""//第一个拉取的OPENID，不填默认从头开始拉取
    }';
    curlFn($url,$data);
}
function getMemTags($openid,$access_token){
    $url="https://api.weixin.qq.com/cgi-bin/tags/getidlist?access_token=".$access_token;        //获取用户身上的标签列表
  
  
    $data='{
        "openid" : "'.$openid.'"
      }';
      // echo $data;
      curlFn($url,$data);
}
function call_back_exit($json = ''){
    if($json){
          echo $callback.'('.$json.')';
          exit;
      }
}
?>