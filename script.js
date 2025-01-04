// Get the button scroll top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -----------------------------------------------------------------------------------------------
// toggle button
// Select elements
const mobile_nav_btn = document.querySelector(".mobile-nav-btn");
const navList = document.querySelector(".nav-list");

// Function to toggle visibility of the nav list
const toggleNavbar = () => {
  navList.classList.toggle("active-nav");
};

// Function to close navbar when clicking outside of it
const closeNavbarOnClickOutside = (event) => {
  if (
    !navList.contains(event.target) &&
    !mobile_nav_btn.contains(event.target)
  ) {
    navList.classList.remove("active-nav");
  }
};

// Function to deactivate nav list on screen resize
const deactivateNavbarOnResize = () => {
  navList.classList.remove("active-nav");
};

// Event listeners
mobile_nav_btn.addEventListener("click", toggleNavbar);
document.addEventListener("click", closeNavbarOnClickOutside);
window.addEventListener("resize", deactivateNavbarOnResize);

// Ensure the toggle button is always visible, and the nav list is hidden by default
window.addEventListener("load", () => {
  navList.classList.remove("active-nav");
});

// -----------------------------------------------------------------------------------------------
// // underline on links
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;

    // Get all navlinks
    var navLinks = document.querySelectorAll(".navbar .nav-list a");

    // Loop through each navlink
    navLinks.forEach(function (link) {
      var sectionId = link.getAttribute("href").substring(1);
      var section = document.getElementById(sectionId);

      // Calculate the middle position of the section relative to the window
      var sectionMiddle = section.offsetTop + section.offsetHeight / 2;

      if (
        sectionMiddle >= currentScroll &&
        section.offsetTop <= currentScroll + window.innerHeight / 2
      ) {
        // Remove active class from all navlinks
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });
        // Add active class to the corresponding navlink
        link.classList.add("active");
      } else {
        // Remove active class from the corresponding navlink if it's not in view
        link.classList.remove("active");
      }
    });
  });
});
// -----------------------------------------------------------------------------------------------

// Timeline animation on scroll
const timelineItems = document.querySelectorAll(".item-box, .p-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
);

timelineItems.forEach((item) => observer.observe(item));

// -----------------------------------------------------------------------------------------------
// animation on scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
