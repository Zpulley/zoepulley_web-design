$(document)

// attempting to call the hover effect for "#lets-chat"
$(".home").hover(function() {
  $(".logo").toggle();
  $("#lets-chat").toggle();
  var str = "Free Web Building Tutorials!";
var result = str.link("https://www.w3schools.com");
});

// attempting to call the hover effect for "#starburst"
$(".process").hover(function() {
  $(".process").toggle();
  $("#starburst").toggle();
  var str = "Free Web Building Tutorials!";
var result = str.link("https://www.w3schools.com");
});



// attempting to set a slide in from right page transition
.ready(function () {
    	$(".body").hide();
    
        setTimeout(function(){ showHomePage(); }, 3000);

        function showHomePage(){
            $(".body").show("slide", { direction: "right" }, 1000);
        }
        $(".body").click(function(e){
        	window.location.href = "http://linkToOtherPage.com/Process/";
        	
        })
        
    })

// attempting to make the emoji svg run
   var textPath=document.querySelector('#emoji-curve');

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


// hamburger menu for mobile - this works!
   function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }