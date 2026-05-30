/* ============================================
   CareerWithAI — Main JavaScript
   Navigation, Scroll Reveals, Particles,
   Counters, Newsletter Form
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initParticles();
  initCounters();
  initNewsletterForm();
  initSmoothScroll();
});

/* ============ NAVIGATION ============ */
function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-mobile-toggle');
  const links = document.getElementById('nav-links');

  // Scroll-based nav styling
  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleNavScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > scrollThreshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', throttle(handleNavScroll, 16), { passive: true });
  handleNavScroll();

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('nav__links--open');
      toggle.classList.toggle('nav__mobile-toggle--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking a link
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('nav__links--open');
        toggle.classList.remove('nav__mobile-toggle--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ============ SCROLL REVEAL ============ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  reveals.forEach(el => observer.observe(el));
}

/* ============ HERO PARTICLES ============ */
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('hero__particle');

    // Random positioning and timing
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = 6 + Math.random() * 6;
    const size = 1 + Math.random() * 2;
    const opacity = 0.2 + Math.random() * 0.5;

    particle.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      --particle-opacity: ${opacity};
    `;

    container.appendChild(particle);
  }
}

/* ============ STAT COUNTERS ============ */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-counter'), 10);
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    element.textContent = current + '+';

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ============ NEWSLETTER FORM ============ */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const submitBtn = document.getElementById('newsletter-submit');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email || !isValidEmail(email)) {
      shakeElement(emailInput.closest('.input-group'));
      return;
    }

    // Submit to Web3Forms API
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;

    // REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
    const accessKey = '499b8ddf-a872-4544-8601-09efc4fd51ad';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        email: email,
        subject: 'New Newsletter Subscriber for CareerWithAI',
        from_name: 'CareerWithAI Website',
      })
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        submitBtn.textContent = 'Subscribed ✓';
        showToast('Welcome aboard! You\'ll receive your first digest next Monday. 🎉');
      } else {
        console.log(response);
        submitBtn.textContent = 'Error!';
        showToast(json.message || 'Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      console.log(error);
      submitBtn.textContent = 'Error!';
      showToast('Something went wrong. Please try again.');
    })
    .finally(() => {
      // Reset after delay
      setTimeout(() => {
        emailInput.value = '';
        submitBtn.textContent = 'Subscribe →';
        submitBtn.disabled = false;
      }, 3000);
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeElement(element) {
  element.style.animation = 'none';
  element.offsetHeight; // Trigger reflow
  element.style.animation = 'shake 0.5s ease-in-out';

  element.addEventListener('animationend', () => {
    element.style.animation = '';
  }, { once: true });
}

/* ============ TOAST ============ */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!toast) return;

  toastMessage.textContent = message;
  toast.classList.add('toast--visible');

  setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 4000);
}

/* ============ SMOOTH SCROLL ============ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const navHeight = document.getElementById('nav').offsetHeight;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}

/* ============ UTILITIES ============ */
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

/* ============ SHAKE ANIMATION (injected) ============ */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
    20%, 40%, 60%, 80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);
