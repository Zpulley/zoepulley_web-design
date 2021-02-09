$(document).ready(function() {
    floating({
        content: "💘",
        number: 2,
        duration: 11
      });
    
    floating({
    content: "🍉",
    number: 2,
    duration: 8
    });
    
    floating({
    content: "🍊",
    number: 2,
    duration: 15
    
    });
    
    floating({
    content: "🤙🏾",
    number: 1,
    duration: 10,
    size: 3
    });
    
    floating({
    content: "🖖🏾",
    number: 1,
    duration: 14,
    size: 3
        });
    
    floating({
    content: "👏🏾",
    number: 1,
    duration: 8,
    size: 6
    });

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

// hamburger menu for mobile - this works!
function myFunction() {
    var x = document.getElementById("li");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



