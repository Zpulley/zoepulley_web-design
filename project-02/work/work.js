$(document).ready(function() {

// for some reason this is glitching when ran.
$(".logo").hover(function() {
  $().toggle();
  $("#lets-chat").toggle();
  
});


// attempting to set a slide in from right page transition
$(".body").hide();
    
setTimeout(function(){ showWorkPage(); }, 3000);

function showWorkPage(){
    $(".body").show("slide", { direction: "right" }, 1000);
};


// attempting make the "EMOJI SVG'" slide out towards the left once you enter the page
$(".emoji-curve").hide();
    
setTimeout(function(){ showWorkPage(); }, 3000);

function showWorkPage(){
    $(".emoji-curve").show("slide", { direction: "left" }, 1000);
};


// attempting make the ".tcontainer'" slide out towards the left once you enter the page
$(".tcontainer").hide();

setTimeout(function(){ showHomePage(); }, 3000);

function showHomePage(){
$(".tcontainer").show("slide", { direction: "right" }, 1000);
updateTextPathOffset(50);
}


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

});