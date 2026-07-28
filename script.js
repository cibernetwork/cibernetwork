const phone='527733320623';
function openWhatsApp(message){window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
document.querySelectorAll('.wa').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();openWhatsApp(link.dataset.msg||'Hola, quiero información de CIBERNETWORK.');}));
const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('quote-form')?.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim(),l=document.getElementById('location').value.trim(),s=document.getElementById('service').value,d=document.getElementById('details').value.trim();openWhatsApp(`Hola, soy ${n}. Comunidad: ${l}. Me interesa: ${s}. Detalles: ${d||'Solicito información y cotización.'}`);});
document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(entries=>entries.forEach(x=>x.isIntersecting&&x.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
