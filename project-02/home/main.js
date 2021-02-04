$(document).ready(function() {
	$(".processPage").hide();
    	// same for work and info

        // wait 3000 milliseconds after home page loads.
        setTimeout(function(){ showHomePage(); }, 3000);

        function showHomePage(){
            $(".HomePage").show("slide", { direction: "left" }, 1000);
        }


        $(".process").click(function(e){
        	window.location.href = "http://linkToOtherPage.com/Process/";
        	//and then process js file has it's own showHomePage logic to animate the hidden element.
        })
	

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

  



});