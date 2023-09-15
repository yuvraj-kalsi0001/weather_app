const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cc1b422770msh742f7efcee5f86cp1f8e74jsn07d27a8e6fda',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

const getWeather = (city) => {

    cityName.innerHTML = city
    fetch(url + city, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            tempB.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidityB.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp 
            max_temp.innerHTML = response.max_temp 
            wind_speed.innerHTML = response.wind_speed
            windB.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            return response

        })
        .catch(error => {
            console.error(error);
        });
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

const getWeatherForOtherCities = (cities) =>{

    for (let i=1; i<5; i++){

        console.log(cities[i])
                
    

    fetch(url + cities[i-1], options)
        .then(response => response.json())
        .then(response => {
           
            document.getElementById("temp"+i).innerHTML = response.temp
            document.getElementById("feels"+i).innerHTML = response.feels_like
            document.getElementById("humid"+i).innerHTML = response.humidity
            document.getElementById("wind"+i).innerHTML = response.wind_speed
            document.getElementById("degree"+i).innerHTML = response.wind_degrees
            document.getElementById("set"+i).innerHTML = response.sunset
            document.getElementById("rise"+i).innerHTML = response.sunrise

        })
        .catch(error => {
            console.error(error);
        })}
}

getWeatherForOtherCities(["toronto", "vancouver", "edmonton", "winnipeg"])

getWeather("Gander")


// getWeatherForOtherCities("toronto")

// // console.log(document.getElementsByClassName("otherCities")[1].innerHTML)
// console.log(getWeatherForOtherCities("toronto").temp)


// Array.from(document.getElementsByClassName('otherCities')).forEach((city) => {
//     // console.log(city.innerHTML)
//     Array.from(document.getElementsByClassName('temp1')).forEach((temp) => {
//         // console.log(temp.innerHTML)
//         if (temp.innerHTML == "") {

//             console.log(getWeatherForOtherCities("toronto"));
//         }
    
// })

// })



