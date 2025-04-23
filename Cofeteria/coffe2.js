const images = [
  {
    url: "../first/imgs/slide1.jpg",
    title: "Coffe Hous",
    description: "Wellcom",
    buttonText:
      " Li lingues differe solmen in li grammatica, li pronunciation Lilingues differe solmen in li grammatica lipronunciation",
  },
  {
    url: "../first/imgs/slide2.jpg",
    title: "Coffe house",
    description: "Wellcom",
    buttonText:
      " Li lingues differe solmen in li grammatica, li pronunciation Lilingues differe solmen in li grammatica lipronunciation",
  },
  {
    url: "../first/imgs/slide3.jpg",
    title: "Coffe House",
    description: "Wellcom",
    buttonText:
      " Li lingues differe solmen in li grammatica, li pronunciation Lilingues differe solmen in li grammatica lipronunciation",
  },
];

let current = 0;
const slider = document.getElementById("slider");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");
const button = document.getElementById("slide-button");
const btnR = document.getElementById("btnR");
const btnL = document.getElementById("btnL");

function updateSlide() {
  const slide = images[current];
  slider.style.backgroundImage = `url('${slide.url}')`;
  title.textContent = slide.title;
  description.textContent = slide.description;
  button.textContent = slide.buttonText;
}
updateSlide();
// btnR.addEventListener("click", () => {
// console.log("Next slide");
// current = (current + 1) % images.length;
// updateSlide();
// });
//
// btnL.addEventListener("click", () => {
// console.log("Previous slide");
// current = (current - 1 + images.length) % images.length;
// updateSlide();
// });

document.addEventListener("DOMContentLoaded", function () {
  const btnR = document.getElementById("btnR");
  const btnL = document.getElementById("btnL");

  if (btnR && btnL) {
    btnR.addEventListener("click", () => {
      console.log("Next slide");
      current = (current + 1) % images.length;
      updateSlide();
    });

    btnL.addEventListener("click", () => {
      console.log("Previous slide");
      current = (current - 1 + images.length) % images.length;
      updateSlide();
    });
  } else {
    console.log("Buttons not found");
  }
});
const priceBoxes = document.querySelectorAll(".price-box");
let currentIndex = 0;

setInterval(() => {
  priceBoxes.forEach((box) => {
    box.classList.add("hidden", "opacity-0", "translate-x-24");
    box.classList.remove("flex", "opacity-100", "translate-x-0");
  });

  for (
    let i = currentIndex;
    i < currentIndex + 2 && i < priceBoxes.length;
    i++
  ) {
    const box = priceBoxes[i];

    box.classList.remove("hidden");
    box.classList.add("flex");

    setTimeout(() => {
      box.classList.remove("opacity-0", "translate-x-24");
      box.classList.add("opacity-100", "translate-x-0");
    }, 50);
  }

  currentIndex += 2;

  if (currentIndex >= priceBoxes.length) {
    currentIndex = 0;
  }
}, 3000);

setInterval(() => {
  current = (current + 1) % images.length;
  updateSlide();
}, 4000);
// counters

  // تنظیمات counter1:
  const start = 20;
  const end = 35;
  const duration = 3000; // 5 ثانیه
  const counterElement = document.getElementById("counter");
  const range = end - start;
  const steps = 100;
  const stepTime = duration / steps;
  let current1 = start;
  const step = range / steps;

  const timer = setInterval(() => {
    current1 += step;
    if (current1 >= end) {
      current1 = end;
      clearInterval(timer);
    }
    counterElement.textContent = Math.round(current1);
  }, stepTime);

  // تنظیمات counter2:
  const starts = 26;
  const ends = 49;
  const durations = 2000;
  const counterElement2 = document.getElementById("counter2");
  const ranges = ends - starts;
  const steps2 = 100;
  const stepTime2 = durations / steps2;
  let current2 = starts;
  const step2 = ranges / steps2;

  const timer2 = setInterval(() => {
    current2 += step2;
    if (current2 >= ends) {
      current2 = ends;
      clearInterval(timer2);
    }
    counterElement2.textContent = Math.round(current2);
  }, stepTime2);
// counter3
const starte = 40;
const ende = 50;
const duratione = 2000;
const counterElement3 = document.getElementById("counter3");
const rangee = ende - starte;
const steps3 = 100;
const stepTime3 = duratione / steps3;
let current3 = starts;
const step3 = rangee / steps3;
const timer3 = setInterval(() => {
  current3 += step3;
  if (current3 >= ende) {
    current3 = ende;
    clearInterval(timer3);
  }
  counterElement3.textContent = Math.round(current3);
}, stepTime3);
// counter4
const start4 = 0;
const end4 = 23;
const duration4 = 2000;
const counterElement4 = document.getElementById("counter4");
const range4 = end4 - start4;
const steps4 = 100;
const stepTime4 = duration4 / steps3;
let current4 = start4;
const step4 = range4 / steps3;
const timer4 = setInterval(() => {
  current4 += step4;
  if (current4 >= end4) {
    current4 = end4;
    clearInterval(timer4);
  }
  counterElement4.textContent = Math.round(current4);
}, stepTime4);
// counter5
const start5 = 19890;
const end5 =24000;
const duration5 = 1000;
const counterElement5 = document.getElementById("counter5");
const range5 = end5 - start5;
const steps5 = 100;
const stepTime5 = duration5 / steps5;
let current5 = start5;
const step5 = range5 / steps5;
const timer5 = setInterval(() => {
  current5 += step5;
  if (current5 >= end5) {
    current5 = end5;
    clearInterval(timer5);
  }
  counterElement5.textContent = Math.round(current5);
}, stepTime5);