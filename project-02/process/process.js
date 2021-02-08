$(document).ready(function() {

$(".logo").hover(function() {
  $().toggle();
  $("#lets-chat").toggle();
  var str = "Free Web Building Tutorials!";
var result = str.link("https://www.w3schools.com");
});



// attempting to set a slide in from right page transition
    	$(".body").hide();
    
        setTimeout(function(){ showHomePage(); }, 3000);

        function showHomePage(){
            $(".body").show("slide", { direction: "right" }, 1000);
        }
        })
        
  

// attempting to make the emoji svg run
   var textPath=document.querySelector('#emoji-curve');

   function updateTextPathOffset(offset){
       textPath.attr('startOffset');
   }

   updateTextPathOffset(50);
   function mouseenter(){
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