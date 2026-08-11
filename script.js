(function () {
  var data = window.PORTFOLIO_DATA || {};
  var profile = data.profile || {};
  var skills = data.skills || [];
  var education = data.education || [];
  var experience = data.experience || [];
  var projects = data.projects || [];
  var certificates = data.certificates || [];
  var contacts = data.contacts || [];

  var PLATFORM_META = {
    facebook: { label: 'Facebook', icon: 'facebook', logo: 'facebook', color: '#1877F2' },
    instagram: { label: 'Instagram', icon: 'instagram', logo: 'instagram', color: '#E1306C' },
    line: { label: 'LINE', icon: 'message-circle', logo: 'line', color: '#06C755' },
    github: { label: 'GitHub', icon: 'github', logo: 'github', color: '#24292e' },
    linkedin: { label: 'LinkedIn', icon: 'linkedin', logo: 'linkedin', color: '#0A66C2' },
    email: { label: 'อีเมล', icon: 'mail', color: '#2363a3' },
    phone: { label: 'โทรศัพท์', icon: 'phone', color: '#2363a3' },
    youtube: { label: 'YouTube', icon: 'youtube', logo: 'youtube', color: '#FF0000' },
    tiktok: { label: 'TikTok', icon: 'music-2', logo: 'tiktok', color: '#111111' },
    twitter: { label: 'X (Twitter)', icon: 'twitter', logo: 'x', color: '#111111' },
    website: { label: 'เว็บไซต์', icon: 'globe', color: '#2363a3' },
  };
  var SKILL_LEVEL_RANK = { 'เริ่มต้น': 1, 'ปานกลาง': 2, 'ชำนาญ': 3, 'เชี่ยวชาญ': 4 };
  var SKILL_CATEGORIES = ['ทักษะเทคนิค', 'เครื่องมือ', 'ภาษา', 'ทักษะทางสังคม'];

  function esc(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }
  function icon(name, size) {
    var s = size || 16;
    return '<i data-lucide="' + name + '" style="width:' + s + 'px;height:' + s + 'px"></i>';
  }
  function platformIcon(meta, size) {
    var s = size || 20;
    if (!meta.logo) return icon(meta.icon, s);
    // Real brand logo via Simple Icons CDN, with automatic fallback to the generic
    // Lucide icon if the logo fails to load (wrong slug, offline, CDN hiccup, etc.)
    return (
      '<img src="https://cdn.simpleicons.org/' + meta.logo + '/ffffff" alt="" width="' + s + '" height="' + s + '" ' +
      'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'inline-flex\';" />' +
      '<i data-lucide="' + meta.icon + '" style="width:' + s + 'px;height:' + s + 'px;display:none"></i>'
    );
  }
  function emptyState(text) {
    return '<div class="empty-state"><p>' + esc(text) + '</p></div>';
  }

  /* ---------------- Hero ---------------- */
  document.title = (profile.name ? profile.name + ' | ' : '') + 'พอร์ตโฟลิโอ';
  document.getElementById('brandName').textContent = profile.name || 'พอร์ตโฟลิโอ';
  document.getElementById('heroName').textContent = profile.name || 'ชื่อ นามสกุล';
  document.getElementById('heroTitle').textContent = profile.title || 'เพิ่มตำแหน่ง / สาขาที่เรียนของคุณ';

  var bioEl = document.getElementById('heroBio');
  if (profile.bio) { bioEl.textContent = profile.bio; } else { bioEl.remove(); }

  var actionsHtml = '';
  if (profile.resumeUrl) {
    actionsHtml += '<a href="' + esc(profile.resumeUrl) + '" target="_blank" rel="noopener noreferrer" class="btn-primary">' + icon('download') + ' ดาวน์โหลดเรซูเม่</a>';
    actionsHtml += '<a href="#contact" class="btn-ghost">ติดต่อฉัน</a>';
  } else {
    actionsHtml += '<a href="#contact" class="btn-primary">ติดต่อฉัน ' + icon('chevron-right') + '</a>';
  }
  actionsHtml += '<a href="#portfolio" class="btn-ghost">ดูผลงานทั้งหมด</a>';
  document.getElementById('heroActions').innerHTML = actionsHtml;

  var metaHtml = '';
  if (profile.location) metaHtml += '<span>' + icon('map-pin', 14) + ' ' + esc(profile.location) + '</span>';
  if (profile.email) metaHtml += '<span>' + icon('mail', 14) + ' ' + esc(profile.email) + '</span>';
  if (profile.phone) metaHtml += '<span>' + icon('phone', 14) + ' ' + esc(profile.phone) + '</span>';
  var heroMeta = document.getElementById('heroMeta');
  if (metaHtml) { heroMeta.innerHTML = metaHtml; } else { heroMeta.remove(); }

  if (profile.photoUrl) {
    document.getElementById('portraitRing').innerHTML =
      '<img src="' + esc(profile.photoUrl) + '" alt="' + esc(profile.name || 'รูปโปรไฟล์') + '" />';
  }

  /* ---------------- Skills ---------------- */
  function skillDots(rank) {
    var d = '';
    for (var i = 1; i <= 4; i++) d += '<span class="skill-dot' + (i <= rank ? ' skill-dot-filled' : '') + '"></span>';
    return d;
  }
  var skillsContainer = document.getElementById('skillsContainer');
  if (skills.length === 0) {
    skillsContainer.innerHTML = emptyState('ยังไม่มีข้อมูลทักษะ');
  } else {
    var levelOrder = ['เริ่มต้น', 'ปานกลาง', 'ชำนาญ', 'เชี่ยวชาญ'];
    var skillsHtml = '<div class="skill-legend">' + levelOrder.map(function (level, idx) {
      return '<span class="skill-legend-item"><span class="skill-dots">' + skillDots(idx + 1) + '</span> ' + level + '</span>';
    }).join('') + '</div>';
    SKILL_CATEGORIES.forEach(function (cat) {
      var items = skills.filter(function (s) { return (s.category || SKILL_CATEGORIES[0]) === cat; });
      if (items.length === 0) return;
      skillsHtml += '<div class="skill-group"><h4 class="skill-group-title">' + esc(cat) + '</h4><div class="skill-chip-row">';
      items.forEach(function (s) {
        var rank = SKILL_LEVEL_RANK[s.level] || 1;
        skillsHtml += '<div class="skill-chip" title="ระดับ: ' + esc(s.level || levelOrder[0]) + '"><span class="skill-name">' + esc(s.name) + '</span><span class="skill-dots">' + skillDots(rank) + '</span></div>';
      });
      skillsHtml += '</div></div>';
    });
    skillsContainer.innerHTML = skillsHtml || emptyState('ยังไม่มีข้อมูลทักษะ');
  }

  /* ---------------- Education ---------------- */
  var eduEl = document.getElementById('educationTimeline');
  if (education.length === 0) {
    eduEl.outerHTML = emptyState('ยังไม่มีข้อมูลการศึกษา');
  } else {
    eduEl.innerHTML = education.map(function (ed) {
      var sub = [ed.degree, ed.field].filter(Boolean).join(' • ');
      var dateLine = [ed.startDate, ed.endDate].filter(Boolean).join(' - ');
      var logoHtml = ed.logoUrl ? '<img src="' + esc(ed.logoUrl) + '" alt="" class="edu-logo" />' : '';
      return (
        '<div class="timeline-item">' +
          '<div class="timeline-dot">' + icon('graduation-cap', 17) + '</div>' +
          '<div class="timeline-card">' +
            '<div class="edu-head">' +
              logoHtml +
              '<div>' +
                '<h4 class="card-title">' + esc(ed.school) + '</h4>' +
                (sub ? '<p class="card-subtitle">' + esc(sub) + '</p>' : '') +
              '</div>' +
            '</div>' +
            ((ed.startDate || ed.endDate || ed.gpa) ? '<p class="meta-line">' + icon('calendar', 12) + ' ' + esc(dateLine) + (ed.gpa ? ' • เกรดเฉลี่ย ' + esc(ed.gpa) : '') + '</p>' : '') +
            (ed.description ? '<p class="card-desc">' + esc(ed.description) + '</p>' : '') +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* ---------------- Experience ---------------- */
  var expEl = document.getElementById('experienceTimeline');
  if (experience.length === 0) {
    expEl.outerHTML = emptyState('ยังไม่มีข้อมูลประสบการณ์ทำงาน');
  } else {
    expEl.innerHTML = experience.map(function (ex) {
      var dateLine = [ex.startDate, ex.endDate].filter(Boolean).join(' - ');
      return (
        '<div class="timeline-item">' +
          '<div class="timeline-dot">' + icon('briefcase', 17) + '</div>' +
          '<div class="timeline-card">' +
            '<h4 class="card-title">' + esc(ex.position) + '</h4>' +
            (ex.company ? '<p class="card-subtitle">' + esc(ex.company) + '</p>' : '') +
            '<div class="chip-row">' +
              (ex.type ? '<span class="tag-chip">' + esc(ex.type) + '</span>' : '') +
              (ex.location ? '<span class="meta-inline">' + icon('map-pin', 12) + ' ' + esc(ex.location) + '</span>' : '') +
            '</div>' +
            ((ex.startDate || ex.endDate) ? '<p class="meta-line">' + icon('calendar', 12) + ' ' + esc(dateLine) + '</p>' : '') +
            (ex.description ? '<p class="card-desc">' + esc(ex.description) + '</p>' : '') +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* ---------------- Projects ---------------- */
  var projGrid = document.getElementById('projectsGrid');
  if (projects.length === 0) {
    projGrid.outerHTML = emptyState('ยังไม่มีผลงานที่แสดง');
  } else {
    projGrid.innerHTML = projects.map(function (p) {
      var tagsHtml = (p.tags && p.tags.length) ? '<div>' + p.tags.map(function (t) { return '<span class="tag-chip">' + esc(t) + '</span>'; }).join('') + '</div>' : '';
      var linksHtml = '';
      if (p.repoUrl || p.demoUrl) {
        linksHtml = '<div class="link-row">' +
          (p.repoUrl ? '<a href="' + esc(p.repoUrl) + '" target="_blank" rel="noopener noreferrer" class="link-btn">' + icon('github', 14) + ' ซอร์สโค้ด</a>' : '') +
          (p.demoUrl ? '<a href="' + esc(p.demoUrl) + '" target="_blank" rel="noopener noreferrer" class="link-btn link-btn-solid">' + icon('external-link', 14) + ' Live Demo</a>' : '') +
        '</div>';
      }
      return (
        '<div class="project-card">' +
          (p.imageUrl ? '<img src="' + esc(p.imageUrl) + '" alt="' + esc(p.title) + '" class="project-image" />' : '<div class="project-image-placeholder">' + icon('folder-open', 30) + '</div>') +
          '<div class="project-body">' +
            '<h4 class="card-title">' + esc(p.title) + '</h4>' +
            (p.description ? '<p class="card-desc line-clamp-3">' + esc(p.description) + '</p>' : '') +
            tagsHtml +
            linksHtml +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* ---------------- Certificates (with filter) ---------------- */
  var certGrid = document.getElementById('certificatesGrid');
  var certFiltersEl = document.getElementById('certFilters');
  function renderCertificates(filter) {
    var list = filter === 'all' ? certificates : certificates.filter(function (c) { return c.type === filter; });
    if (list.length === 0) {
      certGrid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><p>ยังไม่มีข้อมูลในหมวดนี้</p></div>';
    } else {
      certGrid.innerHTML = list.map(function (c) {
        var hasImage = !!c.imageUrl;
        var ringInner = c.imageUrl ? '<img src="' + esc(c.imageUrl) + '" alt="' + esc(c.title) + '" />' : icon('award', 26);
        var ringHtml = hasImage
          ? '<button type="button" class="badge-icon-ring is-clickable" data-cert-image="' + esc(c.imageUrl) + '" data-cert-title="' + esc(c.title) + '" aria-label="ดูเกียรติบัตร ' + esc(c.title) + ' แบบเต็ม">' + ringInner + '</button>'
          : '<div class="badge-icon-ring">' + ringInner + '</div>';
        return (
          '<div class="badge-card">' +
            ringHtml +
            '<p class="badge-type-tag">' + (c.type === 'award' ? 'รางวัล' : 'เกียรติบัตร') + '</p>' +
            '<h4 class="card-title" style="font-size:0.95rem">' + esc(c.title) + '</h4>' +
            (c.issuer ? '<p class="meta-small">' + esc(c.issuer) + '</p>' : '') +
            (c.date ? '<p class="meta-small">' + esc(c.date) + '</p>' : '') +
            (hasImage ? '<button type="button" class="cert-view-btn" data-cert-image="' + esc(c.imageUrl) + '" data-cert-title="' + esc(c.title) + '">ดูเกียรติบัตร ' + icon('external-link', 12) + '</button>' : '') +
            (c.link ? '<a href="' + esc(c.link) + '" target="_blank" rel="noopener noreferrer" class="cert-link">ตรวจสอบ ' + icon('external-link', 12) + '</a>' : '') +
          '</div>'
        );
      }).join('');
      certGrid.querySelectorAll('[data-cert-image]').forEach(function (el) {
        el.addEventListener('click', function () {
          openLightbox(el.getAttribute('data-cert-image'), el.getAttribute('data-cert-title'));
        });
      });
    }
    if (window.lucide) lucide.createIcons();
  }
  if (certificates.length === 0) {
    certFiltersEl.style.display = 'none';
  }
  renderCertificates('all');
  certFiltersEl.querySelectorAll('.filter-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      certFiltersEl.querySelectorAll('.filter-pill').forEach(function (b) { b.classList.remove('filter-pill-active'); });
      btn.classList.add('filter-pill-active');
      renderCertificates(btn.dataset.filter);
    });
  });

  /* ---------------- Contacts ---------------- */
  var contactsGrid = document.getElementById('contactsGrid');
  if (contacts.length === 0) {
    contactsGrid.outerHTML = emptyState('ยังไม่มีช่องทางติดต่อ');
  } else {
    contactsGrid.innerHTML = contacts.map(function (c) {
      var meta = PLATFORM_META[c.platform] || PLATFORM_META.website;
      var url = String(c.url || '');
      var external = url.indexOf('mailto:') !== 0 && url.indexOf('tel:') !== 0;
      return (
        '<a href="' + esc(url) + '" ' + (external ? 'target="_blank" rel="noopener noreferrer"' : '') + ' class="contact-tile">' +
          '<span class="contact-icon-wrap" style="background:' + meta.color + '">' + platformIcon(meta, 20) + '</span>' +
          '<span class="contact-platform">' + esc(meta.label) + '</span>' +
          (c.label ? '<span class="contact-handle">' + esc(c.label) + '</span>' : '') +
        '</a>'
      );
    }).join('');
  }

  /* ---------------- Footer ---------------- */
  document.getElementById('footerText').innerHTML =
    '© <span>' + new Date().getFullYear() + '</span> ' + esc(profile.name || 'Portfolio') + ' · สร้างด้วยความตั้งใจ';

  /* ---------------- Lightbox (view certificate full-size) ---------------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.removeAttribute('hidden');
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('hidden', '');
    lightboxImg.src = '';
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  /* ---------------- Mobile menu ---------------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', function () {
    var isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) { mobileMenu.removeAttribute('hidden'); menuToggle.textContent = '✕'; }
    else { mobileMenu.setAttribute('hidden', ''); menuToggle.textContent = '☰'; }
  });
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileMenu.setAttribute('hidden', '');
      menuToggle.textContent = '☰';
    });
  });

  /* ---------------- Typewriter (code-style rotating tagline) ---------------- */
  function initTypewriter() {
    var el = document.getElementById('typewriterText');
    if (!el) return;
    var phrases = (profile.taglines && profile.taglines.length) ? profile.taglines : [
      'console.log("Hello, Recruiter \uD83D\uDC4B");',
      'SELECT * FROM skills WHERE domain = "data";',
      'building things with code & data',
    ];
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { el.textContent = phrases[0]; return; }

    var phraseIndex = 0, charIndex = 0, deleting = false;
    function tick() {
      var current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 30 : 60);
    }
    tick();
  }

  /* ---------------- Particle network background (hero) ---------------- */
  function initNetworkBg() {
    var canvas = document.getElementById('networkBg');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var dpr = window.devicePixelRatio || 1;
    var cw, ch, particles;

    function initParticles() {
      var count = Math.max(18, Math.min(55, Math.floor((cw * ch) / 16000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * cw,
          y: Math.random() * ch,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        });
      }
    }
    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      cw = rect.width; ch = rect.height;
      canvas.width = cw * dpr; canvas.height = ch * dpr;
      canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }
    function draw() {
      ctx.clearRect(0, 0, cw, ch);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > cw) p.vx *= -1;
          if (p.y < 0 || p.y > ch) p.vy *= -1;
        }
      }
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var a = particles[i], b = particles[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = 'rgba(35,99,163,' + (0.18 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (var i = 0; i < particles.length; i++) {
        ctx.fillStyle = 'rgba(35,99,163,0.55)';
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
  }

  /* ---------------- Scroll reveal ---------------- */
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('reveal-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { observer.observe(el); });
  }

  initTypewriter();
  initNetworkBg();
  initScrollReveal();

  if (window.lucide) lucide.createIcons();
})();
