winner = document.getElementById('winner');

function B20() {
	let balance = localStorage.getItem('myValue') || 0;
	balance = parseInt(balance, 10) + 20;
	localStorage.setItem('myValue', balance);
	document.getElementById('balance').textContent = balance;
}
function B50() {
	let balance = localStorage.getItem('myValue') || 0;
	balance = parseInt(balance, 10) + 50;
	localStorage.setItem('myValue', balance);
	document.getElementById('balance').textContent = balance;
}

function B80() {
	let balance = localStorage.getItem('myValue') || 0;
	balance = parseInt(balance, 10) + 80;
	localStorage.setItem('myValue', balance);
	document.getElementById('balance').textContent = balance;
}

function B100() {
	let balance = localStorage.getItem('myValue') || 0;
	balance = parseInt(balance, 10) + 100;
	localStorage.setItem('myValue', balance);
	document.getElementById('balance').textContent = balance;
}
function B500() {
	let balance = localStorage.getItem('myValue') || 0;
	balance = parseInt(balance, 10) + 500;
	localStorage.setItem('myValue', balance);
	document.getElementById('balance').textContent = balance;
}
myZarib = document.getElementById('zarib');
myZarib.addEventListener("change",()=>{
	const selectedZarib = myZarib.value;
});

btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
	winner.innerHTML = "";

	if (localStorage.getItem('myValue') - myZarib.value * 10 < 0) {
		alert("you dont have enough money")
	}
	else{

		let balance = localStorage.getItem('myValue') || 0;
		balance = parseInt(balance, 10) - myZarib.value * 10 ;
		localStorage.setItem('myValue', balance);
		document.getElementById('balance').textContent = balance;

		number1 = document.getElementById("number1");
		number2 = document.getElementById("number2");
		number3 = document.getElementById("number3");


		number1Ran = Math.floor(Math.random() * 10);
		number2Ran = Math.floor(Math.random() * 10);
		number3Ran = Math.floor(Math.random() * 10);
		console.log(number1Ran)
		console.log(number2Ran)
		console.log(number3Ran)

		count1 = -1;
		number1Project = setInterval(function(){
			count1 ++;
			number1.innerHTML = count1;
			if (count1 == number1Ran) {
				clearInterval(number1Project)
			}
		},80);

		count2 = -1;
		number2Project = setInterval(function(){
			count2 ++;
			number2.innerHTML = count2;
			if (count2 == number2Ran) {
				clearInterval(number2Project)
			}
		},80);

		count3 = -1;
		number3Project = setInterval(function(){
			count3 ++;
			number3.innerHTML = count3;
			if (count3 == number3Ran) {
				clearInterval(number3Project)
			}
		},80);


		if (number1Ran == number2Ran && number1Ran== number3Ran) {
			
			if (myZarib.value == 10) {
				let balance = localStorage.getItem('myValue') || 0;
				balance = parseInt(balance, 10) + myZarib.value * 1010;
				localStorage.setItem('myValue', balance);
				document.getElementById('balance').textContent = balance;
				winner.innerHTML = `you won ${myZarib.value * 1000}$`;
			}
			else{
				let balance = localStorage.getItem('myValue') || 0;
				balance = parseInt(balance, 10) + myZarib.value * 610 ;
				localStorage.setItem('myValue', balance);
				document.getElementById('balance').textContent = balance;
				winner.innerHTML = `you won ${myZarib.value * 600}$`;
			}
		}
	}
	btn.disabled = true;
	btn.classList.remove('btn')
    btn.classList.add('disable')
    setTimeout(function(){
      	btn.disabled = false;
      	btn.classList.remove('disable')
      	btn.classList.add('btn')
    },1000);
})
document.getElementById('balance').textContent = localStorage.getItem('myValue') || 0;