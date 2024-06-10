// const ctx = document.getElementById('currentWeather');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
"use strict";

const getAllWeather = () => {
    getCurrentWeather(...getLatLong());
};

const getLatLong = () => {
    let latitude = 37.104622;
    let longitude = -113.583043;
    return [latitude, longitude];
};

const getCurrentWeather = async (latitude, longitude) => {
        const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
        const data = await response.json();
        // let city = await fetch(data["relativeLocation"]["properties"]["city"]);
        let forecastUrl = await fetch(data["properties"]["forecastHourly"]);
        let forecastProperties = await forecastUrl.json();
        let currentWeather = await forecastProperties["properties"]["periods"][0];
        // let forecastHourly = await forecastProperties["properties"]["periods"];
        // for (period of forecastHourly) {
        //     twelveHourForecast.push(period);
        // }
        return currentWeather;
};

const getWeatherAlerts = async (latitude, longitude) => {
    return;
};

const getWeatherForecast = async (latitude, longitude) => {
    return;
}

document.getElementById("getWeather").addEventListener("click", getAllWeather);







// const getWeather = (latitude, longitude) => {
//     let weatherJSON = `https://api.weather.gov/points/${latitude},${longitude}`;
//     return weatherJSON
//   };



// document.addEventListener("DOMContentLoaded", async () => {
//     const response = await fetch("https://swapi.dev/api/people");
//     const data = await response.json();
//     const people = data.results;

//     const maleCharacters = people.filter((person) => person.gender === "male");
//     const femaleCharacters = people.filter((person) => person.gender === "female");

//     const male = maleCharacters.map((m) => m.name);
//     const female = femaleCharacters.map((f) => f.name);

//     addCharacters("male", male);
//     addCharacters("female", female);
// });

// const addCharacters = (gender, names) => {
//     for (let i = 0; i < names.length; i++) {
//         const character = document.createElement("li");
//         character.innerHTML = names[i];
//         character.className = "dropdown-item";

//         const dropdown = document.querySelector(`#${gender} ul`);
//         dropdown.appendChild(character); 
//     }
// };