const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

    //Default city when page loads
    let cityInput = "Chennai";

    cities.forEach((city) => {
        city.addEventListener('click', (e) => {
            //Change from default city to the clicked one
            cityInput = e.target.innerHTML;
            fetchWeatherData();
            //Fade out the app (simple animation)
            app.style.opacity = "0";
        });
    });
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
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ];
        return weekday[new Date(`${day}/${month}/${year}`).getDay()];
      }; 
      

      /*Function that fetches and displays
        the data from the weather API"*/
        function fetchWeatherData() {
            fetch(`https://api.weatherapi.com/v1/current.json?key=b82a655733384ef0b3292532231312&q=${cityInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                temp.innerHTML = data.current.temp_c +"&#176;";
                conditionOutput.innerHTML = data.current.condition.text;

                 const date = new Date(data.location.localtime);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        const dateTimeString = `${formattedTime} - ${formattedDate}`;
        timeOutput.innerHTML = dateTimeString;
                nameOutput.innerHTML = data.location.name;
                
                const iconId = data.current.condition.icon.substr(
                    "//cdn.weatherapi.com/weather/64*64/".length);
                    icon.src = "./icons/" + iconId;

                    cloudOutput.innerHTML = data.current.cloud + "%";
                    humidityOutput.innerHTML = data.current.humidity + "%";
                    windOutput.innerHTML = data.current.wind_kph + "km/h";

                    let timeOfDay= "day";
                    const code = data.current.condition.code;

                    if(!data.current.is_day){
                        timeOfDay = "night";
                    }
                    if(code == 1000){
                        app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
                        btn.style.background = "#e5ba92";
                        if(timeOfDay == "night"){
                            btn.style.background ="181e27";
                        }
                    }
                    else if (
                        code == 1003 ||
                        code == 1006 ||
                        code == 1009 ||
                        code == 1030 ||
                        code == 1069 ||
                        code == 1087 ||
                        code == 1135 ||
                        code == 1273 ||
                        code == 1276 ||
                        code == 1279 ||
                        code == 1282 
                    ) {
                        app.style.backgroundImage = `url(./images/${timeOfDay}/cloudy.jpg)`;
                        btn.style.background = "#fa6d1b";
                        if(timeOfDay == "night"){
                            btn.style.background = "#181e27";
                        }
                    }
                        else if (
                            code == 1063 ||
                            code == 1069 ||
                            code == 1072 ||
                            code == 1150 ||
                            code == 1153 ||
                            code == 1180 ||
                            code == 1183 ||
                            code == 1186 ||
                            code == 1189 ||
                            code == 1192 ||
                            code == 1195 ||
                            code == 1204 ||
                            code == 1207 ||
                            code == 1240 ||
                            code == 1243 ||
                            code == 1246 ||
                            code == 1249 ||
                            code == 1252
                        ) {
                            app.style.backgroundImage = `url(./images/${timeOfDay}/rainy.jpg)`;
                            btn.style.background = "#647d75";
                            if(timeOfDay == "night") {
                                btn.style.background = "#325c80";
                            }
                        }
                        else {
                            app.style.backgroundImage = `url(./images/${timeOfDay}/snowy.jpg)`;
                            btn.style.background ="#4d72aa";
                            if(timeOfDay == "night") {
                                btn.style.background = "#1b1b1b";
                            }
                        }
                    
                        app.style.opacity = "1";
                    })
                    .catch(() => {
                        alert('City not found, please try again');
                        app.style.opacity = "1";
                    });
        }
        fetchWeatherData();
        app.style.opacity="1";
