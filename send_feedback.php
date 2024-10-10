<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على البيانات من النموذج
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // إعداد البريد الإلكتروني
    $to = "mc.brd07@gmail.com";
    $subject = "رأي جديد من العميل";
    $body = "الاسم: $name\nالبريد الإلكتروني: $email\n\nالرأي:\n$message";
    $headers = "From: $email";

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $body, $headers)) {
        echo "تم إرسال رأيك بنجاح!";
    } else {
        echo "حدث خطأ أثناء الإرسال.";
    }
}
?>
