/* Injects shared chrome (nav + footer) into every interior page.
   Usage: add <div id="site-nav"></div> and <div id="site-footer"></div>.
   Optional: <body data-page="kitchens"> to auto-activate a nav item. */
(function(){
  const page = document.body.dataset.page || '';
  const NAV = `
<nav class="nav">
  <div class="wrap nav-inner">
    <a href="index.html" class="logo">
      <div class="logo-mark">K</div>
      <div class="logo-text"><b>Kitchen World</b><span>EST. 1987</span></div>
    </a>
    <div class="nav-links">
      <a href="kitchens.html" data-nav="kitchens">Kitchens</a>
      <a href="bathrooms.html" data-nav="bathrooms">Bathrooms</a>
      <a href="countertops.html" data-nav="countertops">Countertops</a>
      <a href="gallery.html" data-nav="gallery">Projects</a>
      <a href="design.html" data-nav="design">Design</a>
      <a href="about.html" data-nav="about">About</a>
    </div>
    <div class="nav-cta">
      <a href="tel:+12157446447" class="nav-phone">215.744.6447</a>
      <a href="contact.html" class="btn btn-primary">Schedule Consultation<span class="arrow">→</span></a>
    </div>
  </div>
</nav>`;

  const FOOTER = `
<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div>
        <a href="index.html" class="logo">
          <div class="logo-mark">K</div>
          <div class="logo-text"><b>Kitchen World</b><span>EST. 1987</span></div>
        </a>
        <p class="footer-intro">Three Philadelphia-area showrooms specifying cabinetry, vanities, and countertops for homeowners and contractors since 1987.</p>
        <a href="tel:+12157446447" class="phone-big">215.744.6447</a>
        <div class="socials">
          <a href="#" class="social" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg></a>
          <a href="#" class="social" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"/></svg></a>
          <a href="#" class="social" aria-label="Houzz"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3v18M17 3v18M7 12h10"/></svg></a>
          <a href="#" class="social" aria-label="Pinterest"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M10 22l2-8m-1-4a2 2 0 1 1 4 0c0 3-2 6-4 6"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Showrooms</h4>
        <div class="loc"><b>Philadelphia</b><p>2763 Orthodox St.<br/>Philadelphia, PA 19137</p></div>
        <div class="loc"><b>Furlong</b><p>3503 York Rd.<br/>Furlong, PA 18925</p></div>
        <div class="loc"><b>Bridgeport</b><p>65 East 4th St.<br/>Bridgeport, PA 19405</p></div>
      </div>
      <div class="footer-col">
        <h4>Hours</h4>
        <p>Mon – Fri &nbsp; 9:00 – 5:00<br/>Saturday &nbsp; Appointments only<br/>Sunday &nbsp; Closed</p>
        <h4 style="margin-top:36px">Site</h4>
        <p><a href="kitchens.html">Kitchens</a><br/><a href="bathrooms.html">Bathrooms</a><br/><a href="countertops.html">Countertops</a><br/><a href="gallery.html">Gallery</a><br/><a href="design.html">Design Services</a><br/><a href="about.html">About</a><br/><a href="contact.html">Contact</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Kitchen World Inc.</span>
      <span>Philadelphia · Furlong · Bridgeport</span>
    </div>
  </div>
</footer>`;

  const navEl = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer');
  if (navEl) navEl.outerHTML = NAV;
  if (footEl) footEl.outerHTML = FOOTER;

  if (page) {
    const link = document.querySelector(`.nav-links a[data-nav="${page}"]`);
    if (link) link.classList.add('active');
  }
})();
