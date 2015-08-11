<?php

$version = 2;

require_once('connection.php');

$token = $_POST['token'];
$id = $_POST['id'];
$top_input = $_POST['top_input'];
$bottom_input = $_POST['bottom_input'];
$front_input = $_POST['front_input'];
$back_input = $_POST['back_input'];
$left_input = $_POST['left_input'];
$right_input = $_POST['right_input'];

$top_input = htmlspecialchars($top_input);
$bottom_input = htmlspecialchars($bottom_input);
$front_input = htmlspecialchars($front_input);
$back_input = htmlspecialchars($back_input);
$left_input = htmlspecialchars($left_input);
$right_input = htmlspecialchars($right_input);

$query2 = "UPDATE redstone_controls SET top_input = ".dbEsc($top_input).",  bottom_input = ".dbEsc($bottom_input).",  front_input = ".dbEsc($front_input).",  back_input = ".dbEsc($back_input).",  left_input = ".dbEsc($left_input).",  right_input = ".dbEsc($right_input)." WHERE token = '".dbEsc($token)."'";
$result = mysql_query($query2);

getRsOutputs($token, $id, $version);

function getRsOutputs($token, $id, $version) {
	$query = "UPDATE tokens SET last_seen = NOW() WHERE token = '".dbEsc($token)."' AND computer_id = ".dbEsc($id);
	$result = mysql_query($query);
	
	if ($result) {
		$query2 = "SELECT * from redstone_controls WHERE token = '".dbEsc($token)."'";
		$result2 = mysql_query($query2);
		$row2 = mysql_fetch_array($result2, MYSQL_ASSOC);
	
		$returnString = $version.", ".$row2['top'].", ".$row2['bottom'].", ".$row2['back'].", ".$row2['front'].", ".$row2['left_side'].", ".$row2['right_side'];
		echo $returnString;
	} else {
		echo 'error: token update query failed.';
	}
	
	
}

function dbEsc($theString) {
	$theString = mysql_real_escape_string($theString);
	return $theString;
}

?>