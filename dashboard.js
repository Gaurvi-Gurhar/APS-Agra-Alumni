// Highlight active sidebar link
document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebarLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

// Sidebar toggle for mobile view
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.createElement("button");
toggleBtn.className = "sidebar-toggle";
toggleBtn.innerHTML = "☰ Menu";

if (sidebar) {
  sidebar.parentNode.insertBefore(toggleBtn, sidebar);

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
