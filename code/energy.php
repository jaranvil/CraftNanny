<?php

$version = 1;

require_once('connection.php');

$token = $_POST['token'];
$id = $_POST['id'];
$bat_name = $_POST['bat_name'];
$energy_type = $_POST['energy_type'];
$percent = $_POST['percent'];

$energy_type = htmlspecialchars($energy_type);
$bat_name = htmlspecialchars($bat_name);
$percent = htmlspecialchars($percent);

$query = "UPDATE tokens SET last_seen = NOW() WHERE token = '".dbEsc($token)."' AND computer_id = ".dbEsc($id);
$result = mysql_query($query);

if ($result) {
	$query2 = "UPDATE energy_storage SET bat_name = '".dbEsc($bat_name)."', energy_type = '".dbEsc($energy_type)."', percent = '".dbEsc($percent)."' WHERE token = '".dbEsc($token)."'";
	$result2 = mysql_query($query2);

	echo $version;
} else {
	echo 'error: token update query failed.';
}


function dbEsc($theString) {
	$theString = mysql_real_escape_string($theString);
	return $theString;
}

?>