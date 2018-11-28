let images = document.getElementsByClassName("images");

let slideNumber = 0;

let left = document.getElementsByClassName('fas')[0];
let right = document.getElementsByClassName('fas')[1];

let active = document.querySelector(".active");

let maxSlides = document.querySelector(".totalSlides");
maxSlides.textContent = images.length;



for (var i = 0; i < images.length; i++) {
  images[i].setAttribute("data-value", i);
}

right.addEventListener("click", function() {
  if (slideNumber === images.length-1) {
    images[slideNumber].classList.remove('active');
    slideNumber = 0;
    images[slideNumber].classList.add('active');
  } else {
    images[slideNumber].classList.remove('active');
    slideNumber++;
    images[slideNumber].classList.add('active');
  }
})

left.addEventListener("click", function() {
  if (slideNumber === 0) {
    images[slideNumber].classList.remove('active');
    slideNumber = images.length-1;
    images[slideNumber].classList.add('active');
  } else {
    images[slideNumber].classList.remove('active');
    slideNumber--;
    images[slideNumber].classList.add('active');
  }
})
