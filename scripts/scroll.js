// control scrolling
module.exports = function() {
  var scrollTop = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  var contens = document.querySelector('.side > .contents');
  scrollTop();
  document.body.addEventListener('touchmove', function(e) {
    if (window.innerHeight < contents.offsetHeight) return;
    e.preventDefault();
    scrollTop();
  });
};
