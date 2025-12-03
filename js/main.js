
// // Menu toggle
// const navToggle = document.querySelector('.nav-toggle');
// const mainNav = document.getElementById('mainNav');
// navToggle?.addEventListener('click', ()=>{
//   mainNav.classList.toggle('active');
// });

// // Shrink header on scroll
// const header = document.getElementById('siteHeader');
// window.addEventListener('scroll', ()=>{
//   if(window.scrollY > 60) header.classList.add('scrolled'); else header.classList.remove('scrolled');
// });

// // Simple slider
// const slides = document.querySelectorAll('.hero-slider .slide');
// const nextBtn = document.querySelector('.slider-controls .next');
// const prevBtn = document.querySelector('.slider-controls .prev');
// let current = 0;
// function goTo(i){
//   slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
//   const wrap = document.querySelector('.slider-wrap');
//   wrap.style.transform = `translateX(${-i*100}%)`;
//   current = i;
// }
// nextBtn?.addEventListener('click', ()=> goTo((current+1)%slides.length));
// prevBtn?.addEventListener('click', ()=> goTo((current-1+slides.length)%slides.length));
// let sliderInterval = setInterval(()=> goTo((current+1)%slides.length), 3000);

// // pause on hover
// const hero = document.querySelector('.hero-slider');
// hero?.addEventListener('mouseenter', ()=> clearInterval(sliderInterval));
// hero?.addEventListener('mouseleave', ()=> sliderInterval = setInterval(()=> goTo((current+1)%slides.length), 6000));

// // Counters animation
// const counters = document.querySelectorAll('.counter');
// counters.forEach(counter=>{
//   const update = ()=>{
//     const target = +counter.dataset.target;
//     const cur = +counter.innerText;
//     const inc = Math.ceil(target/120);
//     if(cur < target){
//       counter.innerText = cur + inc;
//       setTimeout(update, 20);
//     } else counter.innerText = target;
//   };
//   const obs = new IntersectionObserver(entries=>{
//     entries.forEach(e=>{ if(e.isIntersecting){ update(); obs.disconnect(); } });
//   },{threshold:0.6});
//   obs.observe(counter);
// });

// const section = document.getElementById('hero')
// const images = ['cover1','cover2','cover3','cover4','cover5','cover6','cover7','cover8','cover9','cover10'];
// let index = 0;

function changerImage() {
        section.classList.remove(section.getAttribute("class"));
        section.classList.add(images[index]);
        index = (index + 1) % images.length;
}

// Changer d'image toutes les 5 secondes
setInterval(changerImage, 3000);

// // Gallery lightbox
// const lightbox = document.getElementById('lightbox');
// const lbImg = document.querySelector('.lb-img');
// const lbCaption = document.querySelector('.lb-caption');
// const lbClose = document.querySelectorAll('.lb-close');
// const galleryImgs = document.querySelectorAll('.gallery img');

// galleryImgs.forEach(img=>{
//   img.addEventListener('click', ()=>{
//     lbImg.src = img.src;
//     lbImg.alt = img.alt || '';
//     lbCaption.textContent = img.dataset.caption || '';
//     lightbox.classList.remove('hidden');
//     lightbox.setAttribute('aria-hidden','false');
//   });
// });

// lbClose.forEach(btn=> btn.addEventListener('click', ()=>{
//   lightbox.classList.add('hidden');
//   lightbox.setAttribute('aria-hidden','true');
//   lbImg.src='';
// }));

// // Video modal (uses gifs as previews)
// const videoModal = document.getElementById('videoModal');
// const modalClose = document.querySelectorAll('.modal-close');
// const modalVideo = document.querySelector('.modal-video');
// const playButtons = document.querySelectorAll('.play-video');

// playButtons.forEach(btn=> btn.addEventListener('click', ()=>{
//   const src = btn.dataset-src;
//   modalVideo.src = src;
//   videoModal.classList.remove('hidden');
//   videoModal.setAttribute('aria-hidden','false');
// }));
// modalClose.forEach(btn=> btn.addEventListener('click', ()=>{
//   videoModal.classList.add('hidden');
//   videoModal.setAttribute('aria-hidden','true');
//   modalVideo.src='';
// }));

// // Contact form (simulé)
// const contactForm = document.getElementById('contactForm');
// const formMessage = document.getElementById('formMessage');
// if(contactForm){
//   contactForm.addEventListener('submit', e=>{
//     e.preventDefault();
//     formMessage.textContent = 'Envoi...';
//     setTimeout(()=>{
//       formMessage.textContent = 'Merci ! Votre message a été envoyé.';
//       contactForm.reset();
//     }, 800);
//   });
// }

// // Accessibility: close lightbox/modal with Esc
// window.addEventListener('keydown', e=>{
//   if(e.key === 'Escape'){
//     if(!lightbox.classList.contains('hidden')){ lightbox.classList.add('hidden'); lbImg.src=''; }
//     if(!videoModal.classList.contains('hidden')){ videoModal.classList.add('hidden'); modalVideo.src=''; }
//   }
// });
// Date cible : 23 mai 2026
var targetDate = new Date("May 23, 2026 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let diff = targetDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Quand c'est fini
    if (diff < 0) {
        document.querySelector(".countdown").innerHTML =
            "<h3>🎉 La compétition a commencé !</h3>";
    }
}, 1000);
