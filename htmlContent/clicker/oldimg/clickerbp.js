let perClick = 1 // $ за один клик
let currentMoney = 0 // текущее количество $
let income = 0 // $ в секунду

let perClickXp = 1 //опыт за клик
let xp = 0 // текущее значение опыта
let xpneed = 10 // сколько надо опыта для уровня
let lvl = 1 // текущий уровень
let lvlup = 0 // очков уровней

let increasePer1Upgrade = 1 //первый апгрейд
let levelOf1Upgrade = 0 //количество купленых первых апгрейдов
let costOf1Upgrade = 10 // стоимость 1 апгрейда

let incomeFrom2UpgradeTotal = 0
let incomeFrom2UpgradePerLevel = 1 // инкам в секунду за 2ой апгрейд
let levelOf2Upgrade = 0 // уровень 2го апргрейда
let costOf2Upgrade = 100 // стоимость 2 апгрейда

let incomeFrom3UpgradeTotal = 0
let incomeFrom3UpgradePerLevel = 10 //инкам в секунду за 3 апгрейды
let levelOf3Upgrade = 0 // уровень 3го апргрейда
let costOf3Upgrade = 1000 // стоимость 3 апгрейда

let incomeFrom4UpgradeTotal = 0 // 4 upgrade
let incomeFrom4UpgradePerLevel = 100
let levelOf4Upgrade = 0
let costOf4Upgrade = 50000

let incomeFrom5UpgradeTotal = 0 // 5 upgrade
let incomeFrom5UpgradePerLevel = 300
let levelOf5Upgrade = 0
let costOf5Upgrade = 100000

let incomeFrom6UpgradeTotal = 0 // 6 upgrade
let incomeFrom6UpgradePerLevel = 800
let levelOf6Upgrade = 0
let costOf6Upgrade = 500000

let incomeFrom7UpgradeTotal = 0 // 7 upgrade
let incomeFrom7UpgradePerLevel = 1500
let levelOf7Upgrade = 0
let costOf7Upgrade = 1500000

let incomeFrom8UpgradeTotal = 0 // 8 upgrade
let incomeFrom8UpgradePerLevel = 10000
let levelOf8Upgrade = 0
let costOf8Upgrade = 10000000

let incomeFrom9UpgradeTotal = 0 // 9 upgrade
let incomeFrom9UpgradePerLevel = 500000
let levelOf9Upgrade = 0
let costOf9Upgrade = 100000000

let incomeFrom10UpgradeTotal = 0 // 10 upgrade
let incomeFrom10UpgradePerLevel = 10000000
let levelOf10Upgrade = 0
let costOf10Upgrade = 1000000000

let prestigeCost = 10000 //цена престижа
let idletime = new Date().getTime() / 1000;// время
let clickID = 0

//ver alpha 0.36

if (localStorage.currentMoney > 0 || localStorage.income > 0 || localStorage.perClick > 1) { // загрузка прогресса, если имеется
	currentMoney      = parseInt(localStorage.currentMoney)
	perClick 				  = parseInt(localStorage.perClick)
	income					  = parseInt(localStorage.income)
	perClickXp        = parseInt(localStorage.perClickXp)
	xp                = parseInt(localStorage.xp)
	xpneed            = parseInt(localStorage.xpneed)
	lvl               = parseInt(localStorage.lvl)
	lvlup             = parseInt(localStorage.lvlup)
	costOf1Upgrade  = parseInt(localStorage.costOf1Upgrade)
	costOf2Upgrade = parseInt(localStorage.costOf2Upgrade)
	costOf3Upgrade = parseInt(localStorage.costOf3Upgrade)
	costOf4Upgrade = parseInt(localStorage.costOf4Upgrade)
	costOf5Upgrade = parseInt(localStorage.costOf5Upgrade)
	costOf6Upgrade = parseInt(localStorage.costOf6Upgrade)
	costOf7Upgrade = parseInt(localStorage.costOf7Upgrade)
	costOf8Upgrade = parseInt(localStorage.costOf8Upgrade)
	costOf9Upgrade = parseInt(localStorage.costOf9Upgrade)
	costOf10Upgrade = parseInt(localStorage.costOf10Upgrade)
	prestigeCost      = parseInt(localStorage.prestigeCost)
	increasePer1Upgrade      = parseInt(localStorage.increasePer1Upgrade)
	incomeFrom2UpgradePerLevel     = parseInt(localStorage.incomeFrom2UpgradePerLevel)
	incomeFrom3UpgradePerLevel = parseInt(localStorage.incomeFrom3UpgradePerLevel)
	incomeFrom4UpgradePerLevel = parseInt(localStorage.incomeFrom4UpgradePerLevel)
	incomeFrom5UpgradePerLevel = parseInt(localStorage.incomeFrom5UpgradePerLevel)
	incomeFrom6UpgradePerLevel = parseInt(localStorage.incomeFrom6UpgradePerLevel)
	incomeFrom7UpgradePerLevel = parseInt(localStorage.incomeFrom7UpgradePerLevel)
	incomeFrom8UpgradePerLevel = parseInt(localStorage.incomeFrom8UpgradePerLevel)
	incomeFrom9UpgradePerLevel = parseInt(localStorage.incomeFrom9UpgradePerLevel)
	incomeFrom10UpgradePerLevel = parseInt(localStorage.incomeFrom10UpgradePerLevel)
	levelOf1Upgrade = parseInt(localStorage.levelOf1Upgrade)
	levelOf2Upgrade = parseInt(localStorage.levelOf2Upgrade)
	levelOf3Upgrade = parseInt(localStorage.levelOf3Upgrade)
	levelOf4Upgrade = parseInt(localStorage.levelOf4Upgrade)
	levelOf5Upgrade = parseInt(localStorage.levelOf5Upgrade)
	levelOf6Upgrade = parseInt(localStorage.levelOf6Upgrade)
	levelOf7Upgrade = parseInt(localStorage.levelOf7Upgrade)
	levelOf8Upgrade = parseInt(localStorage.levelOf8Upgrade)
	levelOf9Upgrade = parseInt(localStorage.levelOf9Upgrade)
	levelOf10Upgrade = parseInt(localStorage.levelOf10Upgrade)
	incomeFrom2UpgradeTotal = parseInt(localStorage.incomeFrom2UpgradeTotal)
	incomeFrom3UpgradeTotal = parseInt(localStorage.incomeFrom3UpgradeTotal)
	incomeFrom4UpgradeTotal = parseInt(localStorage.incomeFrom4UpgradeTotal)
	incomeFrom5UpgradeTotal = parseInt(localStorage.incomeFrom5UpgradeTotal)
	incomeFrom6UpgradeTotal = parseInt(localStorage.incomeFrom6UpgradeTotal)
	incomeFrom7UpgradeTotal = parseInt(localStorage.incomeFrom7UpgradeTotal)
	incomeFrom8UpgradeTotal = parseInt(localStorage.incomeFrom8UpgradeTotal)
	incomeFrom9UpgradeTotal = parseInt(localStorage.incomeFrom9UpgradeTotal)
	incomeFrom10UpgradeTotal = parseInt(localStorage.incomeFrom10UpgradeTotal)
}

// следующие 2 функции писал наркоман. увеличивает текущее $ на $/клик

function addClick() {
	currentMoney += perClick
	xp += perClickXp
	return currentMoney
	return xp
}

function clickOleg() {
	let currentM = document.getElementById('h1CurrentMoney')
	currentM.innerHTML =  addClick() + ' Литров'
	currentM.style.color = 'black'
	floatingTextOnclick()
}


function floatingTextOnclick(){ // летящие стаканы
if(document.getElementById('runAnimation').checked ){
	let onClickFX = document.createElement('div')
	onClickFX.setAttribute('class', 'onClickEffect')
	let x = -400 + Math.round(Math.random() * 800)
	onClickFX.style.marginLeft = x +'px'
	onClickFX.setAttribute('id', clickID)
	onClickFX.innerHTML = '+' + perClick + '🍸'
	let fxDiv = document.getElementById('sf')
	fxDiv.appendChild(onClickFX)
	setTimeout (function(){
		let fxDiv = document.getElementById('sf')
		fxDiv.removeChild(document.getElementById(clickID))
	}, 2000) }

	}

// сохранение прогресса раз в 1с

setInterval(function() {
	currentMoney += income // добавляем литры per секонд на счет
	localStorage.prestigeCost = prestigeCost
	localStorage.currentMoney = currentMoney
	localStorage.income = income
	localStorage.perClick = perClick
	localStorage.perClickXp = perClickXp
	localStorage.xp = xp
	localStorage.xpneed = xpneed
	localStorage.lvl = lvl
	localStorage.lvlup = lvlup
	localStorage.increasePer1Upgrade = increasePer1Upgrade
	localStorage.incomeFrom2UpgradePerLevel = incomeFrom2UpgradePerLevel
	localStorage.incomeFrom3UpgradePerLevel = incomeFrom3UpgradePerLevel
	localStorage.incomeFrom4UpgradePerLevel = incomeFrom4UpgradePerLevel
	localStorage.incomeFrom5UpgradePerLevel = incomeFrom5UpgradePerLevel
	localStorage.incomeFrom6UpgradePerLevel = incomeFrom6UpgradePerLevel
	localStorage.incomeFrom7UpgradePerLevel = incomeFrom7UpgradePerLevel
	localStorage.incomeFrom8UpgradePerLevel = incomeFrom8UpgradePerLevel
	localStorage.incomeFrom9UpgradePerLevel = incomeFrom9UpgradePerLevel
	localStorage.incomeFrom10UpgradePerLevel = incomeFrom10UpgradePerLevel
	localStorage.levelOf1Upgrade = levelOf1Upgrade
	localStorage.levelOf2Upgrade = levelOf2Upgrade
	localStorage.levelOf3Upgrade = levelOf3Upgrade
	localStorage.levelOf4Upgrade = levelOf4Upgrade
	localStorage.levelOf5Upgrade = levelOf5Upgrade
	localStorage.levelOf6Upgrade = levelOf6Upgrade
	localStorage.levelOf7Upgrade = levelOf7Upgrade
	localStorage.levelOf8Upgrade = levelOf8Upgrade
	localStorage.levelOf9Upgrade = levelOf9Upgrade
	localStorage.levelOf10Upgrade = levelOf10Upgrade
	localStorage.costOf1Upgrade = costOf1Upgrade
	localStorage.costOf2Upgrade = costOf2Upgrade
	localStorage.costOf3Upgrade = costOf3Upgrade
	localStorage.costOf4Upgrade = costOf4Upgrade
	localStorage.costOf5Upgrade = costOf5Upgrade
	localStorage.costOf6Upgrade = costOf6Upgrade
	localStorage.costOf7Upgrade = costOf7Upgrade
	localStorage.costOf8Upgrade = costOf8Upgrade
	localStorage.costOf9Upgrade = costOf9Upgrade
	localStorage.costOf10Upgrade = costOf10Upgrade
	localStorage.incomeFrom2UpgradeTotal = incomeFrom2UpgradeTotal
	localStorage.incomeFrom3UpgradeTotal = incomeFrom3UpgradeTotal
	localStorage.incomeFrom4UpgradeTotal = incomeFrom4UpgradeTotal
	localStorage.incomeFrom5UpgradeTotal = incomeFrom5UpgradeTotal
	localStorage.incomeFrom6UpgradeTotal = incomeFrom6UpgradeTotal
	localStorage.incomeFrom7UpgradeTotal = incomeFrom7UpgradeTotal
	localStorage.incomeFrom8UpgradeTotal = incomeFrom8UpgradeTotal
	localStorage.incomeFrom9UpgradeTotal = incomeFrom9UpgradeTotal
	localStorage.incomeFrom10UpgradeTotal = incomeFrom10UpgradeTotal
	localStorage.idletime = idletime
if(document.getElementById('runAnimation').checked && income > 0){  // визуализация инкама
	let onClickFX = document.createElement('div')
	onClickFX.setAttribute('class', 'onClickEffect')
	let x = -400 + Math.round(Math.random() * 800)
	onClickFX.style.marginLeft = x +'px'
	onClickFX.style.fontSize = 420 + '%'
	onClickFX.setAttribute('id', clickID)
	onClickFX.innerHTML = '+' + income + '🥃'
	let fxDiv = document.getElementById('sf')
	fxDiv.appendChild(onClickFX)
	setTimeout (function(){
		let fxDiv = document.getElementById('sf')
		fxDiv.removeChild(document.getElementById(clickID))   }, 2000)}

}, 1000);

setInterval(function() {//апдейт на черный после недостатка денег
	document.getElementById('h1CurrentMoney').style.color = 'black';
}, 5000);

setInterval(function() // апдейт значений ЮАЙ раз в .1 сек
{
	if (currentMoney >= costOf1Upgrade) { //спрайт
		document.getElementById('sprite1').style.backgroundImage = 'url(spriteOn.gif)';
		document.getElementById('sprite1').style.backgroundRepeat = "no-repeat";
		document.getElementById('sprite1').style.backgroundPosition = "center";
	}
	else {
		document.getElementById('sprite1').style.backgroundImage = 'url(spriteOff.gif)';
		document.getElementById('sprite1').style.backgroundRepeat = "no-repeat";
		document.getElementById('sprite1').style.backgroundPosition = "center";
	}


	if (currentMoney >= costOf2Upgrade) { //орешки
		document.getElementById('eda1').style.backgroundImage = 'url(nuttsOn.gif)';
		document.getElementById('eda1').style.backgroundRepeat = "no-repeat";
		document.getElementById('eda1').style.backgroundPosition = "center";
	}
	else {
		document.getElementById('eda1').style.backgroundImage = 'url(nuttsOff.gif)';
		document.getElementById('eda1').style.backgroundRepeat = "no-repeat";
		document.getElementById('eda1').style.backgroundPosition = "center";
	}

	if (currentMoney >= 100) { //прячу орешки
		document.getElementById('edahide').style.display = 'table-row'
	}
	else if (costOf2Upgrade > 100) {
		document.getElementById('edahide').style.display = 'table-row'
	}
	else if (costOf3Upgrade > 500) {
		document.getElementById('edahide').style.display = 'table-row'
	}
	else  { document.getElementById('edahide').style.display = 'none'
	}

	document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
	document.getElementById('perClick').innerHTML = perClick + ' Литров за клик'
	document.getElementById('costOfUpgrade1').innerHTML = costOf1Upgrade
	document.getElementById('costOfUpgrade2').innerHTML = costOf2Upgrade
	document.getElementById('costOfUpgrade3').innerHTML = costOf3Upgrade
	document.getElementById('costOfUpgrade4').innerHTML = costOf4Upgrade
	document.getElementById('costOfUpgrade5').innerHTML = costOf5Upgrade
	document.getElementById('costOfUpgrade6').innerHTML = costOf6Upgrade
	document.getElementById('costOfUpgrade7').innerHTML = costOf7Upgrade
	document.getElementById('costOfUpgrade8').innerHTML = costOf8Upgrade
	document.getElementById('costOfUpgrade9').innerHTML = costOf9Upgrade
	document.getElementById('costOfUpgrade10').innerHTML = costOf10Upgrade
	document.getElementById('levelOf1Upgrade').innerHTML = levelOf1Upgrade
	document.getElementById('levelOf2Upgrade').innerHTML = levelOf2Upgrade
	document.getElementById('levelOf3Upgrade').innerHTML = levelOf3Upgrade
	document.getElementById('levelOf4Upgrade').innerHTML = levelOf4Upgrade
	document.getElementById('levelOf5Upgrade').innerHTML = levelOf5Upgrade
	document.getElementById('levelOf6Upgrade').innerHTML = levelOf6Upgrade
	document.getElementById('levelOf7Upgrade').innerHTML = levelOf7Upgrade
	document.getElementById('levelOf8Upgrade').innerHTML = levelOf8Upgrade
	document.getElementById('levelOf9Upgrade').innerHTML = levelOf9Upgrade
	document.getElementById('levelOf10Upgrade').innerHTML = levelOf10Upgrade
	document.getElementById('xp').innerHTML = xp
	document.getElementById('xpneed').innerHTML = '/' + xpneed + ' опыта'
	document.getElementById('lvl').innerHTML = 'Текущий уровень = ' + lvl
	document.getElementById('lvlup').innerHTML = ' Очков уровней = ' + lvlup

	if (xp >= xpneed) {
		lvl++;
		lvlup++;
		xp = 0;
		xpneed += Math.round(xpneed/5);
	}

  idletime = new Date().getTime() / 1000; //обновление времени в сохранение
},100);

function click1Upgrade()  { // клик по 1 апргрейду
	if (currentMoney >= costOf1Upgrade){
		currentMoney -= costOf1Upgrade;
		if (levelOf1Upgrade % 25 == 0 && levelOf1Upgrade > 1) perClick *= 2;
		perClick += increasePer1Upgrade;
		costOf1Upgrade += Math.round(costOf1Upgrade/5);
		levelOf1Upgrade++;
		document.getElementById('levelOf1Upgrade').innerHTML = levelOf1Upgrade
		document.getElementById('costOfUpgrade1').innerHTML = costOf1Upgrade;
		document.getElementById('perClick').innerHTML = perClick + ' Литров за клик';
		document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров';
		document.getElementById('h1CurrentMoney').style.color = 'black';
		}
		else document.getElementById('h1CurrentMoney').style.color = 'red';
	}

function click2Upgrade(){ // второй апгрейд
		if (currentMoney >= costOf2Upgrade){
			if (levelOf2Upgrade % 25 == 0 && levelOf2Upgrade > 1) { //условия удвоения инкама и инкама в секунду от абилки каждые 25 уровней

				income += incomeFrom2UpgradeTotal // прибавляем к инкаму тотальный инкам абилки - имитирует увеличение инкама за уровни x-25 до x
				incomeFrom2UpgradeTotal *= 2 // удвоение всего инкама
				incomeFrom2UpgradePerLevel *= 2} // удвоение увеличения инкама за уровень
			incomeFrom2UpgradeTotal += incomeFrom2UpgradePerLevel // инкам + инкам за уровень
			income += incomeFrom2UpgradePerLevel // прибавление к глобальному инкаму инкама за уровень
			currentMoney -= costOf2Upgrade // вычитание цены апгрейда
			costOf2Upgrade += Math.round(costOf2Upgrade/5) // увеличение стоимости
			levelOf2Upgrade++ // увеличение уровня апргрейда
			document.getElementById('costOfUpgrade2').innerHTML = costOf2Upgrade // забитие новых значений в html
			document.getElementById('levelOf2Upgrade').innerHTML = levelOf2Upgrade
			document.getElementById('Income').innerHTML = income + ' Литров в секунду'
			document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
			document.getElementById('h1CurrentMoney').style.color = 'black'}
			else document.getElementById('h1CurrentMoney').style.color = 'red';
		}

function click3Upgrade(){ // третий апгрейд
	if (currentMoney >= costOf3Upgrade){
		if (levelOf3Upgrade % 25 == 0 && levelOf3Upgrade > 1) { //условия удвоения инкама и инкама в секунду от абилки каждые 25 уровней

			income += incomeFrom3UpgradeTotal // прибавляем к инкаму тотальный инкам абилки - имитирует увеличение инкама за уровни x-25 до x
			incomeFrom3UpgradeTotal *= 2 // удвоение всего инкама
			incomeFrom3UpgradePerLevel *= 2} // удвоение увеличения инкама за уровень
		incomeFrom3UpgradeTotal += incomeFrom3UpgradePerLevel // инкам + инкам за уровень
		income += incomeFrom3UpgradePerLevel // прибавление к глобальному инкаму инкама за уровень
		currentMoney -= costOf3Upgrade // вычитание цены апгрейда
		costOf3Upgrade += Math.round(costOf3Upgrade/5) // увеличение стоимости
		levelOf3Upgrade++ // увеличение уровня апргрейда
		document.getElementById('costOfUpgrade2').innerHTML = costOf3Upgrade // забитие новых значений в html
		document.getElementById('levelOf2Upgrade').innerHTML = levelOf3Upgrade
		document.getElementById('Income').innerHTML = income + ' Литров в секунду'
		document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
		document.getElementById('h1CurrentMoney').style.color = 'black'}
		else document.getElementById('h1CurrentMoney').style.color = 'red';
	}

	function click4Upgrade(){ // четвертый апгрейд
		if (currentMoney >= costOf4Upgrade){
			if (levelOf4Upgrade % 25 == 0 && levelOf4Upgrade > 1) {
	      income += incomeFrom4UpgradeTotal
				incomeFrom4UpgradeTotal *= 2
				incomeFrom4UpgradePerLevel *= 2}
			incomeFrom4UpgradeTotal += incomeFrom4UpgradePerLevel
			income += incomeFrom4UpgradePerLevel
			currentMoney -= costOf4Upgrade
			costOf4Upgrade += Math.round(costOf4Upgrade/5)
			levelOf4Upgrade++
			document.getElementById('costOfUpgrade2').innerHTML = costOf4Upgrade
			document.getElementById('levelOf2Upgrade').innerHTML = levelOf4Upgrade
			document.getElementById('Income').innerHTML = income + ' Литров в секунду'
			document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
			document.getElementById('h1CurrentMoney').style.color = 'black'}
			else document.getElementById('h1CurrentMoney').style.color = 'red';
		}

	 function click5Upgrade(){ // пятый апгрейд
			if (currentMoney >= costOf5Upgrade){
				if (levelOf5Upgrade % 25 == 0 && levelOf5Upgrade > 1) {
					income += incomeFrom5UpgradeTotal
					incomeFrom5UpgradeTotal *= 2
					incomeFrom5UpgradePerLevel *= 2}
				incomeFrom5UpgradeTotal += incomeFrom5UpgradePerLevel
				income += incomeFrom5UpgradePerLevel
				currentMoney -= costOf5Upgrade
				costOf5Upgrade += Math.round(costOf5Upgrade/5)
				levelOf5Upgrade++
				document.getElementById('costOfUpgrade2').innerHTML = costOf5Upgrade
				document.getElementById('levelOf2Upgrade').innerHTML = levelOf5Upgrade
				document.getElementById('Income').innerHTML = income + ' Литров в секунду'
				document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
				document.getElementById('h1CurrentMoney').style.color = 'black'}
				else document.getElementById('h1CurrentMoney').style.color = 'red';
			}

			function click6Upgrade(){ // шестой апгрейд
				if (currentMoney >= costOf6Upgrade){
					if (levelOf6Upgrade % 25 == 0 && levelOf6Upgrade > 1) {
						income += incomeFrom6UpgradeTotal
						incomeFrom6UpgradeTotal *= 2
						incomeFrom6UpgradePerLevel *= 2}
					incomeFrom6UpgradeTotal += incomeFrom6UpgradePerLevel
					income += incomeFrom6UpgradePerLevel
					currentMoney -= costOf6Upgrade
					costOf6Upgrade += Math.round(costOf6Upgrade/5)
					levelOf6Upgrade++
					document.getElementById('costOfUpgrade2').innerHTML = costOf6Upgrade
					document.getElementById('levelOf2Upgrade').innerHTML = levelOf6Upgrade
					document.getElementById('Income').innerHTML = income + ' Литров в секунду'
					document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
					document.getElementById('h1CurrentMoney').style.color = 'black'}
					else document.getElementById('h1CurrentMoney').style.color = 'red';
				}

				function click7Upgrade(){ // седьмой апгрейд
					if (currentMoney >= costOf7Upgrade){
						if (levelOf7Upgrade % 25 == 0 && levelOf7Upgrade > 1) {
							income += incomeFrom7UpgradeTotal
							incomeFrom7UpgradeTotal *= 2
							incomeFrom7UpgradePerLevel *= 2}
						incomeFrom7UpgradeTotal += incomeFrom7UpgradePerLevel
						income += incomeFrom7UpgradePerLevel
						currentMoney -= costOf7Upgrade
						costOf7Upgrade += Math.round(costOf7Upgrade/5)
						levelOf7Upgrade++
						document.getElementById('costOfUpgrade2').innerHTML = costOf7Upgrade
						document.getElementById('levelOf2Upgrade').innerHTML = levelOf7Upgrade
						document.getElementById('Income').innerHTML = income + ' Литров в секунду'
						document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
						document.getElementById('h1CurrentMoney').style.color = 'black'}
						else document.getElementById('h1CurrentMoney').style.color = 'red';
					}

					function click8Upgrade(){ // восьмой апгрейд
						if (currentMoney >= costOf8Upgrade){
							if (levelOf8Upgrade % 25 == 0 && levelOf8Upgrade > 1) {
								income += incomeFrom8UpgradeTotal
								incomeFrom8UpgradeTotal *= 2
								incomeFrom8UpgradePerLevel *= 2}
							incomeFrom8UpgradeTotal += incomeFrom8UpgradePerLevel
							income += incomeFrom8UpgradePerLevel
							currentMoney -= costOf8Upgrade
							costOf8Upgrade += Math.round(costOf8Upgrade/5)
							levelOf8Upgrade++
							document.getElementById('costOfUpgrade2').innerHTML = costOf8Upgrade
							document.getElementById('levelOf2Upgrade').innerHTML = levelOf8Upgrade
							document.getElementById('Income').innerHTML = income + ' Литров в секунду'
							document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
							document.getElementById('h1CurrentMoney').style.color = 'black'}
							else document.getElementById('h1CurrentMoney').style.color = 'red';
						}

						function click9Upgrade(){ // девятый апгрейд
							if (currentMoney >= costOf9Upgrade){
								if (levelOf9Upgrade % 25 == 0 && levelOf9Upgrade > 1) {
									income += incomeFrom9UpgradeTotal
									incomeFrom9UpgradeTotal *= 2
									incomeFrom9UpgradePerLevel *= 2}
								incomeFrom9UpgradeTotal += incomeFrom9UpgradePerLevel
								income += incomeFrom9UpgradePerLevel
								currentMoney -= costOf9Upgrade
								costOf9Upgrade += Math.round(costOf9Upgrade/5)
								levelOf9Upgrade++
								document.getElementById('costOfUpgrade2').innerHTML = costOf9Upgrade
								document.getElementById('levelOf2Upgrade').innerHTML = levelOf9Upgrade
								document.getElementById('Income').innerHTML = income + ' Литров в секунду'
								document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
								document.getElementById('h1CurrentMoney').style.color = 'black'}
								else document.getElementById('h1CurrentMoney').style.color = 'red';
							}

							function click10Upgrade(){ // десятый апгрейд
								if (currentMoney >= costOf10Upgrade){
									if (levelOf4Upgrade % 25 == 0 && levelOf10Upgrade > 1) {
							      income += incomeFrom10UpgradeTotal
										incomeFrom10UpgradeTotal *= 2
										incomeFrom10UpgradePerLevel *= 2}
									incomeFrom10UpgradeTotal += incomeFrom10UpgradePerLevel
									income += incomeFrom10UpgradePerLevel
									currentMoney -= costOf10Upgrade
									costOf10Upgrade += Math.round(costOf10Upgrade/5)
									levelOf10Upgrade++
									document.getElementById('costOfUpgrade2').innerHTML = costOf10Upgrade
									document.getElementById('levelOf2Upgrade').innerHTML = levelOf10Upgrade
									document.getElementById('Income').innerHTML = income + ' Литров в секунду'
									document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
									document.getElementById('h1CurrentMoney').style.color = 'black'}
									else document.getElementById('h1CurrentMoney').style.color = 'red';
								}

			function clickDeleteProgress () {//сброс прогресса
				let a = confirm('Выспаться?')
				if (a) {
					localStorage.clear()
					perClick = 1
					currentMoney = 0
					income = 0
					perClickXp = 1
					xp = 0
					xpneed = 10
					lvl = 1
					lvlup = 0
					costOf1Upgrade = 10
					costOf2Upgrade = 100
					costOf3Upgrade = 1000
					costOf4Upgrade = 50000
					costOf5Upgrade = 100000
					costOf6Upgrade = 500000
					costOf7Upgrade = 1500000
					costOf8Upgrade = 10000000
					costOf9Upgrade = 100000000
					costOf10Upgrade = 1000000000
					prestigeCost = 10000
					increasePer1Upgrade = 1
					incomeFrom2UpgradePerLevel = 1
					incomeFrom3UpgradePerLevel = 10
					incomeFrom4UpgradePerLevel = 100
					incomeFrom5UpgradePerLevel = 300
					incomeFrom6UpgradePerLevel = 800
					incomeFrom7UpgradePerLevel = 1500
					incomeFrom8UpgradePerLevel = 10000
					incomeFrom9UpgradePerLevel = 500000
					incomeFrom10UpgradePerLevel = 10000000
					incomeFrom2UpgradeTotal = 0
					incomeFrom3UpgradeTotal = 0
					incomeFrom4UpgradeTotal = 0
					incomeFrom5UpgradeTotal = 0
					incomeFrom6UpgradeTotal = 0
					incomeFrom7UpgradeTotal = 0
					incomeFrom8UpgradeTotal = 0
					incomeFrom9UpgradeTotal = 0
					incomeFrom10UpgradeTotal = 0
					levelOf1Upgrade = 0
					levelOf2Upgrade = 0
					levelOf3Upgrade = 0
					levelOf4Upgrade = 0
					levelOf5Upgrade = 0
					levelOf6Upgrade = 0
					levelOf7Upgrade = 0
					levelOf8Upgrade = 0
					levelOf9Upgrade = 0
					levelOf10Upgrade = 0
					document.getElementById('Income').innerHTML = income + ' Литров в секунду'
					document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
				}
			}

function prestige (){ //престиж
	let prestigeconf = confirm('Прокачать печень? Цена - ' + prestigeCost + " литров.")
	if  (currentMoney >= prestigeCost & prestigeconf) {//согласие на престиж и хватает денег
		prestigeCost *= 2;
		currentMoney = 0;
		income = 0;
		perClick = 1;
		perClickXp += 1;
		xpneed = 10;
		xp = 0;
		lvl = 1;
		lvlup = 0;
		increasePer1Upgrade += 2;
		incomeFrom2UpgradePerLevel += 1;
		incomeFrom3UpgradePerLevel += 3;
		incomeFrom4UpgradePerLevel += 33;
		incomeFrom5UpgradePerLevel += 100;
		incomeFrom6UpgradePerLevel += 250;
		incomeFrom7UpgradePerLevel += 500;
		incomeFrom8UpgradePerLevel += 3000;
		incomeFrom9UpgradePerLevel += 150000;
		incomeFrom10UpgradePerLevel += 3000000;
		costOf1Upgrade = 10;
		costOf2Upgrade = 100;
		costOf3Upgrade = 1000;
		costOf4Upgrade = 50000;
		costOf5Upgrade = 100000;
		costOf6Upgrade = 500000;
		costOf7Upgrade = 1500000;
		costOf8Upgrade = 10000000;
		costOf9Upgrade = 100000000;
		costOf10Upgrade = 1000000000;
		levelOf1Upgrade = 0;
		levelOf2Upgrade = 0;
		levelOf3Upgrade = 0;
		levelOf4Upgrade = 0;
		levelOf5Upgrade = 0;
		levelOf6Upgrade = 0;
		levelOf7Upgrade = 0;
		levelOf8Upgrade = 0;
		levelOf9Upgrade = 0;
		levelOf10Upgrade = 0;
		incomeFrom2UpgradeTotal = 0;
		incomeFrom3UpgradeTotal = 0;
		incomeFrom4UpgradeTotal = 0;
		incomeFrom5UpgradeTotal = 0;
		incomeFrom6UpgradeTotal = 0;
		incomeFrom7UpgradeTotal = 0;
		incomeFrom8UpgradeTotal = 0;
		incomeFrom9UpgradeTotal = 0;
		incomeFrom10UpgradeTotal = 0;
		document.getElementById('Income').innerHTML = income + ' Литров в секунду';
		document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров';
		document.getElementById('perClick').innerHTML = perClick + ' Литров за клик';
		document.getElementById('costOfUpgrade1').innerHTML = costOf1Upgrade;
		document.getElementById('costOfUpgrade2').innerHTML = costOf2Upgrade;
		document.getElementById('levelOf1Upgrade').innerHTML = levelOf1Upgrade;
		document.getElementById('levelOf2Upgrade').innerHTML = levelOf2Upgrade;
	}
	else if (prestigeconf == false)  {//отказ от престижа
		return;
	}
	else {//денег не хватает на престиж
	  alert('Мало еще выпил!');
		document.getElementById('h1CurrentMoney').style.color = 'red';}
}

//читер!!!1
		var cheat = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];//кобминация чита
    var current = 0;
    var keyHandler = function (event) {
    if (cheat.indexOf(event.key) < 0 || event.key !== cheat[current]) {//прибавка к массиву
		current = 0;
		return;
	}
    current++;

    if (cheat.length === current) {//проверяет прошел ли весь массив
		current = 0;
		var cheatcode = parseInt(prompt('Сколько литров?'));
		if (cheatcode > 0) {//фикс чтобы не ломать игру при отказе ввода
		currentMoney += cheatcode;}
		else return;
  }
  };
document.addEventListener('keydown', keyHandler, false);//считывает нажатие

var currenttime = new Date().getTime() / 1000; // для идла оффлайна
var incomeidle = Math.ceil(currenttime) - Math.ceil(localStorage.idletime);//округление и вычитание секунд
var vipil = incomeidle * income
console.log(incomeidle)

if (localStorage.idletime < currenttime ) {
	currentMoney += vipil;
	// alert('Пока ты спал, Олег Выпил ' + vipil + " литров!" );//прибавка инкама и показ сколько при входе
}
else console.log('бывает...')// такое реально?
