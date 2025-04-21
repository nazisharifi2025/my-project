/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // حالت دارک با کلاس
    content: [
      "./*.html",        // فایل‌های HTML ریشه پروژه
      "./**/*.html",     // فایل‌های HTML داخل پوشه‌ها
      "./src/**/*.{js,ts,jsx,tsx}",  // اگر کد JS/TS داری
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  