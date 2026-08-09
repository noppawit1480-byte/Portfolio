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
    facebook: { label: 'Facebook', icon: 'facebook', color: '#1877F2' },
    instagram: { label: 'Instagram', icon: 'instagram', color: '#E1306C' },
    line: { label: 'LINE', icon: 'message-circle', color: '#06C755' },
    github: { label: 'GitHub', icon: 'github', color: '#24292e' },
    linkedin: { label: 'LinkedIn', icon: 'linkedin', color: '#0A66C2' },
    email: { label: 'อีเมล', icon: 'mail', color: '#2363a3' },
    phone: { label: 'โทรศัพท์', icon: 'phone', color: '#2363a3' },
    youtube: { label: 'YouTube', icon: 'youtube', color: '#FF0000' },
    tiktok: { label: 'TikTok', icon: 'music-2', color: '#111111' },
    twitter: { label: 'X (Twitter)', icon: 'twitter', color: '#111111' },
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
  var skillsContainer = document.getElementById('skillsContainer');
  if (skills.length === 0) {
    skillsContainer.innerHTML = emptyState('ยังไม่มีข้อมูลทักษะ');
  } else {
    var skillsHtml = '';
    SKILL_CATEGORIES.forEach(function (cat) {
      var items = skills.filter(function (s) { return (s.category || SKILL_CATEGORIES[0]) === cat; });
      if (items.length === 0) return;
      skillsHtml += '<div class="skill-group"><h4 class="skill-group-title">' + esc(cat) + '</h4><div class="skill-chip-row">';
      items.forEach(function (s) {
        var rank = SKILL_LEVEL_RANK[s.level] || 1;
        var dots = '';
        for (var d = 1; d <= 4; d++) dots += '<span class="skill-dot' + (d <= rank ? ' skill-dot-filled' : '') + '"></span>';
        skillsHtml += '<div class="skill-chip"><span class="skill-name">' + esc(s.name) + '</span><span class="skill-dots">' + dots + '</span></div>';
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
      return (
        '<div class="timeline-item">' +
          '<div class="timeline-dot">' + icon('graduation-cap', 17) + '</div>' +
          '<div class="timeline-card">' +
            '<h4 class="card-title">' + esc(ed.school) + '</h4>' +
            (sub ? '<p class="card-subtitle">' + esc(sub) + '</p>' : '') +
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
        return (
          '<div class="badge-card">' +
            '<div class="badge-icon-ring">' + (c.imageUrl ? '<img src="' + esc(c.imageUrl) + '" alt="' + esc(c.title) + '" />' : icon('award', 26)) + '</div>' +
            '<p class="badge-type-tag">' + (c.type === 'award' ? 'รางวัล' : 'เกียรติบัตร') + '</p>' +
            '<h4 class="card-title" style="font-size:0.95rem">' + esc(c.title) + '</h4>' +
            (c.issuer ? '<p class="meta-small">' + esc(c.issuer) + '</p>' : '') +
            (c.date ? '<p class="meta-small">' + esc(c.date) + '</p>' : '') +
            (c.link ? '<a href="' + esc(c.link) + '" target="_blank" rel="noopener noreferrer" class="cert-link">ตรวจสอบ ' + icon('external-link', 12) + '</a>' : '') +
          '</div>'
        );
      }).join('');
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
          '<span class="contact-icon-wrap" style="background:' + meta.color + '">' + icon(meta.icon, 20) + '</span>' +
          '<span class="contact-platform">' + esc(meta.label) + '</span>' +
          (c.label ? '<span class="contact-handle">' + esc(c.label) + '</span>' : '') +
        '</a>'
      );
    }).join('');
  }

  /* ---------------- Footer ---------------- */
  document.getElementById('footerText').innerHTML =
    '© <span>' + new Date().getFullYear() + '</span> ' + esc(profile.name || 'Portfolio') + ' · สร้างด้วยความตั้งใจ';

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

  if (window.lucide) lucide.createIcons();
})();
