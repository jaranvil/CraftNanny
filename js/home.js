/// <reference path="../typings/jquery/jquery.d.ts"/>

var $moduleTemplate;

function initPage() {
	var module_template;
	
	$.ajax({
		type: 'GET', 
		url: 'module_template.html', 
		async: false, 
		contentType   :  'text/html',
  		dataType      :  'html',
		success: function(theHtml) {
			module_template = theHtml;
		}
	}); 
	
	$moduleTemplate = $(module_template);
	
	getUser();
	getPlayerModules();
	getRedstoneModules();
	gerFluidModules($moduleTemplate);
	getEnergyModules($moduleTemplate); 
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
				$('#welcome').text("Welcome, "+$(this).attr('username'));
			});
		
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function getPlayerModules() {

	theParams = {
		a: 'getConnections',
		user_id: token,
		module_type: '1'
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			var counter = 0;
			$(xml).find('connection').each(function() {
				if ($(this).attr('active') == '1') {
					$('#sensor_modules').append("<li><img src='img/online.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				} else {
					$('#sensor_modules').append("<li><img src='img/offline.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				}
				counter = counter + 1;
			});
			if (counter != 0) {
				$('#no_player_modules').hide();
			}
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function getRedstoneModules() {

	theParams = {
		a: 'getConnections',
		user_id: token,
		module_type: '4'
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			var counter = 0;
			$(xml).find('connection').each(function() {
				if ($(this).attr('active') == '1') {
					$('#redstone_modules').append("<li><img src='img/online.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				} else {
					$('#redstone_modules').append("<li><img src='img/offline.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				}
				counter = counter + 1;
			});
			if (counter != 0) {
				$('#no_redstone_modules').hide();
			}
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function gerFluidModules(template) {

	theParams = {
		a: 'getConnections',
		user_id: token,
		module_type: '3'
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			var counter = 0;
			$(xml).find('connection').each(function() {
				var newModule = template.clone(true);
							
				if ($(this).attr('active') == '1') {
					//$(newModule).find('#status_img').attr('src', 'img/online.png');	
					$('#fluid_modules').append("<li><img src='img/online.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				} else {
					//$(newModule).find('#status_img').attr('src', 'img/offine.png');
					$('#fluid_modules').append("<li><img src='img/offline.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				}
				//$(newModule).find('#module_title').text($(this).attr('name'));
				//$('#fluid_modules').append($(newModule));
				counter = counter + 1;
			});
			if (counter != 0) {
				$('#no_fluid_modules').hide();
			}
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function getEnergyModules(template) {

	theParams = {
		a: 'getConnections',
		user_id: token,
		module_type: '2'
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			var counter = 0;
			$(xml).find('connection').each(function() {
				var newModule = template.clone(true);
							
				if ($(this).attr('active') == '1') {
					//$(newModule).find('#status_img').attr('src', 'img/online.png');	
					$('#energy_modules').append("<li><img src='img/online.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				} else {
					//$(newModule).find('#status_img').attr('src', 'img/offine.png');
					$('#energy_modules').append("<li><img src='img/offline.png' style='width:10px'>"+" "+$(this).attr('name')+"</li>");
				}
				//$(newModule).find('#module_title').text($(this).attr('name'));
				//$('#fluid_modules').append($(newModule));
				counter = counter + 1;
			});
			if (counter != 0) {
				$('#no_energy_modules').hide();
			}
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

$(document).ready(function() {
	initPage();
});