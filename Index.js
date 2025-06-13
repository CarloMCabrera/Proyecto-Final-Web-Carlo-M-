 // Revela secciones cuando entran en el viewport
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);   // Deja de observar esa sección
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section').forEach(sec => observer.observe(sec));

  // Pulso inicial en iconos de redes
  const icons = document.querySelectorAll('.social-icons a');
  icons.forEach((icon, i) => {
    setTimeout(() => icon.classList.add('pulse'), i * 150);
  });
});