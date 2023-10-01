import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

function timelineSlider(){
    var swiper = new Swiper('.timeline-slider', {
        // mousewheel: true,
        // mouseWheel:{
        //   invert: true,
        // },
        navigation: {
        nextEl: '.timeline-slider__btn-next',
        prevEl: '.timeline-slider__btn-prev',
        },
        loop:true,
        grabCursor: true,
        // autoplay: true,
        speed:1000,
        pagination: {
          el: ".timeline-slider__pagination",
          clickable: true
        },
        slidesPerView: 1,
        spaceBetween: 45,
      });
}

export default timelineSlider;