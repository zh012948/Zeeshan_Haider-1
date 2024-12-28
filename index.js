const menu = document.getElementById('menu');
const navlinks = document.querySelectorAll('.navigation ul li a');
const navbar = document.getElementById('navbar');

// Track menu toggle state
let isMenuOpen = false;


menu.addEventListener('click', () => {
    if (!isMenuOpen) {
        // Open menu
        menu.src = "close.png"; // Change to close icon
        navlinks.forEach(link => {
            link.style.display = 'block'; // Show navigation links
        });
        navbar.style.height = "400px"; // Increase navbar height
        isMenuOpen = true; // Update state
    } else {
        // Close menu
        menu.src = "menu.png"; // Change to menu icon
        navlinks.forEach(link => {
            link.style.display = 'none'; // Hide navigation links
        });
        navbar.style.height = "80px"; // Reset navbar height
        isMenuOpen = false; // Update state
    }
});



function git_1() {
    window.open("https://github.com/zh012948/Live-Code-Editor", "_blank");
}

function live_1() {
    window.open("https://zh012948.github.io/Live-Code-Editor/", "_blank");

}

function git_2() {

    window.open("https://github.com/zh012948/Budget-App", "_blank");
}


function live_2() {
    window.open("https://zh012948.github.io/Budget-App/", "_blank");

}

function git_3() {
    window.open("https://github.com/zh012948/tailwindcss-detector-Chrome-Extension", "_blank");

}

function live_3() {
    window.open("https://github.com/zh012948/tailwindcss-detector-Chrome-Extension", "_blank");

}


function git_4() {
    window.open("https://github.com/zh012948/Github-Api", "_blank");
}

function live_4() {
    window.open("https://zh012948.github.io/Github-Api/", "_blank");

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