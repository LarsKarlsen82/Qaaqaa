// main.js
//import { fetchWeatherData } from './assets/js/module/weatherApi.js';
//import { updateWeatherUI } from './assets/js/weatherDisplay.js';
import { fetchWeatherData } from '/module/weatherApi.js';
import { updateWeatherUI } from '/weatherDisplay.js';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// Lytter efter klik på søgeknappen.
searchBtn.addEventListener('click', async () => {
    // Henter bynavnet fra søgeboksen (searchBox).
    const city = searchBox.value;
    try {
        // Forsøger at hente vejroplysninger for den indtastede by ved hjælp af fetchWeatherData-funktionen.
        const weatherData = await fetchWeatherData(city);
        // Hvis vejroplysninger er tilgængelige (weatherData er sandt), opdateres UI'en med disse oplysninger.
        if (weatherData) {
            updateWeatherUI(weatherData, weatherIcon);
        } else {
            // Hvis byen ikke findes, vises en fejlmeddelelse, og vejrelementet skjules.
            document.querySelector('.error').textContent = 'City not found';
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }
    } catch (error) {
        // Hvis der opstår en fejl under hentning af vejroplysninger, vises en fejlmeddelelse, og vejrelementet skjules.
        console.error('Error fetching weather data:', error);
        document.querySelector('.error').textContent = 'Error fetching weather data';
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
});
