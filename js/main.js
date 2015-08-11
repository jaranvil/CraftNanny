/// <reference path="../typings/jquery/jquery.d.ts"/>

var signedIn = false,
	user_id = '0',
	$blankScanner,
	$blankVisior;

function initPage() {
	var visitor_template,
		vist_template;
		
	$.ajax({
		type: 'GET', 
		url: 'visitor_template.html', 
		async: false, 
		contentType   :  'text/html',
  		dataType      :  'html',
		success: function(theHtml) {
			visitor_template = theHtml;
		}
	}); 
	
	$.ajax({
		type: 'GET', 
		url: 'visit_template.html', 
		async: false, 
		contentType   :  'text/html',
  		dataType      :  'html',
		success: function(theHtml) {
			vist_template = theHtml;
		}
	}); 
	
	$blankScanner = $(visitor_template);
	$blankVisior = $(vist_template);
	
	$('#signoutBtn').hide();
	$('#submitBtn').hide();
	$('#submit_post').hide();
	$('.username_mouseover').hide();
	$('#user_data').hide();
	$('#sidebar_login').hide();
	$('#sidebar_signup').hide();
	$('#sidebar_create').hide();
	$('#viewSubmit').hide();
	$('#logout_btn').hide();
	$('#log_article').hide();
	$('.vist_details').hide();
	
	$('#vist1').click(function(e) {
		e.preventDefault;
		$('.vist_details').show(500);
	});
	
	user_id = getCookie('logger_token');
	if (user_id.length > 1) {
		signIn(user_id);
	}
	
	$('#login_btn').click(function() {
		$('#sidebar_login').show('slow');
		$('#sidebar_create').hide();
	});
	
	$('#signup_btn').click(function() {
		$('#sidebar_create').show('slow');
		$('#sidebar_login').hide();
	});

	$('#create_btn').click(function() {
		createUser();
	});
	
	$('#login_btn_2').click(function() {
		loginUser();
	});
}

function connections() {

	theParams = {
		a: 'getConnections',
		user_id: user_id
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			$(xml).find('connection').each(function() {
				if ($(this).attr('active') == '1') {
					$('.connections').append("<li><img src='img/online.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				} else {
					$('.connections').append("<li><img src='img/offline.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				}
				
			});
			
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function logs(scanner, visitor) {
	theParams = {
		a: 'logs',
		user_id: user_id
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	

			$(xml).find('scanner').each(function() {
				var newScanner = scanner.clone(true);
				
				$(newScanner).find('#scanner_title').text(" " + $(this).find('name').attr('name')+" - Recent Visitors:");
				if ($(this).find('name').attr('active') == '1') {
					$(newScanner).find('#status_img').attr('src', 'img/online.png');
				}
				$('#log').append($(newScanner));
				
				$(this).find('visitor').each(function() {
					var newVisitor = visitor.clone(true),
						record = $(this);
					$(newVisitor).find('#player_name').text($(this).attr('ign'));
					$(newVisitor).find('#player_avatar').attr('src', 'https://mcapi.ca/avatar/2d/'+$(this).attr('ign')+'/45');
					
					$(newVisitor).find('#detailsBtn').click(function(e) {
						playerRecord($(record).attr('ign'), $(record).attr('token'), $(newVisitor).find('.vist_details'));
						$(newVisitor).find('.vist_details').toggle(500);
						e.preventDefault();
					});
					
					$('#log').append($(newVisitor));
				});
				
				$('.vist_details').hide();
				$('#log').append("<hr>");
				
				
			});
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function playerRecord(player, token, element) {
	$(element).find('.record').empty();
	theParams = {
		a: 'getPlayerData',
		ign: player,
		token: token
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: false,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			
			$(xml).find('record').each(function() {
				$(element).find('.record').append("<li>"+$(this).attr('time')+" EST : "+player+$(this).attr('discription')+"</li>");
			});
			
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

//  User System  //

function createUser() {
	var usernameInput = $('#username').val(),
		passwordInput = $('#password').val(),
		passwordInput2 = $('#password2').val();
		
	if (passwordInput == passwordInput2) {
		if (checkForUser(usernameInput)) {
			alert('User already exists');
		} else {
			addNewUser(usernameInput, passwordInput);
		}
	} else {
		alert('Passwords did not match!');
	}

}

function addNewUser(name, pwd) {
	theParams = {
		a: 'addNewUser',
		username: name,
		password: pwd
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
	signedIn = true;
	document.cookie = 'logger_token' + "=" + token + "; path=/";
	user_id = token; 
	
	$('#logout_btn').show();
	$('#submitBtn').show();
	$('#viewSubmit').show();
	$('#log_article').show();
	$('#login_btn').hide();
	$('#signup_btn').hide();
	$('#sidebar_login').hide();
	$('#instructions').hide();
	
	
	// Useful data for your client-side scripts:
	// var profile = googleUser.getBasicProfile();
	
	// username = profile.getName();
	// google_id = profile.getId();
	$('#user_data').show();
	connections();
	logs($blankScanner, $blankVisior);
	
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
	initPage();
});