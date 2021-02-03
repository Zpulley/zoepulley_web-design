alert(test);

$("document").ready(function(){

    const mq = window.matchMedia(`(max-width: 768px)`);
    $(".menuIcon").click(function(){
        $("nav").toggle();
        
    });
    if (mq.matches) {
        $(".menu").click(function(){
            $("nav").toggle();
            
        });
    }

});
