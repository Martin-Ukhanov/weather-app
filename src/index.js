import { Weather } from "./Weather";

const getWeather = async (name) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=e8bacfd32e9398972f090cbb6a4c50a2`, {mode: 'cors'});
        const data = await response.json();
        const weather = Weather(data.name, data.main.temp, data.weather[0].description);
        return weather;
    } catch {
        alert('Error');
    }
}