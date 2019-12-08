<?php
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$passwd = $_POST['passwd'];
$repear_passwd = $_POST['repear_passwd'];

$info_form = "Имя пользователя: $first_name<br>". 
"Фамилия пользователя: $last_name<br>" . "Почта пользователя: $email<br>".
"Пароль пользователя: $passwd";

echo $info_form;
?>