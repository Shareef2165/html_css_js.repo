// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=3ba0e5eedae49070b51c85ad8c30def0&units=metric"; // Base URL
// // const apiKey = "YOUR_API_KEY"; // Replace with your API key

// async function checkWeather(city) {
//     try {
//         const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`); // Properly formatted URL with units in metric

//         if (response.status === 404) {
//             document.querySelector(".error").style.display = "block";
//             document.querySelector(".weather").style.display = "none";
//         } else {
//             const data = await response.json();

//             document.querySelector(".city").textContent = data.name;
//             document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
//             document.querySelector(".humidity").textContent = data.main.humidity + "%";
//             document.querySelector(".wind").textContent = data.wind.speed + " km/h";

//             // Change weather icon based on the weather condition
//             switch (data.weather[0].main) {
//                 case "Clouds":
//                     weatherIcon.src = "./clouds.png";
//                     break;
//                 case "Clear":
//                     weatherIcon.src = "./clear.png";
//                     break;
//                 case "Rain":
//                     weatherIcon.src = "./rain.png";
//                     break;
//                 case "Drizzle":
//                     weatherIcon.src = "./drizzle.png";
//                     break;
//                 case "Mist":
//                     weatherIcon.src = "./mist.png";
//                     break;
//                 default:
//                     weatherIcon.src = "./default.png"; // Fallback icon
//             }

//             document.querySelector(".weather").style.display = "block";
//             document.querySelector(".error").style.display = "none";
//         }
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// // Event listener for search button
// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });



// const apiKey = 'REPLACE YOUR OWN API KEY HERE'
// FOR API KEY
// Go to the link-  https://home.openweathermap.org/api_keys
// Sign in
// find your api key

// Function to fetch weather data dynamically based on the city parameter
async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ba0e5eedae49070b51c85ad8c30def0&units=metric`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch weather data");
        }
        const data = await response.json();
        console.log(data);
        console.log(data.main.temp);
        console.log(data.name);
        console.log(data.wind.speed);
        console.log(data.main.humidity);
        console.log(data.visibility);
        updateWeatherUI(data);
    } catch (error) {
        console.error(error);
    }
}

// Selecting elements to update UI
const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility-distance");

const descriptionText = document.querySelector(".description-text");
const date = document.querySelector(".date");
const descriptionIcon = document.querySelector(".description i");

// Update UI function to display weather data
function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    descriptionText.textContent = data.weather[0].description;

    // Format the current date
    const currentDate = new Date();
    date.textContent = currentDate.toDateString();

    // Update the weather icon based on weather condition
    const weatherIconName = getWeatherIconName(data.weather[0].main);
    descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`;
}

// Event listener for search form submission
const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const city = inputElement.value.trim();
    if (city !== "") {
        fetchWeatherData(city); // Pass the user-input city to fetchWeatherData
        inputElement.value = ""; // Clear the input field
    }
});

// Map weather conditions to Material Icons
function getWeatherIconName(weatherCondition) {
    const iconMap = {
        Clear: "wb_sunny",
        Clouds: "wb_cloudy",
        Rain: "umbrella",
        Thunderstorm: "flash_on",
        Drizzle: "grain",
        Snow: "ac_unit",
        Mist: "cloud",
        Smoke: "cloud",
        Haze: "cloud",
        Fog: "cloud",
    };

    // Return the corresponding icon or a default if not found
    return iconMap[weatherCondition] || "help";
}
