document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
  
    // Check if the input is a valid number
    if (isNaN(tempInput) || tempInput === "") {
      resultDiv.innerHTML = "Invalid Input";
      return;
    }
  
    const temperature = parseFloat(tempInput);
  
    let convertedTemp = '';
    let convertedUnit = '';
  
    if (unit === 'Celsius') {
      convertedTemp = (temperature * 9/5) + 32;
      convertedUnit = '°F';
      const toKelvin = temperature + 273.15;
      resultDiv.innerHTML = `${convertedTemp.toFixed(2)} ${convertedUnit} / ${toKelvin.toFixed(2)} K`;
    } else if (unit === 'Fahrenheit') {
      convertedTemp = (temperature - 32) * 5/9;
      convertedUnit = '°C';
      const toKelvin = ((temperature - 32) * 5/9) + 273.15;
      resultDiv.inndocument.getElementById('convertButton').addEventListener('click', function() {
        const tempInput = document.getElementById('temperatureInput').value;
        const unit = document.getElementById('unitSelect').value;
        const resultDiv = document.getElementById('result');
      
        // Validate the input
        if (isNaN(tempInput) || tempInput === "") {
          resultDiv.innerHTML = "Invalid Input";
          return;
        }
      
        const temperature = parseFloat(tempInput);
      
        let convertedTemp = '';
        let convertedUnit = '';
      
        if (unit === 'Celsius') {
          const toFahrenheit = (temperature * 9/5) + 32;
          const toKelvin = temperature + 273.15;
          resultDiv.innerHTML = `${temperature.toFixed(2)} °C = ${toFahrenheit.toFixed(2)} °F or ${toKelvin.toFixed(2)} K`;
        } else if (unit === 'Fahrenheit') {
          const toCelsius = (temperature - 32) * 5/9;
          const toKelvin = (temperature - 32) * 5/9 + 273.15;
          resultDiv.innerHTML = `${temperature.toFixed(2)} °F = ${toCelsius.toFixed(2)} °C or ${toKelvin.toFixed(2)} K`;
        } else if (unit === 'Kelvin') {
          const toCelsius = temperature - 273.15;
          const toFahrenheit = (temperature - 273.15) * 9/5 + 32;
          resultDiv.innerHTML = `${temperature.toFixed(2)} K = ${toCelsius.toFixed(2)} °C or ${toFahrenheit.toFixed(2)} °F`;
        }
      });
      erHTML = `${convertedTemp.toFixed(2)} ${convertedUnit} / ${toKelvin.toFixed(2)} K`;
    } else if (unit === 'Kelvin') {
      convertedTemp = temperature - 273.15;
      const toFahrenheit = (temperature - 273.15) * 9/5 + 32;
      convertedUnit = '°C';
      resultDiv.innerHTML = `${convertedTemp.toFixed(2)} ${convertedUnit} / ${toFahrenheit.toFixed(2)} °F`;
    }
  });
  