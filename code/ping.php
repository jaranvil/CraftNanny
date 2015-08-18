<?php

$version = 2;

require_once('connection.php');

$token = $_POST['token'];
$id = $_POST['id'];

logPing($token, $id, $version);

function logPing($token, $id, $version) {
	$query = "UPDATE tokens SET last_seen = NOW() WHERE token = '".dbEsc($token)."' AND computer_id = ".dbEsc($id);
	$result = mysql_query($query);
	if ($result) {
		echo $version;
	} else {
		echo $version;
	}
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