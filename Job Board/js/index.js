const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (bar) {
    bar.addEventListener("click", e => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", e => {
        nav.classList.remove("active");
    })
}



// Get the navbar element
const navbar = document.querySelector("#header");


// Get the offset position of the navbar
const sticky = navbar.offsetTop + 100;

// Add the sticky class to the navbar when you reach its scroll position
// Remove the sticky class when you leave the scroll position
function stickyNavbar() {
    //  console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
// When the user scrolls the page, execute stickyNavbar
window.onscroll = function () {
    stickyNavbar();
};






// Animations


ScrollReveal().reveal("section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});

ScrollReveal().reveal(".sign_in", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});

ScrollReveal().reveal("footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});

let fa_bookmark = document.querySelectorAll(".fa-bookmark");

fa_bookmark.forEach(element => {
    element.addEventListener("click", e => {
        if (element.style.color === "rgb(4, 173, 230)") {
            alert("Do You Want Remove Bookmark");
            element.style.color = ""; // Resets to the default color
        } else {
            alert("You Can Add A Bookmark");
            element.style.color = "#04ADE6"; // Sets to blue
        }
    });
});


// swiper-slide

var swiper = new Swiper(".mySwiper", {
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});


// check box


function selectOnlyThis(checkbox) {
    const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false; // Uncheck other checkboxes
    });
}



 // Toggle visibility of each filter section
 function toggleSection(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === 'none' || !content.style.display ? 'block' : 'none';
    element.classList.toggle('collapsed');
}

function updateSlider() {
const minSlider = document.getElementById('minSlider');
const maxSlider = document.getElementById('maxSlider');
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const rangeTrack = document.getElementById('rangeTrack');

// Ensure minSlider does not exceed maxSlider value and vice versa
if (parseInt(minSlider.value) > parseInt(maxSlider.value) - 1000) {
    minSlider.value = maxSlider.value - 1000;
}
if (parseInt(maxSlider.value) < parseInt(minSlider.value) + 1000) {
    maxSlider.value = parseInt(minSlider.value) + 1000;
}

// Update the input fields to show the current values
minInput.value = `$${parseInt(minSlider.value).toLocaleString()}`;
maxInput.value = `$${parseInt(maxSlider.value).toLocaleString()}`;

// Calculate the position and width for the blue range track
const minPercent = (minSlider.value / minSlider.max) * 100;
const maxPercent = (maxSlider.value / maxSlider.max) * 100;
rangeTrack.style.left = `${minPercent}%`;
rangeTrack.style.width = `${maxPercent - minPercent}%`;
}


// grid condition

const gridContainer = document.getElementById("gridContainer");
const threeBarButton = document.getElementById("three-bar");
const fourBarButton = document.getElementById("four-bar");

// Function to change layout to 3 cards per row
threeBarButton.addEventListener("click", () => {
    gridContainer.classList.add("three-cards");
    gridContainer.classList.remove("four-cards");
});

// Function to change layout to 4 cards per row
fourBarButton.addEventListener("click", () => {
    gridContainer.classList.add("four-cards");
    gridContainer.classList.remove("three-cards");
});