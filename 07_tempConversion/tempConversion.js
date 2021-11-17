//converts temperature from Fahrenheit to Celsius



const ftoc = function(farenheitTemperature) {
  /*no native function in js to round to certain number of decimals
  js round function only rounds to nearest integer */
  return ((Math.round(((farenheitTemperature - 32) * 5/9) * 10)) / 10);
};

//converts temperature from Celsius to Fahrenheit

const ctof = function(celsiusTemperature) {
  /*no native function in js to round to certain number of decimals
  js round function only rounds to nearest integer */
  return (Math.round(((celsiusTemperature * 9/5) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
