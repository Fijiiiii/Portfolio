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
          dots:true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots:true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
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
