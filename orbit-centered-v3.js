(()=>{
const sheet=document.createElement('link');sheet.rel='stylesheet';sheet.href='orbit-centered-v3.css';document.head.appendChild(sheet);
const previous=render;
render=function(){previous();const buttons=[...document.querySelectorAll('.orbit-nav button')];buttons.forEach((button,i)=>{const angle=-Math.PI/2+i*2*Math.PI/buttons.length;button.style.setProperty('--circle-x',(50+42*Math.cos(angle))+'%');button.style.setProperty('--circle-y',(50+42*Math.sin(angle))+'%')});document.querySelector('.orbit-date-note')?.remove();};
if(activeUser)render();
})();