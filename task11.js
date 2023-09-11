//temperature Conversion
// Step a: Store a Celsius temperature into a variable.
const celsiusTemperature = 25; // Replace with your desired Celsius temperature

// Step b: Convert it to Fahrenheit & output "NoC is NoF".
const fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
//console.log(+celsiusTemperature,"°C is"+fahrenheitTemperature,"°F");

// Step c: Now store a Fahrenheit temperature into a variable.
const fahrenheitTemperature2 = 77; // Replace with your desired Fahrenheit temperature

// Step d: Convert it to Celsius & output "NoF is NoC".
const celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
console.log(`${fahrenheitTemperature2}°F is ${celsiusTemperature2}°C`);
