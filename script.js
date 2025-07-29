// ---------------------------- Project List Rendering ----------------------------
const projectList = [
  {
    title: "Rakhi Store",
    category: "development",
    image: "image/project/ecommerce.png",
    link: "https://rakhistore.themaroons.in/",
    aos: "fade-left",
  },
  {
    title: "Music Player",
    category: "development",
    image: "image/project/Music Player.png",
    link: "https://vyom1912.github.io/Music-Player/",
    aos: "fade-left",
  },
  {
    title: "Landing Page",
    category: "development",
    image: "image/project/landing page.png",
    link: "https://themaroons.in/",
    aos: "fade-right",
  },
  {
    title: "Template Design",
    category: "design",
    image: "image/project/template design.png",
    link: "image/project/template.png",
    aos: "fade-right",
  },
  {
    title: "Notes Maker",
    category: "development",
    image: "image/project/patelkeep.png",
    link: "https://vyom1912.github.io/Notes-Maker/",
    aos: "fade-left",
  },
  {
    title: "Website Design",
    category: "design",
    image: "image/project/website design.png",
    link: "https://www.figma.com/proto/h0a5BJnj1e0ty6mmnwSMJO/e-commerce?node-id=0-8",
    aos: "fade-left",
  },
  {
    title: "Social Media Post",
    category: "design",
    image: "image/project/social media.png",
    link: "image/project/instagram-post.png",
    aos: "fade-right",
  },
  {
    title: "Code Editor",
    category: "development",
    image: "image/project/Code Editor.png",
    link: "https://vyom1912.github.io/Code-Editor/",
    aos: "fade-right",
  },
  {
    title: "Logo Design",
    category: "design",
    image: "image/project/logo design.png",
    link: "image/project/logo.jpg",
    aos: "fade-left",
  },
  {
    title: "Tic Toc Toe : GAME",
    category: "development",
    image: "image/project/XO.png",
    link: "https://vyom1912.github.io/TIC-TAC-TOE-GAME/",
    aos: "fade-left",
  },
];

const portfolioContainer = document.getElementById("portfolio");

function displayProject() {
  portfolioContainer.innerHTML = "";
  projectList.forEach((project) => {
    const item = document.createElement("div");
    item.className = "p-item flex flex-c show";
    item.setAttribute("data-id", project.category);
    item.setAttribute("data-aos", project.aos);
    item.setAttribute("data-aos-once", "true");

    item.innerHTML = `
      <a href="${project.link}" target="_blank">
        <div class="p-img flex">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        <div class="p-name">${project.title}</div>
      </a>
    `;

    portfolioContainer.appendChild(item);
  });
}
document.addEventListener("DOMContentLoaded", displayProject);

// ---------------------------- Scroll To Top Button ----------------------------
let mybutton = document.getElementById("myBtn");

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

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ---------------------------- Mobile Nav Toggle ----------------------------
const mobile_nav_btn = document.querySelector(".mobile-nav-btn");
const navList = document.querySelector(".nav-list");

const toggleNavbar = () => {
  navList.classList.toggle("active-nav");
};

const closeNavbarOnClickOutside = (event) => {
  if (
    !navList.contains(event.target) &&
    !mobile_nav_btn.contains(event.target)
  ) {
    navList.classList.remove("active-nav");
  }
};

const deactivateNavbarOnResize = () => {
  navList.classList.remove("active-nav");
};

mobile_nav_btn.addEventListener("click", toggleNavbar);
document.addEventListener("click", closeNavbarOnClickOutside);
window.addEventListener("resize", deactivateNavbarOnResize);

window.addEventListener("load", () => {
  navList.classList.remove("active-nav");
});

// ---------------------------- Active Nav Link on Scroll ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    var navLinks = document.querySelectorAll(".navbar .nav-list a");

    navLinks.forEach(function (link) {
      var sectionId = link.getAttribute("href").substring(1);
      var section = document.getElementById(sectionId);
      if (!section) return;

      var sectionMiddle = section.offsetTop + section.offsetHeight / 2;

      if (
        sectionMiddle >= currentScroll &&
        section.offsetTop <= currentScroll + window.innerHeight / 2
      ) {
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

// ---------------------------- Scroll Animation Reveal ----------------------------
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// ---------------------------- Intersection Observer (Scroll Entry Animations) ----------------------------
function observeTimelineItems() {
  const timelineItems = document.querySelectorAll(".item-box, .p-item");
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
}
observeTimelineItems();

// ---------------------------- Project Filter Buttons ----------------------------
const filterButtons = document.querySelectorAll("#filter-btns li");
const pItems = document.querySelectorAll(".p-item");

function showAllItems() {
  pItems.forEach((item) => {
    item.classList.add("show");
  });
}

document.addEventListener("DOMContentLoaded", showAllItems);

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const target = this.getAttribute("data-target");

    pItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-id");
      if (target === "all" || itemCategory === target) {
        item.classList.remove("show");
        void item.offsetWidth; // force reflow
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });
});

// ---------------------------- Services Section (Dynamic) ----------------------------
const serviceData = [
  {
    title: "Development",
    image: "image/html.png",
    alt: "Development",
    aos: "fade-up",
    description:
      "Unlock the full potential of your digital vision with our top-tier web development services - where creativity meets expertise.",
  },
  {
    title: "Web Design",
    image: "image/web-development.png",
    alt: "Web Design",
    aos: "fade-right",
    description:
      "Elevate your online presence with our captivating web designs - where innovation and aesthetics converge.",
  },
  {
    title: "UI/UX Design",
    image: "image/design.png",
    alt: "UI/UX Design",
    aos: "fade-left",
    description:
      "Crafting seamless user experiences that leave a lasting impression - our UI/UX designs redefine digital interactions.",
  },
];

function displayServices() {
  const serviceBox = document.getElementById("servicebox");
  if (!serviceBox) return;

  serviceBox.innerHTML = "";

  serviceData.forEach((service) => {
    const box = document.createElement("div");
    box.className = "item-box";
    box.setAttribute("data-aos", service.aos);
    box.setAttribute("data-aos-once", "true");

    box.innerHTML = `
      <div class="item-logo">
        <img src="${service.image}" alt="${service.alt}" />
      </div>
      <div class="item-heading"><h2>${service.title}</h2></div>
      <div class="item-text">
        <p>${service.description}</p>
      </div>
    `;

    serviceBox.appendChild(box);
  });

  observeTimelineItems(); // Reattach observer for newly created items
}
document.addEventListener("DOMContentLoaded", displayServices);
