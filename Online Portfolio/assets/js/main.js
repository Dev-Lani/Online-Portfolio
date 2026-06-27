/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal, .tl-entry').forEach(el => {
  revealObserver.observe(el);
});