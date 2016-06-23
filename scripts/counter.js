// counter
module.exports = function() {
  Array.prototype.forEach.call(document.getElementsByClassName('counter'), function(elCounter) {
    var elCount = elCounter.getElementsByClassName('count')[0];
    var defaultCnt = Number(elCount.textContent);
    var cnt = defaultCnt;

    function updateCnt(newCnt) {
      elCount.textContent = cnt = newCnt;
    }

    Array.prototype.forEach.call(elCounter.getElementsByClassName('diff-btn'), function(btn) {
      var diff = Number(btn.dataset.diff);
      btn.addEventListener('click', function() {
        updateCnt(cnt + diff);
      });
    });

    Array.prototype.forEach.call(elCounter.getElementsByClassName('reset-btn'), function(btn) {
      btn.addEventListener('click', function() {
        updateCnt(defaultCnt);
      });
    });
  });
};
