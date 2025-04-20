
// تنظیمات:
const start = 1;
const end = 27;
const duration = 5000; // به میلی‌ثانیه (5 ثانیه)
const counterElement = document.getElementById("counter");
const range = end - start;
const steps = 100; // چند مرحله (برای نرم بودن)
const stepTime = duration / steps;
let current = start;
let step = range / steps;
const timer = setInterval(() => {
  current += step;
  if (current >= end) {
    current = end;
    clearInterval(timer);
  }
  counterElement.textContent = Math.round(current);
}, stepTime);