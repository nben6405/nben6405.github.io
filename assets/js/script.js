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
