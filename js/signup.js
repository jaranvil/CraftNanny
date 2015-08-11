/// <reference path="../typings/jquery/jquery.d.ts"/>

//  User System  //

function createUser() {
	var usernameInput = $('#username').val(),
		passwordInput = $('#password').val(),
		passwordInput2 = $('#password2').val(),
		email = $('#email').val();
		
	if (confirmEmail(email)) {
		if (usernameInput.length > 3) {
			if (passwordInput.length > 2 && passwordInput2.length > 2) {
				if (passwordInput == passwordInput2) {
					if (checkForUser(usernameInput)) {
						alert('User already exists');
					} else {
						addNewUser(usernameInput, passwordInput, email);
					}
				} else {
					alert('Passwords did not match!');
				}
			} else {
				alert('Password is too short.');
			}
		} else {
			alert('Username is too short');
		}
	}
}

function confirmEmail(email) {
	if (email == '') {
		if (confirm("Without entering an email you will not be able to recover lost passwords. Continue?")) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
}

function addNewUser(name, pwd, email) {
	theParams = {
		a: 'addNewUser',
		username: name,
		password: pwd,
		email: email
	}
	
	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {		
			$('#sidebar_create').hide();
			//alert((new XMLSerializer()).serializeToString(xml));	
			signIn($(xml).find('token').text());
			
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

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

function signOut() {
	signedIn = false;
	$('#logout_btn').hide();
	$('#submitBtn').hide();
	$('#viewSubmit').hide();
	$('#user_data').hide();
	$('#login_btn').show();
	$('#signup_btn').show();
	$('#instructions').show();
	username = '';
	user_id = 0;
	
	del_cookie('logger_token');


}

function checkForUser(username) {
	var result;
	
	theParams = {
		a: 'doesUserExist',
		id: username,
		user_type: 'main'
	}
	
	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: false,
		success: function(xml) {		
			//alert((new XMLSerializer()).serializeToString(xml));	
			
			if($(xml).find('records').text() == '0') {
				result = false;
			} else {
				result = true;
			}
		},
		error: function(xhr) {
			
		  alert(xhr.responseText);
		}
	});
	return result;
}



function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function del_cookie(name) {
document.cookie = name +
'=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
}

$(document).ready(function() {
	
});