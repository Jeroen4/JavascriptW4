alert("U dient de volgende vragen te beantwoorden met ja of nee.");
var Question = prompt("Is de kaas geel?","ja of nee");
var Question2;
var Question3;
var Question4;
var Question5;
var Question6;
var Question7;

if (Question == 'ja'){
	Question2 = prompt("Zitten er gaten in?","ja of nee")
}else if(Question == 'nee'){
	Question3 = prompt("Heeft de kaas blauwe schimmels?","ja of nee")
}

if (Question2 == 'ja') {
	Question4 = prompt("Is de kaas belachelijk duur?","ja of nee")
}else if(Question2 == 'nee'){
	Question5 = prompt("Is de kaas zo hard als steen?","ja of nee")
}

if (Question3 == 'ja'){
	Question6 = prompt("Heeft de kaas een korst?","ja of nee")
}else if(Question3 == 'nee'){
	Question7 = prompt("Heeft de kaas een korst?","ja of nee")
}

if(Question7 == 'ja'){
	document.write("Camembert")
}else if(Question7 == 'nee'){
	document.write("Mozarella")
}


if(Question6 == 'ja'){
	document.write("Bleu de Rochbaron")
}else if(Question6 == 'nee'){
	document.write("Fourme d'Ambert")
}

if(Question5 == 'ja'){
	document.write("Parmigiano Reggiano")
}else if(Question5 == 'nee'){
	document.write("Goudse kaas")
}

if(Question4 == 'ja'){
	document.write("Emmenthaler")
}else if(Question4 == 'nee'){
	document.write("Leerdammer")
}



