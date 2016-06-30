var tplRedemption = require('../templates/redemption.string');
var util = require('../utils/fn.js');

SPA.defineView('redemption', {
	html:tplRedemption,
	plugins: ['delegated', {
	    name: 'avalon',
	    options: function (vm) {
	    vm.livelist = [];
	    }
	}],
	init: {
	    vm: null,
	    livelistArray:[]
	},
	
	bindEvents: {
	    'beforeShow': function () {
	      var that = this;
	
	      // 获得vm对象
	      that.vm = that.getVM();
	
	      $.ajax({
	        url: '/aihuangou/mock/redemption1.json',
	        type: 'get',
	       
	        success: function (rs) {
	        that.vm.livelist = rs.data;
	        }
	      });
	    },
	    'show': function () {
	    	var that = this;
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
	      
	      var scrollSize = 30;
	      var myScroll = this.widgets.homeHotScroll;
	      myScroll.scrollBy(0, -scrollSize);
	      
	      myScroll.on('scrollEnd', function () {
	          if (this.y >= -scrollSize && this.y < 0) {
	              myScroll.scrollTo(0, -scrollSize);
	              
	          } else if (this.y >= 0) {
	              
	              // ajax下拉刷新数据
	
	              $.ajax({
	                url: '/aihuangou/mock/redemption1.json',
	                
	                success: function (rs) {
	                  that.vm.livelist = rs.data;
	                	myScroll.scrollTo(0, -scrollSize);
	                }
	              })
	          }
	
	          var maxY = this.maxScrollY - this.y;
	          var self = this;
	          if (maxY > -scrollSize && maxY < 0) {
	              myScroll.scrollTo(0, self.maxScrollY + scrollSize);
	              
	          } else if (maxY >= 0) {
	              
	              // ajax上拉加载数据
	
	              $.ajax({
	                url: '/aihuangou/mock/redemption2.json',
	                
	                success: function (rs) {
	                  var newArray = that.livelistArray.concat(rs.data);
	                  that.vm.livelist = newArray;
	                  that.livelistArray = newArray;
	                  myScroll.scrollTo(0, self.y + scrollSize);
	                  myScroll.refresh();
	                }
	            });
	        }
	      })
	      
      
    }
    
  }
});