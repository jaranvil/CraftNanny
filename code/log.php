<?php

require_once('connection.php');

$token = $_POST['token'];
$ign = $_POST['ign'];
$event = $_POST['event'];
$discription = $_POST['discription'];
$id = $_POST['id'];

$user_id = validateToken($token, $id);

if ($user_id) {
	enterRecord($ign, $event, $discription, $user_id, $token);
} else {
	echo 'error';
}

function enterRecord($ign, $event, $discription, $user_id, $token) {
	$query = "INSERT INTO logs (user_id, ign, event, discription, timestamp, token) VALUES ('".$user_id."', '".dbEsc($ign)."', ".$event.", '".dbEsc($discription)."', NOW(), '".dbEsc($token)."')";
	$result = mysql_query($query);
	if ($result) {
		echo 'sucess';
	} else {
		echo 'error';
	}
}

function validateToken($token, $id) {
	$query = "select user_id from tokens where token = '".dbEsc($token). "' AND computer_id = ".dbEsc($id). ";";	
	$result = mysql_query($query);
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	return $row['user_id'];
}

function dbEsc($theString) {
	$theString = mysql_real_escape_string($theString);
	return $theString;
}

function dbError(&$xmlDoc, &$xmlNode, $theMessage) {
	$errorNode = $xmlDoc->createElement('mysqlError', $theMessage);
	$xmlNode->appendChild($errorNode);
}





?>