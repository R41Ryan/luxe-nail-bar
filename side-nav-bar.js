var sideNavBar = document.querySelector("#side-nav-bar");

document.querySelector("#side-nav-bar-btn").addEventListener("click", function() {
    sideNavBar.style.width = "10rem";
});

document.querySelector("#side-nav-bar .close-btn").addEventListener("click", function() {
    sideNavBar.style.width = "0";
});