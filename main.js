const API_KEY = '73b55a4c6a9b410490b135541241309';

const countryName = document.getElementById('country-name');
const country = document.getElementById('country');
const btn = document.getElementById('btn');
const statusText = document.getElementById('status');
const statusIcon = document.getElementById('condition-icon');
const cel = document.querySelector('#cel span');
const fer = document.querySelector('#fer span');

async function getTheWeatherInfo(currentCountry) {
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentCountry}&aqi=no`
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}

window.onload = () => {
    start('London')
}

async function start(currentCountry) {
    const weatherInfo = await getTheWeatherInfo(currentCountry);
    countryName.innerHTML = weatherInfo.location.name;
    statusText.innerHTML = weatherInfo.current.condition.text;
    statusIcon.src = weatherInfo.current.condition.icon;
    cel.innerText = weatherInfo.current.temp_c;
    fer.innerHTML = weatherInfo.current.temp_f;
}

btn.addEventListener('click', () => {
    start(country.value);
})