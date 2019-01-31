var temp = function(celcius) {
  return ((celcius*(9/5))+32)
}
var celcius = parseInt(prompt("Enter temperature in celcius"));
var tempResult = temp(celcius);
alert(tempResult);
