const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const themeBtn = document.getElementById('theme');
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark');
});