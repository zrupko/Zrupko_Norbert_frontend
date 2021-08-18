const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  img.forEach((img) => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add('fade-in');

  setTimeout(() => current.classList.remove('fade-in'), 500);

  e.target.style.opacity = opacity;
}

function navBar() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
