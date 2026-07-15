// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const menuToggle = document.getElementById("menuToggle");
  const navLinksContainer = document.getElementById("navLinks");

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        navLinksContainer.classList.remove("active");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar")) {
      navLinksContainer.classList.remove("active");
    }
  });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".timeline-item, .skill-category, .achievement-card, .project-card, .stat"
  );
  elementsToAnimate.forEach((el) => observer.observe(el));
});

// ============================================
// FORM HANDLING
// ============================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject =
      contactForm.querySelectorAll('input[type="text"]')[1]?.value || "";
    const message = contactForm.querySelector("textarea").value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification("Please enter a valid email address", "error");
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:anilachary.p@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

    // Show success message
    showNotification(
      "Message sent successfully! Please check your default email client.",
      "success"
    );

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();
  });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${
          type === "success"
            ? "#4CAF50"
            : type === "error"
            ? "#f44336"
            : "#2196F3"
        };
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInFromRight 0.3s ease;
        font-weight: 500;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideInFromLeft 0.3s ease reverse";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href").slice(1) === current) {
      link.style.color = "var(--primary-color)";
    }
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const createScrollToTopButton = () => {
  const button = document.createElement("button");
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
        transition: all 0.3s ease;
    `;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.display = "flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  button.addEventListener("mouseover", () => {
    button.style.transform = "translateY(-5px)";
    button.style.boxShadow = "0 6px 20px rgba(0, 102, 255, 0.4)";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "translateY(0)";
    button.style.boxShadow = "0 4px 15px rgba(0, 102, 255, 0.3)";
  });

  document.body.appendChild(button);
};

document.addEventListener("DOMContentLoaded", createScrollToTopButton);

// ============================================
// TYPING ANIMATION FOR HERO
// ============================================

const animateHeroText = () => {
  const titleElement = document.querySelector(".hero-title");
  if (!titleElement) return;

  const text = titleElement.textContent;
  titleElement.textContent = "";
  let index = 0;

  const typeNextCharacter = () => {
    if (index < text.length) {
      titleElement.textContent += text[index];
      index++;
      setTimeout(typeNextCharacter, 50);
    }
  };

  // Small delay before starting animation
  setTimeout(typeNextCharacter, 200);
};

window.addEventListener("load", animateHeroText);

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

const animateCounters = () => {
  const stats = document.querySelectorAll(".stat h3");
  const observerStats = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const target = entry.target;
          const finalValue = parseInt(target.textContent);
          let currentValue = 0;
          const increment = Math.ceil(finalValue / 50);

          const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
              target.textContent =
                finalValue + (target.textContent.includes("+") ? "+" : "");
              clearInterval(counter);
            } else {
              target.textContent = currentValue;
            }
          }, 30);

          target.dataset.animated = "true";
          observerStats.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observerStats.observe(stat));
};

document.addEventListener("DOMContentLoaded", animateCounters);

// ============================================
// SKILL CARD HOVER EFFECT
// ============================================

const addSkillCardEffects = () => {
  const skillCards = document.querySelectorAll(".skill-category");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
};

document.addEventListener("DOMContentLoaded", addSkillCardEffects);

// ============================================
// PARALLAX EFFECT FOR SECTIONS
// ============================================

const addParallaxEffect = () => {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");

    if (hero) {
      hero.style.backgroundPosition = `0 ${scrolled * 0.5}px`;
    }
  });
};

document.addEventListener("DOMContentLoaded", addParallaxEffect);

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener("keydown", (e) => {
  // Press '/' to focus on home
  if (e.key === "/" && !document.activeElement.matches("input, textarea")) {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }

  // Press 'c' to go to contact
  if (e.key === "c" && !document.activeElement.matches("input, textarea")) {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  }
});

// ============================================
// DARK MODE TOGGLE (Optional)
// ============================================

const initDarkModeToggle = () => {
  // Check if user prefers dark mode
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // You can add a toggle button later if needed
  if (prefersDarkMode) {
    // document.body.classList.add('dark-mode');
  }
};

document.addEventListener("DOMContentLoaded", initDarkModeToggle);

// ============================================
// PERFORMANCE MONITORING
// ============================================

const logPerformanceMetrics = () => {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
  }
};

window.addEventListener("load", logPerformanceMetrics);

// ============================================
// LAZY LOADING IMAGES (Future Enhancement)
// ============================================

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll("img[data-src]")
      .forEach((img) => imageObserver.observe(img));
  });
}

console.log("Portfolio website initialized successfully!");
