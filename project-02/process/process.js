$(document)
    .ready(function () {
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
        
    })
        