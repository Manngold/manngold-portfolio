HOME = document.querySelector("#home");

SIDEBAR = document.querySelector(".sidebar");

slides = document.querySelectorAll(".my-work");
index = 0;

function showSidebar() {
    HOME.scrollIntoView();
    SIDEBAR.classList.add("sidebarShow");
}

function moveContent() {
    SIDEBAR.classList.remove("sidebarShow");
}

function prev() {
    slides[index].parentElement.classList.remove("show");
    showSlide(-1);
}

function next() {
    slides[index].parentElement.classList.remove("show");
    showSlide(1);
}

function showSlide(n) {
    index += n;
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].parentElement.classList.add("show");
}
