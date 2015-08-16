/// <reference path="../typings/jquery/jquery.d.ts"/>
var $blankModule;

function initPage() {
	var module_template;
	
	$.ajax({
		type: 'GET', 
		url: 'redstone_template.html', 
		async: false, 
		contentType   :  'text/html',
  		dataType      :  'html',
		success: function(theHtml) {
			module_template = theHtml;
		}
	}); 
	
	$blankModule = $(module_template);
	loadControls($blankModule);
}

function loadControls(template) {
	theParams = {
		a: 'load_redstone_controls',
		user_id: token
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			
			//alert((new XMLSerializer()).serializeToString(xml));	
			var counter = 1;
			$(xml).find('controls').each(function() {
				var newModule = template.clone(true),
					active = false;
				
				// Set module title
				$(newModule).find('#module_title').text(" " + $(this).attr('name'));
				if ($(this).attr('active') == '1') {
					$(newModule).find('#status_img').attr('src', 'img/online.png');
					active = true;
				}
				
				// set side names
				$(newModule).find('#top_name').text($(this).attr('top_name'));
				$(newModule).find('#bottom_name').text($(this).attr('bottom_name'));
				$(newModule).find('#front_name').text($(this).attr('front_name'));
				$(newModule).find('#back_name').text($(this).attr('back_name'));
				$(newModule).find('#left_name').text($(this).attr('left_name'));
				$(newModule).find('#right_name').text($(this).attr('right_name'));
				
				// Give toggle switches unique names
				$(newModule).find('#cmn-toggle-1').attr('id', 'cmn-toggle-'+counter);
				$(newModule).find('.toggle_label_1').attr('for', 'cmn-toggle-'+counter);
				$(newModule).find('#cmn-toggle-2').attr('id', 'cmn-toggle-'+(counter+1));
				$(newModule).find('.toggle_label_2').attr('for', 'cmn-toggle-'+(counter+1));
				$(newModule).find('#cmn-toggle-3').attr('id', 'cmn-toggle-'+(counter+2));
				$(newModule).find('.toggle_label_3').attr('for', 'cmn-toggle-'+(counter+2));
				$(newModule).find('#cmn-toggle-4').attr('id', 'cmn-toggle-'+(counter+3));
				$(newModule).find('.toggle_label_4').attr('for', 'cmn-toggle-'+(counter+3));
				$(newModule).find('#cmn-toggle-5').attr('id', 'cmn-toggle-'+(counter+4));
				$(newModule).find('.toggle_label_5').attr('for', 'cmn-toggle-'+(counter+4));
				$(newModule).find('#cmn-toggle-6').attr('id', 'cmn-toggle-'+(counter+5));
				$(newModule).find('.toggle_label_6').attr('for', 'cmn-toggle-'+(counter+5));
				
				// Switch toggles on that need to be
				if ($(this).attr('top') == '1') {
					$(newModule).find('#cmn-toggle-'+counter).prop('checked', true);
				}
				if ($(this).attr('bottom') == '1') {
					$(newModule).find('#cmn-toggle-'+(counter+1)).prop('checked', true);
				}
				if ($(this).attr('front') == '1') {
					$(newModule).find('#cmn-toggle-'+(counter+2)).prop('checked', true);
				}
				if ($(this).attr('back') == '1') {
					$(newModule).find('#cmn-toggle-'+(counter+3)).prop('checked', true);
				}
				if ($(this).attr('left') == '1') {
					$(newModule).find('#cmn-toggle-'+(counter+4)).prop('checked', true);
				}
				if ($(this).attr('right') == '1') {
					$(newModule).find('#cmn-toggle-'+(counter+5)).prop('checked', true);
				}
				
				// handle toggle switch changes
				var redstone_token = $(this).attr('token');
				$(newModule).find('#cmn-toggle-'+counter).click(function() {
					if ($(this).prop('checked')) {
						updateOutput(redstone_token, 'top', 1, 'int');
					} else {
						updateOutput(redstone_token, 'top', 0, 'int');
					}
				});
				$(newModule).find('#cmn-toggle-'+(counter+1)).click(function() {
					if ($(this).prop('checked')) {
						updateOutput(redstone_token, 'bottom', 1, 'int');
					} else {
						updateOutput(redstone_token, 'bottom', 0, 'int');
					}
				});
				$(newModule).find('#cmn-toggle-'+(counter+2)).click(function() {
					if ($(this).prop('checked')) {
						updateOutput(redstone_token, 'front', 1, 'int');
					} else {
						updateOutput(redstone_token, 'front', 0, 'int');
					}
				});
				$(newModule).find('#cmn-toggle-'+(counter+3)).click(function() {
					if ($(this).prop('checked')) {
						updateOutput(redstone_token, 'back', 1, 'int');
					} else {
						updateOutput(redstone_token, 'back', 0, 'int');
					}
				});
				$(newModule).find('#cmn-toggle-'+(counter+4)).click(function() {
					if ($(this).prop('checked')) {
						updateOutput(redstone_token, 'left_side', 1, 'int');
					} else {
						updateOutput(redstone_token, 'left_side', 0, 'int');
					}
				});
				$(newModule).find('#cmn-toggle-'+(counter+5)).click(function() {
					if ($(this).prop('checked')) {
						updateOutput(redstone_token, 'right_side', 1, 'int');
					} else {
						updateOutput(redstone_token, 'right_side', 0, 'int');
					}
				});
				
				// Edit name buttons
				
				// top
				$(newModule).find('#name_mouseover_top').hide();
				$(newModule).find('#edit_top').click(function(e) {
					$(newModule).find('#name_mouseover_top').show(500);
					e.preventDefault();
				});
				$(newModule).find('#cancel_name_change_top').click(function(e) {
					$(newModule).find('#name_mouseover_top').hide(500);
					e.preventDefault();
				});
				$(newModule).find('#save_name_top').click(function(e) {
					updateOutput(redstone_token, 'top_name', $(newModule).find('#newTopName').val(), 'string');
					$(newModule).find('#top_name').text($(newModule).find('#newTopName').val());
					$(newModule).find('#newTopName').val('');
					$(newModule).find('#name_mouseover_top').hide(500);
					e.preventDefault();
				});
				// bottom
				$(newModule).find('#name_mouseover_bottom').hide();
				$(newModule).find('#edit_bottom').click(function(e) {
					$(newModule).find('#name_mouseover_bottom').show(500);
					e.preventDefault();
				});
				$(newModule).find('#cancel_name_change_bottom').click(function(e) {
					$(newModule).find('#name_mouseover_bottom').hide(500);
					e.preventDefault();
				});
				$(newModule).find('#save_name_bottom').click(function(e) {
					updateOutput(redstone_token, 'bottom_name', $(newModule).find('#newBottomName').val(), 'string');
					$(newModule).find('#bottom_name').text($(newModule).find('#newBottomName').val());
					$(newModule).find('#newBottomName').val('');
					$(newModule).find('#name_mouseover_bottom').hide(500);
					e.preventDefault();
				});
				// front
				$(newModule).find('#name_mouseover_front').hide();
				$(newModule).find('#edit_front').click(function(e) {
					$(newModule).find('#name_mouseover_front').show(500);
					e.preventDefault();
				});
				$(newModule).find('#cancel_name_change_front').click(function(e) {
					$(newModule).find('#name_mouseover_front').hide(500);
					e.preventDefault();
				});
				$(newModule).find('#save_name_front').click(function(e) {
					updateOutput(redstone_token, 'front_name', $(newModule).find('#newFrontName').val(), 'string');
					$(newModule).find('#front_name').text($(newModule).find('#newFrontName').val());
					$(newModule).find('#newFrontName').val('');
					$(newModule).find('#name_mouseover_front').hide(500);
					e.preventDefault();
				});
				// back
				$(newModule).find('#name_mouseover_back').hide();
				$(newModule).find('#edit_back').click(function(e) {
					$(newModule).find('#name_mouseover_back').show(500);
					e.preventDefault();
				});
				$(newModule).find('#cancel_name_change_back').click(function(e) {
					$(newModule).find('#name_mouseover_back').hide(500);
					e.preventDefault();
				});
				$(newModule).find('#save_name_back').click(function(e) {
					updateOutput(redstone_token, 'back_name', $(newModule).find('#newBackName').val(), 'string');
					$(newModule).find('#back_name').text($(newModule).find('#newBackName').val());
					$(newModule).find('#newBackName').val('');
					$(newModule).find('#name_mouseover_back').hide(500);
					e.preventDefault();
				});
				// left
				$(newModule).find('#name_mouseover_left').hide();
				$(newModule).find('#edit_left').click(function(e) {
					$(newModule).find('#name_mouseover_left').show(500);
					e.preventDefault();
				});
				$(newModule).find('#cancel_name_change_left').click(function(e) {
					$(newModule).find('#name_mouseover_left').hide(500);
					e.preventDefault();
				});
				$(newModule).find('#save_name_left').click(function(e) {
					updateOutput(redstone_token, 'left_name', $(newModule).find('#newLeftName').val(), 'string');
					$(newModule).find('#left_name').text($(newModule).find('#newLeftName').val());
					$(newModule).find('#newLeftName').val('');
					$(newModule).find('#name_mouseover_left').hide(500);
					e.preventDefault();
				});
				// right
				$(newModule).find('#name_mouseover_right').hide();
				$(newModule).find('#edit_right').click(function(e) {
					$(newModule).find('#name_mouseover_right').show(500);
					e.preventDefault();
				});
				$(newModule).find('#cancel_name_change_right').click(function(e) {
					$(newModule).find('#name_mouseover_right').hide(500);
					e.preventDefault();
				});
				$(newModule).find('#save_name_right').click(function(e) {
					updateOutput(redstone_token, 'right_name', $(newModule).find('#newRightName').val(), 'string');
					$(newModule).find('#right_name').text($(newModule).find('#newRightName').val());
					$(newModule).find('#newRightName').val('');
					$(newModule).find('#name_mouseover_right').hide(500);
					e.preventDefault();
				});
				
				// Side inputs
				if($(this).attr('top_input')=='1') {
					$(newModule).find('#top_input').css('color', 'red');
					$(newModule).find('#top_input').text('True');
				} else {
					$(newModule).find('#top_input').css('color', '#999999');
					$(newModule).find('#top_input').text('False');
				}
				if($(this).attr('bottom_input')=='1') {
					$(newModule).find('#bottom_input').css('color', 'red');
					$(newModule).find('#bottom_input').text('True');
				} else {
					$(newModule).find('#bottom_input').css('color', '#999999');
					$(newModule).find('#bottom_input').text('False');
				}
				if($(this).attr('front_input')=='1') {
					$(newModule).find('#front_input').css('color', 'red');
					$(newModule).find('#front_input').text('True');
				} else {
					$(newModule).find('#front_input').css('color', '#999999');
					$(newModule).find('#front_input').text('False');
				}
				if($(this).attr('back_input')=='1') {
					$(newModule).find('#back_input').css('color', 'red');
					$(newModule).find('#back_input').text('True');
				} else {
					$(newModule).find('#back_input').css('color', '#999999');
					$(newModule).find('#back_input').text('False');
				}
				if($(this).attr('left_input')=='1') {
					$(newModule).find('#left_input').css('color', 'red');
					$(newModule).find('#left_input').text('True');
				} else {
					$(newModule).find('#left_input').css('color', '#999999');
					$(newModule).find('#left_input').text('False');
				}
				if($(this).attr('right_input')=='1') {
					$(newModule).find('#right_input').css('color', 'red');
					$(newModule).find('#right_input').text('True');
				} else {
					$(newModule).find('#right_input').css('color', '#999999');
					$(newModule).find('#right_input').text('False');
				}
				
				var node = $(this);
				$(newModule).find('#remove_link').click(function(e) {
					if (removeModule($(node).attr('token'))) {
						$(newModule).hide(500);
					}
					e.preventDefault();
				});
				
				$('#connected_modules').append($(newModule));
				
				counter = counter + 6;
				
				if (!active) {
					$(newModule).find('div.redstone_block').block({
					    message: '<strong>module not loaded</strong>',
						css: { border: '3px solid #a00' } 
					});
				}
			});
		},
		error: function(xhr) {
		  //alert(xhr.responseText);
		}
	});
}

function updateOutput(redstone_token, side, value, val_type) {
	theParams = {
		a: 'setRedstoneOutput',
		token: redstone_token,
		side: side, 
		value: value,
		val_type: val_type
	}

	$.ajax({
		type: "POST",
		url: "code/main.php",
		data: theParams, 
		dataType: 'xml', 
		async: true,
		success: function(xml) {	
			//alert((new XMLSerializer()).serializeToString(xml));	
		},
		error: function(xhr) {
		  //alert(xhr.responseText);
		}
	});
}

function removeModule(token) {
	var result = false;
	if (confirm('Are you sure you want to delete this module?')) {
		theParams = {
			a: 'remove_module',
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
				result = true;
			},
			error: function(xhr) {
			  alert(xhr.responseText);
			 
			}
		});
	} 
	return result;
}

$(document).ready(function() {
	initPage();
});