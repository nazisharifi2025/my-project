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
const btnR = document.getElementById("btnR");
const btnL = document.getElementById("btnL");

let current = 0;
const slider = document.getElementById("slider");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");
const button = document.getElementById("slide-button");

function updateSlide() {
  const slide = images[current];
  slider.style.backgroundImage = `url('${slide.url}')`;
  title.textContent = slide.title;
  description.textContent = slide.description;
  button.textContent = slide.buttonText;
}
updateSlide();

btnR.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateSlide();
});

// btnR.addEventListener("click", () => {
// current = (current + 1) % images.length;
// updateSlide();
// });

// ✅ دکمه چپ: قبلی
btnL.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateSlide();
});

setInterval(() => {
  current = (current + 1) % images.length;
  updateSlide();
}, 4000);
