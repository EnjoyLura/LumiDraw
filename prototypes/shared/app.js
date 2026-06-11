/* =============================================
   Lumi-Draw Prototype — Shared App JS
   共享交互逻辑
   ============================================= */

// ── Scroll Reveal ──
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .lfx-enter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay) || (i * 60);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));
}

// ── Stagger Children ──
function initStagger() {
  document.querySelectorAll('.stagger-children').forEach(container => {
    const children = container.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = (i * 80) + 'ms';
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(container);
  });
}

// ── 星尘粒子生成 ──
function initStardust() {
  document.querySelectorAll('.card-stardust').forEach(card => {
    const wrap = card.querySelector('.stardust-wrap');
    if (!wrap) return;
    const colors = ['var(--accent-4)', 'var(--accent-1)', '#ffffff', 'var(--accent-3)'];
    const anims = ['sdf0', 'sdf1', 'sdf2'];
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'sd-particle';
      const sz = Math.random() * 2.5 + 0.8;
      const c = colors[Math.floor(Math.random() * colors.length)];
      const a = anims[Math.floor(Math.random() * anims.length)];
      const dur = (Math.random() * 5 + 3).toFixed(1);
      const del = (Math.random() * 6).toFixed(1);
      const op = (Math.random() * 0.5 + 0.15).toFixed(2);
      p.style.cssText = `width:${sz}px;height:${sz}px;left:${(Math.random()*100).toFixed(1)}%;top:${(Math.random()*100).toFixed(1)}%;background:${c};box-shadow:0 0 ${(sz*3).toFixed(1)}px ${c};opacity:${op};animation:${a} ${dur}s ease-in-out ${del}s infinite;`;
      wrap.appendChild(p);
    }
  });
}

// ── 波纹触控 ──
function initRipple() {
  document.querySelectorAll('.card-ripple, .ripple-target').forEach(el => {
    el.addEventListener('click', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 0.5;
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          const ripple = document.createElement('div');
          ripple.classList.add('ripple-wave');
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = (x - size / 2) + 'px';
          ripple.style.top = (y - size / 2) + 'px';
          el.appendChild(ripple);
          ripple.addEventListener('animationend', () => ripple.remove());
        }, i * 120);
      }
    });
  });
}

// ── Tab 切换 ──
function initTabs() {
  document.querySelectorAll('.glass-tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.glass-tab');
    const panels = tabGroup.parentElement.querySelectorAll('.tab-panel');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        panels.forEach(p => {
          p.style.display = p.dataset.panel === target ? '' : 'none';
        });
      });
    });
  });
}

// ── Filter 筛选切换 ──
function initFilter() {
  document.querySelectorAll('.filter-bar').forEach(bar => {
    const pills = bar.querySelectorAll('.glass-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
  });
}

// ── Toast 提示 ──
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.querySelector('.phone-frame').appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── Switch 开关 ──
function initSwitches() {
  document.querySelectorAll('.glass-switch').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('on');
    });
  });
}

// ── TabBar 点击 ──
function initTabBar() {
  const tabs = document.querySelectorAll('.tab-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.page;
      if (target) window.location.href = target;
    });
  });
}

// ── 统一初始化 ──
function initApp() {
  initScrollReveal();
  initStagger();
  initStardust();
  initRipple();
  initTabs();
  initFilter();
  initSwitches();
  initTabBar();
}

// DOM 加载后执行
document.addEventListener('DOMContentLoaded', initApp);