$(function(){
  $('.skill').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    arrows:false,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots:false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots:false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
        }
      }
    ]
  });
}
);
$(function(){
  $('.projCarousel').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    arrows:false,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots:false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots:false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots:false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });
}
);
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},100);
                  
          }
          
      }); 
  
  });
  
});