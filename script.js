document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     CUSTOM CURSOR
     ========================================================================== */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const hoverTargets = document.querySelectorAll('.hover-target');

  // Check if it's a touch device; if so, disable custom cursor
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
      // Small dot follows exactly
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
      
      // Ring follows with a slight delay natively (using CSS transition on left/top is jittery, 
      // but standard transform approach is fine. For purest performance, direct assignment without delay is best here, 
      // relying on the CSS ease for the scale/width transitions)
      cursorRing.style.left = `${e.clientX}px`;
      cursorRing.style.top = `${e.clientY}px`;
    });

    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-active');
      });
      target.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-active');
      });
    });
  }

  /* ==========================================================================
     STICKY NAVBAR BLUR ON SCROLL
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     SCROLL-TRIGGERED FADE-INS (Intersection Observer)
     ========================================================================== */
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});
