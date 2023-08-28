<?php

if(isset($_POST['submit'])){
  $subject = $_POST['subject'];
  $email = $_POST['email'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $question = $_POST['question'];

  $to = 'kingofguns066@gmail.com';
  $subject = 'New Form Submission';
  $message = "Subject: ".$subject."\n"."Email: ".$email."\n"."Name: ".$name."\n"."Phone: ".$phone."\n"."Question: ".$question;
  $headers = 'From: '.$email;

  if(mail($to, $subject, $message, $headers)){
    echo "success";
  } else{
    echo "error";
  }
}


