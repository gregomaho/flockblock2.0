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

         // Accessibility
         const isOpen = navMenu.classList.contains("show");
         menuButton.setAttribute("aria-expanded", isOpen);
      });
   }


   // -----------------------------
   // Smooth Scrolling
   // -----------------------------
   const links = document.querySelectorAll('a[href^="#"]');

   links.forEach(function (link) {
      link.addEventListener("click", function (event) {

         const targetID = this.getAttribute("href");

         // Ignore links that only contain #
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

      // Hide button when page first loads
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