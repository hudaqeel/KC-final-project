const wrapper = document.querySelector('.wrapper')
const loginlink= document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnLogin-popup')
const iconclose = document.querySelector('.icon-close')

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});


loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

function openResultPage() {
    // احصل على قيمة وزن المدخل
    var weight = parseFloat(document.getElementById("weightInput").value);
    
    // قم بحساب النتيجة
    var result = weight * 30;

    // افتح نافذة جديدة وانتقل إلى صفحة result.html مع إرسال النتيجة كمعلمة
    var newWindow = window.open("result.html?result=" + result, "_blank");
}


document.addEventListener("DOMContentLoaded", function () {
    // ابحث عن زر الـ Login باستخدام الـ id
    var loginButton = document.getElementById("myButton");

    // قم بإضافة حادثة النقر على زر الـ Login
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault(); // منع النموذج من إرسال البيانات إلى الصفحة الافتراضية
            // قم بتوجيه المستخدم إلى صفحة "weight.html"
            window.location.href = "weight.html";
        });
    }
});

