/* ==========================================================================
   Menu en footer voor alle pagina's.
   Het menu staat op één plek (MENU hieronder). Pas het hier aan en elke pagina volgt.

   Gebruik in een pagina:
     <script src="js/layout.js" data-part="header"></script>   (bovenaan in <body>)
     <script src="js/layout.js" data-part="footer"></script>   (onderaan in <body>)
   Optioneel op subpagina's:
     <nav class="crumbs" data-crumbs></nav>   -> kruimelpad
     <nav class="subnav" data-subnav></nav>   -> menu van de huidige sectie
   ========================================================================== */
(function () {
  const MENU = [
    { label: "Nieuws", href: "nieuws.html" },
    { label: "Schaatsen", children: [
      { label: "Jeugd", href: "jeugd.html" },
      { label: "Jeugdbeleid trainen", href: "jeugdbeleid-trainen.html" },
      { label: "Wedstrijdschaatsen", href: "wedstrijd-schaatsen.html" },
      { label: "Recreanten", href: "recreanten.html" },
      { label: "YVG-uur", href: "yvg-uur.html" },
      { label: "Trainingstijden", href: "trainingstijden.html" },
      { label: "Trainingsschema generator", href: "trainingsschema.html" }
    ]},
    { label: "Zomertraining", children: [
      { label: "Overzicht zomertraining", href: "zomertraining.html" },
      { label: "Inline-skaten", href: "inline-skaten.html" },
      { label: "Fietstraining", href: "fietstraining.html" },
      { label: "Droogtraining", href: "droogtraining.html" },
      { label: "Voorkom blessures", href: "voorkom-blessures.html" }
    ]},
    { label: "Vereniging", children: [
      { label: "Bestuur en commissies", href: "bestuur.html" },
      { label: "Clubkleding", href: "clubkleding.html" },
      { label: "Historie", href: "historie.html" },
      { label: "Vertrouwenscontactpersoon", href: "vertrouwenscontactpersoon.html" },
      { label: "Statuten en reglementen", href: "statuten.html" }
    ]},
    { label: "Kalender", href: "kalender.html" },
    { label: "Lidmaatschap", children: [
      { label: "Lid worden", href: "lid-worden.html" },
      { label: "Lidmaatschap en contributie", href: "contributie.html" },
      { label: "Mijn YVG", href: "mijn-yvg.html" }
    ]},
    { label: "Contact", href: "contact.html" }
  ];
  const CTA = { label: "Word lid", href: "lid-worden.html" };

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isCurrent = (href) => href.toLowerCase() === current;
  const section = MENU.find((m) => m.children && m.children.some((c) => isCurrent(c.href)));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const link = (item, cls) => `<a href="${item.href}"${cls ? ` class="${cls}"` : ""}${isCurrent(item.href) ? ' aria-current="page"' : ""}>${esc(item.label)}</a>`;

  function header() {
    const items = MENU.map((m, i) => {
      if (!m.children) return `<li>${link(m)}</li>`;
      const active = m === section ? " is-active" : "";
      return `<li class="has-sub">
          <button type="button" class="sub-toggle${active}" aria-expanded="false" aria-controls="sub-${i}">${esc(m.label)}<span class="caret" aria-hidden="true"></span></button>
          <ul class="sub-menu" id="sub-${i}">${m.children.map((c) => `<li>${link(c)}</li>`).join("")}</ul>
        </li>`;
    }).join("");
    return `
  <a class="skip-link" href="#main">Naar de inhoud</a>
  <header class="site-header">
    <div class="container">
      <a href="index.html" class="brand">
        <img class="brand-mark" src="images/yvg-logo-wit-rand.png" alt="" width="38" height="48">
        <span>IJsvereniging Groningen<small>Plezier op ijs en asfalt</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle-bars" aria-hidden="true"></span> Menu
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Hoofdmenu">
        <ul class="nav-list">${items}<li class="nav-cta">${link(CTA)}</li></ul>
      </nav>
    </div>
  </header>`;
  }

  function footer() {
    return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h2>IJsvereniging Groningen</h2>
          <p>Plezier op ijs en asfalt, sinds 1862.</p>
          <p>Sportcentrum Kardinge<br>Kardingeplein 1, Groningen</p>
          <p><a href="contact.html">Neem contact op</a></p>
        </div>
        <div>
          <h2>Snel naar</h2>
          <ul class="footer-links">
            <li><a href="trainingstijden.html">Trainingstijden</a></li>
            <li><a href="kalender.html">Kalender</a></li>
            <li><a href="lid-worden.html">Lid worden</a></li>
            <li><a href="mijn-yvg.html">Mijn YVG</a></li>
            <li><a href="trainingsschema.html">Trainingsschema generator</a></li>
          </ul>
        </div>
        <div>
          <h2>Volg ons</h2>
          <ul class="footer-links">
            <li><a href="https://www.facebook.com/yvgron">Facebook</a></li>
            <li><a href="https://www.instagram.com/skaten_yvg">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} IJsvereniging Groningen</span>
        <span><a href="statuten.html">Statuten, reglementen en privacy</a></span>
      </div>
    </div>
  </footer>`;
  }

  function wireHeader() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    const subs = [...nav.querySelectorAll(".sub-toggle")];
    const closeSubs = (except) => subs.forEach((b) => {
      if (b === except) return;
      b.setAttribute("aria-expanded", "false");
      b.parentElement.classList.remove("open");
    });
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      if (!open) closeSubs();
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    subs.forEach((b) => b.addEventListener("click", () => {
      const open = b.getAttribute("aria-expanded") !== "true";
      closeSubs(b);
      b.setAttribute("aria-expanded", String(open));
      b.parentElement.classList.toggle("open", open);
    }));
    // Klik buiten het menu of Escape sluit alles
    document.addEventListener("click", (e) => { if (!e.target.closest(".site-header")) { closeSubs(); setOpen(false); } });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const openSub = subs.find((b) => b.getAttribute("aria-expanded") === "true");
      closeSubs();
      setOpen(false);
      if (openSub) openSub.focus();
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  }

  function fillPageNav() {
    const crumbs = document.querySelector("[data-crumbs]");
    if (crumbs) {
      const page = section && section.children.find((c) => isCurrent(c.href));
      const title = page ? page.label : document.querySelector("h1")?.textContent.trim() || "";
      crumbs.setAttribute("aria-label", "Kruimelpad");
      crumbs.innerHTML = `<a href="index.html">Home</a> / ${section ? esc(section.label) + " / " : ""}<span aria-current="page">${esc(title)}</span>`;
    }
    const sub = document.querySelector("[data-subnav]");
    if (sub) {
      if (!section) { sub.remove(); return; }
      sub.setAttribute("aria-label", section.label);
      sub.innerHTML = `<h2>${esc(section.label)}</h2><ul>${section.children.map((c) => `<li>${link(c)}</li>`).join("")}</ul>`;
    }
  }

  const script = document.currentScript;
  const part = script && script.dataset.part;
  if (part === "header") {
    script.insertAdjacentHTML("beforebegin", header());
    wireHeader();
  } else if (part === "footer") {
    script.insertAdjacentHTML("beforebegin", footer());
    fillPageNav();
  }
})();
