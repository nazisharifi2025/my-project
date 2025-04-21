
  // تنظیمات counter1:
  const start = 0.2;
  const end = 2;
  const duration = 3000; // 5 ثانیه
  const counterElement = document.getElementById("counter");
  const range = end - start;
  const steps = 100;
  const stepTime = duration / steps;
  let current = start;
  const step = range / steps;

  const timer = setInterval(() => {
    current += step;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    counterElement.textContent = Math.round(current);
  }, stepTime);

  // تنظیمات counter2:
  const starts = 1;
  const ends = 5;
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
const starte = 0;
const ende = 8;
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