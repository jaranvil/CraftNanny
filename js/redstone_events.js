/// <reference path="../typings/jquery/jquery.d.ts"/>
var $blankEvent;

function initPage() {
	var event_template;
	
	$.ajax({
		type: 'GET', 
		url: 'event_template.html', 
		async: false, 
		contentType   :  'text/html',
  		dataType      :  'html',
		success: function(theHtml) {
			event_template = theHtml;
		}
	}); 
	
	$blankEvent = $(event_template);
	loadEvents($blankEvent);
	
	populateDropdowns()
	
	$('#redstone_modules').change(function() {
		theParams = {
			a: 'get_redstone_sides',
			token: $(this).val()
		}
	
		$.ajax({
			type: "POST",
			url: "code/main.php",
			data: theParams, 
			dataType: 'xml', 
			async: false,
			success: function(xml) {	
				
				//alert((new XMLSerializer()).serializeToString(xml));	
	
				$(xml).find('modules').each(function() {
					$('#module_side').empty();
					$('#module_side')
						.append($("<option></option>")
			         	.attr("value", "top_side")
			         	.text($(this).attr('top_name'))); 
					 $('#module_side')
						.append($("<option></option>")
			         	.attr("value", "bottom_side")
			         	.text($(this).attr('bottom_name'))); 
					 $('#module_side')
						.append($("<option></option>")
			         	.attr("value", "front_side")
			         	.text($(this).attr('front_name'))); 
					 $('#module_side')
						.append($("<option></option>")
			         	.attr("value", "back_side")
			         	.text($(this).attr('back_name'))); 
					 $('#module_side')
						.append($("<option></option>")
			         	.attr("value", "left_side")
			         	.text($(this).attr('left_name'))); 
					 $('#module_side')
						.append($("<option></option>")
			         	.attr("value", "right_side")
			         	.text($(this).attr('right_name'))); 
				});
				
	
			},
			error: function(xhr) {
			  alert(xhr.responseText);
			}
		});
	});
	
	// Create button
	// the id is for css reasons
	$('#login_btn').click(function() {
		if (checkUserInput()) {
			if (isPercent($('#trigger_value').val())) {
				theParams = {
					a: 'create_redstone_event',
					user_id: token,
					redstone_token: $('#redstone_modules').val(),
					storage_token: $('#storage_modules').val(),
					side: $('#module_side').val(),
					output_value: $('#output_value').val(),
					trigger_value: $('#trigger_value').val(),
					event_type: $('#event_type').val()
				}
			
				$.ajax({
					type: "POST",
					url: "code/main.php",
					data: theParams, 
					dataType: 'xml', 
					async: false,
					success: function(xml) {		
						//alert((new XMLSerializer()).serializeToString(xml));	
						alert('Event Created.');
	
					},
					error: function(xhr) {
					  alert(xhr.responseText);
					}
				});
			} else {
				alert("Enter an integer between 0 and 100 for the percent value.");
			}
		} else {
			alert("Fill in all the required fields.");
		}
		loadEvents($blankEvent);
	});
}

function loadEvents(template) {
	var counter = 0;
	
	theParams = {
		a: 'load_redstone_events',
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
			
			$(xml).find('events').each(function() {
				var newModule = template.clone(true);
				
				var output;
				if ($(this).attr('output') == '1' ) {
					output = 'true';
				} else 
				output = 'false';
				var inequality;
				if($(this).attr('event_type') == '1') {
					inequality = '>';
				} else {
					inequality = '<';
				}
				
				if ($(this).attr('redstone_active') == '1' && $(this).attr('storage_active') == '1') {
					$(newModule).find('#status_img').attr('src', 'img/online.png');
				}
				
				var event = $(this);
				$(newModule).find('#event_title').text("When " + $(this).attr('storage_module') + " " + inequality + " " + $(this).attr('trigger_value') + "%, " + $(this).attr('redstone_module') + " " + $(this).attr('side') + " set to " + output);
				$(newModule).find('#remove_link').click(function(e) {
					if (removeEvent(event)) {
						$(newModule).hide(500);
					}
					e.preventDefault()
				});
				$('#active_events').append($(newModule));
				
				counter = counter + 1;
			});
		},
		error: function(xhr) {
		  //alert(xhr.responseText);
		}
	});
	
	if (counter > 0 ) {
		$('.no_events').hide();
	}
}

function checkUserInput() {
	// this is crude. should add relavent errors
	if ($('#storage_modules').val() != null){
		if ($('#redstone_modules').val() != null) {
			if ($('#module_side').val() != null) {
				if ($('#output_value').val() != null) {
					if ($('#trigger_value').val() != null) {
						return true;
					}
				}
			}
		}
	}
	return false;
}

function isPercent(str) {
    var n = ~~Number(str);
    return String(n) === str && n >= 0 && n <= 100;
}

function populateDropdowns() {
	theParams = {
		a: 'redstone_event_dropdowns',
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
			var counter = 0;
			$(xml).find('storage_modules').each(function() {
				counter = counter + 1;
				$('#storage_modules')
					.append($("<option></option>")
		         	.attr("value",$(this).attr('token'))
		         	.text($(this).attr('name'))); 
			});
			
			if (counter == 0) {
				$('#storage_modules')
					.append($("<option></option>")
					.attr("value",null)
		         	//.attr('disabled','disabled')
		         	.text('No Storage Modules Connected')); 
			}
			
			counter = 0;
			$(xml).find('redstone_modules').each(function() {
				counter = counter + 1;
				$('#redstone_modules')
					.append($("<option></option>")
		         	.attr("value",$(this).attr('token'))
		         	.text($(this).attr('name'))); 
			});
			
			if (counter == 0) {
				$('#redstone_modules')
					.append($("<option></option>")
					.attr("value",null)
		         	//.attr('disabled','disabled')
		         	.text('No Redstone Modules Connected')); 
			}
		},
		error: function(xhr) {
		  alert(xhr.responseText);
		}
	});
}

function removeEvent(event) {
	var result = false;
	if (confirm('Are you sure you want to delete this event?')) {
		theParams = {
			a: 'remove_event',
			event_id: $(event).attr('event_id')
		}
	
		$.ajax({
			type: "POST",
			url: "code/main.php",
			data: theParams, 
			dataType: 'xml', 
			async: false,
			success: function(xml) {	
				//alert((new XMLSerializer()).serializeToString(xml));	
				result = true;
			},
			error: function(xhr) {
			 // alert(xhr.responseText);
			 
			}
		});
	} 
	return result;
}

$(document).ready(function() {
	initPage();
});