// =====================================================
// ★ メール設定 ★
// お問い合わせフォームの送信先メールアドレスをここで設定してください
// =====================================================
const CONFIG = {
  EMAIL: 'condtakumi@gmail.com'  // ← ここにご自身のメールアドレスを入力
};

// ===== Header scroll effect =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

const mobileMenuClose = document.getElementById('mobileMenuClose');

function closeMobileMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenuClose.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// ===== Scroll animation (Intersection Observer) =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

// ===== Counter animation =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      const suffix = entry.target.querySelector('span').textContent;
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        entry.target.textContent = '';
        entry.target.textContent = Math.floor(current);
        const span = document.createElement('span');
        span.textContent = suffix;
        entry.target.appendChild(span);
      }, 16);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.number-value').forEach(el => {
  counterObserver.observe(el);
});

// ===== Work card video hover play =====
document.querySelectorAll('.work-card').forEach(card => {
  const video = card.querySelector('.work-card-video');
  if (video) {
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  }
});

// ===== Form submit =====
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const category = form.querySelector('select').value;
  const message = form.querySelector('textarea').value;

  const subject = encodeURIComponent('【納幸堂HP】お問い合わせ: ' + category);
  const body = encodeURIComponent(
    'お名前: ' + name + '\n' +
    'メールアドレス: ' + email + '\n' +
    'お問い合わせ種別: ' + category + '\n\n' +
    'メッセージ:\n' + message
  );

  window.location.href = 'mailto:' + CONFIG.EMAIL + '?subject=' + subject + '&body=' + body;
  alert('メールアプリが起動します。\nそのまま送信してください。');
  form.reset();
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
