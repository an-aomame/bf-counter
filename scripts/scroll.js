// control scrolling
export default () => {
  const scrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const contents = document.querySelector('.side > .contents');
  scrollTop();
  document.body.addEventListener('touchmove', e => {
    if (window.innerHeight < contents.offsetHeight) return;
    e.preventDefault();
    scrollTop();
  });
};
