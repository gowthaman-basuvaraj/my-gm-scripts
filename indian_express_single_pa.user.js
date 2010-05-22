//
// Written by Faisal Deshmukh
// Script Version: 1.0
// Added Page font changes @techie2go
//
//
// ==UserScript==
// @name           Indian express single page news content
// @namespace      -
// @description    Displays news content on a single page instead of multiple pages
// @include        http://www.indianexpress.com/*
// ==/UserScript==




var anchors = document.getElementsByTagName('a');

for ( var i = 0; i < anchors.length; i++ ) 
{

    var link = anchors[i].href.replace( /^http:\/\/(.*\.)?www.indianexpress\.com\/news\/(.*)$/, "http://www.indianexpress.com/news/$20" );
    anchors[i].href = link;

}
div=document.getElementById("box_left");
div.setAttribute("style","width:1000px; baclground-color: #fff;display:block");
divs = div.getElementsByTagName("div");
for(i=0; i<divs.length; i++) {
	if(divs[i].className=="txt") {
		divs[i].setAttribute("style","background-color:#fff");
		break;
	}
}
font = document.getElementsByTagName("font");
for(i=0; i< font.length; i++) 
  font[i].setAttribute("style","font-family:verdana;font-size:large;line-height:32px");



