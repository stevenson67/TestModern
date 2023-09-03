<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$subject = $_POST['subject'];
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$question = $_POST['question'];
$msg = '';

$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
$subject<br>
$email<br>
$name<br>
$phone<br>
$question<br>
";

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  $mail->SMTPDebug = 2;
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

  $mail->setFrom('share.410web@gmail.com', 'Question');

  $mail->addAddress('kingofguns066@gmail.com');




  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;


  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

} catch (Exception $e) {
  echo $e-> getMessage();;
}

