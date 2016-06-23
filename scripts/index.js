require('../stylesheets/style.css');

require('viewport-units-buggyfill').init();
require('fastclick').attach(document.body);

var scroll = require('./scroll.js');
scroll();

var counter = require('./counter.js');
counter();
