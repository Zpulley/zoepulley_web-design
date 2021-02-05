$(document)
    .ready(function () {
    	$(".processPage").hide();
    	// trying to have this page slide in from the right. 


        setTimeout(function(){ showHomePage(); }, 3000);

        function showHomePage(){
            $(".HomePage").show("slide", { direction: "left" }, 1000);
        }


        $(".process").click(function(e){
        	window.location.href = "http://linkToOtherPage.com/Process/";
        	
        })
        
    })
 //attempt at hover
    $("a").hover(function() {
		$("#lets-chat").toggle();
		$(".logo").toggle();
		
    });
    

    
   var textPath=document.querySelector('#emoji-curve');
   //can't figure out why my animation will not run. i'm trying to have the text within the textpath run along the svg path

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

// attempt at hamburger menu 
   function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }