
  const Counters = document.querySelectorAll("[data-target]");
  function countUp(el , target){
    let current= 0;
    const increment = target / 100 ;
  

    const updateCount = () =>{
      current += increment;
      if(current< target){
        el.textContent = Math.ceil(current);
        requestAnimationFrame(updateCount)
      }
      else{
        el.textContent = target ;
      }
    };
    updateCount()
  }
  const observer = new IntersectionObserver(
    (entries) =>{
      console.log(entries);
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          const el = entry.target;
        const target = +el.getAttribute("data-target");
        countUp(el, target);
        observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.6 ,
    }
  );
  Counters.forEach((counter) => observer.observe(counter));
  // dashbord3
  const box = document.getElementById('expandBox');
  const content = document.getElementById('innerContent');
  const hLong = document.getElementById("h-long");
  const margin = document.getElementById("mKam");
  let isOpen = false;
  box.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      box.classList.add('h-[220vh]');
      content.classList.remove('opacity-0', 'translate-y-5');
      content.classList.add('opacity-100', 'translate-y-0');
      hLong.classList.remove('h-[170vh]');
      hLong.classList.add('h-[500vh]');
      margin.classList.remove('-mt-[230%]');
      margin.classList.add("mt-6");
    } else {
      box.classList.remove('h-[220vh]');
      content.classList.add('opacity-0', 'translate-y-5');
      content.classList.remove('opacity-100', 'translate-y-0');
      hLong.classList.add('h-[170vh]');
      hLong.classList.remove('h-[320vh]');
      margin.classList.add('-mt-[230%]');
      margin.classList.remove("mt-6");
    }
  });
  // div2
  const divOne= document.getElementById('divOne');
const divtow = document.getElementById('divtow');
const dives = document.getElementById("dives");
let isOpene = false;
divOne.addEventListener('click', () => {
  isOpene = !isOpene;
  if (isOpene) {
    dives.classList.add('h-[60vh]');
     divtow.classList.remove('opacity-0', 'translate-y-5');
    divtow.classList.add('opacity-100', 'translate-y-0');
  } else {
    dives.classList.remove('h-[60vh]');
    divtow.classList.add('opacity-0', 'translate-y-5');
    divtow.classList.remove('opacity-100', 'translate-y-0');
  }
});
// div3
  // div2
  const div3= document.getElementById('div3');
const divtree = document.getElementById('divtree');
const butten = document.getElementById("butten");
let isOpena = false;
divtree.addEventListener('click', () => {
  isOpena = !isOpena;
  if (isOpena) {
    div3.classList.add('h-[30vh]');
     butten.classList.remove('opacity-0', 'translate-y-5');
    butten.classList.add('opacity-100', 'translate-y-0');
  } else {
    div3.classList.remove('h-[30vh]');
    butten.classList.add('opacity-0', 'translate-y-5');
    butten.classList.remove('opacity-100', 'translate-y-0');
  }
});
// div4
const clickme= document.getElementById('clickme');
const hBz = document.getElementById('hBz');
const opicite = document.getElementById("opicite");
let isOpenes = false;
clickme.addEventListener('click', () => {
  isOpenes = !isOpenes;
  if (isOpenes) {
    hBz.classList.add('h-[145vh]');
     opicite.classList.remove('opacity-0', 'translate-y-5');
    opicite.classList.add('opacity-100', 'translate-y-0');
  } else {
    hBz.classList.remove('h-[145vh]');
    opicite.classList.add('opacity-0', 'translate-y-5');
    opicite.classList.remove('opacity-100', 'translate-y-0');
  }
});
// div4
const clicktome= document.getElementById('clictome');
const hightes = document.getElementById('hightes');
const opisty0 = document.getElementById("opisty0");
let isOpenea = false;
clicktome.addEventListener('click', () => {
  isOpenea = !isOpenea;
  if (isOpenea) {
    hightes.classList.add('h-[145vh]');
     opisty0.classList.remove('opacity-0', 'translate-y-5');
    opisty0.classList.add('opacity-100', 'translate-y-0');
  } else {
    hightes.classList.remove('h-[145vh]');
    opisty0.classList.add('opacity-0', 'translate-y-5');
    opisty0.classList.remove('opacity-100', 'translate-y-0');
  }
});
  // counter1
  // const start = 0.2;
  // const end = 2;
  // const duration = 3000; // 5 ثانیه
  // const counterElement = document.getElementById("counter");
  // const range = end - start;
  // const steps = 100;
  // const stepTime = duration / steps;
  // let current = start;
  // const step = range / steps;
// 
  // const timer = setInterval(() => {
    // current += step;
    // if (current >= end) {
      // current = end;
      // clearInterval(timer);
    // }
    // counterElement.textContent = Math.round(current);
  // }, stepTime);
// 
  // counter2:
  // const starts = 1;
  // const ends = 5;
  // const durations = 2000;
  // const counterElement2 = document.getElementById("counter2");
  // const ranges = ends - starts;
  // const steps2 = 100;
  // const stepTime2 = durations / steps2;
  // let current2 = starts;
  // const step2 = ranges / steps2;
// 
  // const timer2 = setInterval(() => {
    // current2 += step2;
    // if (current2 >= ends) {
      // current2 = ends;
      // clearInterval(timer2);
    // }
    // counterElement2.textContent = Math.round(current2);
  // }, stepTime2);
// counter3
// const starte = 0;
// const ende = 5;
// const duratione = 2000;
// const counterElement3 = document.getElementById("counter3");
// const rangee = ende - starte;
// const steps3 = 100;
// const stepTime3 = duratione / steps3;
// let current3 = starts;
// const step3 = rangee / steps3;
// const timer3 = setInterval(() => {
  // current3 += step3;
  // if (current3 >= ende) {
    // current3 = ende;
    // clearInterval(timer3);
  // }
  // counterElement3.textContent = Math.round(current3);
// }, stepTime3);
// counter4
// const start4 = 0;
// const end4 = 8;
// const duration4 = 2000;
// const counterElement4 = document.getElementById("counter4");
// const range4 = end4 - start4;
// const steps4 = 100;
// const stepTime4 = duration4 / steps3;
// let current4 = start4;
// const step4 = range4 / steps3;
// const timer4 = setInterval(() => {
  // current4 += step4;
  // if (current4 >= end4) {
    // current4 = end4;
    // clearInterval(timer4);
  // }
  // counterElement4.textContent = Math.round(current4);
// }, stepTime4);
// counter5
// const start5 = 19890;
// const end5 =24000;
// const duration5 = 1000;
// const counterElement5 = document.getElementById("counter5");
// const range5 = end5 - start5;
// const steps5 = 100;
// const stepTime5 = duration5 / steps5;
// let current5 = start5;
// const step5 = range5 / steps5;
// const timer5 = setInterval(() => {
  // current5 += step5;
  // if (current5 >= end5) {
    // current5 = end5;
    // clearInterval(timer5);
  // }
  // counterElement5.textContent = Math.round(current5);
// }, stepTime5);

const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const html = document.documentElement;
function updateIcons(isDark) {
  if (isDark) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
  updateIcons(true);
} else {
  html.classList.remove("dark");
  updateIcons(false);
}
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  updateIcons(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
// click
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add("flex");
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove("flex");
});

  document.getElementById("divOne").addEventListener("click", function () {
    const targetDiv = document.getElementById("div1");
    targetDiv.classList.toggle("hidden"); // نمایش یا مخفی کردن بر اساس وضعیت فعلی
  });


// 
// const div1 = document.getElementById("div1");
// const divOne = document.getElementById("divOne");
// divOne.addEventListener("click",() =>{
  // divOne.classList.remove("h-[120vh]");
  // divOne.classList.add("h-[340vh]");
  // div1.classList.remove("hidden");
  // div1.classList.add("flex");
// 
// })
// Counter Endedd
// darck mode
// const themeToggle = document.getElementById("themeToggle");
// const sunIcon = document.getElementById("sunIcon");
// const moonIcon = document.getElementById("moonIcon");
// const html = document.documentElement;
// const toggelbtn =document.getElementById("toggelbtn");
// function applyIntialTheme (){
  // const themeColor = window.matchMedia(("(prefers-color-theme:dark)")).matches;
  // const savedTheme = localStorage.theme;
  // if(savedTheme==="dark" || (!savedTheme && themeColor)){
    // html.classList.add("dark");
  // }
  // else{
    // html.classList.remove("Dark");
  // }
// }
// toggelbtn.addEventListener("click", ()=>{
  // const isDark = html.classList.toggle("dark");
  // savedTheme== "dark"? "dark":"light";
// })
// پیشرفته
// 
// const themeToggle = document.getElementById("themeToggle");
// const sunIcon = document.getElementById("sunIcon");
// const moonIcon = document.getElementById("moonIcon");
// const html = document.documentElement;
// 
// function updateIcons(isDark) {
  // 
  // if (isDark) {
    // sunIcon.classList.remove("hidden");
    // moonIcon.classList.add("hidden");
  // } else {
    // sunIcon.classList.add("hidden");
    // moonIcon.classList.remove("hidden");
  // }
// }
// 
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
  // html.classList.add("dark");
  // updateIcons(true);
// } else {
  // html.classList.remove("dark");
  // updateIcons(false);
// }
// 
// themeToggle.addEventListener("click", () => {
  // const isDark = html.classList.toggle("dark");
  // updateIcons(isDark);
  // localStorage.setItem("theme", isDark ? "dark" : "light");
// });
// 