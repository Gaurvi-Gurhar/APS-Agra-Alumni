// Load admin nav
fetch('ad-nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('ad-nav-placeholder').innerHTML = data;

    const navLinks = document.getElementById("navLinks");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Hamburger open/close
    if (menuBtn) menuBtn.addEventListener("click", () => { navLinks.style.right = "0"; });
    if (closeBtn) closeBtn.addEventListener("click", () => { navLinks.style.right = "-100%"; });

    // Dropdown toggle
    document.querySelectorAll(".dropdown-toggle").forEach(drop => {
      drop.addEventListener("click", e => {
        e.preventDefault();
        const submenu = drop.nextElementSibling;
        if (submenu) submenu.classList.toggle("active");
      });
    });
  })
  .catch(err => console.error("Nav load failed:", err));
