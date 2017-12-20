<?php
session_start();
ini_set('date.timezone','Asia/Shanghai');
error_reporting(E_ERROR);

require_once "../lib/WxPay.Api.php";
require_once '../lib/WxPay.Notify.php';
require_once 'log.php';

//初始化日志
$logHandler= new CLogFileHandler("../logs/".date('Y-m-d').'.log');
$log = Log::Init($logHandler, 15);

class PayNotifyCallBack extends WxPayNotify
{
	//查询订单
	public function Queryorder($transaction_id)
	{
		$input = new WxPayOrderQuery();
		$input->SetTransaction_id($transaction_id);
		$result = WxPayApi::orderQuery($input);
		Log::DEBUG("query:" . json_encode($result));
		if(array_key_exists("return_code", $result)
			&& array_key_exists("result_code", $result)
			&& $result["return_code"] == "SUCCESS"
			&& $result["result_code"] == "SUCCESS")
		{
			$formData=[];
			$formData[0]=$result;
			$formData=json_encode($formData);
			$user_id=$result['attach'];
			$trigger = "1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821A258465F40404041034C4CCCA042E7A27BCDD43FD7192A2AA4904EBED560DB63A2A68CA9F634043C9B26BCA14C46733DE17EC447794554162164A46091C91A82A3D1F6FBA34496BC625DF1792A90DC1438388CEEA85563968F0F476E11F4BCD08D5D0ABAEC50EC78FDC1229386ADBEC195D2EF7F7AECE533477C122D28863F58E188368634EDFB239EC885CA783F978111FF703966CB5816084F94CD7D68C239201D3A207499FC8E58DA4D00312AC30928881989D94E24175D21B4392122EC4CC4EC1884820A450AC7252A6E61EA62C5985AEBF6476EB243C6C7F18EF1E7B911F6DD2EB1E3DBAB7F0AE3D09A8FAF5C68DFB22304089E5005";
			$parameter = "?trigger=".$trigger."&user_id=".$user_id."&formData=".$formData;
			$url = "wx.trtjklife.biz/data/getContent.ashx".$parameter;
			
			$trigger1="1DE0C2F5E42064843F22FECF8315E1D1BF046C049AF3E821E742FF1C34D93C57DE5471F79298F1FEA58DD9EB011B293A94E13DC0346C1A9266C1F7436CD7FFF8F2E348D3BAD6E1B7B4839DD2226C69F992A6C9131ED890AAEE8F6C1C2F6399E6CA7DDDBD829CFF869799C087AE045C30B4C4F59423669723B46E61932E8338860A7F0668D0D37ECFB05D4D0205BBF80F69F038049AA5ADD65CCE728B8A03C787A0B6DF89890EC125A195C9FEE31DA0D2C33617B7D25E58D3A8E363411FA22B3A";
			$oid=$result['out_trade_no'];
			$amout=[
				['AMOUNT'=>$result['total_fee'] / 100 ] 
			];
			$formData1=json_encode($amout);
			$parameter1 = "?trigger=".$trigger1."&user_id=".$user_id."&oid=".$oid."&formData=".$formData1;
			$url1 = "wx.trtjklife.biz/data/getContent.ashx".$parameter1;
			$this -> httpGet($url);
			$this -> httpGet($url1);
			return true;
		}
		return false;
	}
	
	//重写回调处理函数
	public function NotifyProcess($data, &$msg)
	{
		Log::DEBUG("call back:" . json_encode($data));
		$notfiyOutput = array();
		
		if(!array_key_exists("transaction_id", $data)){
			$msg = "输入参数不正确";
			return false;
		}
		//查询订单，判断订单真实性
		if(!$this->Queryorder($data["transaction_id"])){
			$msg = "订单查询失败";
			return false;
		}
		
		return true;
	}

	public function httpGet($url) {
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

Log::DEBUG("begin notify");
$notify = new PayNotifyCallBack();
$notify->Handle(false);
