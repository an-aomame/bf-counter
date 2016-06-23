require('../stylesheets/style.css');

require('viewport-units-buggyfill').init();
require('fastclick').attach(document.body);

require('./scroll.js').default();
require('./counter.js').default();
