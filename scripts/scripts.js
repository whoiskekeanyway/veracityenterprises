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
