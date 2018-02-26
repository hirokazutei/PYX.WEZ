var  weather_scale = 8;
function CheckWeather() {
  if (weatherSeverity && customed == false) {
    print(weatherSeverity);
    clouds = true;
    switch (weatherSeverity) {
      case "clear sky":
        clouds = false;
        break;
      case "few clouds":
        cloudsize = 4* weather_scale;
        break;
      case "scattered clouds":
        cloudsize = 2* weather_scale;
        break;
      case "broken clouds":
        cloudsize = 2* weather_scale;
        break;
      case "overcast clouds":
        cloudsize = 5 * weather_scale;
        break;
      case "light intensity drizzle":
        cloudsize = 5 * weather_scale;
        rainamount = 10 * weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "drizzle":
        cloudsize = 6 * weather_scale;
        rainamount = 15 * weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "heavy intensity drizzle":
        cloudsize = 6 * weather_scale;
        rainamount = 20 * weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "light intensity drizzle rain":
        cloudsize = 6 * weather_scale;
        rainamount = 25 * weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "drizzle rain":
        cloudsize = 6 * weather_scale;
        rainamount = 30 * weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "heavy intensity drizzle rain":
        cloudsize = 6 * weather_scale;
        rainamount = 35* weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "shower rain and drizzle":
        cloudsize = 6* weather_scale;
        rainamount = 40* weather_scale;
        raining = true;
        drizzling = true;
        break;
      case "heavy shower rain and drizzle":
        cloudsize = 60;
        rainamount = 450;
        raining = true;
        drizzling = true;
        break;
      case "shower drizzle":
        cloudsize = 60;
        rainamount = 500;
        raining = true;
        drizzling = true;
        break;
      case "light rain" || "light intensity shower rain":
        cloudsize = 60;
        rainamount = 200;
        raining = true;
        break;
      case "moderate rain" || "ragged shower rain" || "shower rain":
        cloudsize = 60;
        rainamount = 300;
        raining = true;
        break;
      case "heavy intensity rain" || "heavy intensity shower rain":
        cloudsize = 70;
        rainamount = 400;
        raining = true;
        break;
      case "very heavy rain":
        cloudsize = 80;
        rainamount = 600;
        raining = true;
        break;
      case "extreme rain":
        cloudsize = 100;
        rainamount = 800;
        raining = true;
        break;
      case "freezing rain":
        cloudsize = 60;
        freezeamount = 200;
        freezing = true;
        break;
      case "light snow":
        cloudsize = 40;
        snowamount = 100;
        snowing = true;
        break;
      case "snow":
        cloudsize = 40;
        snowamount = 150;
        snowing = true;
        break;
      case "heavy snow":
        cloudsize = 50;
        snowamount = 200;
        snowing = true;
        break;
      case "sleet":
        cloudsize = 40;
        freezeamount = 100;
        freezing = true;
        break;

        //Rest arent adjusted

      case "shower sleet":
        cloudsize = 40;
        freezeamount = 200;
        freezing = true;
        break;
      case "light rain and snow" || "light shower and snow":
        cloudsize = 40;
        rainamount = 200;
        snowamount = 100;
        raining = true;
        snowing = true;
        break;
      case "rain and snow" || "shower and snow":
        cloudsize = 40;
        rainamount = 300;
        snowamount = 200;
        raining = true;
        snowing = true;
        break;
      case "heavy shower and snow":
        cloudsize = 60;
        rainamount = 600;
        snowamount = 300;
        raining = true;
        snowing = true;
        break;
      case "thunderstorm with light rain" || "light thunderstorm":
        cloudsize = 80;
        rainamount = 200;
        thundering = true;
        raining = true;
        break;
      case "thunderstorm with rain" || "thunderstorm" || "ragged thunderstorm":
        cloudsize = 90;
        rainamount = 400;
        thundering = true;
        raining = true;
        break;
      case "thunderstorm with heavy rain" || "heavy thunderstorm":
        cloudsize = 100;
        rainamount = 600;
        thundering = true;
        raining = true;
        break;
      case "thunderstorm with light drizzle":
        cloudsize = 80;
        rainamount = 200;
        thundering = true;
        raining = true;
        drizzling = true;
        break;
      case "thunderstorm with drizzle":
        cloudsize = 90;
        rainamount = 400;
        thundering = true;
        raining = true;
        drizzling = true;
        break;
      case "thunderstorm with heavy drizzle":
        cloudsize = 90;
        rainamount = 80000;
        thundering = true;
        raining = true;
        drizzling = true;
        break;
      case "mist" || "smoke" || "fog" || "haze" || "dust":
        hazing = true;
        break;
      case "sand, dust whirls" || "sand":
        hazing = true
          //COLOR for sandy haze
        break;
      case "volcanic ash":
        break;
      case "squalls":
        break;
      case "tornado":
        break;
      case "tropical storm":
        break;
      case "horricane":
        break;
      case "cold":
        break;
      case "hot":
        break;
      case "windy":
        break;
      case "hail":
        break;
      case "calm":
        break;
      case "light breeze":
        break;
      case "gentle breeze":
        break;
      case "moderate breeze":
        break;
      case "fresh breeze":
        break;
      case "strong breeze":
        break;
      case "high wind, near gale":
        break;
      case "gale":
        break;
      case "severe gale":
        break;
      case "storm":
        break;
      case "violent storm":
        break;
      case "hurricane":
        break;
      default:
        print("unknwon weather condition");
    }
  }
}