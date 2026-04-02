/* Portal do Pesquisador IDOR — JavaScript */

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
