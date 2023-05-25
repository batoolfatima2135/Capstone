const toggle = document.getElementById('toggle-icon');
const cancel = document.getElementById('cancel');
const toggleIcon = document.getElementById('icon');
const toggleDiv = document.getElementById('navbarTogglerDemo01');

toggleIcon.addEventListener('click', () => {
  cancel.style.display = 'block';
  toggleIcon.style.display = 'none';
  toggle.classList.add('ms-auto');
  toggleDiv.classList.add('full');
  document.body.style.overflow = 'hidden';
});
cancel.addEventListener('click', () => {
  cancel.style.display = 'none';
  toggleDiv.classList.remove('full');
  toggleIcon.style.display = 'block';
  toggle.classList.remove('ms-auto');
  document.body.style.overflow = 'visible';
});