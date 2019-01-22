let images = document.getElementsByClassName("images");

let slideNumber = 0;

let left = document.getElementsByClassName('fas')[0];
let right = document.getElementsByClassName('fas')[1];

let active = document.querySelector(".active");

let maxSlides = document.querySelector(".totalSlides");
maxSlides.textContent = images.length;

let count = document.querySelector(".count");

for (var i = 0; i < images.length; i++) {
  images[i].setAttribute("data-value", i);
}

right.addEventListener("click", function() {
  clearInterval(sliderLoop);
  if (slideNumber === images.length-1) {
    images[slideNumber].classList.remove('active');
    slideNumber = 0;
    images[slideNumber].classList.add('active');
  } else {
    images[slideNumber].classList.remove('active');
    slideNumber++;
    images[slideNumber].classList.add('active');
  }
  count.textContent = slideNumber+1;
})

left.addEventListener("click", function() {
  clearInterval(sliderLoop);
  if (slideNumber === 0) {
    images[slideNumber].classList.remove('active');
    slideNumber = images.length-1;
    images[slideNumber].classList.add('active');
  } else {
    images[slideNumber].classList.remove('active');
    slideNumber--;
    images[slideNumber].classList.add('active');
  }
  count.textContent = slideNumber+1;
})

 var sliderLoop = setInterval(function() {
  if (slideNumber === images.length-1) {
    images[slideNumber].classList.remove('active');
    slideNumber = 0;
    images[slideNumber].classList.add('active');
  } else {
    images[slideNumber].classList.remove('active');
    slideNumber++;
    images[slideNumber].classList.add('active');
  }
  count.textContent = slideNumber+1;
}, 3000)
