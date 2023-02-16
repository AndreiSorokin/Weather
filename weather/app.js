document.querySelector('.change-theme')
.addEventListener('click', ()=> {
   document.body.classList.toggle('dark');

   const icons = document.querySelector('.icons');
   const rotation = parseInt(getComputedStyle(icons)
   .getPropertyValue('--rotation'));
   icons.style.setProperty('--rotation', rotation+360);
})