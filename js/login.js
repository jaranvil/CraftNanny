/// <reference path="../typings/jquery/jquery.d.ts"/>

function loginUser() {
	var username_input = $('#username_login').val(),
		password_input = $('#password_login').val();
		
		$('#username_login').val('');
		$('#password_login').val('');
	
	theParams = {
		a: 'signIn',
		username: username_input,
		password: password_input
	}
	
	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {		
			//alert((new XMLSerializer()).serializeToString(xml));	
			var token = $(xml).find('token').text();
			if (token.length > 0) {
				signIn(token);
			} else {
				alert('Username and password combination not found.');
			}
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function signIn(token) {
	document.cookie = 'logger_token' + "=" + token + "; path=/";
	window.location.assign("http://www.craftnanny.org/home.php")
}

$(document).ready(function() {
	$('#login_btn_2').click(function(e) {
		loginUser();
		e.preventDefault();
	});
});