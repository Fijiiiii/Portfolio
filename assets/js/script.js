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

$(function () {
  $(document).on("load scroll", function() {
    const navbar = document.querySelector('nav');
    document.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('stix');
    } else {
        navbar.classList.remove('stix');
    }
};
  });
});
const navbar = document.querySelector('nav');
window.onload = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('stix');
} else {
    navbar.classList.remove('stix');
}
}
