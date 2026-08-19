(() => {
  // Keep the video placeholders visible until a valid media file is actually loaded.
  document.querySelectorAll('.video-card video').forEach((video) => {
    const card = video.closest('.video-card');
    const markLoaded = () => card && card.classList.add('has-video');
    video.addEventListener('loadedmetadata', markLoaded, { once: true });
    if (video.readyState >= 1) markLoaded();
  });

  // Lightweight image lightbox for paper figures.
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lightboxImage = lightbox.querySelector('img');
    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImage.removeAttribute('src');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-lightbox]').forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImage.src = img.currentSrc || img.src;
        lightboxImage.alt = img.alt || 'Expanded paper figure';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.closest('.lightbox-close')) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
