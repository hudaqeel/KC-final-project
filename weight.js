     // إنشاء القائمة باستخدام JavaScript
     var select = document.getElementById("numberSelect");
     for (var i = 1; i <= 200; i++) {
         var option = document.createElement("option");
         option.text = i;
         option.value = i;
         select.appendChild(option);
     }

     // دالة لحساب الوزن وتوجيه المستخدم إلى الصفحة النتيجة
     function calculateWeight() {
         var selectedValue = select.value;
         var result = selectedValue * 30;
         window.location.href = "result.html?result=" + result;
     }

