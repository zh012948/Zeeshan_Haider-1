const menu = document.getElementById('menu');
const navlinks = document.querySelectorAll('.navigation ul li a');
const navbar = document.getElementById('navbar');

// Track menu toggle state
let isMenuOpen = false;

menu.addEventListener('click', () => {
    if (!isMenuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});

function openMenu() {
    menu.src = "images/close.png"; // Change to close icon
    navlinks.forEach(link => {
        link.style.display = 'block'; // Show navigation links
    });
    navbar.style.height = "400px"; // Increase navbar height
    isMenuOpen = true;
}

function closeMenu() {
    menu.src = "images/menu.png"; // Change to menu icon
    navlinks.forEach(link => {
        link.style.display = 'none'; // Hide navigation links
    });
    navbar.style.height = "80px"; // Reset navbar height
    isMenuOpen = false;
}

// Add event listener to each nav link
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            closeMenu(); // Automatically close menu on link click
        }
    });
});


function git_1() {
    window.open("https://github.com/zh012948/image-converter", "_blank");
}

function live_1() {
    window.open("https://image-converter-tkkn.onrender.com/", "_blank");

}

function git_2() {

    window.open("https://github.com/zh012948/eccomerce", "_blank");
}


function live_2() {
    window.open("https://kasana-watches.vercel.app/", "_blank");

}

function git_3() {
    window.open("https://github.com/zh012948/figma-to-code-coffee-bean", "_blank");

}

function live_3() {
    window.open("https://bean-scene-xi.vercel.app/", "_blank");

}


function git_4() {
    window.open("https://github.com/zh012948/tailwindcss-detector-Chrome-Extension", "_blank");
}

function live_4() {
    window.open("https://github.com/zh012948/tailwindcss-detector-Chrome-Extension", "_blank");

}

function git_5() {
    window.open("https://github.com/zh012948/Brick-Breaker-Game/", "_blank");

}

function live_5() {

    window.open("https://zh012948.github.io/Brick-Breaker-Game/", "_blank");
}

function git_6() {
    window.open("https://github.com/zh012948/Glassmorphism-creator/", "_blank");

}

function live_6() {
    window.open("https://zh012948.github.io/Glassmorphism-creator/", "_blank");

}