// ============================================
// NAVBAR - SCROLL EFFECTS & SMOOTH NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar-transparent');
  const collapseEl = document.getElementById('mainNav');
  const toggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand');

  if (!navbar || !collapseEl || !toggler) return;

  const scrollThreshold = 50;
  const navbarHeight = navbar.offsetHeight;

  // ============================================
  // SCROLL EFFECT CON OPTIMIZACIÓN
  // ============================================
  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight del link activo
    highlightActiveLink();
  }

  // Throttle con requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Ejecutar al cargar la página
  handleScroll();

  // ============================================
  // SINCRONIZACIÓN DEL TOGGLER
  // ============================================
  collapseEl.addEventListener('shown.bs.collapse', () => {
    toggler.classList.remove('collapsed');
    toggler.setAttribute('aria-expanded', 'true');
  });

  collapseEl.addEventListener('hidden.bs.collapse', () => {
    toggler.classList.add('collapsed');
    toggler.setAttribute('aria-expanded', 'false');
  });

  // ============================================
  // SMOOTH SCROLL & AUTO-CLOSE
  // ============================================
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Solo aplicar smooth scroll si es un anchor link (#)
      if (href && href.startsWith('#')) {
        e.preventDefault();

        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // Calcular posición considerando el navbar fixed
          const targetPosition = targetSection.offsetTop - navbarHeight;

          // Smooth scroll
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Cerrar el menú en móvil/tablet
          if (window.innerWidth < 992) {
            const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          }
        }
      } else {
        // Para links externos, solo cerrar el menú
        if (window.innerWidth < 992) {
          const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });
  });

  // ============================================
  // HIGHLIGHT LINK ACTIVO AL SCROLL
  // ============================================
  function highlightActiveLink() {
    let current = '';
    const sections = document.querySelectorAll('section[id], footer[id]');

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight - 100;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop && 
          window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    // Remover y agregar clase active
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // ============================================
  // CERRAR AL CLICK FUERA DEL NAVBAR
  // ============================================
  document.addEventListener('click', (e) => {
    if (collapseEl.classList.contains('show') && !navbar.contains(e.target)) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});