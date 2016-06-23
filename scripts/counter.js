// counter
export default () => {
  for (let elCounter of document.getElementsByClassName('counter')) {
    const elCount = elCounter.getElementsByClassName('count')[0];
    const defaultCnt = Number(elCount.textContent);
    let cnt = defaultCnt;

    const updateCnt = newCnt =>
      elCount.textContent = cnt = newCnt;

    for (let btn of elCounter.getElementsByClassName('diffButton')) {
      const diff = Number(btn.dataset.diff);
      btn.addEventListener('click', () => { updateCnt(cnt + diff) });
    }

    for (let btn of elCounter.getElementsByClassName('resetButton')) {
      btn.addEventListener('click', () => { updateCnt(defaultCnt) });
    }
  }
};
