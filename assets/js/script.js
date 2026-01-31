//eyes following mouse
document.addEventListener('mousemove', (e) => {
  const pupils = document.querySelectorAll('.pupil');
  pupils.forEach(pupil => {
    const rect = pupil.parentElement.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    
    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
    const distance = 15; 
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
});
//sidebar strike
const links = document.querySelectorAll('.nav-link');
const bolt = document.getElementById('lightning-bolt');
const catContainer = document.querySelector('.cat-container');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    // Make the cat start shaking manually
    catContainer.classList.add('forced-hover');
    // Fire the bolt
    bolt.classList.add('zap-active');
  });

  link.addEventListener('mouseleave', () => {
    // Stop the shake and hide the bolt
    catContainer.classList.remove('forced-hover');
    bolt.classList.remove('zap-active');
  });
});
//lighting bold sidebar aim
link.addEventListener('mouseenter', () => {
  catContainer.classList.add('forced-hover');
  bolt.classList.add('zap-active');

  // This slightly tilts the bolt based on which link you hit
  const linkIndex = Array.from(links).indexOf(link);
  const tilt = (linkIndex - 1) * 10; // Tilts up for first link, down for last
  bolt.style.transform = `rotate(${tilt}deg)`;
});
