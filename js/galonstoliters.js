var liters = function(galons) {
  return (galons*3.78541)
}
var galons = parseInt(prompt("How many glons to Liters"));
var LiterResult = liters(galons);
alert(LiterResult+" Liters");
