document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'your_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} °C</p>
            `;
        })
        .catch(error => console.error('Error:', error));
});
