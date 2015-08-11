<?php

//open database connection
$dbConn = mysql_connect('', '', '')
	or die(print_r(mysql_error()));
mysql_select_db('base_logger') or die(print_r(mysql_error()));

//$dbConn = mysqli_connect("localhost","root","lockview","repost") or die("Error " . mysqli_error($dbConn)); 
?>