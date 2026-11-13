/**
 * MindSpark Academy - Core UI, Theme, RTL/LTR, Magnetic Navbar & Animations
 */

(function () {
  const Store = window.MindSparkStore;

  // 1. Apply Saved Theme & Direction Immediately
  function applyTheme(theme) {
    const t = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(Store.KEYS.THEME, t);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      const icon = btn.querySelector("i");
      if (icon) {
        icon.setAttribute("data-lucide", t === "dark" ? "sun" : "moon");
      }
      btn.setAttribute("aria-label", t === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
    });
    if (window.lucide) window.lucide.createIcons();
  }

  function applyDirection(dir) {
    const d = dir === "rtl" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", d);
    document.documentElement.setAttribute("lang", d === "rtl" ? "ar" : "en");
    localStorage.setItem(Store.KEYS.DIR, d);

    // Swap any localized data-en / data-ar text
    document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
      el.textContent = d === "rtl" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
    });

    document.querySelectorAll("[data-dir-label]").forEach((el) => {
      el.textContent = d === "rtl" ? "LTR" : "RTL";
    });
  }

  window.toggleMindSparkTheme = function () {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  };

  window.toggleMindSparkDir = function () {
    const current = document.documentElement.getAttribute("dir") || "ltr";
    applyDirection(current === "rtl" ? "ltr" : "rtl");
  };

  // 2. Render Shared Public Navbar & Mobile Drawer
  function renderPublicNavbar() {
    const host = document.getElementById("ms-public-header");
    if (!host) return;

    const page = document.body.getAttribute("data-page") || "home1";
    const isHome = page === "home1" || page === "home2";

    host.innerHTML = `
      <header class="ms-navbar">
        <div class="container-ms ms-navbar-inner">
          <a href="index.html" class="ms-logo-link" aria-label="MindSpark Academy Home">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 52" fill="none">
              <rect x="2" y="4" width="44" height="44" rx="12" fill="#5736A8"/>
              <rect x="10" y="13" width="28" height="26" rx="6" stroke="#FFC83D" stroke-width="2.5"/>
              <line x1="12" y1="21" x2="36" y2="21" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.75"/>
              <line x1="12" y1="31" x2="36" y2="31" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.75"/>
              <circle cx="19" cy="21" r="3.6" fill="#FFC83D"/>
              <circle cx="29" cy="21" r="3.6" fill="#FF786B"/>
              <circle cx="23" cy="31" r="3.6" fill="#E8F5FF"/>
              <circle cx="31" cy="31" r="3.6" fill="#FFC83D"/>
              <path d="M40 7L41.5 10.5L45 12L41.5 13.5L40 17L38.5 13.5L35 12L38.5 10.5L40 7Z" fill="#FFC83D"/>
              <text x="56" y="27" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="currentColor" letter-spacing="-0.03em">MINDSPARK</text>
              <text x="56" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9.5" fill="#FF786B" letter-spacing="0.16em">ABACUS &amp; VEDIC MATHS</text>
            </svg>
          </a>

          <nav class="ms-nav-desktop" aria-label="Primary Navigation">
            <div class="ms-nav-item ms-home-dropdown">
              <a href="index.html" class="ms-magnetic-link ${isHome ? "active" : ""}" data-en="Home" data-ar="الرئيسية">Home</a>
              <div class="ms-home-menu">
                <a href="index.html" class="${page === "home1" ? "active" : ""}">
                  <span>Abacus (Home 1)</span>
                  <span class="ms-nav-preview-num">01</span>
                </a>
                <a href="home2.html" class="${page === "home2" ? "active" : ""}">
                  <span>Vedic Maths (Home 2)</span>
                  <span class="ms-nav-preview-num">02</span>
                </a>
              </div>
            </div>

            <div class="ms-nav-item">
              <a href="about.html" class="ms-magnetic-link ${page === "about" ? "active" : ""}" data-en="About" data-ar="من نحن">About</a>
              <div class="ms-nav-preview"><span class="ms-nav-preview-num">9+</span><span>Yrs Learning Craft</span></div>
            </div>

            <div class="ms-nav-item">
              <a href="services.html" class="ms-magnetic-link ${page === "services" ? "active" : ""}" data-en="Services" data-ar="الخدمات">Services</a>
              <div class="ms-nav-preview"><span class="ms-nav-preview-num">08</span><span>Core Training Pillars</span></div>
            </div>

            <div class="ms-nav-item">
              <a href="programs.html" class="ms-magnetic-link ${page === "programs" ? "active" : ""}" data-en="Programs" data-ar="البرامج">Programs</a>
              <div class="ms-nav-preview"><span class="ms-nav-preview-num">12</span><span>Abacus &amp; Vedic Levels</span></div>
            </div>

            <div class="ms-nav-item">
              <a href="competitions.html" class="ms-magnetic-link ${page === "competitions" ? "active" : ""}" data-en="Competitions" data-ar="المسابقات">Competitions</a>
              <div class="ms-nav-preview"><span class="ms-nav-preview-num">#1</span><span>Arena &amp; Leaderboard</span></div>
            </div>

            <div class="ms-nav-item">
              <a href="contact.html" class="ms-magnetic-link ${page === "contact" ? "active" : ""}" data-en="Contact" data-ar="تواصل معنا">Contact</a>
              <div class="ms-nav-preview"><span class="ms-nav-preview-num">24h</span><span>Free Demo Class</span></div>
            </div>
          </nav>

          <div class="ms-nav-actions-desktop">
            <button type="button" class="ms-icon-btn" data-theme-toggle onclick="toggleMindSparkTheme()" title="Toggle Light/Dark Mode">
              <i data-lucide="moon" style="width:18px;height:18px;"></i>
            </button>
            <button type="button" class="ms-icon-btn" data-dir-toggle onclick="toggleMindSparkDir()" title="Switch LTR / RTL" aria-label="Switch LTR / RTL">
              <i data-lucide="arrow-left-right" style="width:18px;height:18px;"></i>
            </button>
            <a href="dashboard.html" class="btn-ms btn-ms-yellow py-2 px-3" data-en="Dashboard" data-ar="لوحة التحكم">
              <i data-lucide="layout-dashboard" style="width:17px;height:17px;"></i>
              <span>Dashboard</span>
            </a>
            <a href="login.html" class="btn-ms btn-ms-primary py-2 px-4" data-en="Parent Login" data-ar="دخول ولي الأمر">
              <i data-lucide="user-check" style="width:17px;height:17px;"></i>
              <span>Parent Login</span>
            </a>
          </div>

          <!-- Mobile / Tablet (<= 1024px): ONLY Logo + Hamburger on same row -->
          <button type="button" class="ms-hamburger-btn" id="ms-open-drawer" aria-label="Open Navigation Menu">
            <i data-lucide="menu" style="width:24px;height:24px;"></i>
          </button>
        </div>
      </header>

      <div class="ms-mobile-drawer" id="ms-mobile-drawer" aria-hidden="true">
        <div class="d-flex align-items-center justify-content-between">
          <a href="index.html" class="ms-logo-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 52" fill="none">
              <rect x="2" y="4" width="44" height="44" rx="12" fill="#5736A8"/>
              <rect x="10" y="13" width="28" height="26" rx="6" stroke="#FFC83D" stroke-width="2.5"/>
              <line x1="12" y1="21" x2="36" y2="21" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.75"/>
              <line x1="12" y1="31" x2="36" y2="31" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.75"/>
              <circle cx="19" cy="21" r="3.6" fill="#FFC83D"/>
              <circle cx="29" cy="21" r="3.6" fill="#FF786B"/>
              <circle cx="23" cy="31" r="3.6" fill="#E8F5FF"/>
              <circle cx="31" cy="31" r="3.6" fill="#FFC83D"/>
              <path d="M40 7L41.5 10.5L45 12L41.5 13.5L40 17L38.5 13.5L35 12L38.5 10.5L40 7Z" fill="#FFC83D"/>
              <text x="56" y="27" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="currentColor" letter-spacing="-0.03em">MINDSPARK</text>
              <text x="56" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9.5" fill="#FF786B" letter-spacing="0.16em">ABACUS &amp; VEDIC MATHS</text>
            </svg>
          </a>
          <button type="button" class="ms-icon-btn" id="ms-close-drawer" aria-label="Close Menu">
            <i data-lucide="x" style="width:20px;height:20px;"></i>
          </button>
        </div>

        <div class="ms-mobile-links">
          <a href="index.html" class="${page === "home1" ? "active" : ""}"><span>Abacus Classes (Home 1)</span><span>01</span></a>
          <a href="home2.html" class="${page === "home2" ? "active" : ""}"><span>Vedic Maths Classes (Home 2)</span><span>02</span></a>
          <a href="about.html" class="${page === "about" ? "active" : ""}"><span>About Academy</span><span>→</span></a>
          <a href="services.html" class="${page === "services" ? "active" : ""}"><span>Services</span><span>→</span></a>
          <a href="programs.html" class="${page === "programs" ? "active" : ""}"><span>Programs</span><span>→</span></a>
          <a href="competitions.html" class="${page === "competitions" ? "active" : ""}"><span>Competitions</span><span>→</span></a>
          <a href="contact.html" class="${page === "contact" ? "active" : ""}"><span>Contact &amp; Free Demo</span><span>→</span></a>
        </div>

        <div class="mt-auto pt-4 border-top d-flex flex-column gap-3">
          <div class="d-flex gap-2">
            <button type="button" class="btn-ms btn-ms-outline flex-fill" data-theme-toggle onclick="toggleMindSparkTheme()">
              <i data-lucide="moon" style="width:18px;height:18px;"></i>
              <span>Theme</span>
            </button>
            <button type="button" class="btn-ms btn-ms-outline flex-fill" onclick="toggleMindSparkDir()">
              <i data-lucide="arrow-left-right" style="width:18px;height:18px;"></i>
              <span data-dir-label>RTL</span>
            </button>
          </div>
          <a href="dashboard.html" class="btn-ms btn-ms-yellow w-100">Parent Dashboard</a>
          <a href="login.html" class="btn-ms btn-ms-primary w-100">Parent Login</a>
          <a href="register.html" class="btn-ms btn-ms-outline w-100">Register Demo Account</a>
        </div>
      </div>
    `;

    // Drawer events
    const drawer = document.getElementById("ms-mobile-drawer");
    const openBtn = document.getElementById("ms-open-drawer");
    const closeBtn = document.getElementById("ms-close-drawer");

    if (openBtn && drawer) {
      openBtn.addEventListener("click", () => {
        drawer.classList.add("open");
        drawer.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    }
    if (closeBtn && drawer) {
      closeBtn.addEventListener("click", () => {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    }
  }

  // 3. Render Shared Public Footer
  function renderPublicFooter() {
    const host = document.getElementById("ms-public-footer");
    if (!host) return;

    host.innerHTML = `
      <footer class="ms-footer">
        <div class="container-ms">
          <div class="row g-4 pb-5 border-bottom border-secondary border-opacity-25">
            <div class="col-lg-4">
              <a href="index.html" class="ms-logo-link text-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 52" fill="none" style="height:46px;width:auto;">
                  <rect x="2" y="4" width="44" height="44" rx="12" fill="#5736A8"/>
                  <rect x="10" y="13" width="28" height="26" rx="6" stroke="#FFC83D" stroke-width="2.5"/>
                  <line x1="12" y1="21" x2="36" y2="21" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.75"/>
                  <line x1="12" y1="31" x2="36" y2="31" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.75"/>
                  <circle cx="19" cy="21" r="3.6" fill="#FFC83D"/>
                  <circle cx="29" cy="21" r="3.6" fill="#FF786B"/>
                  <circle cx="23" cy="31" r="3.6" fill="#E8F5FF"/>
                  <circle cx="31" cy="31" r="3.6" fill="#FFC83D"/>
                  <path d="M40 7L41.5 10.5L45 12L41.5 13.5L40 17L38.5 13.5L35 12L38.5 10.5L40 7Z" fill="#FFC83D"/>
                  <text x="56" y="27" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#FFFFFF" letter-spacing="-0.03em">MINDSPARK</text>
                  <text x="56" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9.5" fill="#FFC83D" letter-spacing="0.16em">ABACUS &amp; VEDIC MATHS</text>
                </svg>
              </a>
              <p class="small opacity-75 mb-3">
                A modern Abacus &amp; Vedic Mathematics academy helping young learners build focus, number confidence, and joyful mental calculation habits.
              </p>
              <div class="d-flex align-items-center gap-2 mb-3">
                <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="ms-icon-btn" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.18);color:#FFFFFF;">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="ms-icon-btn" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.18);color:#FFFFFF;">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" class="ms-icon-btn" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.18);color:#FFFFFF;">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="ms-icon-btn" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.18);color:#FFFFFF;">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
              <span class="badge-demo badge-on-dark">Demo Educational Showcase</span>
            </div>

            <div class="col-6 col-lg-2">
              <h6 class="fw-bold mb-3">Quick Links</h6>
              <ul class="list-unstyled d-flex flex-column gap-2 small">
                <li><a href="index.html">Home 1</a></li>
                <li><a href="home2.html">Home 2</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="franchise.html">Franchise &amp; Partner</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>

            <div class="col-6 col-lg-3">
              <h6 class="fw-bold mb-3">Programs &amp; Events</h6>
              <ul class="list-unstyled d-flex flex-column gap-2 small">
                <li><a href="programs.html">Abacus Levels 1–6</a></li>
                <li><a href="programs.html">Vedic Mathematics</a></li>
                <li><a href="competitions.html">Abacus Championship</a></li>
                <li><a href="login.html">Parent Portal Login</a></li>
                <li><a href="dashboard.html">Parent Dashboard (Demo)</a></li>
              </ul>
            </div>

            <div class="col-lg-3">
              <h6 class="fw-bold mb-3">Newsletter (Demo)</h6>
              <p class="small opacity-75">Get sample math puzzles and competition dates.</p>
              <form id="ms-newsletter-form" class="d-flex gap-2">
                <input type="email" class="form-control form-control-sm" placeholder="parent@example.com" required>
                <button type="submit" class="btn-ms btn-ms-yellow py-2 px-3">Join</button>
              </form>
              <div id="ms-newsletter-msg" class="small text-warning mt-2"></div>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-between align-items-center pt-4 gap-2 small opacity-75">
            <div>© 2026–2027 MindSpark Academy. Sample demonstration website.</div>
            <div class="d-flex gap-3">
              <span>Austin, TX (Sample Center)</span>
              <span>•</span>
              <span>hello@mindspark.demo</span>
            </div>
          </div>
        </div>
      </footer>
    `;

    const nlForm = document.getElementById("ms-newsletter-form");
    if (nlForm) {
      nlForm.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("ms-newsletter-msg").textContent = "Subscribed to MindSpark demo updates!";
        nlForm.reset();
      });
    }
  }

  // 4. GSAP Signature Magnetic Word Navbar (Desktop non-touch only)
  function initMagneticNav() {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    if (isTouch || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.querySelectorAll(".ms-magnetic-link").forEach((link) => {
      link.addEventListener("mousemove", (e) => {
        const rect = link.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        window.gsap.to(link, { x: relX * 0.28, y: relY * 0.28, duration: 0.3, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        window.gsap.to(link, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.4)" });
      });
    });
  }

  // 5. GSAP Hero & Counter Animations
  function initAnimations() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.AOS && !reduced) {
      window.AOS.init({ duration: 650, once: true, offset: 20 });
      setTimeout(() => window.AOS.refresh(), 300);
    }

    if (window.gsap && !reduced) {
      if (document.querySelector(".gs-hero-stagger")) {
        window.gsap.from(".gs-hero-stagger", {
          y: 26,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
      document.querySelectorAll(".floating-symbol").forEach((el, idx) => {
        window.gsap.to(el, {
          y: idx % 2 === 0 ? -14 : 14,
          rotation: idx % 2 === 0 ? 6 : -6,
          duration: 2.8 + idx * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }

    // Animated Counters
    const counters = document.querySelectorAll("[data-counter]");
    if (counters.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-counter"), 10) || 0;
          const suffix = el.getAttribute("data-suffix") || "";
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
            } else {
              el.textContent = cur + suffix;
            }
          }, 28);
          obs.unobserve(el);
        });
      }, { threshold: 0.35 });
      counters.forEach((c) => obs.observe(c));
    }

    // Back to Top Floating Button
    let btt = document.getElementById("ms-back-to-top");
    if (!btt) {
      btt = document.createElement("button");
      btt.id = "ms-back-to-top";
      btt.className = "back-to-top-btn";
      btt.setAttribute("type", "button");
      btt.setAttribute("aria-label", "Back to top");
      btt.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;
      document.body.appendChild(btt);
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btt.classList.add("show");
      } else {
        btt.classList.remove("show");
      }
    }, { passive: true });

    btt.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 6. Selective Three.js Background on Home 2
  function initHome2Three() {
    const canvas = document.getElementById("h2-three-canvas");
    if (!canvas || !window.THREE || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(60, canvas.clientWidth / (canvas.clientHeight || 1), 0.1, 100);
    camera.position.z = 16;

    const renderer = new window.THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const colors = [0xFFC83D, 0xFF786B, 0xE8F5FF, 0x9E82F0];
    const beads = [];
    const geo = new window.THREE.SphereGeometry(0.42, 20, 20);

    for (let i = 0; i < 22; i++) {
      const mat = new window.THREE.MeshBasicMaterial({ color: colors[i % colors.length] });
      const mesh = new window.THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8
      );
      mesh.userData = { speed: 0.004 + Math.random() * 0.008, offset: Math.random() * Math.PI * 2 };
      scene.add(mesh);
      beads.push(mesh);
    }

    function animate(t) {
      requestAnimationFrame(animate);
      beads.forEach((b) => {
        b.position.y += Math.sin(t * 0.001 + b.userData.offset) * 0.008;
        b.rotation.y += b.userData.speed;
      });
      renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);

    window.addEventListener("resize", () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / (h || 1);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }

  // 7. Boot
  document.addEventListener("DOMContentLoaded", () => {
    renderPublicNavbar();
    renderPublicFooter();
    applyTheme(localStorage.getItem(Store.KEYS.THEME) || "light");
    applyDirection(localStorage.getItem(Store.KEYS.DIR) || "ltr");
    initMagneticNav();
    initAnimations();
    initHome2Three();
    if (window.lucide) window.lucide.createIcons();
  });
})();

