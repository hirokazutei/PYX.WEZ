function getAPI() {
    if (cityselect === true) {
        loadJSON(apiweather, AppendWeatherData);
        loadJSON(apitime, AppendTimeData, 'jsonp');
        CheckWeather();
    }
}

function AppendWeatherData(weatherdata) {
    if (weatherdata.weather[0].main) {
        weather         = weatherdata.weather[0].main;
        weatherSeverity = weatherdata.weather[0].description;
        temperature     = weatherdata.main.temp;
        humidity        = weatherdata.main.humidity;
        wind            = weatherdata.wind.speed;
        apiclouds       = weatherdata.clouds.all;

        if (weatherdata.name && bigcity === false) {
            name = '';
            if (weatherdata.name.length > 15) {
                for (var i = 0; i < 15; i++) {
                    name = name + weatherdata.name[i];
                }
            } else {
                name = weatherdata.name;
            }
        }
        weatherexist = true;
    } else {
        cityselect = false;
    }
}


function AppendTimeData(timedata) {
    if (timedata.time) {
        rawtime = timedata.time;
        time    = float(rawtime.charAt(11) + rawtime.charAt(12) + '.' + rawtime.charAt(14) + rawtime.charAt(15));

        if (timedata.sunrise) {
            rawsunrise = timedata.sunrise;
            sunrise = float(rawsunrise.charAt(11) + rawsunrise.charAt(12) + '.' + rawsunrise.charAt(14) + rawsunrise.charAt(15));
        } else {
            noriseset = true;
        }
        if (timedata.sunset) {
            rawsunset = timedata.sunset;
            sunset = float(rawsunset.charAt(11) + rawsunset.charAt(12) + '.' + rawsunset.charAt(14) + rawsunset.charAt(15));
        } else {
            noriseset = true;
        }
        timeexist = true;
    } else {
        cityselect = false;
    }
}
