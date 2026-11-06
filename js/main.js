/* THREE CINNAMONS — site behaviour. All content comes from js/config.js */
(function () {
  "use strict";
  var C = window.TC, B = C.business;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var page = document.body.getAttribute("data-page") || "home";

  /* ---------- helpers ---------- */
  var SPIRAL = '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path pathLength="1" d="M50 50c2-3 6-3 8 0s1 8-4 10-11-1-13-8 2-14 10-17 17 0 21 8 2 18-6 24-22 5-29-4-6-26 5-35 28-8 37 4"/></svg>';
  var ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.2 15.04l-.3-.18-3.1.82.83-3.02-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 4.1c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.64 4.1 3.6 2.03.8 2.44.64 2.88.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.1-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.3 1.6 3.7 3.9 3.9v2.9c-1.4.1-2.6-.3-3.9-1.1v6.1c0 3.9-3.3 6.2-6.4 5.3-2.6-.8-4.2-3.4-3.5-6.1.6-2.4 2.9-4 5.4-3.7v3c-1.2-.2-2.3.5-2.6 1.6-.3 1.2.5 2.4 1.7 2.6 1.3.2 2.4-.7 2.4-2.1V3h3z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
    cup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8zM17 10h2a2 2 0 0 1 0 4h-2M8 3v2M12 3v2"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="5" rx="1"/><path d="M5 13v7h14v-7M12 8v12M12 8c-2-4-6-3-5 0M12 8c2-4 6-3 5 0"/></svg>'
  };
  document.documentElement.style.setProperty("--spiral-url", 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#edcca2" stroke-width="2.4" stroke-linecap="round"><path d="M50 50c2-3 6-3 8 0s1 8-4 10-11-1-13-8 2-14 10-17 17 0 21 8 2 18-6 24-22 5-29-4-6-26 5-35 28-8 37 4"/></svg>') + '")');

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function waLink(msg) { return "https://wa.me/" + B.whatsapp.number + "?text=" + encodeURIComponent(msg || B.whatsapp.message); }
  function dirLink() { return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(B.address.mapQuery); }
  function mapSrc() { return "https://www.google.com/maps?q=" + encodeURIComponent(B.address.mapQuery) + "&output=embed"; }
  function addrText() { var a = B.address; return a.line1 + ", " + a.line2 + ", " + a.city + ", " + a.country; }

  /* image slot → HTML. src null → branded placeholder (never a broken image). */
  function imgHtml(slot, opts) {
    opts = opts || {};
    var d = typeof slot === "string" ? C.images[slot] : slot;
    if (!d) d = { src: null, alt: "" };
    if (d.src) return '<img data-tc src="' + esc(d.src) + '" alt="' + esc(d.alt) + '" loading="' + (opts.eager ? "eager" : "lazy") + '" decoding="async">';
    return '<div class="ph' + (opts.dark ? " dark" : "") + '" role="img" aria-label="' + esc(d.alt) + ' (photo coming soon)">' + SPIRAL + (opts.label === false ? "" : "<small>Photo coming soon</small>") + "</div>";
  }

  /* if a remote photo fails to load, swap in the branded placeholder (never a broken image) */
  document.addEventListener("error", function (e) {
    var t = e.target; if (!t || t.tagName !== "IMG" || !t.hasAttribute("data-tc")) return;
    var w = document.createElement("div"); w.innerHTML = imgHtml({ src: null, alt: t.alt }); t.replaceWith(w.firstChild);
  }, true);

  /* ---------- header + footer ---------- */
  var nav = [["index.html", "Home", "home"], ["about.html", "About", "about"], ["menu.html", "Menu", "menu"], ["gallery.html", "Gallery", "gallery"], ["offers.html", "Offers", "offers"], ["contact.html", "Contact", "contact"]];
  function header() {
    var onHero = page === "home";
    return '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-header ' + (onHero ? "on-hero" : "always-solid") + '" id="siteHeader"><div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="Three Cinnamons — home"><img class="logo-dark" src="assets/img/logo-240.webp" srcset="assets/img/logo-240.webp 1x, assets/img/logo-480.webp 2x" width="77" height="58" alt="Three Cinnamons logo"><img class="logo-light" src="assets/img/logo-light-240.webp" srcset="assets/img/logo-light-240.webp 1x, assets/img/logo-light-480.webp 2x" width="77" height="58" alt="" aria-hidden="true"></a>' +
      '<nav class="nav" id="nav" aria-label="Main">' + nav.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>"; }).join("") +
      '<a class="nav-cta" href="' + waLink() + '" target="_blank" rel="noopener">Order on WhatsApp</a></nav>' +
      '<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>' +
      '</div></header><div class="nav-scrim" id="scrim"></div>';
  }
  function socials() {
    var s = B.socials, out = "";
    if (s.facebook) out += '<a href="' + s.facebook + '" target="_blank" rel="noopener" aria-label="Three Cinnamons on Facebook">' + ICON.fb + "</a>";
    if (s.tiktok) out += '<a href="' + s.tiktok + '" target="_blank" rel="noopener" aria-label="Three Cinnamons on TikTok">' + ICON.tt + "</a>";
    if (s.instagram) out += '<a href="' + s.instagram + '" target="_blank" rel="noopener" aria-label="Three Cinnamons on Instagram">' + ICON.ig + "</a>";
    return out;
  }
  function footer() {
    var hours = B.hours ? B.hours.map(function (h) { return "<li>" + esc(h[0]) + ": " + esc(h[1]) + "</li>"; }).join("") : "<li>Opening hours coming soon — message us to check.</li>";
    return '<footer class="site-footer"><div class="wrap"><div class="foot-grid">' +
      '<div><a class="foot-logo" href="index.html" aria-label="Three Cinnamons home"><img src="assets/img/logo-light-240.webp" srcset="assets/img/logo-light-240.webp 1x, assets/img/logo-light-480.webp 2x" width="113" height="85" alt="Three Cinnamons logo" loading="lazy"></a><p>' + esc(B.tagline) + '</p><div class="socials">' + socials() + "</div></div>" +
      '<div><h4>Explore</h4><ul>' + nav.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h4>Visit &amp; Contact</h4><ul><li><a href="' + dirLink() + '" target="_blank" rel="noopener">' + esc(addrText()) + '</a></li><li><a href="tel:' + B.phone.tel + '">' + esc(B.phone.display) + '</a></li><li><a href="mailto:' + B.email + '">' + esc(B.email) + '</a></li><li><a href="' + waLink() + '" target="_blank" rel="noopener">Chat on WhatsApp</a></li></ul></div>' +
      '<div><h4>Opening hours</h4><ul>' + hours + "</ul>" + (B.delivery ? "<p style='margin-top:14px'>Delivery available.</p>" : "") + "</div></div>" +
      '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + " " + esc(B.name) + ". All rights reserved.</span><span>Website demo by Nova Web Studio</span></div><p style='margin-top:14px;font-size:.78rem;color:rgba(233,217,192,.5)'>Photographs shown are licensed stock images from <a href='https://unsplash.com/?utm_source=three_cinnamons_demo&utm_medium=referral' target='_blank' rel='noopener' style='text-decoration:underline'>Unsplash</a>, used for illustration. They are not photos of Three Cinnamons. <a href='gallery.html#credits' style='text-decoration:underline'>Photo credits</a>.</p></div></footer>" +
      '<a class="wa-float" href="' + waLink() + '" target="_blank" rel="noopener" aria-label="Chat with Three Cinnamons on WhatsApp">' + ICON.wa + "</a>";
  }
  var hMount = $("#site-header"), fMount = $("#site-footer");
  if (hMount) hMount.outerHTML = header();
  if (fMount) fMount.outerHTML = footer();

  /* mobile nav */
  var burger = $("#burger"), navEl = $("#nav"), scrim = $("#scrim"), hdr = $("#siteHeader");
  function setNav(open) { navEl.classList.toggle("open", open); scrim.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); document.body.style.overflow = open ? "hidden" : ""; }
  if (burger) {
    burger.addEventListener("click", function () { setNav(!navEl.classList.contains("open")); });
    scrim.addEventListener("click", function () { setNav(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 980) setNav(false); });
    $$("a", navEl).forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  }
  function onScroll() { if (hdr && page === "home") hdr.classList.toggle("solid", window.scrollY > 60); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- generic data-bound bits ---------- */
  $$("[data-img]").forEach(function (el) { el.innerHTML = imgHtml(el.getAttribute("data-img"), { dark: el.hasAttribute("data-dark") }); });
  $$("[data-ico]").forEach(function (el) { el.innerHTML = ICON[el.getAttribute("data-ico")] || ""; });
  $$("[data-tel]").forEach(function (a) { a.href = "tel:" + B.phone.tel; if (!a.hasAttribute("data-keep")) a.textContent = B.phone.display; });
  $$("[data-mail]").forEach(function (a) { a.href = "mailto:" + B.email; if (!a.hasAttribute("data-keep")) a.textContent = B.email; });
  $$("[data-wa]").forEach(function (a) { a.href = waLink(a.getAttribute("data-wa") || ""); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-directions]").forEach(function (a) { a.href = dirLink(); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-address]").forEach(function (el) { el.textContent = addrText(); });
  $$("[data-hours]").forEach(function (el) {
    el.innerHTML = B.hours ? '<div class="hours">' + B.hours.map(function (h) { return "<div><span>" + esc(h[0]) + "</span><strong>" + esc(h[1]) + "</strong></div>"; }).join("") + "</div>" : 'Opening hours to be confirmed.<br><span class="pending">Message us on WhatsApp to check before you visit.</span>';
  });
  $$("[data-social]").forEach(function (a) {
    var url = B.socials[a.getAttribute("data-social")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else a.remove();
  });
  $$("[data-map]").forEach(function (el) {
    el.innerHTML = '<iframe title="Map showing Three Cinnamons at Agora Village, Thabo Mbeki Road, Lusaka" src="' + mapSrc() + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
  });

  /* ---------- inner-page banner photos (fall back to the brown gradient) ---------- */
  $$(".page-hero[data-banner]").forEach(function (el) {
    var d = C.images[el.getAttribute("data-banner")]; if (!d || !d.src) return;
    var im = new Image();
    im.onload = function () { el.style.backgroundImage = "linear-gradient(135deg,rgba(43,24,16,.88),rgba(93,57,33,.55)),url('" + d.src + "')"; el.classList.add("has-photo"); };
    im.src = d.src;
  });

  /* ---------- welcome animation (home, once per session) ---------- */
  var welcome = $("#welcome");
  if (welcome) {
    var seen = false; try { seen = sessionStorage.getItem("tcWelcome") === "1"; } catch (e) {}
    if (seen || reduce) welcome.remove();
    else {
      welcome.innerHTML = '<div class="w-art">' + SPIRAL + '</div><img class="w-logo" src="assets/img/logo-480.webp" alt="Three Cinnamons" width="240" height="181"><p class="w-text">Welcome to Three Cinnamons</p>';
      document.body.style.overflow = "hidden";
      var done = function () { welcome.classList.add("hide"); document.body.style.overflow = ""; try { sessionStorage.setItem("tcWelcome", "1"); } catch (e) {} setTimeout(function () { welcome.remove(); }, 800); };
      setTimeout(done, 3000);
      welcome.addEventListener("click", done);
    }
  }

  /* ---------- hero ---------- */
  var heroSlides = $("#heroSlides");
  if (heroSlides) {
    var keys = ["hero-1", "hero-2", "hero-3", "hero-4"], variants = ["", " v2", " v3", " v4"];
    heroSlides.innerHTML = keys.map(function (k, i) {
      var d = C.images[k];
      return '<div class="slide art' + variants[i] + (i === 0 ? " active" : "") + '" data-src="' + (d.src ? esc(d.src) : "") + '" role="img" aria-label="' + esc(d.alt) + '"><span class="spiral">' + SPIRAL + '</span><img class="art-rolls" src="assets/img/rolls.webp" alt="" width="488" height="310"></div>';
    }).join("");
    $$(".slide[data-src]", heroSlides).forEach(function (s) {
      var u = s.getAttribute("data-src"); if (!u) return;
      var im = new Image();
      im.onload = function () { s.style.backgroundImage = "url('" + u + "')"; s.classList.remove("art", "v2", "v3", "v4"); s.classList.add("photo"); s.innerHTML = ""; };
      im.src = u; /* on error the branded art slide simply stays */
    });
    var slides = $$(".slide", heroSlides), heads = $$(".headline .hl");
    var cur = 0, timer;
    function show(n) {
      cur = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle("active", i === cur); });
      heads.forEach(function (h, i) { h.classList.toggle("active", i === cur % heads.length); });
    }
    function start() { if (!reduce) { clearInterval(timer); timer = setInterval(function () { show(cur + 1); }, 5500); } }
    show(0); start();
    document.addEventListener("visibilitychange", function () { document.hidden ? clearInterval(timer) : start(); });
  }

  /* ---------- menu ---------- */
  function priceHtml(it) { return it.price == null ? '<span class="price tbc">Price on request</span>' : '<span class="price">' + esc(C.menu.currency) + esc(it.price) + "</span>"; }
  function cardHtml(it, i) {
    var img = it.img ? imgHtml(C.images[it.img] || { src: it.img, alt: it.name }) : imgHtml({ src: null, alt: it.name }, { label: false });
    return '<article class="card reveal hover-zoom" data-d="' + (i % 3) + '"><div class="img">' + (it.isSample ? '<span class="badge sample">Sample</span>' : it.featured ? '<span class="badge">Featured</span>' : "") + img + '</div><div class="card-body"><div class="card-top"><h3>' + esc(it.name) + "</h3>" + priceHtml(it) + "</div><p>" + esc(it.desc) + "</p></div></article>";
  }
  var featMount = $("#featuredMenu");
  if (featMount) {
    var f = C.menu.items.filter(function (x) { return x.featured; }).slice(0, 3);
    featMount.innerHTML = f.map(cardHtml).join("");
  }
  var menuMount = $("#menuMount");
  if (menuMount) {
    var tabs = $("#menuTabs"), active = "all";
    var notice = $("#menuNotice"); if (notice && !C.menu.isSample) notice.remove();
    tabs.innerHTML = '<button class="tab" aria-pressed="true" data-cat="all">All</button>' + C.menu.categories.map(function (c) { return '<button class="tab" aria-pressed="false" data-cat="' + c.id + '">' + esc(c.name) + "</button>"; }).join("");
    var render = function () {
      var html = "";
      C.menu.categories.forEach(function (c) {
        if (active !== "all" && active !== c.id) return;
        var items = C.menu.items.filter(function (x) { return x.cat === c.id; });
        if (!items.length) return;
        html += '<h2 class="cat-title" id="cat-' + c.id + '">' + esc(c.name) + '</h2><p class="cat-blurb">' + esc(c.blurb) + '</p><div class="cards">' + items.map(cardHtml).join("") + "</div>";
      });
      menuMount.innerHTML = html; observe();
    };
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest(".tab"); if (!b) return;
      active = b.getAttribute("data-cat");
      $$(".tab", tabs).forEach(function (t) { t.setAttribute("aria-pressed", t === b); });
      render();
    });
    render();
  }

  /* ---------- gallery + lightbox ---------- */
  var gMount = $("#galleryMount");
  if (gMount) {
    var gTabs = $("#galleryTabs"), cats = [["all", "All"], ["food", "Food"], ["drinks", "Drinks"], ["interior", "Interior"], ["exterior", "Exterior"]].filter(function (c) { return c[0] === "all" || C.images.gallery.some(function (g) { return g.cat === c[0]; }); }), gActive = "all", shown = [];
    gTabs.innerHTML = cats.map(function (c, i) { return '<button class="tab" aria-pressed="' + (i === 0) + '" data-cat="' + c[0] + '">' + c[1] + "</button>"; }).join("");
    var kindLabel = { venue: "Three Cinnamons", food: "Three Cinnamons", stock: "Stock photo" };
    var renderG = function () {
      shown = C.images.gallery.filter(function (g) { return gActive === "all" || g.cat === gActive; });
      gMount.innerHTML = shown.map(function (g, i) {
        var cls = "g-item reveal" + (g.span ? " " + g.span : "");
        if (!g.src) return '<div class="' + cls + '"><div class="img">' + imgHtml(g) + "</div></div>";
        return '<div class="' + cls + '"><button data-i="' + i + '" aria-label="Open photo: ' + esc(g.alt) + '"><div class="img">' + imgHtml(g) + '</div><span class="cap">' + esc(g.alt) + (g.kind === "stock" ? " · stock photo" : "") + "</span></button></div>";
      }).join("");
      observe();
    };
    gTabs.addEventListener("click", function (e) {
      var b = e.target.closest(".tab"); if (!b) return;
      gActive = b.getAttribute("data-cat");
      $$(".tab", gTabs).forEach(function (t) { t.setAttribute("aria-pressed", t === b); });
      renderG();
    });
    renderG();
    var gn = $("#galleryNote"), anyStock = C.images.gallery.some(function (g) { return g.kind === "stock"; }), anySrc = C.images.gallery.some(function (g) { return g.src; });
    if (gn) {
      if (!anySrc) { /* keep "photos coming soon" note */ }
      else if (anyStock) gn.innerHTML = "<span><strong>Illustrative stock photos.</strong> These are licensed stock images that show the kind of food and atmosphere you can expect. They are not photos of Three Cinnamons. Real photos will replace them soon.</span>";
      else gn.remove();
    }
    var cr = $("#creditsList");
    if (cr) {
      var seen = {}, list = [];
      C.images.gallery.concat(Object.keys(C.images).filter(function (k) { return k !== "gallery"; }).map(function (k) { return C.images[k]; })).forEach(function (g) {
        if (g && g.credit && !seen[g.credit.name]) { seen[g.credit.name] = 1; list.push('<li><a href="' + esc(g.credit.url) + '" target="_blank" rel="noopener">' + esc(g.credit.name) + "</a></li>"); }
      });
      if (list.length) cr.innerHTML = list.join(""); else { var cs = $("#credits"); if (cs) cs.remove(); }
    }

    var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), idx = 0;
    var openLb = function (i) {
      var withSrc = shown.filter(function (g) { return g.src; }); var item = shown[i]; idx = withSrc.indexOf(item);
      lbImg.src = item.full || item.src; lbImg.alt = item.alt; lbCap.textContent = item.alt + (item.kind === "stock" ? " (stock photo)" : "");
      lb.classList.add("open"); document.body.style.overflow = "hidden"; $(".lb-close", lb).focus();
    };
    var step = function (d) { var w = shown.filter(function (g) { return g.src; }); idx = (idx + d + w.length) % w.length; lbImg.src = w[idx].full || w[idx].src; lbImg.alt = w[idx].alt; lbCap.textContent = w[idx].alt + (w[idx].kind === "stock" ? " (stock photo)" : ""); };
    var closeLb = function () { lb.classList.remove("open"); document.body.style.overflow = ""; };
    gMount.addEventListener("click", function (e) { var b = e.target.closest("button[data-i]"); if (b) openLb(+b.getAttribute("data-i")); });
    $(".lb-close", lb).addEventListener("click", closeLb);
    $(".lb-prev", lb).addEventListener("click", function () { step(-1); });
    $(".lb-next", lb).addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) { if (!lb.classList.contains("open")) return; if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  }

  /* ---------- offers ---------- */
  var oMount = $("#offersMount");
  if (oMount) {
    if (C.offers && C.offers.length) {
      oMount.innerHTML = C.offers.map(function (o, i) { return '<article class="offer reveal" data-d="' + (i % 3) + '"><span class="tag">' + esc(o.tag || "Offer") + "</span><h3>" + esc(o.title) + "</h3><p>" + esc(o.text) + "</p>" + (o.until ? '<p style="margin-top:12px;font-size:.85rem">Valid until ' + esc(o.until) + "</p>" : "") + "</article>"; }).join("");
      var intro = $("#offersEmpty"); if (intro) intro.remove();
    } else oMount.remove();
  }

  /* ---------- contact form (honest: only reports what really happened) ---------- */
  var form = $("#contactForm");
  if (form) {
    var status = $("#formStatus");
    var setStatus = function (cls, msg) { status.className = "form-status show " + cls; status.textContent = msg; };
    var check = function (el, ok, msg) { var f = el.closest(".field"); f.classList.toggle("invalid", !ok); $(".err", f).textContent = ok ? "" : msg; if (!ok) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid"); return ok; };
    var validate = function () {
      var n = form.elements.name, e = form.elements.email, p = form.elements.phone, m = form.elements.message;
      var ok = check(n, n.value.trim().length >= 2, "Please enter your name.");
      ok = check(e, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.value.trim()), "Please enter a valid email address.") && ok;
      ok = check(p, !p.value.trim() || /^[+()\d\s-]{7,20}$/.test(p.value.trim()), "Please enter a valid phone number or leave it empty.") && ok;
      ok = check(m, m.value.trim().length >= 10, "Please write a message (at least 10 characters).") && ok;
      return ok;
    };
    $$("input,textarea", form).forEach(function (el) { el.addEventListener("blur", function () { if (el.value) validate(); }); });
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (form.elements.company.value) return; // honeypot
      if (!validate()) { setStatus("bad", "Please fix the highlighted fields."); return; }
      var d = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), phone: form.elements.phone.value.trim(), message: form.elements.message.value.trim() };
      if (B.formEndpoint) {
        var btn = $("button[type=submit]", form); btn.disabled = true;
        fetch(B.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) })
          .then(function (r) { if (!r.ok) throw new Error("bad status"); setStatus("ok", "Thank you, " + d.name + "! Your message has been sent. We will get back to you soon."); form.reset(); })
          .catch(function () { setStatus("bad", "Sorry, your message could not be sent. Please use WhatsApp or call us on " + B.phone.display + "."); })
          .then(function () { btn.disabled = false; });
      } else {
        var body = "Name: " + d.name + "\nEmail: " + d.email + (d.phone ? "\nPhone: " + d.phone : "") + "\n\n" + d.message;
        window.location.href = "mailto:" + B.email + "?subject=" + encodeURIComponent("Website enquiry from " + d.name) + "&body=" + encodeURIComponent(body);
        setStatus("ok", "Your email app should now open with your message ready to send to " + B.email + ". Nothing is sent until you press Send there. No email app? Use the WhatsApp button instead.");
      }
    });
    var waBtn = $("#formWa");
    if (waBtn) waBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var m = form.elements.message.value.trim(), n = form.elements.name.value.trim();
      window.open(waLink(m ? "Hello Three Cinnamons, " + (n ? "this is " + n + ". " : "") + m : B.whatsapp.message), "_blank", "noopener");
    });
  }

  /* ---------- reveal on scroll ---------- */
  var io;
  function observe() {
    var els = $$(".reveal:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }
  observe();

  /* ---------- page transitions ---------- */
  requestAnimationFrame(function () { document.body.classList.add("is-ready"); });
  window.addEventListener("pageshow", function (e) { if (e.persisted) document.body.classList.add("is-ready"), document.body.classList.remove("is-leaving"); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a"); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    var href = a.getAttribute("href"); if (!href || /^(#|mailto:|tel:|https?:)/.test(href) || reduce) return;
    e.preventDefault(); document.body.classList.add("is-leaving"); setTimeout(function () { window.location.href = href; }, 260);
  });
})();
