HOME = document.querySelector("#home");
ABOUT_ME = document.querySelector("#info");
PROJECT = document.querySelector("#project");

slides = document.querySelectorAll(".my-work");
index = 0;

function moveContent(dest) {
    dest.scrollIntoView();
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
