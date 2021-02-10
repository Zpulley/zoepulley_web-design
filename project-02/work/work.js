$(document).ready(function() {

// for some reason this is glitching when ran.
$(".logo").hover(function() {
  $().toggle();
  $("#lets-chat").toggle();
  
});





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