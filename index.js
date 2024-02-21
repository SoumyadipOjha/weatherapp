const API_KEY = "e2a99d0ed47ae6125a74988a9fbc24b1";

    // Function to display weather data
    async function showWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        console.log(data);


        var temp = ((data?.main?.temp - 273.15)).toFixed(2);
        document.getElementById('temperature').textContent = temp + '°C';

        document.getElementById('humidity_result').textContent = data?.main?.humidity + '%';
        document.getElementById('wind_result').textContent = data?.wind?.speed + 'km/H';
        document.getElementById('cloud_result').textContent = data?.clouds?.all + '%';
        document.getElementById('description').textContent = data?.weather[0]?.description;
        document.getElementById('description_icon').src = "http://openweathermap.org/img/wn/" + data?.weather[0]?.icon + ".png";
        document.getElementById('country').textContent = data?.sys?.country;
        var countryIcon = document.getElementById('country_icon');
        var country = data?.sys?.country?.toLowerCase(); // Use 'data' instead of 'weatherInfo'

        if (country) {
            countryIcon.src = `https://flagcdn.com/144x108/${country}.png`;
        }
    }

    // Add event listener to the submit button
    document.getElementById('btn').addEventListener('click', function () {
        const city = document.getElementById('city').value;
        showWeather(city);
    });