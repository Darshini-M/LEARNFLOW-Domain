const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.cities');

//Default city when page loads
let cityInput = "Chennai";
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //Change from default city to the cliched one
        cityInput = e.target.innerHTML;
        /*Function that fetches and display
        all the data from the Weather API
        (We will write it soon) */
        fetchWeatherData();
        //Fade out the app (simple animation)
        app.style.opacity = "0";
    });
})

//Add submit event to the form
form.addEventListener('submit', (e) => {
    /*If the input field (search bar) is empty, throw on alert*/
    if(search.value.length == 0) {
    alert('Please type in a city name');
    } else {
    /*Change fron default city to the one written in the input field*/
    cityInput = search.value;
    /*Function that fetches and displays all the data from the leather API (We will write it soon)*/
    fetchWeatherData();
    //Remove all text from the input field
    search.value = "";
    //Fade out the opp (simple orination)
    app.style.opacity = "0";
    }
    e.preventDefault();
});

/*"Function that returns a day of the week
(Monday, Tuesday, Friday...) from a date (12 03 2021) We will use this function Later*/
function dayOfTheWeek (day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ];
        return weekday [new Date(`$(day)/${month}/$[year]`).getDay()];
      }; 

      /*Function that fetches and displays
        the data from the weather API"*/
        function fetchWeatherData() {
            fetch(``)
        }