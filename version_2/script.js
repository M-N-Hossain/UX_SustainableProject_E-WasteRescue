// Simple JS for interactive elements
function initializeScripts() {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });

        // Initialize after components are loaded
        document.addEventListener("DOMContentLoaded", function () {
          // This will be called by components-loader.js after all components are loaded
        });
      }
    });
  });

  // Toggle dropdowns or mobile menu if needed
  const menuToggle = document.createElement("button");
  menuToggle.classList.add("md:hidden", "text-white");
  menuToggle.innerHTML = '<i class="fas fa-bars text-2xl"></i>';

  document.querySelector("header").appendChild(menuToggle);

  // Simple form validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const commitmentSelect = document.getElementById("commitment");

      let valid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add("border-red-500");
        valid = false;
      } else {
        nameInput.classList.remove("border-red-500");
      }

      if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
        emailInput.classList.add("border-red-500");
        valid = false;
      } else {
        emailInput.classList.remove("border-red-500");
      }

      if (commitmentSelect.selectedIndex === 0) {
        commitmentSelect.classList.add("border-red-500");
        valid = false;
      } else {
        commitmentSelect.classList.remove("border-red-500");
      }

      if (valid) {
        // Here you would normally submit the form
        alert("Thank you for your pledge! We'll be in touch soon.");
        form.reset();
      }
    });
  }
}
