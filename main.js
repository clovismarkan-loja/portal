/* Portal do Pesquisador IDOR — JavaScript */

/* --- Auth (prototype) --- */
function isLoggedIn() { return localStorage.getItem('idor_auth') === '1'; }
function authLogin() {
  localStorage.setItem('idor_auth', '1');
  localStorage.setItem('idor_user_name', 'Dr. João Silva');
  location.reload();
}
function authLogout() {
  localStorage.removeItem('idor_auth');
  localStorage.removeItem('idor_user_name');
  location.reload();
}
(function applyAuthState() {
  var apply = function() {
    document.body.classList.toggle('logged-in', isLoggedIn());
    document.body.classList.toggle('logged-out', !isLoggedIn());
    var nameEls = document.querySelectorAll('[data-user-name]');
    var name = localStorage.getItem('idor_user_name') || 'Dr. João Silva';
    nameEls.forEach(function(el) { el.textContent = name; });
    injectAuthToggle();
    injectUserMenu();
  };
  if (document.body) apply();
  else document.addEventListener('DOMContentLoaded', apply);
})();

function injectAuthToggle() {
  if (document.querySelector('.auth-toggle')) return;
  var btn = document.createElement('button');
  btn.className = 'auth-toggle';
  btn.title = 'Alternar estado de login (protótipo)';
  btn.innerHTML = isLoggedIn()
    ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Logado — clique para sair'
    : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg> Deslogado — clique para entrar';
  btn.onclick = function() { isLoggedIn() ? authLogout() : authLogin(); };
  document.body.appendChild(btn);
}

function injectUserMenu() {
  // Find header__right and inject user menu next to btn-secondary
  var entrarBtn = document.querySelector('.header__right .btn-secondary, .header__actions .btn-secondary');
  if (!entrarBtn || document.querySelector('.user-menu-wrap')) return;
  // Mark Entrar button as logged-out only
  if (!entrarBtn.classList.contains('show-logged-out')) {
    entrarBtn.classList.add('show-logged-out');
  }
  // Inject user menu
  var wrap = document.createElement('div');
  wrap.className = 'user-menu-wrap show-logged-in';
  wrap.innerHTML =
    '<div class="user-menu" onclick="this.parentElement.classList.toggle(\'open\')">' +
      '<div class="user-menu__avatar"><img src="avatar-user.png" alt=""></div>' +
      '<span class="user-menu__name" data-user-name>Dr. João Silva</span>' +
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
    '</div>' +
    '<div class="user-menu__dropdown">' +
      '<a href="minha-conta.html">Minha conta</a>' +
      '<a href="#">Meus favoritos</a>' +
      '<a href="#">Configurações</a>' +
      '<button onclick="authLogout()">Sair</button>' +
    '</div>';
  entrarBtn.parentNode.insertBefore(wrap, entrarBtn);
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });
}

/* --- Global Header Search --- */
function toggleHeaderSearch() {
  var bar = document.getElementById('headerSearch');
  if (bar) {
    bar.classList.toggle('open');
    if (bar.classList.contains('open')) {
      bar.querySelector('input').focus();
    }
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var bar = document.getElementById('headerSearch');
    if (bar) bar.classList.remove('open');
  }
});

/* --- Mobile Navigation --- */
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
}
function toggleMobileNavToggle() {
  var nav = document.getElementById('mobileNav');
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
  } else {
    nav.classList.add('open');
  }
}
function closeMobileNav(event) {
  if (event.target === event.currentTarget) {
    document.getElementById('mobileNav').classList.remove('open');
  }
}
function closeMobileNavDirect() {
  document.getElementById('mobileNav').classList.remove('open');
}

/* --- Carousel --- */
function scrollCarousel(direction) {
  var track = document.querySelector('.carousel__track');
  if (track) {
    track.scrollBy({ left: direction * 360, behavior: 'smooth' });
  }
}

/* --- Accordion --- */
function toggleAccordion(trigger) {
  var item = trigger.parentElement;
  var isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.accordion__item').forEach(function(el) {
    el.classList.remove('open');
  });
  // Toggle clicked
  if (!isOpen) {
    item.classList.add('open');
  }
}

/* --- Search pills --- */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.search-filters .pill, .hero-filters .hero-filter').forEach(function(pill) {
    pill.addEventListener('click', function(e) {
      e.preventDefault();
      var parent = this.closest('.search-filters, .hero-filters');
      parent.querySelectorAll('.pill, .hero-filter').forEach(function(p) {
        p.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  /* --- Search result tabs --- */
  document.querySelectorAll('.search-tabs .pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.search-tabs .pill').forEach(function(p) {
        p.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  /* --- Feedback buttons --- */
  document.querySelectorAll('.feedback-box .btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.feedback-box .btn').forEach(function(b) {
        b.classList.remove('btn-primary');
        b.classList.add('btn-outline');
      });
      this.classList.remove('btn-outline');
      this.classList.add('btn-primary');
    });
  });

  /* --- Filter checkboxes (visual feedback) --- */
  document.querySelectorAll('.filter-check input').forEach(function(cb) {
    cb.addEventListener('change', function() {
      var count = document.querySelectorAll('.filter-check input:checked').length;
      var clearBtn = document.querySelector('.filter-clear:not(#clearFiltersBtn)');
      if (clearBtn) {
        clearBtn.textContent = count > 0 ? 'Limpar filtros (' + count + ')' : 'Limpar filtros';
      }
    });
  });

  /* --- Clear filters --- */
  var clearBtn = document.querySelector('.filter-clear:not(#clearFiltersBtn)');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      document.querySelectorAll('.filter-check input').forEach(function(cb) {
        cb.checked = false;
      });
      this.textContent = 'Limpar filtros';
    });
  }

  /* --- Header scroll effect --- */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(1,73,142,.4)';
      } else {
        header.style.boxShadow = '0 2px 12px rgba(1,73,142,.3)';
      }
    });
  }
});
