
// Flock Block Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

   // -----------------------------
   // Mobile Navigation Menu
   // -----------------------------

   const menuButton = document.getElementById("menu-button");
   const navMenu = document.getElementById("nav-menu");

   const dropdownButton = document.querySelector(
      ".dropdown-button"
   );

   const dropdownMenu = document.getElementById(
      "concerns-submenu"
   );


   // -----------------------------
   // Concerns Dropdown Functions
   // -----------------------------

   function closeConcernsDropdown() {

      if (dropdownButton && dropdownMenu) {

         dropdownMenu.hidden = true;

         dropdownButton.setAttribute(
            "aria-expanded",
            "false"
         );

      }

   }


   // -----------------------------
   // Mobile Navigation Controls
   // -----------------------------

   if (menuButton && navMenu) {

      menuButton.addEventListener("click", function () {

         const isOpen = navMenu.classList.toggle("show");

         menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
         );

         // Close Concerns dropdown when mobile menu closes

         if (!isOpen) {
            closeConcernsDropdown();
         }

      });

   }


   // -----------------------------
   // Concerns Dropdown Menu
   // -----------------------------

   if (dropdownButton && dropdownMenu) {

      dropdownButton.addEventListener("click", function () {

         const isOpen =
            dropdownButton.getAttribute("aria-expanded") === "true";

         dropdownMenu.hidden = isOpen;

         dropdownButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
         );

      });


      // Close dropdown when clicking outside

      document.addEventListener("click", function (event) {

         if (!event.target.closest(".dropdown")) {
            closeConcernsDropdown();
         }

      });


      // Close dropdown with Escape key

      document.addEventListener("keydown", function (event) {

         if (event.key === "Escape") {

            if (!dropdownMenu.hidden) {

               closeConcernsDropdown();
               dropdownButton.focus();

            }

         }

      });


      // Close dropdown when keyboard focus leaves it

      document.addEventListener("focusin", function (event) {

         if (!event.target.closest(".dropdown")) {
            closeConcernsDropdown();
         }

      });

   }


   // -----------------------------
   // Respect Reduced Motion Settings
   // -----------------------------

   const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
   );

   function scrollBehavior() {
      return reducedMotion.matches ? "auto" : "smooth";
   }


   // -----------------------------
   // Smooth Scrolling
   // -----------------------------

   const links = document.querySelectorAll('a[href^="#"]');

   links.forEach(function (link) {

      link.addEventListener("click", function (event) {

         const targetID = this.getAttribute("href");

         // Ignore empty anchor links

         if (!targetID || targetID === "#") {
            return;
         }

         const targetSection = document.getElementById(
            targetID.substring(1)
         );

         if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
               behavior: scrollBehavior()
            });

         }

      });

   });


   // -----------------------------
   // Back to Top Button
   // -----------------------------

   const topButton = document.getElementById("top-button");

   if (topButton) {

      topButton.style.display = "none";

      function updateTopButton() {

         if (window.scrollY > 300) {
            topButton.style.display = "block";
         } else {
            topButton.style.display = "none";
         }

      }

      window.addEventListener("scroll", updateTopButton);

      // Check when page first loads
      updateTopButton();

      topButton.addEventListener("click", function () {

         window.scrollTo({
            top: 0,
            behavior: scrollBehavior()
         });

      });

   }


   // -----------------------------
   // Automatically Update Year
   // -----------------------------

   const year = document.getElementById("current-year");

   if (year) {
      year.textContent = new Date().getFullYear();
   }

});
