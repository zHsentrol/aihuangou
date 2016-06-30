var tplZreoption = require('../templates/zreoption.string');

SPA.defineView('zreoption', {
	html:tplZreoption,
	bindEvents: {
    'show': function () {
      this.mySwiper = new Swiper('.banner', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      });
      this.mSwiper = new Swiper(".nav-swiper",{
      	pagination: '.swiper-pagination',
        paginationClickable: true
      });
    }    
  }
});