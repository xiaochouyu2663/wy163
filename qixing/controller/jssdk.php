﻿<?php

// $url = $_GET['url'];

 // $url = str_replace("(","&",$url);

class JSSDK {
  private $appId;
  private $appSecret;
  private $url;
  public function __construct($appId, $appSecret,$url) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
    $this->url = $url;
  }


  public function getSignPackage() {
    $jsapiTicket = $this->getJsApiTicket();
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
   // $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $url =$this->url;
    $timestamp = time();
    $nonceStr = $this->createNonceStr();


    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";


    $signature = sha1($string);


    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage; 
  }


  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }


  private function getJsApiTicket() {
    // jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR."jsapi_ticket.json"));
    if ($data->expire_time < time()) {
      $accessToken = $this->getAccessToken();
      $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
        $result = $this->httpGet($url);
        $res = json_decode($result);
        if(isset($res->errcode) && $res->errcode > 0){
            $this->call_back_exit($result);
        }
      $ticket = $res->ticket;
      if ($ticket) {
        $data->expire_time = time() + 7000;
        $data->jsapi_ticket = $ticket;
        $fp = fopen(dirname(__FILE__).DIRECTORY_SEPARATOR."jsapi_ticket.json", "w");
        fwrite($fp, json_encode($data));
        fclose($fp);
      }
    } else {
      $ticket = $data->jsapi_ticket;
    }


    return $ticket;
  }


  private function getAccessToken() {
    // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
    $data = json_decode(file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR."access_token.json"));
    if ($data->expire_time < time()) {
      $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
        $result = $this->httpGet($url);
        $res = json_decode($result);
        if(isset($res->errcode) && $res->errcode > 0){
            $this->call_back_exit($result);
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

  public function call_back_exit($json = ''){
      if($json){
          
          echo $callback.'('.$json.')';
          exit;
      }
  }

  private function httpGet($url) {
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
}

?>