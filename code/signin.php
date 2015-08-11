<?php

require_once('connection.php');

$username = $_POST['user'];
$password = $_POST['pass'];
$name = $_POST['name'];
$id = $_POST['id'];
$module_type = $_POST['module_type'];

signIn($username, $password, $name, $dbConn, $id, $module_type);

function signIn($username, $password, $name, $dbConn, $id, $module_type) {

	// never trust data coming from lua
	$username = htmlspecialchars($username);
	$password = htmlspecialchars($password);
	$name = htmlspecialchars($name);
	$id = htmlspecialchars($id);
	$module_type = htmlspecialchars($module_type);
	
	// hash is created in the lua now
	
	// $salt = '';
	// $query = "select salt from users where username = '".dbEsc($username). "';";	
	// $result = mysql_query($query);
	// $row = mysql_fetch_array($result, MYSQL_ASSOC);
	// $salt = $row['salt'];
	// $hash = sha1($salt.$password);
	
	$query2 = "select user_id from users where username = '" . dbEsc($username) . "' AND password = '" . dbEsc($password) . "';";
	
	$result2 = mysql_query($query2);
	$row2 = mysql_fetch_array($result2, MYSQL_ASSOC);

	if ($row2['user_id'] != '') {
		$token = createToken($dbConn, $row2['user_id'], $name, $id, $username, $module_type);
		
		if ($module_type == '4') {
			createRedstoneEntry($dbConn, $token, $id);
		}
		if ($module_type == '3') {
			createTankEntry($dbConn, $token, $id);
		}
		if ($module_type == '2') {
			createEnergyEntry($dbConn, $token, $id);
		}
		
		echo $token;
	} else {
		echo 'error';
	}
}

function createToken($dbConn, $user_id, $name, $id, $username, $module_type) {
	$token = rand().rand().rand().rand();
	$query = "INSERT INTO tokens (token, user_id, computer_name, computer_id, module_type) VALUES ('".$token."', '".dbEsc($user_id)."', '".dbEsc($name)."', '".dbEsc($id)."', '".dbEsc($module_type)."')";
	$result = mysql_query($query);
	if ($result) {
		return $token;
	} else {
		return 'error';
	}
}

function createRedstoneEntry($dbConn, $token, $id) {
	$query = "INSERT INTO redstone_controls (token, computer_id) VALUES ('".dbEsc($token)."', ".dbEsc($id).")";
	$result = mysql_query($query);
}

function createTankEntry($dbConn, $token, $id) {
	$query = "INSERT INTO tanks (token) VALUES ('".dbEsc($token)."')";
	$result = mysql_query($query);
}

function createEnergyEntry($dbConn, $token, $id) {
	$query = "INSERT INTO energy_storage (token, computer_id) VALUES ('".dbEsc($token)."', ".dbEsc($id).")";
	$result = mysql_query($query);
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