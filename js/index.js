const body = document.body;
const icon = document.querySelector('.icon');
const iconBar = document.querySelector('#icon-bar');

const resizeIcon = () => {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  const shrinkOn = 275;
  
  //document.querySelector('#blah').innerHTML = `Scroll Position: ${distanceY}`;
  
  if(distanceY > shrinkOn) {
    icon.classList.add('smaller');
    iconBar.style.justifyContent = 'flex-end'
  } else {
    icon.classList.remove('smaller');
    iconBar.style.justifyContent = 'center'
  }
}

window.addEventListener('scroll',resizeIcon);

const scrollToAnchor = (anchor) => {
  document.getElementById(anchor).scrollIntoView({behavior:'smooth',block:'start'});
}