import { Weather } from "./Weather";
import { titleCase } from "./helpers";

const form = document.querySelector('form');
const themeBtn = document.getElementById('theme-btn');
const tempTypeBtn = document.getElementById('temp-type-btn')
let tempType = '°C';

const displayWeather = () => {
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const desc = document.getElementById('desc');
    const icon = document.getElementById('icon');

    city.textContent = Weather.getCity();
    if (tempType === '°C') {
        temp.textContent = Weather.getTempC() + ' °C';
    } else {
        temp.textContent = Weather.getTempF() + ' °F';
    }
    desc.textContent = titleCase(Weather.getDesc());
    icon.src = `http://openweathermap.org/img/wn/${Weather.getIcon()}@2x.png`;
}

const displayDefaultWeather = async () => {
    await Weather.setWeather('Waterloo');
    displayWeather();
}

form.addEventListener('submit', async (e) => {
    const city = document.getElementById('city-input').value;
    e.preventDefault();
    await Weather.setWeather(city);
    displayWeather();
    form.reset();
});

tempTypeBtn.addEventListener('click', () => {
    tempType = (tempType === '°C') ? '°F' : '°C';
    tempTypeBtn.textContent = tempType;
    displayWeather();
});

themeBtn.addEventListener('click', () => {
    const root = document.querySelector(':root');
    if (root.classList.contains('light')) {
        root.classList.remove('light');
        root.classList.add('dark');
        themeBtn.textContent = 'dark_mode';
    } else {
        root.classList.remove('dark');
        root.classList.add('light');
        themeBtn.textContent = 'light_mode';
    }
});

form.reset();
displayDefaultWeather();