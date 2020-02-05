window.addEventListener("load", start, false);

function start() {
	let btn = document.getElementById("btn");

	btn.addEventListener(
		"click",
		function() {
			// Don't use!
			var name = window.prompt("Enter your name");
			document.getElementById("click_me").innerHTML = '<h1>' + name + '</h1>';
		}, false);

	var a = 10;
	var b = 15;
	var sum = a + b;

	document.getElementById("six").innerHTML = "<p>As integers: " + a + " + " + b + " = " + sum + "</p>";
	a = "10";
	b = "15";
	sum = a + b;
	document.getElementById("six2").innerHTML = "<p>As strings: " + a + " + " + b + " = " + sum + "</p>";



	for (var level = 1; level < 7; level++) {
		document.getElementById("sev"+level).innerHTML = "<h"+ level +">Welcome to HTML5!</h"+ level +">";  
	}


	var countBy = 18;
	var maxNum = 100;
	var count = 0;
	document.getElementById("eig").innerHTML = "Counting by " + countBy + " up to a max of " + maxNum;
	while (true) {
		count += 1;
		if (count > maxNum) { 
		  break;
		} else if (count % countBy != 0) {
		  continue;
		} else {
		  document.getElementById("eig2").innerHTML += "<li>" + count + "</li>";  
		}
	}


}
