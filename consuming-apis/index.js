console.log(process.env.API_KEY);



// // const API_KEY =

// const cityInput = document.getElementById('city');
// const latInput = document.getElementById('latitude');
// const lonInput = document.getElementById('longitude');
// const weatherByCityDv = document.getElementById('weather-by-city');
// const cityByCoordsDv = document.getElementById('city-by-coords');


// function checkWeather() {

//     const city = cityInput.value;
//     const requestURL = 'https://api.openweathermap.org/data/2.5/weather?appid=' + API_KEY + '&q='+city;

//     axios(requestURL)
//         .then(({data}) => weatherByCityDv.innerHTML += '<div>City name : '+city+' => degrees: '+Math.round(data['main']['temp'] - 273.15)+'°C, main: '+data['weather'][0]['main']+', description: '+data['weather'][0]['description']+'</div>') // state pending ==> fullfilled
//         .catch(() => weatherByCityDv.innerHTML += '<div>City name : '+city+' => city not found</div>') // state pending ==> rejected
//         .finally(() => localStorage.setItem('weatherHistory',weatherByCityDv.innerHTML));
   
// }

// weatherByCityDv.innerHTML = localStorage.getItem('weatherHistory');








// function checkInputCoords() {
//   const lat = latInput.value;
//   const lon = lonInput.value;
//   checkCoords(lat,lon);
// }

// function checkCoords(lat,lon) {

//   const requestURL = 'http://api.openweathermap.org/geo/1.0/reverse?appid=' + APIKey + '&limit=1' + '&lat='+lat + '&lon='+lon;
//   cityByCoordsDv.innerHTML = 'From Lat: '+lat+', Lon: '+lon+' => ';

//   axios(requestURL)
//       .then(({data}) => {
//         // console.log(data);
//         const cityName = data[0]['name'];
//         cityByCoordsDv.innerHTML += 'city: '+cityName;
//         return cityName;
//       }) // state pending ==> fullfilled
//       .then(city => {

//         const requestURL = 'https://api.openweathermap.org/data/2.5/weather?appid=' + APIKey + '&q='+city;
//         cityByCoordsDv.innerHTML += ', temp: ';

//         axios(requestURL)
//           .then(({data}) => cityByCoordsDv.innerHTML += Math.round(data['main']['temp'] - 273.15)+'°C') // state pending ==> fullfilled
//           .catch(err => weatherByCityDv.innerHTML += '<div>City name : '+city+', city not found</div>'); // state pending ==> rejected
        
//       }) // state pending ==> fullfilled
//       .catch(err => cityByCoordsDv.innerHTML += 'error whith API calls.'); // state pending ==> rejected

// }











// navigator.geolocation.getCurrentPosition(position => {
//   const { latitude, longitude } = position.coords;
//   checkCoords(latitude,longitude);
//   console.log(getTemperatureFromCoordinates(latitude,longitude,APIKey));
// });


// npm login
// npm publish
