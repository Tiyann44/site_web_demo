// Navigation mobile
;(() => {
  // Toggle menu mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      this.setAttribute("aria-expanded", !isExpanded)
      mobileMenu.classList.toggle("active")

      // Empêcher le scroll du body quand le menu est ouvert
      if (!isExpanded) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    // Fermer le menu mobile quand on clique sur un lien
    const navLinks = mobileMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        mobileMenuButton.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      })
    })

    // Fermer le menu mobile quand on redimensionne la fenêtre
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove("active")
        mobileMenuButton.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      }
    })

    // Fermer le menu mobile avec la touche Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active")
        mobileMenuButton.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
        mobileMenuButton.focus()
      }
    })
  }

  // Gestion des erreurs d'images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("error", function () {
      const container = this.closest(".artist-image-container, .ensemble-image-container, .partner-logo-container")
      if (container) {
        container.classList.add("image-error")
        this.style.display = "none"

        // Créer un placeholder textuel si nécessaire
        if (!container.querySelector(".image-placeholder")) {
          const placeholder = document.createElement("span")
          placeholder.className = "image-placeholder"
          placeholder.textContent = "Image non disponible"
          placeholder.style.color = "var(--muted-foreground)"
          placeholder.style.fontSize = "0.875rem"
          container.appendChild(placeholder)
        }
      }
    })
  })

  // Lazy loading des images avec IntersectionObserver
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute("data-src")
          }
          observer.unobserve(img)
        }
      })
    })

    const lazyImages = document.querySelectorAll("img[data-src]")
    lazyImages.forEach((img) => {
      imageObserver.observe(img)
    })
  }

  // Smooth scroll pour les ancres internes
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && href !== "#main-content") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Ajouter une classe au header lors du scroll
  let lastScroll = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    lastScroll = currentScroll
  })
})()
