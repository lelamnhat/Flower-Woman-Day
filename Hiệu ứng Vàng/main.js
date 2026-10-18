window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.remove('not-loaded'), 350);
  const container = document.querySelector('.sparkles');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const count = Math.min(48, Math.round(window.innerWidth / 22));
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.className = 'sparkle';
    const size = 1 + Math.random() * 3;
    dot.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;--duration:${2+Math.random()*4}s;--delay:${Math.random()*5}s`;
    fragment.appendChild(dot);
  }
  container.appendChild(fragment);
});

window.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rain = document.querySelector('.petal-rain');
  if (rain && !reducedMotion) {
    const fragment = document.createDocumentFragment();
    const count = window.innerWidth < 600 ? 12 : 25;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span');
      petal.className = 'falling-petal';
      const size = 8 + Math.random() * 9;
      petal.style.cssText = `left:${Math.random()*100}%;width:${size}px;height:${size*1.3}px;--fall-duration:${9+Math.random()*9}s;--fall-delay:${-Math.random()*18}s;--drift:${Math.round(Math.random()*220-110)}px`;
      fragment.appendChild(petal);
    }
    rain.appendChild(fragment);
  }
});
