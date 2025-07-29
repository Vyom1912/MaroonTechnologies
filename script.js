// ====================== PROJECT DATA ============================
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
    link: "https://www.figma.com/proto/h0a5BJnj1e0ty6mmnwSMJO/e-commerce?node-id=0-8&t=1AypsIwDehLZDD1Z-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A8&show-proto-sidebar=1",
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

// ====================== DISPLAY PROJECT ============================
function displayProject() {
  const portfolioContainer = document.getElementById("portfolio");
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

  observeTimelineItems(); // trigger scroll animations

  // Filter functionality
  const filterButtons = document.querySelectorAll("#filter-btns li");
  const pItems = document.querySelectorAll(".p-item");

  // Show all initially
  pItems.forEach((item) => item.classList.add("show"));

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const target = this.getAttribute("data-target");

      pItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-id");

        if (target === "all" || itemCategory === target) {
          item.classList.remove("show");
          void item.offsetWidth; // Force reflow for animation
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProject();
  displayServices();
});

// ====================== SCROLL TO TOP ============================
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

// ====================== NAV TOGGLE (MOBILE) ============================
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

// ====================== NAV ACTIVE LINK ============================
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;
    var navLinks = document.querySelectorAll(".navbar .nav-list a");

    navLinks.forEach(function (link) {
      var sectionId = link.getAttribute("href").substring(1);
      var section = document.getElementById(sectionId);
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

// ====================== REVEAL ON SCROLL (Fade Up) ============================
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

// ====================== INTERSECTION OBSERVER ============================
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

// ====================== SERVICE SECTION (GENERATED) ============================
const serviceList = [
  {
    title: "Development",
    image: "image/html.png",
    desc: "Unlock the full potential of your digital vision with our top-tier web development services - where creativity meets expertise.",
    aos: "fade-up",
  },
  {
    title: "Web Design",
    image: "image/web-development.png",
    desc: "Elevate your online presence with our captivating web designs - where innovation and aesthetics converge.",
    aos: "fade-right",
  },
  {
    title: "UI/UX Design",
    image: "image/design.png",
    desc: "Crafting seamless user experiences that leave a lasting impression - our UI/UX designs redefine digital interactions.",
    aos: "fade-left",
  },
];

function displayServices() {
  const serviceBox = document.getElementById("servicebox");

  serviceList.forEach((service) => {
    const item = document.createElement("div");
    item.className = "item-box";
    item.setAttribute("data-aos", service.aos);
    item.setAttribute("data-aos-once", "true");

    item.innerHTML = `
      <div class="item-logo">
        <img src="${service.image}" alt="${service.title}" />
      </div>
      <div class="item-heading"><h2>${service.title}</h2></div>
      <div class="item-text">
        <p>${service.desc}</p>
      </div>
    `;

    serviceBox.appendChild(item);
  });

  observeTimelineItems(); // ensure animation works on services too
}
