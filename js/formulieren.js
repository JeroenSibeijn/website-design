/* ==========================================================================
   Formulieren op de contactpagina
   - Controleert de velden met duidelijke Nederlandse meldingen
   - Verstuurt het formulier naar verstuur.php zonder de pagina te herladen
   - Opent het juiste formulier via een link, bijvoorbeeld contact.html#proef-jeugd
   ========================================================================== */
(function () {
  const forms = [...document.querySelectorAll("form.yvg-form")];
  const loadedAt = Date.now();

  const MSG = {
    required: "Vul dit veld in.",
    choice: "Maak een keuze.",
    email: "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.",
    tel: "Vul een geldig telefoonnummer in, bijvoorbeeld 06 12345678.",
    postcode: "Vul een geldige postcode in, bijvoorbeeld 9736 AB.",
    date: "Vul een geldige datum in.",
    tooLong: (n) => `Dit is te lang (maximaal ${n} tekens).`,
    noPhp: "Versturen werkt alleen op de echte website. Deze versie draait zonder PHP, dus het bericht is niet verstuurd.",
    network: "Er ging iets mis met de verbinding. Controleer je internet en probeer het opnieuw.",
    failed: "Versturen is niet gelukt. Probeer het later opnieuw."
  };

  // Een geboortedatum kan niet in de toekomst liggen
  const today = new Date();
  const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  document.querySelectorAll('form.yvg-form input[type="date"]').forEach((el) => { el.max = iso; });

  /* ---------- Foutmeldingen ---------- */

  // Het blok rond een veld: .field (gewoon veld) of fieldset (keuzerondjes)
  const wrapperOf = (el) => el.closest(".field");

  function messageFor(el) {
    const v = el.validity;
    if (v.valueMissing) return el.type === "radio" ? MSG.choice : MSG.required;
    if (v.typeMismatch && el.type === "email") return MSG.email;
    if (v.badInput || v.rangeOverflow || v.rangeUnderflow) return MSG.date;
    if (v.patternMismatch) return el.dataset.fout || (el.type === "tel" ? MSG.tel : MSG.required);
    if (v.tooLong) return MSG.tooLong(el.maxLength);
    return el.validationMessage;
  }

  function showError(wrapper, message) {
    if (!wrapper) return;
    let err = wrapper.querySelector(".field-error");
    if (!err) {
      err = document.createElement("p");
      err.className = "field-error";
      err.id = `${wrapper.dataset.field || "veld"}-${Math.random().toString(36).slice(2, 7)}-fout`;
      wrapper.appendChild(err);
    }
    err.textContent = message;
    const targets = wrapper.matches("fieldset") ? [wrapper] : [...wrapper.querySelectorAll("input, textarea, select")];
    targets.forEach((t) => {
      t.setAttribute("aria-invalid", "true");
      const ids = (t.getAttribute("aria-describedby") || "").split(" ").filter(Boolean);
      if (!ids.includes(err.id)) t.setAttribute("aria-describedby", [...ids, err.id].join(" "));
    });
  }

  function clearError(wrapper) {
    if (!wrapper) return;
    const err = wrapper.querySelector(".field-error");
    wrapper.querySelectorAll("[aria-invalid]").forEach((t) => t.removeAttribute("aria-invalid"));
    if (wrapper.matches("fieldset")) wrapper.removeAttribute("aria-invalid");
    if (err) {
      wrapper.querySelectorAll("[aria-describedby]").forEach((t) => {
        const ids = t.getAttribute("aria-describedby").split(" ").filter((id) => id !== err.id);
        ids.length ? t.setAttribute("aria-describedby", ids.join(" ")) : t.removeAttribute("aria-describedby");
      });
      if (wrapper.getAttribute("aria-describedby")) {
        const ids = wrapper.getAttribute("aria-describedby").split(" ").filter((id) => id !== err.id);
        ids.length ? wrapper.setAttribute("aria-describedby", ids.join(" ")) : wrapper.removeAttribute("aria-describedby");
      }
      err.remove();
    }
  }

  // Controleer het hele formulier; geeft het eerste foute veld terug (of null)
  function validate(form) {
    let first = null;
    const seen = new Set();
    form.querySelectorAll("input, textarea, select").forEach((el) => {
      if (el.type === "hidden" || el.closest(".hp")) return;
      const wrapper = wrapperOf(el);
      if (!wrapper || seen.has(wrapper)) return;
      // Spaties alleen tellen niet als ingevuld
      if (el.type !== "radio" && el.value.trim() === "" && el.value !== "") el.value = "";
      const group = el.type === "radio" ? [...wrapper.querySelectorAll('input[type="radio"]')] : [el];
      const bad = group.find((g) => !g.checkValidity());
      if (bad) {
        seen.add(wrapper);
        showError(wrapper, messageFor(bad));
        if (!first) first = group[0];
      } else if (el.type !== "radio" || group.indexOf(el) === group.length - 1) {
        clearError(wrapper);
      }
    });
    return first;
  }

  /* ---------- Versturen ---------- */

  function setStatus(form, message) {
    const status = form.querySelector(".form-status");
    if (status) status.textContent = message;
  }

  function showSuccess(form, message) {
    const box = document.createElement("div");
    box.className = "form-success";
    box.tabIndex = -1;
    box.setAttribute("role", "status");
    box.innerHTML = '<h3>Verstuurd</h3><p></p><button type="button" class="link-button">Nog een bericht versturen</button>';
    box.querySelector("p").textContent = message;
    box.querySelector("button").addEventListener("click", () => {
      box.remove();
      form.hidden = false;
      const firstField = form.querySelector("input:not([type=hidden]):not([tabindex='-1']), textarea");
      if (firstField) firstField.focus();
    });
    form.reset();
    form.hidden = true;
    form.after(box);
    box.focus();
  }

  forms.forEach((form) => {
    form.setAttribute("novalidate", "");

    // Melding weghalen zodra het veld weer klopt
    form.addEventListener("input", (e) => {
      const wrapper = wrapperOf(e.target);
      if (wrapper && wrapper.querySelector(".field-error") && e.target.checkValidity()) clearError(wrapper);
    });
    form.addEventListener("change", (e) => {
      const wrapper = wrapperOf(e.target);
      if (wrapper && e.target.type === "radio") clearError(wrapper);
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      setStatus(form, "");
      const firstBad = validate(form);
      if (firstBad) {
        firstBad.focus();
        return;
      }

      const button = form.querySelector('[type="submit"]');
      const label = button.textContent;
      button.disabled = true;
      button.textContent = "Bezig met versturen…";
      form.elements.invultijd.value = String(Math.round((Date.now() - loadedAt) / 1000));

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        const type = res.headers.get("content-type") || "";
        if (!type.includes("application/json")) {
          setStatus(form, res.status === 404 || res.status === 405 || res.ok ? MSG.noPhp : MSG.failed);
          return;
        }
        const data = await res.json();
        if (data.ok) {
          showSuccess(form, data.message);
          return;
        }
        let first = null;
        Object.entries(data.errors || {}).forEach(([name, msg]) => {
          const el = form.querySelector(`[name="${CSS.escape(name)}"]`);
          if (!el) return;
          showError(wrapperOf(el), msg.replace(/^[^:]+:\s*/, "").replace(/^./, (c) => c.toUpperCase()));
          if (!first) first = el;
        });
        setStatus(form, data.message || MSG.failed);
        if (first) first.focus();
      } catch (err) {
        setStatus(form, MSG.network);
      } finally {
        button.disabled = false;
        button.textContent = label;
      }
    });
  });

  /* ---------- Formulier openen via een link (#proef-jeugd) ---------- */

  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el || el.tagName !== "DETAILS") return;
    el.open = true;
    el.scrollIntoView({ block: "start" });
    const summary = el.querySelector("summary");
    if (summary) summary.focus({ preventScroll: true });
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
