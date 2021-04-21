const menu = document.querySelector(".menu");
const elementsToShow = document.querySelectorAll(".target");

function toggleMenu() {
    menu.addEventListener("click", () => {
        elementsToShow.forEach(element => element.classList.toggle("change"));
    });
}

toggleMenu();
