require('sanitize.css/sanitize.css');
require('../stylesheets/style.css');

require('viewport-units-buggyfill').init();
require('fastclick').attach(document.body);

require('core-js/web/dom-collections');
require('core-js/fn/dom-collections/iterator');

require('./scroll.js').default();
require('./counter.js').default();
