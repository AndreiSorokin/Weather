const button = document.querySelector('.button');
const input = document.querySelector('.input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const weather = document.querySelector('.weather');

button.addEventListener('click', function() {
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f382b89206254918eb7231d985b598d1')
.then(Response=> Response.json())
.then(data => {
   city.innerHTML = "In " + data['name'] + " today:";
   weather.innerHTML = data['weather'][0]['description'];
   temp.innerHTML ="Temperature: " + Math.round(data['main']['temp']-273.15) + "\u2103";
   humidity.innerHTML = "Humidity: " + data['main']['humidity'] + "%";
})
.catch(e=>"Wrong name");
})