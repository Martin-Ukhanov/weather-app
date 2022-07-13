const Weather = (() => {
    let city = undefined;
    let temp = undefined;
    let desc = undefined;
    let icon = undefined;

    const setWeather = async (cityName) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e8bacfd32e9398972f090cbb6a4c50a2`, {mode: 'cors'});
            if (!response.ok) throw new Error(`City ${cityName} not found.`);
            const data = await response.json();
            city = data.name;
            temp = Math.round(data.main.temp);
            desc = data.weather[0].description;
            icon = data.weather[0].icon;
        } catch (error) {
            alert(error);
        }
    }

    const getCity = () => city;
    const getTempC = () => temp;
    const getTempF = () => Math.round(temp * 1.8 + 32);
    const getDesc = () => desc;
    const getIcon = () => icon;

    return { setWeather, getCity, getTempC, getTempF, getDesc, getIcon };
})();

export { Weather };