//// 引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
//
//// 引入views
require("./views/index.js");
require("./views/home.js");
require("./views/redemption.js");
require("./views/subsidy.js");
require("./views/zreoption.js");
require('./views/my.js');

//// SPA设置
SPA.config({
indexView: 'index'
});

