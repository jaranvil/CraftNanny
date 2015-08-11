/// <reference path="../typings/jquery/jquery.d.ts"/>

var $blankScanner,
	$blankVisior,
	user_id;

function initPage() {
	var visitor_template,
		vist_template;
	
	user_id = token;
	
	getUser();
	
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
	
	logs($blankScanner, $blankVisior);
}

function getUser() {
	theParams = {
		a: 'getUser',
		user_id: token
	}
	
	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: false,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			
			$(xml).find('user').each(function() {
				$('#username').text($(this).attr('username'));
			});
		
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function logs(scanner, visitor) {
    var modules = false;

	theParams = {
		a: 'logs',
		user_id: user_id
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: false,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
		    
			$(xml).find('scanner').each(function() {
				var newScanner = scanner.clone(true);
				modules = true;
				

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
	
	if (modules) {
	    $('.no_connected_modules').hide();
	} else {
	    $('.module_header').hide();
	}
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

$(document).ready(function() {
	initPage();
});