<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Lahcen Grissi — Full Stack Developer</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --black:#050507;--white:#ffffff;
  --gold:#d4a853;--gold-light:#f0c87a;--gold-dim:#9a7535;
  --glass:rgba(255,255,255,0.04);--glass-border:rgba(255,255,255,0.09);
  --text-primary:#f0ece3;--text-muted:rgba(240,236,227,0.55);--text-dim:rgba(240,236,227,0.3);
  --accent:#d4a853;--accent2:#7c6fff;
  --surface:rgba(255,255,255,0.03);
}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{background:var(--black);color:var(--text-primary);font-family:'DM Sans',sans-serif;overflow-x:hidden;line-height:1.6;cursor:none}

/* CURSOR */
#cursor{position:fixed;width:12px;height:12px;background:var(--gold);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s,opacity .2s;mix-blend-mode:exclusion}
#cursor-ring{position:fixed;width:36px;height:36px;border:1px solid rgba(212,168,83,0.4);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:all .1s ease;mix-blend-mode:normal}

/* SCROLL PROGRESS */
#scroll-bar{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--gold),var(--accent2));z-index:1000;transition:width .1s;width:0%}

/* NAV */
nav{position:fixed;top:0;width:100%;z-index:900;padding:18px 48px;display:flex;justify-content:space-between;align-items:center;backdrop-filter:blur(20px);background:rgba(5,5,7,0.7);border-bottom:1px solid rgba(255,255,255,0.04)}
.nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:20px;letter-spacing:-0.5px;background:linear-gradient(135deg,var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{color:var(--text-muted);text-decoration:none;font-size:13px;letter-spacing:0.5px;font-weight:500;transition:color .2s;font-family:'DM Sans',sans-serif}
.nav-links a:hover{color:var(--gold)}
.nav-cta{background:linear-gradient(135deg,var(--gold-dim),var(--gold));color:var(--black);padding:8px 20px;border-radius:100px;font-size:13px;font-weight:600;text-decoration:none;transition:opacity .2s,transform .2s}
.nav-cta:hover{opacity:0.85;transform:translateY(-1px)}

/* CANVAS BG */
#hero-canvas{position:absolute;inset:0;z-index:0}

/* HERO */
#hero{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:120px 48px 80px;overflow:hidden}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(212,168,83,0.08);border:1px solid rgba(212,168,83,0.2);border-radius:100px;padding:6px 16px;margin-bottom:32px;font-size:12px;letter-spacing:1.5px;color:var(--gold);text-transform:uppercase;font-family:'JetBrains Mono',monospace}
.badge-dot{width:6px;height:6px;background:var(--gold);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.7)}}
.hero-name{font-family:'Syne',sans-serif;font-size:clamp(52px,8vw,100px);font-weight:800;letter-spacing:-3px;line-height:0.92;margin-bottom:12px}
.name-first{display:block;color:var(--text-primary)}
.name-last{display:block;background:linear-gradient(135deg,var(--gold) 0%,var(--gold-light) 50%,var(--gold-dim) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-role{font-size:clamp(14px,2vw,18px);color:var(--text-muted);margin-bottom:20px;font-weight:300;letter-spacing:0.5px}
.hero-tagline{font-size:clamp(28px,4vw,44px);font-family:'Syne',sans-serif;font-weight:700;max-width:700px;margin:0 auto 40px;line-height:1.1;letter-spacing:-1px}
.tagline-em{background:linear-gradient(135deg,var(--gold-light),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-sub{color:var(--text-muted);max-width:480px;margin:0 auto 56px;font-size:16px;line-height:1.7}
.hero-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:80px}
.btn-primary{background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--black);padding:14px 32px;border-radius:100px;font-weight:600;text-decoration:none;font-size:15px;transition:all .3s;border:none;cursor:none;font-family:'DM Sans',sans-serif}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(212,168,83,0.3)}
.btn-outline{background:transparent;color:var(--text-primary);padding:14px 32px;border-radius:100px;font-weight:500;text-decoration:none;font-size:15px;transition:all .3s;border:1px solid var(--glass-border);cursor:none;font-family:'DM Sans',sans-serif}
.btn-outline:hover{border-color:rgba(212,168,83,0.4);color:var(--gold);transform:translateY(-2px)}
.hero-stats{display:flex;gap:56px;justify-content:center;position:relative;z-index:1}
.stat{text-align:center}
.stat-num{font-family:'Syne',sans-serif;font-size:36px;font-weight:800;background:linear-gradient(135deg,var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
.stat-label{font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1.5px;margin-top:4px}
.scroll-hint{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--text-dim);font-size:11px;letter-spacing:1px;text-transform:uppercase}
.scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,var(--gold),transparent);animation:scrollHint 2s infinite}
@keyframes scrollHint{0%,100%{transform:scaleY(1);opacity:1}50%{transform:scaleY(0.5);opacity:0.3}}

/* SECTIONS */
section{padding:120px 48px;max-width:1200px;margin:0 auto}
.section-label{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gold);letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;opacity:0.8}
.section-title{font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,56px);font-weight:800;letter-spacing:-2px;line-height:1;margin-bottom:16px}
.section-sub{color:var(--text-muted);font-size:17px;max-width:560px;line-height:1.7}
.divider{height:1px;background:linear-gradient(90deg,transparent,var(--glass-border),transparent);margin:0 48px}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;margin-top:64px}
.about-visual{position:relative}
.about-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:32px;backdrop-filter:blur(20px);margin-bottom:16px}
.about-avatar{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--gold-dim),var(--gold));display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:28px;color:var(--black);margin-bottom:20px}
.about-name-card{font-family:'Syne',sans-serif;font-weight:700;font-size:20px;margin-bottom:4px}
.about-title-card{color:var(--text-muted);font-size:14px}
.about-detail{display:flex;align-items:center;gap:10px;color:var(--text-muted);font-size:13px;margin-top:8px}
.detail-icon{width:16px;height:16px;color:var(--gold);font-size:12px;flex-shrink:0}
.floating-badge{position:absolute;right:-20px;top:20px;background:linear-gradient(135deg,var(--gold-dim),var(--gold));color:var(--black);border-radius:12px;padding:12px 16px;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;transform:rotate(4deg)}
.about-text p{color:var(--text-muted);line-height:1.8;margin-bottom:16px;font-size:16px}
.about-text p strong{color:var(--text-primary);font-weight:500}

/* SKILLS */
#skills-section{max-width:1200px;margin:0 auto;padding:120px 48px}
.skills-categories{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;margin-top:64px}
.skill-cat{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:28px;backdrop-filter:blur(20px);transition:border-color .3s,transform .3s}
.skill-cat:hover{border-color:rgba(212,168,83,0.25);transform:translateY(-4px)}
.skill-cat-icon{font-size:24px;margin-bottom:16px}
.skill-cat-name{font-family:'Syne',sans-serif;font-weight:700;font-size:16px;margin-bottom:16px;letter-spacing:-0.3px}
.skill-tags{display:flex;flex-wrap:wrap;gap:8px}
.skill-tag{background:rgba(212,168,83,0.07);border:1px solid rgba(212,168,83,0.15);border-radius:100px;padding:5px 14px;font-size:12px;color:var(--gold);font-family:'JetBrains Mono',monospace;letter-spacing:0.3px;transition:all .2s}
.skill-tag:hover{background:rgba(212,168,83,0.12);border-color:rgba(212,168,83,0.3)}

/* PROJECTS */
#projects-section{max-width:1200px;margin:0 auto;padding:120px 48px}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:24px;margin-top:64px}
.project-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:24px;overflow:hidden;backdrop-filter:blur(20px);transition:all .4s cubic-bezier(.4,0,.2,1);cursor:none;position:relative;group:true}
.project-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(212,168,83,0.04),transparent);opacity:0;transition:opacity .4s;z-index:0;pointer-events:none}
.project-card:hover{border-color:rgba(212,168,83,0.2);transform:translateY(-8px);box-shadow:0 32px 64px rgba(0,0,0,0.5)}
.project-card:hover::before{opacity:1}
.project-preview{height:180px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border-bottom:1px solid var(--glass-border)}
.project-preview-bg{position:absolute;inset:0;opacity:0.15}
.project-preview-icon{font-size:48px;position:relative;z-index:1}
.project-num{position:absolute;top:16px;right:16px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gold);opacity:0.5;letter-spacing:2px}
.project-body{padding:28px;position:relative;z-index:1}
.project-title{font-family:'Syne',sans-serif;font-weight:700;font-size:20px;margin-bottom:10px;letter-spacing:-0.5px}
.project-desc{color:var(--text-muted);font-size:14px;line-height:1.7;margin-bottom:20px}
.project-stack{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px}
.stack-tag{background:rgba(124,111,255,0.07);border:1px solid rgba(124,111,255,0.15);border-radius:100px;padding:3px 10px;font-size:11px;color:#a89dff;font-family:'JetBrains Mono',monospace}
.project-links{display:flex;gap:10px}
.proj-btn{flex:1;text-align:center;padding:10px;border-radius:12px;font-size:13px;text-decoration:none;font-weight:500;transition:all .2s;font-family:'DM Sans',sans-serif}
.proj-btn-demo{background:linear-gradient(135deg,var(--gold-dim),var(--gold));color:var(--black)}
.proj-btn-demo:hover{opacity:0.85;transform:translateY(-1px)}
.proj-btn-code{border:1px solid var(--glass-border);color:var(--text-muted)}
.proj-btn-code:hover{border-color:rgba(212,168,83,0.3);color:var(--gold)}

/* EDUCATION */
#edu-section{max-width:1200px;margin:0 auto;padding:120px 48px}
.timeline{margin-top:64px;position:relative;padding-left:32px}
.timeline::before{content:'';position:absolute;left:0;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,var(--gold),transparent)}
.timeline-item{position:relative;margin-bottom:48px}
.timeline-dot{position:absolute;left:-38px;top:4px;width:12px;height:12px;border-radius:50%;background:var(--gold);box-shadow:0 0 20px rgba(212,168,83,0.4)}
.timeline-date{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gold);letter-spacing:1px;margin-bottom:12px;opacity:0.7}
.timeline-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:16px;padding:24px 28px;backdrop-filter:blur(20px)}
.timeline-title{font-family:'Syne',sans-serif;font-weight:700;font-size:18px;margin-bottom:4px}
.timeline-org{color:var(--gold);font-size:14px;margin-bottom:8px}
.timeline-desc{color:var(--text-muted);font-size:14px;line-height:1.7}

/* CONTACT */
#contact-section{max-width:1200px;margin:0 auto;padding:120px 48px}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;margin-top:64px}
.contact-info-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:32px;backdrop-filter:blur(20px)}
.contact-item{display:flex;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.04)}
.contact-item:last-of-type{border-bottom:none}
.contact-icon{width:40px;height:40px;border-radius:10px;background:rgba(212,168,83,0.08);border:1px solid rgba(212,168,83,0.15);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.contact-label{font-size:11px;color:var(--text-dim);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px}
.contact-value{color:var(--text-primary);font-size:14px;text-decoration:none;transition:color .2s}
.contact-value:hover{color:var(--gold)}
.socials{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap}
.social-btn{display:flex;align-items:center;gap:8px;background:var(--glass);border:1px solid var(--glass-border);border-radius:12px;padding:10px 16px;color:var(--text-muted);text-decoration:none;font-size:13px;transition:all .2s;font-family:'DM Sans',sans-serif}
.social-btn:hover{border-color:rgba(212,168,83,0.3);color:var(--gold);transform:translateY(-2px)}
.contact-form{display:flex;flex-direction:column;gap:16px}
.form-group{display:flex;flex-direction:column;gap:8px}
.form-label{font-size:12px;color:var(--text-muted);letter-spacing:0.5px;font-family:'JetBrains Mono',monospace}
.form-input,.form-textarea{background:var(--glass);border:1px solid var(--glass-border);border-radius:12px;padding:14px 18px;color:var(--text-primary);font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border-color .2s;resize:none}
.form-input:focus,.form-textarea:focus{border-color:rgba(212,168,83,0.4)}
.form-textarea{height:120px}
.form-submit{background:linear-gradient(135deg,var(--gold-dim),var(--gold));color:var(--black);border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:600;cursor:none;transition:all .3s;font-family:'DM Sans',sans-serif}
.form-submit:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(212,168,83,0.25);opacity:0.9}
.form-success{background:rgba(30,200,100,0.1);border:1px solid rgba(30,200,100,0.25);border-radius:12px;padding:16px;color:#6de39a;font-size:14px;text-align:center;display:none}

/* FOOTER */
footer{border-top:1px solid var(--glass-border);padding:40px 48px;text-align:center}
.footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.footer-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:18px;background:linear-gradient(135deg,var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.footer-copy{color:var(--text-dim);font-size:13px}
.footer-links{display:flex;gap:24px}
.footer-links a{color:var(--text-dim);text-decoration:none;font-size:13px;transition:color .2s}
.footer-links a:hover{color:var(--gold)}

/* ANIMATIONS */
.reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-delay-1{transition-delay:.1s}
.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}

/* TYPING */
.typing-text{border-right:2px solid var(--gold);white-space:nowrap;overflow:hidden;animation:blink .75s step-end infinite}
@keyframes blink{from,to{border-color:transparent}50%{border-color:var(--gold)}}

/* NOISE OVERLAY */
.noise{position:fixed;inset:0;opacity:0.025;z-index:1;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

/* RESPONSIVE */
@media(max-width:768px){
  nav{padding:14px 24px}
  .nav-links{display:none}
  section,#skills-section,#projects-section,#edu-section,#contact-section{padding:80px 24px}
  .about-grid,.contact-grid{grid-template-columns:1fr}
  .hero-stats{gap:32px}
  .floating-badge{display:none}
  .footer-inner{flex-direction:column;text-align:center}
}
</style>
</head>
<body>

<div class="noise"></div>
<div id="cursor"></div>
<div id="cursor-ring"></div>
<div id="scroll-bar"></div>

<!-- NAV -->
<nav>
  <span class="nav-logo">LG</span>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Hire Me</a>
</nav>

<!-- HERO -->
<section id="hero">
  <canvas id="hero-canvas"></canvas>
  <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center">
    <div class="hero-badge reveal"><span class="badge-dot"></span>Available for opportunities</div>
    <h1 class="hero-name reveal reveal-delay-1">
      <span class="name-first">Lahcen</span>
      <span class="name-last">Grissi</span>
    </h1>
    <p class="hero-role reveal reveal-delay-2">Full Stack Developer · Algeria · 21 y/o</p>
    <h2 class="hero-tagline reveal reveal-delay-2">
      Building <span class="tagline-em">remarkable</span><br>digital experiences
    </h2>
    <p class="hero-sub reveal reveal-delay-3">From pixel-perfect frontends to scalable distributed backends. I craft software that matters.</p>
    <div class="hero-btns reveal reveal-delay-3">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="#contact" class="btn-outline">Contact Me</a>
      <a href="#" class="btn-outline" onclick="alert('CV download coming soon!')">⬇ Download CV</a>
    </div>
    <div class="hero-stats reveal">
      <div class="stat"><div class="stat-num">3+</div><div class="stat-label">Live Projects</div></div>
      <div class="stat"><div class="stat-num">10+</div><div class="stat-label">Technologies</div></div>
      <div class="stat"><div class="stat-num">2025</div><div class="stat-label">Graduate</div></div>
    </div>
  </div>
  <div class="scroll-hint"><div class="scroll-line"></div><span>Scroll</span></div>
</section>

<div class="divider"></div>

<!-- ABOUT -->
<section id="about" style="max-width:1200px;margin:0 auto">
  <div class="section-label reveal">// About me</div>
  <h2 class="section-title reveal">Crafting code,<br>shaping systems</h2>
  <div class="about-grid">
    <div class="about-visual reveal">
      <div class="about-card" style="position:relative">
        <div class="about-avatar">LG</div>
        <div class="about-name-card">Lahcen Grissi</div>
        <div class="about-title-card">Full Stack Developer</div>
        <div class="about-detail">📍 Algeria</div>
        <div class="about-detail">🎓 USTHB — Licence ISIL 2025</div>
        <div class="about-detail">🌐 Networks & Distributed Systems</div>
        <div class="floating-badge">🔥 Open to Work</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div class="about-card" style="text-align:center;padding:20px">
          <div style="font-family:'Syne',sans-serif;font-size:28px;font-weight:800;background:linear-gradient(135deg,var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent">React</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:4px">Primary Frontend</div>
        </div>
        <div class="about-card" style="text-align:center;padding:20px">
          <div style="font-family:'Syne',sans-serif;font-size:28px;font-weight:800;background:linear-gradient(135deg,#7c6fff,#a89dff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Node</div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:4px">Primary Backend</div>
        </div>
      </div>
    </div>
    <div class="about-text reveal reveal-delay-1">
      <p>I'm a <strong>21-year-old full stack developer</strong> from Algeria, currently completing my <strong>Licence ISIL</strong> degree at USTHB — one of North Africa's top technical universities — with a specialization in <strong>Networks & Distributed Systems</strong>.</p>
      <p>I build complete digital products: from <strong>crafting pixel-perfect interfaces</strong> with React and Next.js to <strong>engineering robust APIs</strong> and database architectures. My systems background gives me a deep appreciation for performance, reliability, and scalability.</p>
      <p>When I'm not coding, I'm exploring the latest in distributed computing, cloud architecture, and everything that powers the modern web.</p>
      <div style="display:flex;gap:12px;margin-top:32px;flex-wrap:wrap">
        <a href="mailto:lehcengrissi@gmail.com" class="btn-outline" style="padding:10px 24px;font-size:14px">Get in touch</a>
        <a href="https://github.com/VRMX2" target="_blank" class="btn-outline" style="padding:10px 24px;font-size:14px">GitHub →</a>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- SKILLS -->
<div id="skills" style="scroll-margin-top:80px"></div>
<div id="skills-section">
  <div class="section-label reveal">// Tech stack</div>
  <h2 class="section-title reveal">Tools I master</h2>
  <p class="section-sub reveal">A curated set of technologies I use to build fast, scalable, production-ready software.</p>
  <div class="skills-categories">
    <div class="skill-cat reveal">
      <div class="skill-cat-icon">⚡</div>
      <div class="skill-cat-name">Frontend</div>
      <div class="skill-tags">
        <span class="skill-tag">React</span>
        <span class="skill-tag">Next.js</span>
        <span class="skill-tag">TypeScript</span>
        <span class="skill-tag">Tailwind CSS</span>
        <span class="skill-tag">Framer Motion</span>
        <span class="skill-tag">HTML / CSS</span>
      </div>
    </div>
    <div class="skill-cat reveal reveal-delay-1">
      <div class="skill-cat-icon">🔧</div>
      <div class="skill-cat-name">Backend</div>
      <div class="skill-tags">
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Express</span>
        <span class="skill-tag">REST API</span>
        <span class="skill-tag">GraphQL</span>
        <span class="skill-tag">Firebase</span>
      </div>
    </div>
    <div class="skill-cat reveal reveal-delay-2">
      <div class="skill-cat-icon">📱</div>
      <div class="skill-cat-name">Mobile</div>
      <div class="skill-tags">
        <span class="skill-tag">React Native</span>
        <span class="skill-tag">Flutter</span>
        <span class="skill-tag">Expo</span>
      </div>
    </div>
    <div class="skill-cat reveal">
      <div class="skill-cat-icon">🗄️</div>
      <div class="skill-cat-name">Database</div>
      <div class="skill-tags">
        <span class="skill-tag">MySQL</span>
        <span class="skill-tag">MongoDB</span>
        <span class="skill-tag">Firebase</span>
        <span class="skill-tag">PostgreSQL</span>
      </div>
    </div>
    <div class="skill-cat reveal reveal-delay-1">
      <div class="skill-cat-icon">🚀</div>
      <div class="skill-cat-name">DevOps & Tools</div>
      <div class="skill-tags">
        <span class="skill-tag">Git</span>
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">Linux</span>
        <span class="skill-tag">Vercel</span>
        <span class="skill-tag">Nginx</span>
      </div>
    </div>
    <div class="skill-cat reveal reveal-delay-2">
      <div class="skill-cat-icon">🌐</div>
      <div class="skill-cat-name">Networks & Systems</div>
      <div class="skill-tags">
        <span class="skill-tag">Distributed Systems</span>
        <span class="skill-tag">TCP/IP</span>
        <span class="skill-tag">Networking</span>
        <span class="skill-tag">Microservices</span>
      </div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- PROJECTS -->
<div id="projects" style="scroll-margin-top:80px"></div>
<div id="projects-section">
  <div class="section-label reveal">// Selected work</div>
  <h2 class="section-title reveal">Projects I've built</h2>
  <p class="section-sub reveal">Real products, live in production. Built from scratch with attention to performance and user experience.</p>
  <div class="projects-grid">

    <div class="project-card reveal">
      <div class="project-preview">
        <div class="project-preview-bg" style="background:radial-gradient(circle at 50% 50%,rgba(212,168,83,0.3),transparent)"></div>
        <div class="project-preview-icon">🎓</div>
        <span class="project-num">01</span>
      </div>
      <div class="project-body">
        <div class="project-title">Moyenne Calculator</div>
        <div class="project-desc">A smart grade calculator designed for Algerian university students. Calculate your semester average instantly with a clean, intuitive UI.</div>
        <div class="project-stack">
          <span class="stack-tag">React</span>
          <span class="stack-tag">Firebase</span>
          <span class="stack-tag">Hosting</span>
        </div>
        <div class="project-links">
          <a href="https://calc-moy-vrmx-s1-user.web.app/" target="_blank" class="proj-btn proj-btn-demo">Live Demo →</a>
          <a href="https://github.com/VRMX2" target="_blank" class="proj-btn proj-btn-code">GitHub</a>
        </div>
      </div>
    </div>

    <div class="project-card reveal reveal-delay-1">
      <div class="project-preview">
        <div class="project-preview-bg" style="background:radial-gradient(circle at 50% 50%,rgba(124,111,255,0.3),transparent)"></div>
        <div class="project-preview-icon">✅</div>
        <span class="project-num">02</span>
      </div>
      <div class="project-body">
        <div class="project-title">TaskFlow App</div>
        <div class="project-desc">A modern task management application with real-time collaboration features. Organize projects, track progress, and boost productivity.</div>
        <div class="project-stack">
          <span class="stack-tag">React</span>
          <span class="stack-tag">Firebase</span>
          <span class="stack-tag">Real-time DB</span>
        </div>
        <div class="project-links">
          <a href="https://taskflow-vrmx-khadmoney.web.app/" target="_blank" class="proj-btn proj-btn-demo">Live Demo →</a>
          <a href="https://github.com/VRMX2" target="_blank" class="proj-btn proj-btn-code">GitHub</a>
        </div>
      </div>
    </div>

    <div class="project-card reveal reveal-delay-2">
      <div class="project-preview">
        <div class="project-preview-bg" style="background:radial-gradient(circle at 50% 50%,rgba(212,168,83,0.2),rgba(124,111,255,0.2),transparent)"></div>
        <div class="project-preview-icon">⌚</div>
        <span class="project-num">03</span>
      </div>
      <div class="project-body">
        <div class="project-title">Ashrqat — Watch Store</div>
        <div class="project-desc">A premium e-commerce platform for men's watches. Full shopping experience with product catalog, filtering, and checkout — live in production.</div>
        <div class="project-stack">
          <span class="stack-tag">E-commerce</span>
          <span class="stack-tag">Full Stack</span>
          <span class="stack-tag">Production</span>
        </div>
        <div class="project-links">
          <a href="https://ashrqat.store/products/manwatches" target="_blank" class="proj-btn proj-btn-demo">Live Store →</a>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="divider"></div>

<!-- EDUCATION -->
<div id="education" style="scroll-margin-top:80px"></div>
<div id="edu-section">
  <div class="section-label reveal">// Background</div>
  <h2 class="section-title reveal">Education &<br>Experience</h2>
  <div class="timeline">
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2022 — 2025</div>
      <div class="timeline-card">
        <div class="timeline-title">Licence ISIL — Informatique</div>
        <div class="timeline-org">USTHB · Université des Sciences et de la Technologie Houari Boumediene</div>
        <div class="timeline-desc">Specialization in Networks & Distributed Systems. Studied computer science fundamentals, algorithms, data structures, operating systems, network protocols, and distributed architectures. Developed multiple full-stack projects during studies.</div>
      </div>
    </div>
    <div class="timeline-item reveal reveal-delay-1">
      <div class="timeline-dot" style="background:var(--accent2);box-shadow:0 0 20px rgba(124,111,255,0.4)"></div>
      <div class="timeline-date">2023 — Present</div>
      <div class="timeline-card">
        <div class="timeline-title">Full Stack Developer</div>
        <div class="timeline-org">Freelance & Personal Projects</div>
        <div class="timeline-desc">Built and deployed 3+ production web applications serving real users. Worked with clients on custom e-commerce solutions, productivity tools, and educational apps. Focused on performance, scalability, and clean UI/UX design.</div>
      </div>
    </div>
    <div class="timeline-item reveal reveal-delay-2">
      <div class="timeline-dot" style="background:#6de39a;box-shadow:0 0 20px rgba(109,227,154,0.4)"></div>
      <div class="timeline-date">Ongoing</div>
      <div class="timeline-card">
        <div class="timeline-title">Continuous Learning</div>
        <div class="timeline-org">Self-directed · Online Platforms</div>
        <div class="timeline-desc">Actively studying cloud architecture (AWS, Vercel), advanced TypeScript, system design patterns, and modern DevOps practices. Committed to staying at the cutting edge of full-stack development.</div>
      </div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- CONTACT -->
<div id="contact" style="scroll-margin-top:80px"></div>
<div id="contact-section">
  <div class="section-label reveal">// Get in touch</div>
  <h2 class="section-title reveal">Let's build<br>something great</h2>
  <p class="section-sub reveal">Available for freelance projects, full-time roles, and exciting collaborations.</p>
  <div class="contact-grid">
    <div class="reveal">
      <div class="contact-info-card">
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div>
            <div class="contact-label">Email</div>
            <a href="mailto:lehcengrissi@gmail.com" class="contact-value">lehcengrissi@gmail.com</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div>
            <div class="contact-label">Phone</div>
            <a href="tel:+213774525109" class="contact-value">+213 774 525 109</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div>
            <div class="contact-label">Location</div>
            <span class="contact-value">Algeria 🇩🇿</span>
          </div>
        </div>
      </div>
      <div class="socials">
        <a href="https://github.com/VRMX2" target="_blank" class="social-btn">GitHub</a>
        <a href="https://www.linkedin.com/in/lahcen-grissi-24740a2a1/" target="_blank" class="social-btn">LinkedIn</a>
        <a href="https://www.instagram.com/grissi_lahcen/" target="_blank" class="social-btn">Instagram</a>
      </div>
    </div>
    <div class="reveal reveal-delay-1">
      <form class="contact-form" onsubmit="handleForm(event)">
        <div class="form-group">
          <label class="form-label">your_name</label>
          <input class="form-input" type="text" placeholder="e.g. Ahmed Benali" required/>
        </div>
        <div class="form-group">
          <label class="form-label">your_email</label>
          <input class="form-input" type="email" placeholder="ahmed@example.com" required/>
        </div>
        <div class="form-group">
          <label class="form-label">message</label>
          <textarea class="form-textarea" placeholder="Tell me about your project..." required></textarea>
        </div>
        <button type="submit" class="form-submit">Send Message →</button>
        <div class="form-success" id="form-success">Message sent! I'll get back to you within 24 hours. ✓</div>
      </form>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <span class="footer-logo">LG</span>
    <span class="footer-copy">© 2025 Lahcen Grissi. Built with passion.</span>
    <div class="footer-links">
      <a href="#hero">Top</a>
      <a href="mailto:lehcengrissi@gmail.com">Email</a>
      <a href="https://github.com/VRMX2" target="_blank">GitHub</a>
    </div>
  </div>
</footer>

<script>
// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=Math.round(rx)+'px';ring.style.top=Math.round(ry)+'px';requestAnimationFrame(animRing)}animRing();
document.querySelectorAll('a,button,.project-card,.skill-cat,.social-btn').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='20px';cursor.style.height='20px';ring.style.width='50px';ring.style.height='50px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='12px';cursor.style.height='12px';ring.style.width='36px';ring.style.height='36px'});
});

// SCROLL BAR
const sb=document.getElementById('scroll-bar');
window.addEventListener('scroll',()=>{
  const pct=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;
  sb.style.width=pct+'%';
});

// REVEAL ON SCROLL
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>{obs.observe(el)});
setTimeout(()=>{document.querySelectorAll('#hero .reveal').forEach(el=>el.classList.add('visible'))},100);

// HERO CANVAS PARTICLES
const canvas=document.getElementById('hero-canvas');
const ctx=canvas.getContext('2d');
let W,H,pts=[];
function resize(){W=canvas.width=canvas.parentElement.offsetWidth;H=canvas.height=canvas.parentElement.offsetHeight}
resize();
window.addEventListener('resize',()=>{resize();initPts()});
function initPts(){pts=[];for(let i=0;i<80;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*0.3,vy:(Math.random()-.5)*0.3,r:Math.random()*1.5+0.5,o:Math.random()*0.5+0.1})}
initPts();
function drawPts(){
  ctx.clearRect(0,0,W,H);
  pts.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1;
    if(p.y<0||p.y>H)p.vy*=-1;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(212,168,83,${p.o})`;ctx.fill();
  });
  pts.forEach((p,i)=>{pts.slice(i+1).forEach(q=>{
    const d=Math.hypot(p.x-q.x,p.y-q.y);
    if(d<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(212,168,83,${0.06*(1-d/120)})`;ctx.lineWidth=0.5;ctx.stroke()}
  })});
  requestAnimationFrame(drawPts);
}
drawPts();

// TYPING EFFECT
function typeEffect(){
  const roles=['Full Stack Developer','Frontend Engineer','Backend Architect','UI/UX Enthusiast','Systems Developer'];
  let ri=0,ci=0,deleting=false;
  const el=document.querySelector('.hero-role');
  if(!el)return;
  function type(){
    const cur=roles[ri];
    if(deleting){el.textContent=cur.slice(0,--ci)}else{el.textContent=cur.slice(0,++ci)}
    if(!deleting&&ci===cur.length){setTimeout(()=>{deleting=true},1800);setTimeout(type,2000)}
    else if(deleting&&ci===0){deleting=false;ri=(ri+1)%roles.length;setTimeout(type,400)}
    else setTimeout(type,deleting?40:80);
  }
  el.classList.add('typing-text');
  setTimeout(type,1000);
}
typeEffect();

// FORM
function handleForm(e){
  e.preventDefault();
  const btn=e.target.querySelector('button');
  btn.textContent='Sending...';btn.disabled=true;
  setTimeout(()=>{
    btn.style.display='none';
    document.getElementById('form-success').style.display='block';
    e.target.reset();
  },1200);
}
</script>
</body>
</html>