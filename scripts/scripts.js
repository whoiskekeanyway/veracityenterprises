const bars = document.getElementById("bars");
const times = document.getElementById("times");
const nav = document.querySelector("nav ul");

bars.addEventListener("click", function () {
  nav.classList.remove("nav-closed");
  nav.style.height = "100%";
  bars.style.display = "none";
  times.style.display = "block";
});

times.addEventListener("click", function () {
  nav.classList.add("nav-closed");
  nav.style.height = "0%";
  bars.style.display = "block";
  times.style.display = "none";
});

// Bring in the toggle buttons for the FAQs

const toggles = document.querySelectorAll(".faq-toggle");

// Loop through the toggle buttons and add event listeners
// parentNode is the parent of the toggle button
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // add the active class to the parent of the toggle button
    toggle.parentNode.classList.toggle("active");
  });
});

// Function to dynamically change the date

const footerYear = document.querySelectorAll(".year");
footerYear.forEach((copyright) => {
  copyright.innerHTML = new Date().getFullYear();
});

function showOnHover(trigger, element) {
  trigger.onmouseover = function () {
    element.style.display = "block";
    trigger.style.display = "none";
  };
  element.onmouseout = function () {
    element.style.display = "none";
    trigger.style.display = "block";
  };
}

let trigger = document.getElementById("trigger");
let element = document.getElementById("element-to-show");
showOnHover(trigger, element);

const images = document.querySelectorAll("#gallery img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    lightbox.innerHTML = `
      <img src="${event.target.src}" alt="${event.target.alt}">
      <p>${event.target.alt}</p>
    `;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) return;
  lightbox.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    lightboxOverlay.style.display = "none";
  }
});

// Back to top button

//Get the button
var backToTopBtn = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const tls = gsap.timeline();
7;
installMediaQueryWatcher("(min-width: 600px)", function (matches) {
  if (matches) {
    tls.from(".landing-page-item", 1.8, {
      x: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 5,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  } else {
    tls.from(".landing-page-item", 1.8, {
      css: { display: "block !important" },
    });
  }
});

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  var mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) {
    return layoutChangedCallback(e.matches);
  });
  layoutChangedCallback(mql.matches);
}

// Select the element to animate
const ele = document.querySelector(".my-element");

// Create an animation
const animation = gsap.to(ele, { duration: 1, opacity: 1, y: 50 });

// Add an event listener to trigger the animation
ele.addEventListener("click", () => {
  animation.restart();
});

gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector(".text");

gsap.to(text, {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: text,
    start: "top 60%",
    end: "top 10%",
    toggleActions: "play none none reverse",
  },
});

const container = document.querySelector(".overlay-photo");
const overlay = document.querySelector(".overlay");


const containers = document.querySelector(".overlay-photos");
const overlays = document.querySelector(".overlays");

const containered = document.querySelector(".overlay-photos-ed");
const overlayed = document.querySelector(".overlayed");

container.addEventListener("mouseenter", () => {
  overlay.style.opacity = 1;
});

container.addEventListener("mouseleave", () => {
  overlay.style.opacity = 0;
});

containers.addEventListener("mouseenter", () => {
  overlays.style.opacity = 1;
});

containers.addEventListener("mouseleave", () => {
  overlays.style.opacity = 0;
});

containered.addEventListener("mouseenter", () => {
  overlayed.style.opacity = 1;
});

containered.addEventListener("mouseleave", () => {
  overlayed.style.opacity = 0;
});





// Set the text for each paragraph element
const paragraphTexts = [
  "Gandlisa hi ku kongoma",
  "Hatisa ka Precision",
  "Phrinta nge-Precision",
  "Druk met presisie",
  "Shicilela nge-Precision",
  "Phrintha ka Nepagalo",
];

// Select the paragraph element using its ID
const myParagraph = document.getElementById('my-paragraph');

// Create a timeline that loops infinitely
const timeline = new TimelineMax({ repeat: -1 });

// Add a separate animation for each paragraph text
paragraphTexts.forEach(text => {
  // Create a TweenMax animation to change the text
  const animation = TweenMax.to(myParagraph, 0.5, { textContent: text });

  // Add the animation to the timeline with a 3-second delay
  timeline.add(animation, `+=3`);
});

// Start the timeline
timeline.play();
