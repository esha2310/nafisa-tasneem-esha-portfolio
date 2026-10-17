
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = [...document.querySelectorAll('.nav-links a')];
const backToTop = document.querySelector('.back-to-top');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('.section-anchor')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 700);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Gallery lightbox
const lightbox = document.getElementById('galleryLightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-image');
const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('[data-gallery]').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const caption = card.querySelector('figcaption')?.innerText || img.alt;
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox(){
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
