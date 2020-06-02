/*jslint browser: true*/
/*global $*/
/*eslint-env browser*/


$(document).ready(function () {
	"use strict";
	
	//using toggleclass
	$(".btncls").click(function(){
    $("div.firstIntro").toggleClass("firstIntro2");
  	});
	
// Adding smooth scrolling 
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() 
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });
    



/*using JQuery click event*/

/*$(document).ready(function(){
  $("p").click(function(){
    $(this).fadeOut();
  });
});*/


/* using id selector
$( "#myDiv" ).css( "border", "3px solid red" );
*/

/* using class selector
$(document).ready(function(){
  $("button").click(function(){ //button is gor button tag
    $(".test").hide();
  });
});
*/

/* using JQuery event for mycontacts box*/

  $("input").mouseenter(function () {
    $(this).css("background-color", "pink");
  });
    $("input").mouseleave(function () {
    $(this).css("background-color", "white");
  });

  $("textarea").mouseenter(function () {
    $(this).css("background-color", "pink");
  });
    $("textarea").mouseleave(function () {
    $(this).css("background-color", "white");
  });
	
	
});