let x = 10
let gloval_lastPass = ''
let y = 0 // log counter

function pasgen() {

	const allSymbols = ['1','2','3','4','5','6','7','8','9','0',
	'q','Q','w','W','E','e','r','R','t','T','y','Y','u','U','i','I','o','O','P','p',
	'a','A','s','S','d','D','f','F','g','G','h','H','j','J','k','K','l','L',
	'z','Z','x','X','c','C','v','V','b','B','n','N','m','M']; // ростик задал массив для всех знаков и чисел ; UPDATE: а можно было через строку..............хех

	let pass = '' // ростик задал переменную в которой хранится пароль
	let random = '' // и переменную в которую берется 1 случайный знак

	for (let n = 0; n < x; n++) // ростик задал цикл - заLOOPил функцию)))))
		{
			random = Math.floor(Math.random() * allSymbols.length) //ростик взял случайный элемент массива
			pass += allSymbols[random] // и захуячил в переменную pass
		}

	lastPass = pass
	return pass // ростик вернул пароль
	return lastPass
	

	//document.getElementById("password").innerHTML = pasgen(); // вывод из-под функции не пашет. либо я даун
}




	function sixSymb(){
		x = 6
		document.getElementById("password").innerHTML = pasgen()
		y++
		if (y >= 25) {	
			document.getElementById("paslog").innerHTML = 'password log: <br>'
			y = 0}
		else 
			{document.getElementById("paslog").innerHTML += lastPass + '<br>'}
		
	}
	function eightSymb(){
		x = 8
		document.getElementById("password").innerHTML = pasgen()
		y++
		if (y >= 25) {	
			document.getElementById("paslog").innerHTML = 'password log: <br>'
			y = 0}
		else 
			{document.getElementById("paslog").innerHTML += lastPass + '<br>'}
		
	}
	function tenSymb(){
		x = 10
		document.getElementById("password").innerHTML = pasgen()
		y++
		if (y >= 25) {	
			document.getElementById("paslog").innerHTML = 'password log: <br>'
			y = 0}
		else 
			{document.getElementById("paslog").innerHTML += lastPass + '<br>'}
		
	}
	function twelveSymb(){
		x = 12
		document.getElementById("password").innerHTML = pasgen()
		y++
		if (y >= 25) {	
			document.getElementById("paslog").innerHTML = 'password log: <br>'
			y = 0}
		else 
			{document.getElementById("paslog").innerHTML += lastPass + '<br>'}
		
	}



// чисто ебашу по функции на каждую кнопку