const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const html = document.documentElement;

// تابع برای تنظیم آیکون‌ها
function updateIcons(isDark) {
  if (isDark) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}

// لود اولیه: چک کن که توی localStorage چی ذخیره شده
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
  updateIcons(true);
} else {
  html.classList.remove("dark");
  updateIcons(false);
}

// کلیک روی دکمه: تغییر حالت
themeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  updateIcons(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
