/// <reference path="../typings/jquery/jquery.d.ts"/>

var token = "";


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

$(document).ready(function() {
	token = getCookie("logger_token");
	if (!(token.length > 2)) {
		window.location.assign("http://www.craftnanny.org/signin.php")
	} 
});