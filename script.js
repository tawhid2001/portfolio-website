function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleExtracurriculars() {
    const extracurriculars = document.getElementById('extracurriculars');
    const btn = document.querySelector('.extra-btn');
    if (extracurriculars.style.display === 'none') {
        extracurriculars.style.display = 'block';
        btn.innerText = 'Hide Extra-Curriculars';
    } else {
        extracurriculars.style.display = 'none';
        btn.innerText = 'Show Extra-Curriculars';
    }
}
