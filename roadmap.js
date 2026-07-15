(() => {
  const STORAGE_KEY = "reskilling-roadmap-checks-v1";

  const checks = Array.from(document.querySelectorAll('input[type="checkbox"][data-id]'));
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const progressPct = document.getElementById("progressPct");
  const scrollTop = document.getElementById("scrollTop");

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function updateProgress() {
    const total = checks.length;
    const done = checks.filter((c) => c.checked).length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${done} / ${total} complete`;
    if (progressPct) progressPct.textContent = `${pct}%`;

    document.querySelectorAll(".rm-section.topic").forEach((section) => {
      const sectionChecks = section.querySelectorAll('input[type="checkbox"][data-id]');
      const sectionDone = Array.from(sectionChecks).filter((c) => c.checked).length;
      const sectionPct = sectionChecks.length
        ? Math.round((sectionDone / sectionChecks.length) * 100)
        : 0;
      const badge = section.querySelector(".topic-progress");
      if (badge) badge.textContent = `${sectionPct}%`;
    });
  }

  const state = loadState();
  checks.forEach((input) => {
    const id = input.dataset.id;
    if (state[id]) input.checked = true;
    input.addEventListener("change", () => {
      const next = loadState();
      if (input.checked) next[id] = true;
      else delete next[id];
      saveState(next);
      updateProgress();
    });
  });

  document.querySelectorAll(".topic-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.closest(".topic")?.classList.toggle("open", !expanded);
    });
  });

  // Deep-link: open matching topic
  function openHashTopic() {
    const id = location.hash.slice(1);
    if (!id) return;
    const section = document.getElementById(id);
    if (!section || !section.classList.contains("topic")) return;
    const btn = section.querySelector(".topic-toggle");
    if (btn) {
      btn.setAttribute("aria-expanded", "true");
      section.classList.add("open");
    }
  }

  openHashTopic();
  window.addEventListener("hashchange", openHashTopic);

  window.addEventListener("scroll", () => {
    if (!scrollTop) return;
    scrollTop.classList.toggle("visible", window.scrollY > 400);
  });

  scrollTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  updateProgress();
})();
