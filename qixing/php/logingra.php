<?php
    header("Content-type: text/html; charset=utf-8");
    session_start();
	$uid = isset($_GET['uid'])?$_GET['uid']:"";	//�û�ID
	str_check($uid);
	if($uid)
	{
		$_SESSION['uid'] = htmlspecialchars($uid);
		echo htmlspecialchars($_SESSION['uid']);
	}

	//��ע�뺯��  
	function inject_check($sql_str) {  
	    $pattern = '/\@|alert|script|and|or|union|select|chr\(|cast\(|dbms_|\\$|\%|\^|\&|\*|\(|\)|\_|\+|\{|\}|\:|\<|\>|\?|\[|\]|\,|\.|\/|\;|\'|\`|\-|\=|\\\|\|LF|CR/';
    return preg_match($pattern, $sql_str);
	}

	function str_check($str) {  
	    if (inject_check($str)) {  
	        $response = ['result' => '�������������Ƿ���Ч'];
	        die(json_encode($response, JSON_UNESCAPED_UNICODE)); 
	    }
	} 
?>