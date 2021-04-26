const menu = document.querySelector(".menu");
const elementsToShow = document.querySelectorAll(".target");
const videos = document.querySelectorAll(".video");

function toggleMenu() {
    menu.addEventListener("click", () => {
        elementsToShow.forEach(element => element.classList.toggle("change"));
    });
}

function playVideoWhenHover() {
    videos.forEach(video => {
        video.addEventListener("mouseover", () => video.play());
        video.addEventListener("mouseout", () => video.pause());
    });
}

toggleMenu();
playVideoWhenHover();
