window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
function appointment() {
  document
    .getElementById("formappoint")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Redirect to the Stripe booking page
      window.location.href = "https://book.stripe.com/test_5kA8Ahe0yaCi760cMM";
    });
}

// Call the appointment function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  appointment();
});

function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu-overlay");
  mobileMenu.classList.toggle("hidden");
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
    toggleMobileMenu();
  });
});

document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    toggleMobileMenu();
  });

document
  .getElementById("mobile-menu-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      toggleMobileMenu();
    }
  });
