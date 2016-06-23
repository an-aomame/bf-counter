// control scrolling
export default () => {
  const scrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const sideContents = document.getElementsByClassName('side_contents')[0];
  scrollTop();
  document.body.addEventListener('touchmove', e => {
    if (window.innerHeight < sideContents.offsetHeight) return;
    e.preventDefault();
    scrollTop();
  });
};
