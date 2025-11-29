document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener('click',e=>{
   e.preventDefault();
   document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
 });
});

const form=document.querySelector('form');
if(form){form.addEventListener('submit',e=>{
 e.preventDefault();
 alert('¡Información enviada!');});}
