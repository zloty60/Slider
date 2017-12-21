
$(function(){
  var carouselList = $("#carousel ul");
  var currentSlide = 1;
  
   $('#left').click(function () {
        moveLeft();
    });

    $('#right').click(function () {
        moveRight();
    });

  
  function moveLeft() {
    
         currentSlide = (currentSlide == 1) ? 5 : currentSlide-1;
    $(".circle-btn").removeClass("active");

$(".circle-btn:nth-of-type("+currentSlide+")").removeClass("active");
       
    
        $(carouselList).animate({
            left: + 600
        }, 800, function () {
            $("#carousel ul li:last-child").prependTo(carouselList);
            $(carouselList).css('left', '');
           
        });
     $(".circle button:nth-of-type("+currentSlide+")").addClass("active");   
    }

    function moveRight() {
        currentSlide = (currentSlide > 4) ? currentSlide = 1 : currentSlide+1;
     $(".circle-btn").removeClass("active");

$(".circle-btn:nth-of-type("+currentSlide+")").removeClass("active");
      

        $(carouselList).animate({
            left: -600
        }, 800, function () {
            $('#carousel ul li:first-child').appendTo(carouselList);
            $(carouselList).css('left', '');
          
        });
      
      $(".circle button:nth-of-type("+currentSlide+")").addClass("active");
         
    }
  
    function moveSlideTo(slide) {

       var direction = (currentSlide < slide) ? 'right': 'left';   
       var steps = Math.abs(currentSlide - slide);
      
      
      
       for(var i=0;i<steps;i++) {        
         if(direction === "right") moveRight();
         else moveLeft();
       }
    }
  
    $("#one").click(function() { 
      moveSlideTo(1); });
    $("#two").click(function() { moveSlideTo(2) });
    $("#three").click(function() { moveSlideTo(3) });
    $("#four").click(function() { moveSlideTo(4) });
    $("#five").click(function() { moveSlideTo(5) });
});