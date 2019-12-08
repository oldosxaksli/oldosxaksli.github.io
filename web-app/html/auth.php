<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Авторизация</title>
	<link rel="shortcut icon" href="../img/icon/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/reset.css">
	<link rel="stylesheet" href="../css/auth.css">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap" rel="stylesheet"> 
</head>
<body>
	<div class="wrapper">
		<div class="wrap-form">
			<form action="../php/auth.php" method="POST" class="form">
				<label for="first_name">Имя<input type="text" name="first_name"></label>
				<label for="last_name">Фамилия<input type="text" name="last_name"></label>
				<label for="email">E-mail<input type="text" name="email"></label>
				<label for="passwd">Пароль<input type="text" name="passwd"></label>
				<label for="repear_passwd">Повторите пароль<input type="text" name="repear_passwd"></label>

				<div class="form-wrap-btn">
					<input type="submit" value="Отправить" class="submit">
					<input type="reset" class="reset">
				</div>
			</form>
		</div>
	</div>
</body>
</html>