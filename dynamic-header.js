const header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = this.window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add("minimized");
    } else {
        header.classList.remove("minimized");
    }

    lastScrollTop = scrollTop;
});