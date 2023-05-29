"use strict";
// Carousel
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const circleOne = document.querySelector(".btn-circle-1");
const circleTwo = document.querySelector(".btn-circle-2");
const circleThree = document.querySelector(".btn-circle-3");

let curSlide = 0;
let maxSlide = slides.length - 1;

circleOne.addEventListener("click", function () {
  if (curSlide >= 4) {
    curSlide = 0;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

circleTwo.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide += 4;
  }
  if (curSlide > 4) {
    curSlide -= 4;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

circleThree.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide += 8;
  }
  if (curSlide === 4) {
    curSlide += 4;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Tabs
let tabOne = document.querySelector(".tab-1");
let tabTwo = document.querySelector(".tab-2");
let scheduleOne = document.querySelector(".schedule-box-1");
let scheduleTwo = document.querySelector(".schedule-box-2");

tabOne?.addEventListener("click", function () {
  scheduleTwo.style.display = "none";
  scheduleOne.style.display = "block";
});

tabTwo?.addEventListener("click", function () {
  scheduleOne.style.display = "none";
  scheduleTwo.style.display = "block";
});

// Accordion
let accordionOne = document.querySelector(".accordion-1");
let accordionTwo = document.querySelector(".accordion-2");
let accordionDescriptionOne = document.querySelector(
  ".accordion-description-1"
);
let accordionDescriptionTwo = document.querySelector(
  ".accordion-description-2"
);
console.log({ tabOne, accordionTwo });
accordionOne?.addEventListener("click", function () {
  if (accordionDescriptionOne.style.display === "none") {
    accordionDescriptionOne.style.display = "block";
  } else {
    accordionDescriptionOne.style.display = "none";
  }
});

accordionTwo?.addEventListener("click", function () {
  if (accordionDescriptionTwo.style.display === "block") {
    accordionDescriptionTwo.style.display = "none";
  } else {
    accordionDescriptionTwo.style.display = "block";
  }
});
