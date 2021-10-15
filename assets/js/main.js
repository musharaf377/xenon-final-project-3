
/* projects magnific js */
$(document).ready(function() {


  /* image popup active */
    $('.img-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });

    /* counter up js */
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    /* slick slider active */
    
  
    $('.testimonial').slick({
      loop: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});

$(window).on('scroll', function(){
  if($(this).scrollTop() > 20){
    $('.header-area').addClass('stikey');
  }else{
    $('.header-area').removeClass('stikey')
  }
})