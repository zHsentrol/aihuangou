var tplHome = require('../templates/home.string');

// 引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home', {
  html: tplHome,

  plugins: ['delegated'],

  init: {
    vm: null,
  },

  bindActions: {
    'tap.slide': function (e, data) {
      this.mySwiper.slideTo($(e.el).index())
    }
  },

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
      this.mSwiper = new Swiper("#swiper",{
      	freeMode : true,
      	slidesPerView: 'auto',
        grabCursor: true
      });
    }    
  }
});