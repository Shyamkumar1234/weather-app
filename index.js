

let weatherImage = document.getElementById('weatherImage');
let tempText = document.getElementById('tempText');
// let cityName = document.getElementById('cityName');
let searchbtn = document.getElementById('searchbtn');


let apikey = "07de7b0f305fe356e7a70ebfef42d840";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let currcityName = "germany"

searchbtn.addEventListener('click',()=>{
    let searchCity = document.getElementById('searchCity').value;
    currcityName = searchCity;
    if(currcityName == ""){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }else{
        checkWeather();
        document.querySelector('.error').style.display = "none"
    }
    
})

//units=metric&

async function checkWeather(){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + currcityName +"&appid=" +apikey);
    let data = await response.json();
    console.log(data);
    if(data.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }else{
        document.querySelector('.weather').style.display = "block"
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h";

    if(data.weather[0].main == 'Clouds'){
        document.querySelector('.weather-icon').src = "clouds.png"
    }
    else if(data.weather[0].main =='Clear'){
        document.querySelector('.weather-icon').src = "clear.png"
    }
    else if(data.weather[0].main =='Drizzle'){
        document.querySelector('.weather-icon').src = "drizzle.png"
    }
    else if(data.weather[0].main =='Rain'){
        document.querySelector('.weather-icon').src = "rain.png"
    }
    else if(data.weather[0].main =='Snow'){
        document.querySelector('.weather-icon').src = "snow.png"
    }
    else if(data.weather[0].main =='Mist'){
        document.querySelector('.weather-icon').src = "mist.png"
    }
    
  
    }
}
