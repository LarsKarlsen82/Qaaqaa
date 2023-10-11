// weatherApi.js
import apiKey from './js/apiKey.js';

export async function fetchWeatherData(city) {
    try {
        // Konstruerer URL til API-anmodning med den specificerede by og API-nøglen.
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        // Sender en asynkron anmodning til OpenWeatherMap API.
        const response = await fetch(url);
        
        // Parser JSON-svaret fra API-anmodningen.
        const data = await response.json();

        // Hvis API-anmodningen returnerer status 404 (byen blev ikke fundet),
        // returneres null for at angive, at ingen data blev fundet for den angivne by.
        if (response.status === 404) {
            return null;
        }

        // Returnerer vejroplysningerne fra API-anmodningen.
        return data;
    } catch (error) {
        // Hvis der opstår en fejl under hentning af data, kastes en fejl med en fejlbesked.
        throw new Error('Error fetching weather data:', error);
    }
}

