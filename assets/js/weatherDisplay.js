// Funktionen updateWeatherUI modtager data om vejret og et element til at vise vejrikon.
export function updateWeatherUI(data, weatherIconElement) {
    // Udpakker de relevante oplysninger fra data-objektet.
    const { name, main, wind, weather } = data;

    // Opdaterer HTML-elementer med vejroplysningerne.
    document.querySelector('.city').innerHTML = name; // Opdaterer bynavnet.
    document.querySelector('.temp').innerHTML = Math.floor(main.temp) + '°C'; // Viser temperaturen som heltal uden decimaler.
    document.querySelector('.humidity').innerHTML = main.humidity + '%'; // Viser luftfugtigheden.
    
    // Assuming wind.speed is in kilometers per hour (km/h)
    let windSpeedKmh = wind.speed; // Replace this with your actual wind speed in km/h

    // Convert wind speed from km/h to m/s and round down to the nearest whole number
    let windSpeedMs = Math.floor(windSpeedKmh * (1000 / 3600));

    // Display wind speed in meters per second as a whole number
    document.querySelector('.wind').innerHTML = windSpeedMs + ' m/s';


    // Henter vejrbetingelsen (f.eks. Skyet, Solrigt, Regn) og opdaterer vejrikon baseret på betingelsen.
    const weatherCondition = weather[0].main;
    updateWeatherIcon(weatherCondition, weatherIconElement);

    // Viser vejrelementet og skjuler fejlmeddelelsen.
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
}

// Funktionen updateWeatherIcon opdaterer vejrikonet baseret på vejrbetingelsen.
function updateWeatherIcon(condition, weatherIconElement) {
    // Bruger en switch-sætning til at vælge det passende ikon baseret på vejrbetingelsen.
    switch (condition) {
        case 'Clouds':
            weatherIconElement.src = './assets/images/clouds.png'; // Opdaterer vejrikon til skyet vejr.
            break;
        case 'Clear':
            weatherIconElement.src = './assets/images/clear.png'; // Opdaterer vejrikon til klart vejr.
            break;
        case 'Rain':
            weatherIconElement.src = './assets/images/rain.png'; // Opdaterer vejrikon til regnfuldt vejr.
            break;
        case 'Sunny':
            weatherIconElement.src = './assets/images/sunny.png'; // Opdaterer vejrikon til solrigt vejr.
            break;
        case 'scattered clouds':
            weatherIconElement.src = './assets/images/scattered.png'; // Opdaterer vejrikon til let skydække.
            break;
        default:
            weatherIconElement.src = './assets/images/default.png'; // Hvis betingelsen ikke passer, vises et standardikon.
            break;
    }
}