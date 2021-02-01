
alert('test');

$( "li" ).hover(
    function() {
      $( this ).append( $('#spanid').html('&#10024;');
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );
  


$("document").ready(funciton() {

const mq = window.matchMedia'(max-width:768px)');

if(mq.matches){
    $("h1").click(function() {
        $("nav").toggle();
    });
}
});
