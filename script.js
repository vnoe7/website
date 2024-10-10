// بعد 3 ثواني، سيتم إخفاء شاشة التحميل
setTimeout(function() {
    // إخفاء شاشة التحميل
    document.getElementById("loader-wrapper").style.display = "none";
    
    // إظهار المحتوى
    document.getElementById("content").style.display = "block";
  }, 3000); // 3000 ملي ثانية = 3 ثواني
  // اختيار العناصر
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// التحقق من localStorage لتحميل الثيم المحفوظ
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggleBtn.textContent = 'تبديل إلى الثيم الفاتح';
}

// حدث التبديل بين الثيمات
themeToggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
  
  // إذا كان الثيم داكن
  if (body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = 'تبديل إلى الثيم الفاتح';
    localStorage.setItem('theme', 'dark'); // حفظ الثيم الداكن
  } else {
    themeToggleBtn.textContent = 'تبديل إلى الثيم الداكن';
    localStorage.setItem('theme', 'light'); // حفظ الثيم الفاتح
  }
});
