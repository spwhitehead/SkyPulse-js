"use strict";

const zipStringElement = document.getElementById("zipcode");
const apiKey = process.env.API_KEY;

const getAllWeather = async () => {
    const zipString = zipStringElement.value;
    let coordinates = await getCoordinates(zipString);
    await getCurrentWeather(...coordinates);
    await getWeatherForecast(...coordinates);
    await getWeatherAlerts(getState(zipString));
};

async function getCoordinates(zipString) {
    /* Ensure param is a string to prevent unpredictable parsing results */
    if (typeof zipString !== 'string') {
        console.error('Must pass the zipcode as a string.');
        return;
    }
  
    /* Ensure we have exactly 5 characters to parse */
    if (zipString.length !== 5) {
        console.error('Must pass a 5-digit zipcode.');
        return;
    }
  
    /* Ensure we don't parse strings starting with 0 as octal values */
    const zipcode = parseInt(zipString, 10);

    let latLong = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + '&key=' + apiKey)
      .then(response => response.json())
      .then(data => {
        const latitude = data["results"][0]["geometry"]["location"]["lat"];
        const longitude = data["results"][0]["geometry"]["location"]["lng"];
        return[latitude, longitude];
      });
      return latLong;
};
function getState(zipString) {

    /* Ensure param is a string to prevent unpredictable parsing results */
    if (typeof zipString !== 'string') {
        console.error('Must pass the zipcode as a string.');
        return;
    }
  
    /* Ensure we have exactly 5 characters to parse */
    if (zipString.length !== 5) {
        console.error('Must pass a 5-digit zipcode.');
        return;
    }
  
    /* Ensure we don't parse strings starting with 0 as octal values */
    const zipcode = parseInt(zipString, 10);
  
    let st;
    let state;
  
    /* Code cases alphabetized by state */
    if (zipcode >= 35000 && zipcode <= 36999) {
        st = 'AL';
        state = 'Alabama';
    } else if (zipcode >= 99500 && zipcode <= 99999) {
        st = 'AK';
        state = 'Alaska';
    } else if (zipcode >= 85000 && zipcode <= 86999) {
        st = 'AZ';
        state = 'Arizona';
    } else if (zipcode >= 71600 && zipcode <= 72999) {
        st = 'AR';
        state = 'Arkansas';
    } else if (zipcode >= 90000 && zipcode <= 96699) {
        st = 'CA';
        state = 'California';
    } else if (zipcode >= 80000 && zipcode <= 81999) {
        st = 'CO';
        state = 'Colorado';
    } else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
        st = 'CT';
        state = 'Connecticut';
    } else if (zipcode >= 19700 && zipcode <= 19999) {
        st = 'DE';
        state = 'Delaware';
    } else if (zipcode >= 32000 && zipcode <= 34999) {
        st = 'FL';
        state = 'Florida';
    } else if ( (zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999) ) {
        st = 'GA';
        state = 'Georgia';
    } else if (zipcode >= 96700 && zipcode <= 96999) {
        st = 'HI';
        state = 'Hawaii';
    } else if (zipcode >= 83200 && zipcode <= 83999 && zipcode != 83414) {
        st = 'ID';
        state = 'Idaho';
    } else if (zipcode >= 60000 && zipcode <= 62999) {
        st = 'IL';
        state = 'Illinois';
    } else if (zipcode >= 46000 && zipcode <= 47999) {
        st = 'IN';
        state = 'Indiana';
    } else if (zipcode >= 50000 && zipcode <= 52999) {
        st = 'IA';
        state = 'Iowa';
    } else if (zipcode >= 66000 && zipcode <= 67999) {
        st = 'KS';
        state = 'Kansas';
    } else if (zipcode >= 40000 && zipcode <= 42999) {
        st = 'KY';
        state = 'Kentucky';
    } else if (zipcode >= 70000 && zipcode <= 71599) {
        st = 'LA';
        state = 'Louisiana';
    } else if (zipcode >= 3900 && zipcode <= 4999) {
        st = 'ME';
        state = 'Maine';
    } else if (zipcode >= 20600 && zipcode <= 21999) {
        st = 'MD';
        state = 'Maryland';
    } else if ( (zipcode >= 1000 && zipcode <= 2799) || (zipcode == 5501) || (zipcode == 5544 ) ) {
        st = 'MA';
        state = 'Massachusetts';
    } else if (zipcode >= 48000 && zipcode <= 49999) {
        st = 'MI';
        state = 'Michigan';
    } else if (zipcode >= 55000 && zipcode <= 56899) {
        st = 'MN';
        state = 'Minnesota';
    } else if (zipcode >= 38600 && zipcode <= 39999) {
        st = 'MS';
        state = 'Mississippi';
    } else if (zipcode >= 63000 && zipcode <= 65999) {
        st = 'MO';
        state = 'Missouri';
    } else if (zipcode >= 59000 && zipcode <= 59999) {
        st = 'MT';
        state = 'Montana';
    } else if (zipcode >= 27000 && zipcode <= 28999) {
        st = 'NC';
        state = 'North Carolina';
    } else if (zipcode >= 58000 && zipcode <= 58999) {
        st = 'ND';
        state = 'North Dakota';
    } else if (zipcode >= 68000 && zipcode <= 69999) {
        st = 'NE';
        state = 'Nebraska';
    } else if (zipcode >= 88900 && zipcode <= 89999) {
        st = 'NV';
        state = 'Nevada';
    } else if (zipcode >= 3000 && zipcode <= 3899) {
        st = 'NH';
        state = 'New Hampshire';
    } else if (zipcode >= 7000 && zipcode <= 8999) {
        st = 'NJ';
        state = 'New Jersey';
    } else if (zipcode >= 87000 && zipcode <= 88499) {
        st = 'NM';
        state = 'New Mexico';
    } else if ( (zipcode >= 10000 && zipcode <= 14999) || (zipcode == 6390) || (zipcode == 501) || (zipcode == 544) ) {
        st = 'NY';
        state = 'New York';
    } else if (zipcode >= 43000 && zipcode <= 45999) {
        st = 'OH';
        state = 'Ohio';
    } else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999) ) {
        st = 'OK';
        state = 'Oklahoma';
    } else if (zipcode >= 97000 && zipcode <= 97999) {
        st = 'OR';
        state = 'Oregon';
    } else if (zipcode >= 15000 && zipcode <= 19699) {
        st = 'PA';
        state = 'Pennsylvania';
    } else if (zipcode >= 300 && zipcode <= 999) {
        st = 'PR';
        state = 'Puerto Rico';
    } else if (zipcode >= 2800 && zipcode <= 2999) {
        st = 'RI';
        state = 'Rhode Island';
    } else if (zipcode >= 29000 && zipcode <= 29999) {
        st = 'SC';
        state = 'South Carolina';
    } else if (zipcode >= 57000 && zipcode <= 57999) {
        st = 'SD';
        state = 'South Dakota';
    } else if (zipcode >= 37000 && zipcode <= 38599) {
        st = 'TN';
        state = 'Tennessee';
    } else if ( (zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 73301 && zipcode <= 73399) ||  (zipcode >= 88500 && zipcode <= 88599) ) {
        st = 'TX';
        state = 'Texas';
    } else if (zipcode >= 84000 && zipcode <= 84999) {
        st = 'UT';
        state = 'Utah';
    } else if (zipcode >= 5000 && zipcode <= 5999) {
        st = 'VT';
        state = 'Vermont';
    } else if ( (zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || (zipcode == 20598) ) {
        st = 'VA';
        state = 'Virginia';
    } else if ( (zipcode >= 20000 && zipcode <= 20099) || (zipcode >= 20200 && zipcode <= 20599) || (zipcode >= 56900 && zipcode <= 56999) ) {
        st = 'DC';
        state = 'Washington DC';
    } else if (zipcode >= 98000 && zipcode <= 99499) {
        st = 'WA';
        state = 'Washington';
    } else if (zipcode >= 24700 && zipcode <= 26999) {
        st = 'WV';
        state = 'West Virginia';
    } else if (zipcode >= 53000 && zipcode <= 54999) {
        st = 'WI';
        state = 'Wisconsin';
    } else if ( (zipcode >= 82000 && zipcode <= 83199) || zipcode == 83414 ) {
        st = 'WY';
        state = 'Wyoming';
    } else {
        st = 'none';
        state = 'none';
        console.log('No state found matching', zipcode);
    }
  
    /* Return `state` for full name or `st` for postal abbreviation */
    return st;
  }

const getCurrentWeather = async (latitude, longitude) => {
        const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
        const data = await response.json();
        let forecastUrl = await fetch(data["properties"]["forecastHourly"]);
        let forecastProperties = await forecastUrl.json();
        let currentWeather = await forecastProperties["properties"]["periods"][0];
       
        document.getElementById("temp").innerHTML = "";
        document.getElementById("windDirection").innerHTML = "";
        document.getElementById("windSpeed").innerHTML = "";
        document.getElementById("relativeHumidity").innerHTML = "";
        document.getElementById("shortForecast").innerHTML = "";
        let currentTemp = document.getElementById("temp").innerHTML += "<p>" + currentWeather["temperature"] + " " + currentWeather["temperatureUnit"] + "</p>";
        let currentWindDirection = document.getElementById("windDirection").innerHTML += "<p>" + "Winds from the: " + currentWeather["windDirection"] + "</p>";
        let currentWindSpeed = document.getElementById("windSpeed").innerHTML += "<p>" + "Windspeed: " + currentWeather["windSpeed"];
        let currentHumidity = document.getElementById("relativeHumidity").innerHTML += "<p>" + "Humidity: " + currentWeather["relativeHumidity"]["value"] + "%" + "</p>";
        let currentShortForecast = document.getElementById("shortForecast").innerHTML += "<p>" + "Forecast: " + currentWeather["shortForecast"];
};

const getWeatherAlerts = async (state) => {
    const response = await fetch(`https://api.weather.gov/alerts/active/area/${state}`);
    const data = await response.json();
    const alerts = data["features"];
    let wxAlerts = [];
    for (let i=0; i < alerts.length; i++) {
        let weatherAlert = await alerts[i]["properties"];
        wxAlerts.push(weatherAlert);
    }

    let alertBox = document.getElementById("alerts");
    alertBox.innerHTML = "<h3>" + "Current Weather Alerts" + "</h3>";

    if (wxAlerts.length === 0) {
        let noAlerts = document.createElement("div")
        noAlerts.setAttribute("class", "noAlerts");
        noAlerts.innerHTML = "<p>" + "There are no weather alerts in your area at this time." + "</p>";
        alertBox.appendChild(noAlerts);
        return;
    }
    // document.querySelector('#alerts').innerHTML = '<section id="areaDesc"></section>' + '<section id="headline"></section>' + '<section id="whatToDo"></section>' + '<section id="severity"></section>';
    for (let i = 0; i < wxAlerts.length; i++) {
        let alertDiv = document.createElement("div");
        alertDiv.setAttribute("class", "alert");

        let alertArea = document.createElement("section");
        alertArea.setAttribute("class", "alertArea");
        alertArea.innerHTML += "<p>" + "Alert Area: " + wxAlerts[i]["areaDesc"] + "</p>";
        
        let alertHeadline = document.createElement("section");
        alertHeadline.setAttribute("class", "alertHeadline");
        alertHeadline.innerHTML += "<p>" + "Alert Description: " + wxAlerts[i]["headline"] + "</p>";
        
        let whatToDo = document.createElement("section");
        whatToDo.setAttribute("class", "whatToDo");
        whatToDo.innerHTML += "<p>" + "What To Do: " + wxAlerts[i]["instruction"] + "</p>";
        
        let severity = document.createElement("section");
        severity.setAttribute("class", "severity");
        severity.innerHTML += "<p>" + "Severity: " + wxAlerts[i]["severity"] + "</p>";

        alertDiv.appendChild(alertArea);
        alertDiv.appendChild(alertHeadline);
        alertDiv.appendChild(whatToDo);
        alertDiv.appendChild(severity);
        alertBox.appendChild(alertDiv);
    }
};

const getWeatherForecast = async (latitude, longitude) => {
    const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
    const data = await response.json();
    let forecastUrl = await fetch(data["properties"]["forecastHourly"]);
    let forecastProperties = await forecastUrl.json();
    let forecastHourly = [];
    for (let i=0; i < 25; i++) {
        let currentWeather = await forecastProperties["properties"]["periods"][i];
        forecastHourly.push(currentWeather["temperature"]);
    }
    document.querySelector('#forecastTemp').innerHTML = '<canvas id="forecastTempChart" ></canvas>';
    const ctx = document.getElementById('forecastTempChart');
    let forecastTempChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Now', '1 hr', '2 hr', '3 hr', '4 hr', '5 hr', '6 hr', '7 hr', '8 hr', '9 hr', '10 hr', '11 hr', '12 hr', '13 hr', '14 hr', '15 hr', '16 hr', '17 hr', '18 hr', '19 hr', '20 hr', '21 hr', '22 hr', '23 hr', '24 hr'],
            datasets: [{
                label: "Tempurature",
                data: forecastHourly,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

document.getElementById("getWeather").addEventListener("click", getAllWeather);