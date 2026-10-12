
 // Flock Block Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

   // -----------------------------
   // Mobile Navigation Menu
   // -----------------------------

   const menuButton = document.getElementById("menu-button");
   const navMenu = document.getElementById("nav-menu");

   if (menuButton && navMenu) {

      menuButton.addEventListener("click", function () {

         navMenu.classList.toggle("show");

         const isOpen = navMenu.classList.contains("show");

         menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
         );

      });

   }


   // -----------------------------
   // Concerns Dropdown Menu
   // -----------------------------

   const dropdownButton = document.querySelector(
      ".dropdown-button"
   );

   const dropdownMenu = document.getElementById(
      "concerns-submenu"
   );

   if (dropdownButton && dropdownMenu) {

      function closeConcernsDropdown() {

         dropdownMenu.hidden = true;

         dropdownButton.setAttribute(
            "aria-expanded",
            "false"
         );

      }

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

         if (event.key === "Escape" &&
             dropdownButton.getAttribute("aria-expanded") === "true") {

            closeConcernsDropdown();
            dropdownButton.focus();

         }

      });

   }


   // -----------------------------
   // Smooth Scrolling
   // -----------------------------

   const links = document.querySelectorAll('a[href^="#"]');

   links.forEach(function (link) {

      link.addEventListener("click", function (event) {

         const targetID = this.getAttribute("href");

         if (targetID === "#") {
            return;
         }

         const targetSection = document.querySelector(targetID);

         if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
               behavior: "smooth"
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

      window.addEventListener("scroll", function () {

         if (window.scrollY > 300) {
            topButton.style.display = "block";
         } else {
            topButton.style.display = "none";
         }

      });

      topButton.addEventListener("click", function () {

         window.scrollTo({
            top: 0,
            behavior: "smooth"
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
