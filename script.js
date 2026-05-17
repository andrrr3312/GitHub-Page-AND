window.addEventListener('scroll', () => {

  const nav = document.querySelector('nav');

  if(window.scrollY > 50){
    nav.style.background = 'rgba(15,23,42,0.85)';
    nav.style.backdropFilter = 'blur(10px)';
    nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.25)';
  } else {
    nav.style.background = 'transparent';
    nav.style.boxShadow = 'none';
  }

});


const cards = document.querySelectorAll('.skill-card');

cards.forEach((card, index) => {

  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';

  setTimeout(() => {
    card.style.transition = '0.6s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, index * 200);

});