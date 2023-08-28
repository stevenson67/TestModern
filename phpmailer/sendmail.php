<html>
    <head>
        <meta http-equiv="refresh" content="0;url=index.html">
    </head>
</html>
<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['mailto'];
$phone = $_POST['phone'];
$text = $_POST['task'];
$file = $_FILES['myfile'];
$msg = '';
// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>
<b>Описание проекта:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'share.410web@gmail.com';
    $mail->Password = 'kvusfuymhuyviyou';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $mail->setFrom('share.410web@gmail.com', 'Заявки с Share');
    // Получатели
    $mail->addAddress('share.410web@gmail.com');
    $mail->addAddress('nb@share-agency.ru');


    // Прикрипление файлов к письму
    if (!empty($_FILES['myfile']['name'][0])) {
        foreach ($_FILES['myfile']['name'] as $key => $value) {
            $out_files[] = array("name"=>$_FILES['myfile']['name'][$key], "tmp_name" => $_FILES['myfile']['tmp_name'][$key]);
        }
        $filesSend = true;
    } else {
        $filesSend = false;    
    }
    if ($filesSend) {
        foreach ($out_files as $k=>$v) {
            $mail->AddAttachment($out_files[$k]['tmp_name'], $out_files[$k]['name']);
        }
    }

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    echo $e-> getMessage();;
}

header("Location: index.html");
?>
