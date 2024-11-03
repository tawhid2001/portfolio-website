function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel .details-container");
    const itemsPerView = 3;
    const totalItems = items.length;
    const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

    currentIndex = (currentIndex + direction + maxIndex + 1) % (maxIndex + 1);
    
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * 100 / itemsPerView}%)`;
}
