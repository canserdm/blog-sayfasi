document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slides");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const slideWidth = document.querySelector(".slides img").clientWidth;
  
    let position = 0;
  
    prevButton.addEventListener("click", function() {
      position += slideWidth;
      if (position > 0) {
        position = -(slideWidth * (slider.childElementCount - 1));
      }
      slider.style.transform = `translateX(${position}px)`;
    });
  
    nextButton.addEventListener("click", function() {
      position -= slideWidth;
      if (position < -(slideWidth * (slider.childElementCount - 1))) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
    });
  });