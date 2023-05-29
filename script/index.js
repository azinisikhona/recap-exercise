// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let Temperature = (temperature * 9/5) + 32;
    console.log(Temperature);
    let output = document.getElementById("output");
    output.value = Temperature;
}
  
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let Temperature = (temperature -32) * 5/9;
    console.log(Temperature);
}
  
// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    celsiusToFahrenheit();
} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    fahrenheitToCelsius();
} else {
    alert("Invalid conversion type.");
}
