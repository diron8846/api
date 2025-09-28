
document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value.trim();
    const weatherResult = document.getElementById('weatherResult');

    if (!city) {
        weatherResult.textContent = 'Please enter a city name.';
        return;
    }

    weatherResult.textContent = 'Be patient.... fetching weather data...';

    try {
        const response = await fetch(`http://wttr.in/${city}?format=3`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        weatherResult.textContent = data;
    } catch (error) {
        weatherResult.textContent = 'Failed to fetch weather data. Please try again later.';
        console.error('Fetch error:', error);
    }
});
