require('./stylesheets/style.css');

require('viewport-units-buggyfill').init();

jQuery(function($) {
  // control scrolling
  (function() {
    var scrollTop = function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    var $contents = $('.side1 > .contents');
    scrollTop();
    $('body').on('touchmove', function(e) {
      if (window.innerHeight < $contents.height()) return;
      e.preventDefault();
      scrollTop();
    });
  })();

  $('.counter').each(function() {
    var $counter = $(this);
    var $count = $counter.find('.count');
    var defaultCnt = Number($count.text());
    var cnt = defaultCnt;
    function updateCnt(newCnt) {
      cnt = newCnt;
      $count.text(cnt);
    }
    $counter.find('.diff-btn').each(function() {
      var $btn = $(this);
      var diff = Number($btn.data('diff'));
      $btn.click(function() {
        updateCnt(cnt + diff);
      });
    });
    $counter.find('.reset-btn').click(function() {
      updateCnt(defaultCnt);
    });
  });
});
