<?php

$username = $_POST['user'];

$username = htmlspecialchars($username);

require_once('connection.php');
$salt = '';
$query = "select salt from users where username = '".dbEsc($username). "';";	
$result = mysql_query($query);



if ($result) {
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	$salt = $row['salt'];
	echo $salt;
} else {
	echo 'error';
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