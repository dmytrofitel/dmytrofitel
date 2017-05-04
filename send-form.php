<?php
	$name = isset($_POST["name"]) ? $_POST["name"] : null;
	$email = isset($_POST["email"]) ? $_POST["email"] : null;
	$phone = isset($_POST["phone"]) ? $_POST["phone"] : null;
	$question = isset($_POST["question"]) ? $_POST["question"] : null;
	$message = isset($_POST["message"]) ? $_POST["message"] : null;

	$mailto = 'dimfit@gmail.com';
	$subject = 'Some from site';
	$content = 'Name:&nbsp;'.$name. '<br/>Email: '.$email.'<br/>Phone:&nbsp;'.$phone.'<br/>Question:&nbsp;'.$question.'<br/>Massage:&nbsp;'.$message;
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	mail($mailto, $subject, $content, $headers);
?>