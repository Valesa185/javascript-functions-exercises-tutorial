let dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let medium = dollarToEuro (137);
console.log(euroToYen(medium));

// console.log(euroToYen(dollarToEuro (137)));
// Otra forma de hacerlo mas optimizado