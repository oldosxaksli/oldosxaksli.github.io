<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Web App</title>
	<link rel="shortcut icon" href="img/icon/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/animation.css">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap" rel="stylesheet"> 
</head>
<body>
	<div class="wrapper">
		<section class="title-section">
			<header class="header-page">
				<div class="wrap-logo">
					<span class="logo">Metabolism</span>
				</div>
				<nav class="navigation">
					<ul class="header-page__ul">
						<li class="header-page__li">
							<a href="#" class="header-page__link">Главная</a>
							<a href="#" class="header-page__link">Рассчитать</a>
							<a href="#" class="header-page__link">О нас</a>
						</li>
					</ul>
				</nav>
				<div class="wrap-logout">
					<button class="log-in"><a href="html/auth.php" class="link-log-in">Авторизация</a></button>
				</div>
			</header>
			<article class="content-metabolism">
				<div class="content-matabolism__wrap">
					<h1 class="content-metabolism__title">
						Метаболизм
					</h1>

					<h3 class="content-metabolism__h3-title">
						Что такое метаболизм?
					</h3>

					<p class="content-metabolism__text">
						Что такое метаболизм, понять несложно, так как к здоровому обмену веществ нас приобщают с детства родители, воспитатели, доктора. То есть практически все, кроме бабушки, которая желает закормить тебя насмерть пирогами и грибами. В данном примере добрая бабушка стимулирует нарушение обмена веществ, но вряд ли бабушка станет главным источником проблем. Об этом, а также о том, как ускорить метаболизм для похудения, рассказываем в подробностях.
					</p>

					<p class="content-metabolism__text">
						Интернет и пресса полны дискуссий на тему, работают ли добавки для ускорения обмена веществ, а если работают, то как отличить ценную добавку от бесполезного дорогостоящего мусора. Здесь самое место честно заявить, что обильный рацион и большие физические нагрузки являются не только простейшим, но и единственно надежным методом заставить организм быстрее тратить энергию. Физические упражнения — лучший ответ на вопрос, как ускорить обмен веществ.
					</p>

					<p class="content-metabolism__text">
						И поэтому так важно знать свой обмен веществ, рассчитать его вы можете по нашим формулам. 
					</p>
				</div>
			</article>
		</section>

		<section class="calc-metabolism">
			<div class="wrap-calc-metabolism-form">
				<form action="" class="metabolism-form form">
					<progress class="progress" max="100" value="0"></progress>
					<input class="input-form input-age" list="age" type="number" 
					min="10" max="120" step="1" maxlength="3" pattern="[0-9]{,3}" 
					autocomplete="on" placeholder="Ваш возраст">
					<datalist id="age">
						<option value="15"></option>
						<option value="20"></option>
						<option value="25"></option>
						<option value="30"></option>
						<option value="35"></option>
					</datalist>

					<input class="input-form input-height" list="height" type="number" 
					min="140" max="210" step="1" maxlength="3" pattern="[0-9]{,3}" 
					autocomplete="on" placeholder="Ваш рост">
					<datalist id="height">
						<option value="150"></option>
						<option value="175"></option>
						<option value="180"></option>
						<option value="185"></option>
						<option value="190"></option>
					</datalist>

					<input class="input-form input-massa" list="massa" type="number" 
					min="40" max="200" step="1" maxlength="3"pattern="[0-9]{,3}" 
					autocomplete="on" placeholder="Ваш вес">
					<datalist id="massa">
						<option value="65"></option>
						<option value="70"></option>
						<option value="80"></option>
						<option value="85"></option>
						<option value="90"></option>
					</datalist>

					<select class="input-form input-select" name="" id="">
						<option value="1">Мужчина</option>
						<option value="0">Женщина</option>
					</select>
					
					<div class="form-wrap-btn">
						<input class="btn-form submit" type="submit" value="Расчитать">
						<input class="btn-form reset" type="reset" value="Очистить">
					</div>
				</form>
			</div>
		</section>
	</div>

	<script src="js/main.js"></script>
</body>
</html>