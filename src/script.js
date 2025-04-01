document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple modal for the Learn More button
document.getElementById("learnMore").addEventListener("click", function () {
  alert(
    "Thank you for your interest in fighting e-waste! In a full implementation, this would open more detailed information about e-waste recycling options in your area."
  );
});

