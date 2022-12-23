let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("menu-text");
  let headSlides = document.getElementsByClassName("list-link");

  if (n > slides.length && n > headSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    headSlides[i].style.background = "none";
    headSlides[i].style.color = "#2a435d";
  }
  slides[slideIndex - 1].style.display = "block";
  headSlides[slideIndex - 1].style.background = "#cc3333";
  headSlides[slideIndex - 1].style.color = "#fff";
}
