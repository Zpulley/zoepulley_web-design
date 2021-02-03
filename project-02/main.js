$(document).ready(function() {

	//attaching an event listener to your link element—on hover, toggle the logo (which was intially showing, so it would hide) and the hibutton (which was initially hidden, so it would show)
	$("a").hover(function() {
		$(".logo").toggle();
		$(".hibutton").toggle();
	});

//looks like this stuff might not be necessary for using floating.js? the "jqFloat" function doesn't seem to be included in this version of the library, it was throwing an error in my console.
// 	$('object').jqFloat({
// 		width: 100,
// 		height: 100,
// 		speed: 1000
// 	});

  

floating({
	content: "💘",
	number: 3,
	duration: 11
  });

floating({
content: "🍉",
number: 5,
duration: 8
});

floating({
content: "🍊",
number: 5,
duration: 15

});

floating({
content: "🤙🏾",
number: 1,
duration: 10,
size: 6
});

floating({});


//this stuff is no longer relevant, but just wanna point out that the period was missing in front of "divbutton" to refer to the class, and the "div" in $(div).css should be wrapped in quotes like $("div").css
// $("divbutton").hover(function() {
// 	$(div).css("background-image", "url(img/hibutton-02.png)"); 
// });



});