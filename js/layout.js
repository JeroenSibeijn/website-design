/* ==========================================================================
   Kop (foto + menu) en voet (nieuws, "Word lid", footer) voor alle pagina's.
   Het menu en de laatste nieuwsberichten staan op één plek (MENU en NEWS hieronder).
   Pas ze hier aan en elke pagina volgt.

   Gebruik in een pagina:
     <script src="js/layout.js" data-part="header"></script>   (bovenaan in <body>)
     <script src="js/layout.js" data-part="footer"></script>   (onderaan in <body>)
   Optioneel op subpagina's:
     <nav class="crumbs" data-crumbs></nav>   -> kruimelpad
     <nav class="subnav" data-subnav></nav>   -> menu van de huidige sectie
   Zet <body data-no-news> om het nieuwsblok onderaan weg te laten.
   ========================================================================== */
(function () {
  const MENU = [
    { label: "Home", href: "index.html" },
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
      { label: "Zomertraining overzicht", href: "zomertraining.html" },
      { label: "Inline-skaten", href: "inline-skaten.html" },
      { label: "Fietstraining", href: "fietstraining.html" },
      { label: "Droogtraining", href: "droogtraining.html" },
      { label: "Voorkom blessures", href: "voorkom-blessures.html" }
    ]},
    { label: "Vereniging", children: [
      { label: "Bestuur en commissies", href: "bestuur.html" },
      { label: "Clubkleding", href: "clubkleding.html" },
      { label: "Historie IJsvereniging Groningen", href: "historie.html" },
      { label: "Vertrouwenscontactpersoon", href: "vertrouwenscontactpersoon.html" },
      { label: "Statuten, reglementen en privacy", href: "statuten.html" }
    ]},
    { label: "Kalender", href: "kalender.html" },
    { label: "Lidmaatschap", children: [
      { label: "Mijn YVG", href: "mijn-yvg.html" },
      { label: "Lid worden", href: "lid-worden.html" },
      { label: "Lidmaatschap en contributie", href: "contributie.html" },
      { label: "Veelgestelde vragen", href: "veelgestelde-vragen.html" }
    ]},
    { label: "Contact", href: "contact.html" }
  ];
  const CTA = { label: "Word lid", href: "lid-worden.html" };
  // Inloggen gaat naar Mijn YVG in de ledenadministratie (AllUnited), net als op yvg.nl.
  // Uitleg over de eerste keer inloggen staat op mijn-yvg.html.
  const LOGIN = { label: "Inloggen", href: "https://pr01.allunited.nl/index.php?section=YVG", title: "Inloggen op Mijn YVG" };

  // De drie nieuwste berichten (blok onderaan elke pagina). Houd gelijk met nieuws.html.
  const NEWS = [
    { date: "24/10/2026", title: "Workshop slijpen 8 november 2026", url: "https://www.yvg.nl/2026/10/workshop-slijpen-8-november-2026/", img: "https://www.yvg.nl/wp-content/uploads/2026/10/slijpworkshop-382x255.jpg" },
    { date: "24/10/2026", title: "YVG opent schaatsseizoen met vierde plaats bij NK Clubs in Thialf", url: "https://www.yvg.nl/2026/10/yvg-opent-schaatsseizoen-met-vierde-plaats-bij-nk-clubs-in-thialf/", img: "https://www.yvg.nl/wp-content/uploads/2026/10/IMG_0918-1-382x255.jpg" },
    { date: "31/08/2026", title: "Geen skeelertraining op 31 augustus vanwege regen", url: "https://www.yvg.nl/2026/08/geen-skeeleren-op-20-en-27-april/", img: "https://www.yvg.nl/wp-content/uploads/2024/07/Clubkampioenschap_skeeleren3-382x255.jpg" }
  ];

  const ICON = {
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
    thumb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10v11H3V10h4zM7 10l4-8a3 3 0 0 1 3 3v4h5.5a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.1 21H7"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6L14 1.5c-4 0-4.9 3-4.9 4.9v2.1H6.8v4h2.3V22.5H14V12.5h3.3l.4-4H14z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>'
  };

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isCurrent = (href) => href.toLowerCase() === current;
  const section = MENU.find((m) => m.children && m.children.some((c) => isCurrent(c.href)));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const link = (item, inner) => `<a href="${item.href}"${isCurrent(item.href) ? ' aria-current="page"' : ""}>${inner || esc(item.label)}</a>`;

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
  <div class="site-photo" aria-hidden="true"></div>
  <header class="site-header">
    <div class="container">
      <a href="index.html" class="brand" aria-label="IJsvereniging Groningen, naar de homepage">
        <img class="brand-mark" src="images/yvg-logo-wit-rand.png" alt="" width="48" height="60">
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle-bars" aria-hidden="true"></span> Menu
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Hoofdmenu">
        <ul class="nav-list">${items}<li class="nav-login"><a href="${LOGIN.href}" title="${esc(LOGIN.title)}">${ICON.user}<span class="nav-label">${esc(LOGIN.label)}</span></a></li><li class="nav-cta">${link(CTA, ICON.thumb + esc(CTA.label))}</li></ul>
      </nav>
    </div>
  </header>`;
  }

  function newsBand() {
    return `
  <section class="news-band" aria-labelledby="news-band-title">
    <div class="container">
      <h2 id="news-band-title">Nieuws</h2>
      <ul class="news-list">${NEWS.map((n) => `
        <li class="news-item">
          <img src="${n.img}" alt="" width="382" height="255" loading="lazy">
          <div class="news-body">
            <span class="news-meta">${esc(n.date)}</span>
            <h3><a href="${n.url}">${esc(n.title)}</a></h3>
          </div>
        </li>`).join("")}
      </ul>
    </div>
  </section>`;
  }

  function footer() {
    const year = new Date().getFullYear();
    return `
  ${document.body.hasAttribute("data-no-news") ? "" : newsBand()}
  <section class="join-band">
    <div class="container">
      ${ICON.thumb}
      <h2>Word lid van YVG</h2>
      <a href="lid-worden.html" class="button">Lid worden</a>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h2>Sinds 1862</h2>
          <p>De IJsvereniging Groningen, van oorsprong een hardrijvereniging, is een van de oudste schaatsverenigingen van Nederland. YVG werd opgericht in 1862 en richtte in 1882 met negen andere verenigingen de (Koninklijke) Nederlandsche Schaatsenrijders Bond op. Het predicaat Koninklijke kwam pas later.</p>
          <p>Na bijna een eeuw in het Stadspark verhuisde de kunstijsbaan naar de andere kant van de stad, naar Kardinge. Sinds oktober 1993 heeft de club daar onderdak. <a href="historie.html">Lees meer over onze historie</a></p>
        </div>
        <div>
          <h2>Snel naar</h2>
          <ul class="footer-links">
            <li><a href="trainingstijden.html">Trainingstijden</a></li>
            <li><a href="kalender.html">Kalender</a></li>
            <li><a href="veelgestelde-vragen.html">Veelgestelde vragen</a></li>
            <li><a href="mijn-yvg.html">Mijn YVG</a></li>
            <li><a href="trainingsschema.html">Trainingsschema generator</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2>KNSB Groningen</h2>
          <p>Het Gewest Groningen is een van de acht gewesten van de Koninklijke Nederlandsche Schaatsenrijders Bond (KNSB). Het gewest bestaat uit ijsverenigingen, hardrijdersverenigingen, toerorganisaties, een shorttrackvereniging en een kunstrijvereniging.</p>
          <p><a href="https://www.knsbgroningen.nl/">→ Naar KNSB Groningen</a></p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <img src="images/yvg-logo-wit-rand.png" alt="" width="36" height="45">
        <p>IJsvereniging Groningen © ${year}. Alle rechten voorbehouden. <a href="statuten.html">Privacyverklaring</a></p>
        <ul class="socials">
          <li><a href="https://www.facebook.com/yvgron/" aria-label="YVG op Facebook">${ICON.facebook}</a></li>
          <li><a href="https://www.instagram.com/skaten_yvg/" aria-label="YVG op Instagram">${ICON.instagram}</a></li>
        </ul>
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
