$(document)
    .ready(function () {
    	$(".body").hide();
    	// trying to have this page slide in from the right but not working. 


        setTimeout(function(){ showHomePage(); }, 3000);

        function showHomePage(){
            $(".body").show("slide", { direction: "left" }, 1000);
        }


        $(".body").click(function(e){
        	window.location.href = "http://linkToOtherPage.com/Process/";
        	
        })
        
    })

    $("a").hover(function() {
		$("#lets-chat").toggle();
		$(".logo").toggle();
		
    });
    

    
   var textPath=document.querySelector('#emoji-curve');
   //EMOJI SVG - can't figure out why my animation will not run. i'm trying to have the text within the textpath run along the svg path

   function updateTextPathOffset(offset){
       textPath.setAttribute('startOffset',offset);
   }

   updateTextPathOffset(50);
   function onScroll(){
       requestAnimationFrame(function(){
           updateTextPathOffset(window.scrollX*1.5);
    
       });
   }

   window.addEventListener('scroll',onScroll);


   function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }