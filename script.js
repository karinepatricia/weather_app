const apikey = "cbbbb01510e2eb3b9f354d9f79769f89";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector(".error").style.display = "none";

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
    }
}

searchbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
        }
    });

    searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
    });
    