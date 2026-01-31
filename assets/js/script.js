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
    catContainer.classList.add('forced-hover');
    bolt.classList.add('zap-active');

    // 1. Find the coordinates of the Bolt's starting point (the eye)
    const boltRect = bolt.getBoundingClientRect();
    const startX = boltRect.right; // Origin is at the right side of the bolt div
    const startY = boltRect.top + (boltRect.height / 2);

    // 2. Find the coordinates of the Link
    const linkRect = link.getBoundingClientRect();
    const endX = linkRect.right; // Aim for the right edge of the text
    const endY = linkRect.top + (linkRect.height / 2);

    // 3. Calculate distance and angle
    const deltaX = startX - endX;
    const deltaY = startY - endY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // 4. Apply the length and rotation
    bolt.style.width = `${distance}px`;
    bolt.style.transform = `rotate(${angle}deg)`;
  });

  link.addEventListener('mouseleave', () => {
    catContainer.classList.remove('forced-hover');
    bolt.classList.remove('zap-active');
    bolt.style.width = `0px`; // Reset length
  });
});
