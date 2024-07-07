const contactBtn = document.getElementById('contact-btn');
const homeFormSection = document.getElementById('home-form-section');

contactBtn.addEventListener('click', () => {
  homeFormSection.scrollIntoView({ behavior: 'smooth'});
})