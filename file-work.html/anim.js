const images = document.querySelectorAll("img.fade-rotate-init");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-rotate-show");
            entry.target.classList.add("rotate-z-30");
            observer.unobserve(entry.target); // فقط یک‌بار انیمیشن اجرا بشه
        }
    });
}, {
    threshold: 1 // زمانی که ۵۰٪ عکس داخل ویو شد
});

images.forEach(img => observer.observe(img));
const counterUp = document.getElementById("counter");
let number = 0 ;
const updateCounter = setInterval(()=>{
    number++ ;
    counterUp.textContent = number;
    if(number >=700){
        clearInterval(updateCounter)
    }
},1)
