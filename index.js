const apiKey = "3b7084b42eb122bd128b1f328919595f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    try {
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await res.json();

        // Update HTML elements with weather data
        $(".city").text(data.name);
        $(".temp").text(Math.round(data.main.temp) + "°C");
        $(".humidity").text(data.main.humidity + "%");
        $(".wind").text(data.wind.speed + " Km/h");

        let weathUpdate = (data.weather[0].main);

        if (weathUpdate == 'Clear') {
            $(".weather-icon").attr("src", "images/clear.png");
        }
        else if (weathUpdate == 'Clouds') {
            $(".weather-icon").attr("src", "images/clouds.png");
        }
        if (weathUpdate == 'Drizzle') {
            $(".weather-icon").attr("src", "images/drizzle.png");
        }
        if (weathUpdate == 'Mist') {
            $(".weather-icon").attr("src", "images/mist.png");
        }
        if (weathUpdate == 'Snow') {
            $(".weather-icon").attr("src", "images/snow.png");
        }
        if (weathUpdate == 'Rain') {
            $(".weather-icon").attr("src", "images/rain.png");
        }
        if (weathUpdate == 'Smoke') {
            $(".weather-icon").attr("src", "images/smoke.png");
        }


        console.log(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

$(document).ready(function () {

    $("#cityInput").keypress(function (e) {
        if (e.which === 13) {
            $(".search button").click();
        }
    });

    $(".search button").click(function () {
        let cityName = $(".search input").val();
        checkWeather(cityName);
    });
});

