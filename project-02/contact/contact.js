$(document).ready(function() {
    
    $(".body").hide();

    setTimeout(function(){ showHomePage(); }, 3000);
    
    function showHomePage(){
    $(".body").show("slide", { direction: "right" }, 1000);
    
    }
    
})

