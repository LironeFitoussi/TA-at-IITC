console.log("mainjs");

const carousel = document.querySelector(".carousel")
const carouselItems = document.querySelectorAll(".image-item")
const indicators = document.querySelectorAll(".indicator")

let currentIndex = 0

const updateCarousel = () => {
    // console.log(index);
    carousel.style.transform = `translateX(${-currentIndex * 600}px)`
}

document.querySelector(".next-button").addEventListener("click", () => {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    // console.log(currentIndex);
    updateCarousel()
})

document.querySelector(".prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    // console.log(currentIndex);
    updateCarousel()
})