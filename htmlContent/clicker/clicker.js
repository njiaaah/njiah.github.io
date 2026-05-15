let perClick = 1n // $ за один клик
let currentMoney = 0n // текущее количество $
let income = 0n // $ в секунду
let totalUpgrades = 10 // общее кол-во апгрейдов, нужно для цикла обновления значений на странице
let totalPerks = 10 // всего перков, для цикла

let perClickXp = 1n //опыт за клик
let xp = 0n // текущее значение опыта
let xpneed = 10n // сколько надо опыта для уровня
let lvl = 1n // текущий уровень
let perkPoints = 0n // очков уровней

let incomeFrom1UpgradePerLevel = 1n //первый апгрейд
let incomeFrom1UpgradeTotal = 0n
let levelOf1Upgrade = 0 //количество купленых первых апгрейдов
let costOf1Upgrade = 10n // стоимость 1 апгрейда

let incomeFrom2UpgradeTotal = 0n
let incomeFrom2UpgradePerLevel = 1n // инкам в секунду за 2ой апгрейд
let levelOf2Upgrade = 0 // уровень 2го апргрейда
let costOf2Upgrade = 100n // стоимость 2 апгрейда

let incomeFrom3UpgradeTotal = 0n
let incomeFrom3UpgradePerLevel = 10n //инкам в секунду за 3 апгрейды
let levelOf3Upgrade = 0 // уровень 3го апргрейда
let costOf3Upgrade = 1000n // стоимость 3 апгрейда

let incomeFrom4UpgradeTotal = 0n // 4 upgrade
let incomeFrom4UpgradePerLevel = 100n
let levelOf4Upgrade = 0
let costOf4Upgrade = 50000n

let incomeFrom5UpgradeTotal = 0n // 5 upgrade
let incomeFrom5UpgradePerLevel = 300n
let levelOf5Upgrade = 0
let costOf5Upgrade = 100000n

let incomeFrom6UpgradeTotal = 0n // 6 upgrade
let incomeFrom6UpgradePerLevel = 800n
let levelOf6Upgrade = 0
let costOf6Upgrade = 500000n

let incomeFrom7UpgradeTotal = 0n // 7 upgrade
let incomeFrom7UpgradePerLevel = 1500n
let levelOf7Upgrade = 0
let costOf7Upgrade = 1500000n

let incomeFrom8UpgradeTotal = 0n // 8 upgrade
let incomeFrom8UpgradePerLevel = 10000n
let levelOf8Upgrade = 0
let costOf8Upgrade = 10000000n

let incomeFrom9UpgradeTotal = 0n // 9 upgrade
let incomeFrom9UpgradePerLevel = 500000n
let levelOf9Upgrade = 0
let costOf9Upgrade = 100000000n

let incomeFrom10UpgradeTotal = 0n // 10 upgrade
let incomeFrom10UpgradePerLevel = 10000000n
let levelOf10Upgrade = 0
let costOf10Upgrade = 1000000000n

let costOf1XpUpgrade = 5n //цена первого апгрейда за опыт
let click1XpUpgradeBonus = 0n //умножение при сработывание шанса от первого апгрейда
let levelOf1XpUpgrade = 0 //кол-во купленых апгрейдов

let costOf2XpUpgrade = 10n //цена второго апгрейда за опыта
let click2XpUpgradeBonus = 0n //проценты от инкама за клике
let levelOf2XpUpgrade = 0 //кол-во 2 апгрейдов

let prestigeCost = 10000n //цена престижа
let idletime = new Date().getTime() / 1000;// время
let clickID = 0

// перки

let addedForClick = 0
let floatColor = 'black'

let perk001Level = 0
console.log(perk001Level)
let perk001Cost = 1
let perksIsClickCritical = false
let perksCriticalMultipliyer = 1

//ver alpha 0.36a
//проба гита ммммм

if (localStorage.currentMoney > 0 || localStorage.income > 0 || localStorage.perClick > 1) { // загрузка прогресса, если имеется
	currentMoney      = BigInt(localStorage.currentMoney)
	perClick 				  = BigInt(localStorage.perClick)
	income					  = BigInt(localStorage.income)
	perClickXp        = BigInt(localStorage.perClickXp)
	xp                = BigInt(localStorage.xp)
	xpneed            = BigInt(localStorage.xpneed)
	lvl               = BigInt(localStorage.lvl)
	perkPoints        = BigInt(localStorage.perkPoints)
	costOf1Upgrade  	= BigInt(localStorage.costOf1Upgrade)
	costOf2Upgrade = BigInt(localStorage.costOf2Upgrade)
	costOf3Upgrade = BigInt(localStorage.costOf3Upgrade)
	costOf4Upgrade = BigInt(localStorage.costOf4Upgrade)
	costOf5Upgrade = BigInt(localStorage.costOf5Upgrade)
	costOf6Upgrade = BigInt(localStorage.costOf6Upgrade)
	costOf7Upgrade = BigInt(localStorage.costOf7Upgrade)
	costOf8Upgrade = BigInt(localStorage.costOf8Upgrade)
	costOf9Upgrade = BigInt(localStorage.costOf9Upgrade)
	costOf10Upgrade = BigInt(localStorage.costOf10Upgrade)
	costOf1XpUpgrade = BigInt(localStorage.costOf1XpUpgrade)
	costOf2Upgrade = BigInt(localStorage.costOf2XpUpgrade)
	prestigeCost      = BigInt(localStorage.prestigeCost)
	incomeFrom1UpgradePerLevel      = BigInt(localStorage.incomeFrom1UpgradePerLevel)
	incomeFrom2UpgradePerLevel     = BigInt(localStorage.incomeFrom2UpgradePerLevel)
	incomeFrom3UpgradePerLevel = BigInt(localStorage.incomeFrom3UpgradePerLevel)
	incomeFrom4UpgradePerLevel = BigInt(localStorage.incomeFrom4UpgradePerLevel)
	incomeFrom5UpgradePerLevel = BigInt(localStorage.incomeFrom5UpgradePerLevel)
	incomeFrom6UpgradePerLevel = BigInt(localStorage.incomeFrom6UpgradePerLevel)
	incomeFrom7UpgradePerLevel = BigInt(localStorage.incomeFrom7UpgradePerLevel)
	incomeFrom8UpgradePerLevel = BigInt(localStorage.incomeFrom8UpgradePerLevel)
	incomeFrom9UpgradePerLevel = BigInt(localStorage.incomeFrom9UpgradePerLevel)
	incomeFrom10UpgradePerLevel = BigInt(localStorage.incomeFrom10UpgradePerLevel)
	click1XpUpgradeBonus = BigInt(localStorage.click1XpUpgradeBonus)
	click2XpUpgradeBonus = BigInt(localStorage.click2XpUpgradeBonus)
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
	levelOf1XpUpgrade = parseInt(localStorage.levelOf1XpUpgrade)
	levelOf2XpUpgrade = parseInt(localStorage.levelOf2XpUpgrade)
	incomeFrom2UpgradeTotal = BigInt(localStorage.incomeFrom2UpgradeTotal)
	incomeFrom3UpgradeTotal = BigInt(localStorage.incomeFrom3UpgradeTotal)
	incomeFrom4UpgradeTotal = BigInt(localStorage.incomeFrom4UpgradeTotal)
	incomeFrom5UpgradeTotal = BigInt(localStorage.incomeFrom5UpgradeTotal)
	incomeFrom6UpgradeTotal = BigInt(localStorage.incomeFrom6UpgradeTotal)
	incomeFrom7UpgradeTotal = BigInt(localStorage.incomeFrom7UpgradeTotal)
	incomeFrom8UpgradeTotal = BigInt(localStorage.incomeFrom8UpgradeTotal)
	incomeFrom9UpgradeTotal = BigInt(localStorage.incomeFrom9UpgradeTotal)
	incomeFrom10UpgradeTotal = BigInt(localStorage.incomeFrom10UpgradeTotal)

	perk001Level = localStorage.perk001Level
	perk001Cost = localStorage.perk001Cost
}

// следующие 2 функции писал наркоман. увеличивает текущее $ на $/клик

function addClick() {
	addedForClick = perClick + perClick*BigInt(perksCriticalMultipliyer)
	currentMoney += addedForClick
	xp += perClickXp
	return currentMoney
	return addedForClick
	return xp
}

function clickOleg() {
	perksCriticalChance()
	let currentM = document.getElementById('h1CurrentMoney')
	currentM.innerHTML =  addClick(perksIsClickCritical) + ' Литров'
	currentM.style.color = 'black'
	if (perksIsClickCritical) {
		floatColor = 'red'; floatSize = 500}
		else {floatColor = 'black'; floatSize = 350}
	floatingTextOnclick(floatColor, floatSize)
}


function floatingTextOnclick(floatColor, floatSize){ // летящие стаканы
if(document.getElementById('runAnimation').checked ){
	let onClickFX = document.createElement('div')
	onClickFX.setAttribute('class', 'onClickEffect')
	let x = -400 + Math.round(Math.random() * 800)
	onClickFX.style.marginLeft = x +'px'
	onClickFX.setAttribute('id', clickID)
	onClickFX.style.color = floatColor
	onClickFX.innerHTML = '+' + addedForClick + '🍸'
	onClickFX.style.fontSize = floatSize + '%'
	let fxDiv = document.getElementById('sf')
	fxDiv.appendChild(onClickFX)
	setTimeout (function(){
		let fxDiv = document.getElementById('sf')
		fxDiv.removeChild(document.getElementById(clickID))
	}, 2000) }

	}

// сохранение прогресса раз в 20с


setInterval(function() {
	localStorage.prestigeCost = prestigeCost
	localStorage.currentMoney = currentMoney
	localStorage.income = income
	localStorage.perClick = perClick
	localStorage.perClickXp = perClickXp
	localStorage.xp = xp
	localStorage.xpneed = xpneed
	localStorage.lvl = lvl
	localStorage.perkPoints = perkPoints
	localStorage.incomeFrom1UpgradePerLevel = incomeFrom1UpgradePerLevel
	localStorage.incomeFrom2UpgradePerLevel = incomeFrom2UpgradePerLevel
	localStorage.incomeFrom3UpgradePerLevel = incomeFrom3UpgradePerLevel
	localStorage.incomeFrom4UpgradePerLevel = incomeFrom4UpgradePerLevel
	localStorage.incomeFrom5UpgradePerLevel = incomeFrom5UpgradePerLevel
	localStorage.incomeFrom6UpgradePerLevel = incomeFrom6UpgradePerLevel
	localStorage.incomeFrom7UpgradePerLevel = incomeFrom7UpgradePerLevel
	localStorage.incomeFrom8UpgradePerLevel = incomeFrom8UpgradePerLevel
	localStorage.incomeFrom9UpgradePerLevel = incomeFrom9UpgradePerLevel
	localStorage.incomeFrom10UpgradePerLevel = incomeFrom10UpgradePerLevel
	localStorage.click1XpUpgradeBonus = click1XpUpgradeBonus
	localStorage.click2XpUpgradeBonus = click2XpUpgradeBonus
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
	localStorage.levelOf1XpUpgrade = levelOf1XpUpgrade
	localStorage.levelOf2XpUpgrade = levelOf2XpUpgrade
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
	localStorage.costOf1XpUpgrade = costOf1XpUpgrade
	localStorage.costOf2XpUpgrade = costOf2XpUpgrade
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
	localStorage.perk001Level = perk001Level
	localStorage.perk001Cost = perk001Cost
}, 1000);

// добавления инкама раз в 1с + визуал

setInterval(function() {
	currentMoney += income // добавляем литры per секонд на счет
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

	let upgrade2hiden = document.getElementById('hide2upgrade');
	let upgrade3hiden = document.getElementById('hide3upgrade');
	let upgrade4hiden = document.getElementById('hide4upgrade');
	let upgrade5hiden = document.getElementById('hide5upgrade');
	let upgrade6hiden = document.getElementById('hide6upgrade');
	let upgrade7hiden = document.getElementById('hide7upgrade');
	let upgrade8hiden = document.getElementById('hide8upgrade');
	let upgrade9hiden = document.getElementById('hide9upgrade');
	let upgrade10hiden = document.getElementById('hide10upgrade'); //для скрытия элементов апгрейда


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

	if (currentMoney >= 100 || upgrade2hiden.style.display == 'table-row') { //скрытие 2 апгрейда
		document.getElementById('hide2upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide2upgrade').style.display = 'none'
	}

	if (currentMoney >= 1000 || upgrade3hiden.style.display == 'table-row') { //скрытие 3 апгрейда
		document.getElementById('hide3upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide3upgrade').style.display = 'none'
	}

	if (currentMoney >= 50000 || upgrade4hiden.style.display == 'table-row') { //скрытие 4 апгрейда
		document.getElementById('hide4upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide4upgrade').style.display = 'none'
	}

	if (currentMoney >= 100000 || upgrade5hiden.style.display == 'table-row') { //скрытие 5 апгрейда
		document.getElementById('hide5upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide5upgrade').style.display = 'none'
	}

	if (currentMoney >= 500000 || upgrade6hiden.style.display == 'table-row') { //скрытие 6 апгрейда
		document.getElementById('hide6upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide6upgrade').style.display = 'none'
	}

	if (currentMoney >= 1500000 || upgrade7hiden.style.display == 'table-row') { //скрытие 7 апгрейда
		document.getElementById('hide7upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide7upgrade').style.display = 'none'
	}

	if (currentMoney >= 10000000 || upgrade8hiden.style.display == 'table-row') { //скрытие 8 апгрейда
		document.getElementById('hide8upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide8upgrade').style.display = 'none'
	}

	if (currentMoney >= 100000000 || upgrade9hiden.style.display == 'table-row') { //скрытие 9 апгрейда
		document.getElementById('hide9upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide9upgrade').style.display = 'none'
	}

	if (currentMoney >= 1000000000 || upgrade10hiden.style.display == 'table-row') { //скрытие 10 апгрейда
		document.getElementById('hide10upgrade').style.display = 'table-row'
	}
	else  { document.getElementById('hide10upgrade').style.display = 'none'
	}

	document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
	document.getElementById('perClick').innerHTML = perClick + ' Литров за клик'

	for ( i = 1 ; i<=totalUpgrades; i++){ // апдейт значений в подсказке циклом
	targetTotal = 'incomeFrom'+i+'UpgradeTotal'
	document.getElementById(window['targetTotal']).innerHTML = eval(targetTotal) // обновление внутри полдсказки - Весь инкам от апгрейда

	targetPerLevel = 'incomeFrom'+i+'UpgradePerLevel'
	document.getElementById(window['targetPerLevel']).innerHTML = eval(targetPerLevel) // Тоже что выше, только за уровень

	targetLevel = 'levelOf'+i+'Upgrade'
	document.getElementById(window['targetLevel']).innerHTML = eval(targetLevel) // апдейт значения уровня апгрейда

	targetCost = 'costOf'+i+'Upgrade'
	document.getElementById(window['targetCost']).innerHTML = eval(targetCost) // апдейт стоимости апгрейда
	}


	for ( i = 1 ; i<=2; i++){ // апдейт значений в подсказке перков
	targetTotal = 'perk00'+1+'Level'
	document.getElementById(window['targetTotal']).innerHTML = eval(targetTotal)
	targetTotal = 'perk00'+1+'Cost'
	document.getElementById(window['targetTotal']).innerHTML = eval(targetTotal)
	}

	document.getElementById('perk001Chance').innerHTML = 2 * perk001Level
	document.getElementById('perk001Levelhint').innerHTML = perk001Level


	document.getElementById('xp').innerHTML = xp
	document.getElementById('xpneed').innerHTML = '/' + xpneed + ' опыта'
	document.getElementById('lvl').innerHTML = 'Текущий уровень = ' + lvl
	document.getElementById('perkPoints').innerHTML = ' Очков уровней = ' + perkPoints
	document.getElementById('perkPoints').style.color = 'black' //показ инфы про опыт, лучше переделать

	if (xp >= xpneed) {
		lvl++;
		perkPoints++;
		xp = 0n;
		xpneed += (xpneed/5n); //прогресс уровня
	}

  idletime = new Date().getTime() / 1000; //обновление времени в сохранение
},100);

function click1Upgrade()  { // клик по 1 апргрейду
	if (currentMoney >= costOf1Upgrade){
		currentMoney -= costOf1Upgrade;
		levelOf1Upgrade++;
		if (levelOf1Upgrade % 25 == 0 && levelOf1Upgrade > 1) {perClick *= 2n;incomeFrom1UpgradeTotal*=2n}
		incomeFrom1UpgradeTotal += incomeFrom1UpgradePerLevel
		perClick += incomeFrom1UpgradePerLevel;
		costOf1Upgrade += (costOf1Upgrade/5n);
		document.getElementById('levelOf1Upgrade').innerHTML = levelOf1Upgrade
		document.getElementById('costOf1Upgrade').innerHTML = costOf1Upgrade;
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
				incomeFrom2UpgradeTotal *= 2n // удвоение всего инкама
				incomeFrom2UpgradePerLevel *= 2n} // удвоение увеличения инкама за уровень
			incomeFrom2UpgradeTotal += incomeFrom2UpgradePerLevel // инкам + инкам за уровень
			income += incomeFrom2UpgradePerLevel // прибавление к глобальному инкаму инкама за уровень
			currentMoney -= costOf2Upgrade // вычитание цены апгрейда
			costOf2Upgrade += (costOf2Upgrade/5n) // увеличение стоимости
			levelOf2Upgrade++ // увеличение уровня апргрейда
			document.getElementById('costOf2Upgrade').innerHTML = costOf2Upgrade // забитие новых значений в html
			document.getElementById('levelOf2Upgrade').innerHTML = levelOf2Upgrade
			document.getElementById('Income').innerHTML = income + ' Литров в секунду'
			document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
			document.getElementById('h1CurrentMoney').style.color = 'black'
		}
			else document.getElementById('h1CurrentMoney').style.color = 'red';
		}

function click3Upgrade(){ // третий апгрейд
	if (currentMoney >= costOf3Upgrade){
		if (levelOf3Upgrade % 25 == 0 && levelOf3Upgrade > 1) { //условия удвоения инкама и инкама в секунду от абилки каждые 25 уровней

			income += incomeFrom3UpgradeTotal // прибавляем к инкаму тотальный инкам абилки - имитирует увеличение инкама за уровни x-25 до x
			incomeFrom3UpgradeTotal *= 2n // удвоение всего инкама
			incomeFrom3UpgradePerLevel *= 2n} // удвоение увеличения инкама за уровень
		incomeFrom3UpgradeTotal += incomeFrom3UpgradePerLevel // инкам + инкам за уровень
		income += incomeFrom3UpgradePerLevel // прибавление к глобальному инкаму инкама за уровень
		currentMoney -= costOf3Upgrade // вычитание цены апгрейда
		costOf3Upgrade += (costOf3Upgrade/5n) // увеличение стоимости
		levelOf3Upgrade++ // увеличение уровня апргрейда
		document.getElementById('costOf3Upgrade').innerHTML = costOf3Upgrade // забитие новых значений в html
		document.getElementById('levelOf3Upgrade').innerHTML = levelOf3Upgrade
		document.getElementById('Income').innerHTML = income + ' Литров в секунду'
		document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
		document.getElementById('h1CurrentMoney').style.color = 'black'}
		else document.getElementById('h1CurrentMoney').style.color = 'red';
	}

function click4Upgrade(){ // четвертый апгрейд
		if (currentMoney >= costOf4Upgrade){
			if (levelOf4Upgrade % 25 == 0 && levelOf4Upgrade > 1) {
	      income += incomeFrom4UpgradeTotal
				incomeFrom4UpgradeTotal *= 2n
				incomeFrom4UpgradePerLevel *= 2n}
			incomeFrom4UpgradeTotal += incomeFrom4UpgradePerLevel
			income += incomeFrom4UpgradePerLevel
			currentMoney -= costOf4Upgrade
			costOf4Upgrade += (costOf4Upgrade/5n)
			levelOf4Upgrade++
			document.getElementById('costOfU4pgrade').innerHTML = costOf4Upgrade
			document.getElementById('levelOf4Upgrade').innerHTML = levelOf4Upgrade
			document.getElementById('Income').innerHTML = income + ' Литров в секунду'
			document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
			document.getElementById('h1CurrentMoney').style.color = 'black'}
			else document.getElementById('h1CurrentMoney').style.color = 'red';
		}

function click5Upgrade(){ // пятый апгрейд
			if (currentMoney >= costOf5Upgrade){
				if (levelOf5Upgrade % 25 == 0 && levelOf5Upgrade > 1) {
					income += incomeFrom5UpgradeTotal
					incomeFrom5UpgradeTotal *= 2n
					incomeFrom5UpgradePerLevel *= 2n}
				incomeFrom5UpgradeTotal += incomeFrom5UpgradePerLevel
				income += incomeFrom5UpgradePerLevel
				currentMoney -= costOf5Upgrade
				costOf5Upgrade += (costOf5Upgrade/5n)
				levelOf5Upgrade++
				document.getElementById('costOf5Upgrade').innerHTML = costOf5Upgrade
				document.getElementById('levelOf5Upgrade').innerHTML = levelOf5Upgrade
				document.getElementById('Income').innerHTML = income + ' Литров в секунду'
				document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
				document.getElementById('h1CurrentMoney').style.color = 'black'}
				else document.getElementById('h1CurrentMoney').style.color = 'red';
			}

function click6Upgrade(){ // шестой апгрейд
				if (currentMoney >= costOf6Upgrade){
					if (levelOf6Upgrade % 25 == 0 && levelOf6Upgrade > 1) {
						income += incomeFrom6UpgradeTotal
						incomeFrom6UpgradeTotal *= 2n
						incomeFrom6UpgradePerLevel *= 2n}
					incomeFrom6UpgradeTotal += incomeFrom6UpgradePerLevel
					income += incomeFrom6UpgradePerLevel
					currentMoney -= costOf6Upgrade
					costOf6Upgrade += (costOf6Upgrade/5n)
					levelOf6Upgrade++
					document.getElementById('costOf6Upgrade').innerHTML = costOf6Upgrade
					document.getElementById('levelOf6Upgrade').innerHTML = levelOf6Upgrade
					document.getElementById('Income').innerHTML = income + ' Литров в секунду'
					document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
					document.getElementById('h1CurrentMoney').style.color = 'black'}
					else document.getElementById('h1CurrentMoney').style.color = 'red';
				}

function click7Upgrade(){ // седьмой апгрейд
					if (currentMoney >= costOf7Upgrade){
						if (levelOf7Upgrade % 25 == 0 && levelOf7Upgrade > 1) {
							income += incomeFrom7UpgradeTotal
							incomeFrom7UpgradeTotal *= 2n
							incomeFrom7UpgradePerLevel *= 2n}
						incomeFrom7UpgradeTotal += incomeFrom7UpgradePerLevel
						income += incomeFrom7UpgradePerLevel
						currentMoney -= costOf7Upgrade
						costOf7Upgrade += (costOf7Upgrade/5n)
						levelOf7Upgrade++
						document.getElementById('costOf7Upgrade').innerHTML = costOf7Upgrade
						document.getElementById('levelOf7Upgrade').innerHTML = levelOf7Upgrade
						document.getElementById('Income').innerHTML = income + ' Литров в секунду'
						document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
						document.getElementById('h1CurrentMoney').style.color = 'black'}
						else document.getElementById('h1CurrentMoney').style.color = 'red';
					}

function click8Upgrade(){ // восьмой апгрейд
						if (currentMoney >= costOf8Upgrade){
							if (levelOf8Upgrade % 25 == 0 && levelOf8Upgrade > 1) {
								income += incomeFrom8UpgradeTotal
								incomeFrom8UpgradeTotal *= 2n
								incomeFrom8UpgradePerLevel *= 2n}
							incomeFrom8UpgradeTotal += incomeFrom8UpgradePerLevel
							income += incomeFrom8UpgradePerLevel
							currentMoney -= costOf8Upgrade
							costOf8Upgrade += (costOf8Upgrade/5n)
							levelOf8Upgrade++
							document.getElementById('costOf8Upgrade').innerHTML = costOf8Upgrade
							document.getElementById('levelOf8Upgrade').innerHTML = levelOf8Upgrade
							document.getElementById('Income').innerHTML = income + ' Литров в секунду'
							document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
							document.getElementById('h1CurrentMoney').style.color = 'black'}
							else document.getElementById('h1CurrentMoney').style.color = 'red';
						}

function click9Upgrade(){ // девятый апгрейд
							if (currentMoney >= costOf9Upgrade){
								if (levelOf9Upgrade % 25 == 0 && levelOf9Upgrade > 1) {
									income += incomeFrom9UpgradeTotal
									incomeFrom9UpgradeTotal *= 2n
									incomeFrom9UpgradePerLevel *= 2n}
								incomeFrom9UpgradeTotal += incomeFrom9UpgradePerLevel
								income += incomeFrom9UpgradePerLevel
								currentMoney -= costOf9Upgrade
								costOf9Upgrade += (costOf9Upgrade/5n)
								levelOf9Upgrade++
								document.getElementById('costOf9Upgrade').innerHTML = costOf9Upgrade
								document.getElementById('levelOf9Upgrade').innerHTML = levelOf9Upgrade
								document.getElementById('Income').innerHTML = income + ' Литров в секунду'
								document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
								document.getElementById('h1CurrentMoney').style.color = 'black'}
								else document.getElementById('h1CurrentMoney').style.color = 'red';
							}

function click10Upgrade(){ // десятый апгрейд
								if (currentMoney >= costOf10Upgrade){
									if (levelOf4Upgrade % 25 == 0 && levelOf10Upgrade > 1) {
							      income += incomeFrom10UpgradeTotal
										incomeFrom10UpgradeTotal *= 2n
										incomeFrom10UpgradePerLevel *= 2n}
									incomeFrom10UpgradeTotal += incomeFrom10UpgradePerLevel
									income += incomeFrom10UpgradePerLevel
									currentMoney -= costOf10Upgrade
									costOf10Upgrade += (costOf10Upgrade/5n)
									levelOf10Upgrade++
									document.getElementById('costOf10Upgrade').innerHTML = costOf10Upgrade
									document.getElementById('levelOf10Upgrade').innerHTML = levelOf10Upgrade
									document.getElementById('Income').innerHTML = income + ' Литров в секунду'
									document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
									document.getElementById('h1CurrentMoney').style.color = 'black'}
									else document.getElementById('h1CurrentMoney').style.color = 'red';
}

function click1XpUpgrade() {//агрейд за опыт, при сработывание 1\10 шанса множит клик на click1XpUpgradeBonus значение, за каждый уровень +1 к бонусу множителя
	if (perkPoints >= costOf1XpUpgrade) {
		click1XpUpgradeBonus++;
		perkPoints -= costOf1XpUpgrade;
		costOf1XpUpgrade += (costOf1XpUpgrade/5n);
		levelOf1XpUpgrade++
	}
		else document.getElementById('perkPoints').style.color = 'red';
	}

function click2XpUpgrade() {//апгрейд за опыт для 2 скилла который берет % от инкама
	if (perkPoints >= costOf2XpUpgrade){
		perkPoints -= costOf2XpUpgrade;
		costOf2XpUpgrade += costOf2XpUpgrade/5n;
		click2XpUpgradeBonus++;
		levelOf2XpUpgrade++;
	}
	else document.getElementById('perkPoints').style.color = 'red';
}


function clickDeleteProgress () {//сброс прогресса
				let a = confirm('Выспаться?')
				if (a) {
					localStorage.clear()
					perClick = 1n
					currentMoney = 0n
					income = 0n
					perClickXp = 1n
					xp = 0n
					xpneed = 10n
					lvl = 1n
					perkPoints = 0n
					costOf1Upgrade = 10n
					costOf2Upgrade = 100n
					costOf3Upgrade = 1000n
					costOf4Upgrade = 50000n
					costOf5Upgrade = 100000n
					costOf6Upgrade = 500000n
					costOf7Upgrade = 1500000n
					costOf8Upgrade = 10000000n
					costOf9Upgrade = 100000000n
					costOf10Upgrade = 1000000000n
					costOf1XpUpgrade = 5n
					costOf2XpUpgrade = 10n
					prestigeCost = 10000n
					incomeFrom1UpgradePerLevel = 1n
					incomeFrom2UpgradePerLevel = 1n
					incomeFrom3UpgradePerLevel = 10n
					incomeFrom4UpgradePerLevel = 100n
					incomeFrom5UpgradePerLevel = 300n
					incomeFrom6UpgradePerLevel = 800n
					incomeFrom7UpgradePerLevel = 1500n
					incomeFrom8UpgradePerLevel = 10000n
					incomeFrom9UpgradePerLevel = 500000n
					incomeFrom10UpgradePerLevel = 10000000n
					click1XpUpgradeBonus = 0n
					click2XpUpgradeBonus = 0n
					incomeFrom2UpgradeTotal = 0n
					incomeFrom3UpgradeTotal = 0n
					incomeFrom4UpgradeTotal = 0n
					incomeFrom5UpgradeTotal = 0n
					incomeFrom6UpgradeTotal = 0n
					incomeFrom7UpgradeTotal = 0n
					incomeFrom8UpgradeTotal = 0n
					incomeFrom9UpgradeTotal = 0n
					incomeFrom10UpgradeTotal = 0n
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
					levelOf1XpUpgrade = 0
					levelOf2XpUpgrade = 0
					document.getElementById('Income').innerHTML = income + ' Литров в секунду'
					document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров'
					document.getElementById('hide2upgrade').style.display = 'none'
					document.getElementById('hide3upgrade').style.display = 'none'
					document.getElementById('hide4upgrade').style.display = 'none'
					document.getElementById('hide5upgrade').style.display = 'none'
					document.getElementById('hide6upgrade').style.display = 'none'
					document.getElementById('hide7upgrade').style.display = 'none'
					document.getElementById('hide8upgrade').style.display = 'none'
					document.getElementById('hide9upgrade').style.display = 'none'
					document.getElementById('hide10upgrade').style.display = 'none'
				}
			}

function prestige (){ //престиж
	let prestigeconf = confirm('Прокачать печень? Цена - ' + prestigeCost + " литров.")
	if  (currentMoney >= prestigeCost & prestigeconf) {//согласие на престиж и хватает денег
		prestigeCost *= 2n;
		currentMoney = 0n;
		income = 0n;
		perClick = 1n;
		perClickXp += 1n;
		xpneed = 10n;
		xp = 0n;
		lvl = 1n;
		perkPoints = 0n;
		incomeFrom1UpgradePerLevel += 2n;
		incomeFrom2UpgradePerLevel += 1n;
		incomeFrom3UpgradePerLevel += 3n;
		incomeFrom4UpgradePerLevel += 33n;
		incomeFrom5UpgradePerLevel += 100n;
		incomeFrom6UpgradePerLevel += 250n;
		incomeFrom7UpgradePerLevel += 500n;
		incomeFrom8UpgradePerLevel += 3000n;
		incomeFrom9UpgradePerLevel += 150000n;
		incomeFrom10UpgradePerLevel += 3000000n;
		click1XpUpgradeBonus = 0n;
		click2XpUpgradeBonus = 0n
		costOf1Upgrade = 10n;
		costOf2Upgrade = 100n;
		costOf3Upgrade = 1000n;
		costOf4Upgrade = 50000n;
		costOf5Upgrade = 100000n;
		costOf6Upgrade = 500000n;
		costOf7Upgrade = 1500000n;
		costOf8Upgrade = 10000000n;
		costOf9Upgrade = 100000000n;
		costOf10Upgrade = 1000000000n;
		costOf1XpUpgrade = 5n;
		costOf2XpUpgrade - 10n
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
		levelOf1XpUpgrade = 0;
		levelOf2XpUpgrade = 0;
		incomeFrom2UpgradeTotal = 0n;
		incomeFrom3UpgradeTotal = 0n;
		incomeFrom4UpgradeTotal = 0n;
		incomeFrom5UpgradeTotal = 0n;
		incomeFrom6UpgradeTotal = 0n;
		incomeFrom7UpgradeTotal = 0n;
		incomeFrom8UpgradeTotal = 0n;
		incomeFrom9UpgradeTotal = 0n;
		incomeFrom10UpgradeTotal = 0n;
		document.getElementById('Income').innerHTML = income + ' Литров в секунду';
		document.getElementById('h1CurrentMoney').innerHTML = currentMoney + ' Литров';
		document.getElementById('perClick').innerHTML = perClick + ' Литров за клик';
		document.getElementById('costOfUpgrade1').innerHTML = costOf1Upgrade;
		document.getElementById('costOfUpgrade2').innerHTML = costOf2Upgrade;
		document.getElementById('levelOf1Upgrade').innerHTML = levelOf1Upgrade;
		document.getElementById('levelOf2Upgrade').innerHTML = levelOf2Upgrade;
		document.getElementById('hide2upgrade').style.display = 'none'
		document.getElementById('hide3upgrade').style.display = 'none'
		document.getElementById('hide4upgrade').style.display = 'none'
		document.getElementById('hide5upgrade').style.display = 'none'
		document.getElementById('hide6upgrade').style.display = 'none'
		document.getElementById('hide7upgrade').style.display = 'none'
		document.getElementById('hide8upgrade').style.display = 'none'
		document.getElementById('hide9upgrade').style.display = 'none'
		document.getElementById('hide10upgrade').style.display = 'none'
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
		var cheatcode = BigInt(prompt('Сколько литров?'));
		if (cheatcode > 0) {//фикс чтобы не ломать игру при отказе ввода
		currentMoney += cheatcode;
	  perkPoints += cheatcode;}
		else return;
  }
  };
document.addEventListener('keydown', keyHandler, false);//считывает нажатие

var currenttime = new Date().getTime() / 1000; // для идла оффлайна
var incomeidle = Math.ceil(currenttime) - Math.ceil(localStorage.idletime);//округление и вычитание секунд
incomeidle = BigInt(incomeidle)
var vipil = incomeidle * income
console.log(incomeidle)

if (localStorage.idletime < currenttime ) {
	currentMoney += vipil;
	// alert('Пока ты спал, Олег Выпил ' + vipil + " литров!" );//прибавка инкама и показ сколько при входе
}
else console.log('бывает...')// такое реально?

function openSkillTree() {
	document.getElementById('skillTree').style.display = 'flex';
}

function closeSkillTree() {
		document.getElementById('skillTree').style.display = 'none';
}
