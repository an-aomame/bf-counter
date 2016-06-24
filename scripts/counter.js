// counter
export default () => {
  Array.prototype.forEach.call(document.getElementsByClassName('counter'), elCounter => {
    const elCount = elCounter.getElementsByClassName('count')[0];
    const defaultCnt = Number(elCount.textContent);
    let cnt = defaultCnt;

    const updateCnt = newCnt =>
      elCount.textContent = cnt = newCnt;

    Array.prototype.forEach.call(elCounter.getElementsByClassName('diffButton'), btn => {
      const diff = Number(btn.getAttribute('data-diff'));
      btn.addEventListener('click', () => { updateCnt(cnt + diff) });
    });

    Array.prototype.forEach.call(elCounter.getElementsByClassName('resetButton'), btn => {
      btn.addEventListener('click', () => { updateCnt(defaultCnt) });
    });
  });
};
