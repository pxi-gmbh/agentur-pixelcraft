// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// EMAIL JS
// (for spam protection)
// Usage:
// * Fill in your email address in the variable ‘XXeml’ below,
// * Put a span with class="js-XXemail" where you want the link,
// * Add <script>window.onload = myEmail();</script> after calling this script.
//
function myEmail() {
	var eml  = 'hallo'   // The email address...
	eml += '@'
	eml += 'pixelcraft.pub'

	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + eml);
	link.appendChild(document.createTextNode(eml));
	var spans = getElementsByClass("span", "js-email");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
	
	
	var dataeml  = 'datenschutz'              // The email address...
	dataeml += '@'
	dataeml += 'pixelcraft.pub'
	
	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + dataeml);
	link.appendChild(document.createTextNode(dataeml));
	var spans = getElementsByClass("span", "js-dataemail");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
	
	
	var ctatext = 'schreiben Sie uns ⩤' // The CTA
	
	var link = document.createElement("a");
	link.setAttribute("href", "mailto:" + eml);
	link.setAttribute("class", "button");
	link.appendChild(document.createTextNode(ctatext));

	var spans = getElementsByClass("span", "js-cta");
	for (var i = 0; i < spans.length; i++)
		spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}
// Returns an array of elements with the given class
function getElementsByClass(elem, classname) {
	var classes = new Array();
	var alltags = document.getElementsByTagName(elem);
	for (i = 0; i < alltags.length; i++)
		if (alltags[i].className == classname)
			classes[classes.length] = alltags[i];
	return classes;
}



// FRAMEBREAKER 
// (disable viewing this site in iframes)
// Usage:
// * Add <script>window.onload = frameBreaker();</script> after calling this script.
//
function frameBreaker()
{
  if (top.location != location) {
	top.location.href = document.location.href ;
  }
}