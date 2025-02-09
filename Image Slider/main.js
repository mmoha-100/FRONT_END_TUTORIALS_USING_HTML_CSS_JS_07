const sliderImgs = Array.from(
    document.querySelectorAll(".slider-container img")
);
const slidesNum = sliderImgs.length;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slideNum = document.getElementById("slide-number");
let currentSlide = 0;
const paginationElement = document.createElement("ul");
const indicators = document.getElementById("indicators");

paginationElement.id = "pagination-ul";
const lis = paginationElement.children;

for (let i = 0; i < slidesNum; i++) {
    let li = document.createElement("li");
    li.className = "";
    li.innerHTML = `${i + 1}`;
    paginationElement.append(li);
}

indicators.append(paginationElement);

// Default Image:
sliderImgs[currentSlide].classList.add("active");
prevBtn.classList.add("disabled");
lis[currentSlide].classList.add("active");
slideNum.innerHTML = `Image-${currentSlide + 1}`;

paginationElement.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        let index = parseInt(event.target.innerHTML) - 1;
        if (index >= 0 && index < slidesNum) {
            changeSlide(index);
        }
    }
});

prevBtn.addEventListener("click", () => {
    if (currentSlide != 0) {
        changeSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentSlide != slidesNum - 1) {
        changeSlide(currentSlide + 1);
    }
});

function changeSlide(newIndex) {
    sliderImgs[currentSlide].classList.remove("active");
    lis[currentSlide].classList.remove("active");
    currentSlide = newIndex;
    slideNum.innerHTML = `Image-${currentSlide + 1}`;
    sliderImgs[currentSlide].classList.add("active");
    lis[currentSlide].classList.add("active");
    // Toggle Technique => Removed If It Is More Than 0, Added If It Is Equal To Zero
    prevBtn.classList.toggle("disabled", currentSlide == 0);
    nextBtn.classList.toggle("disabled", currentSlide == slidesNum - 1);
}
