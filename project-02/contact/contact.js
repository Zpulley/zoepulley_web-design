$(document).ready(function() {
    
// attempting to set a slide in from bottom
$(".body").hide();

    setTimeout(function(){ showContactPage(); }, 3000);

    function showContactPage(){
        $(".body").show("slide", { direction: "bottom" }, 1000);
    }
    $(".body").click(function(e){
        window.location.href = "https://zpulley.github.io/zoepulley_web-design/project-02/process/process.html";
        
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