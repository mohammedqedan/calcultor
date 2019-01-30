var bmi = function(weight, height) {
  return (weight/((Math.pow(height,2)))*703)
}

var weight = parseInt(prompt("Enter your weight:"));
var height = parseInt(prompt("Enter your height:"));
var bmiResult = bmi(weight, height);
alert(bmiResult);
