import "./PixelObjects.js"
import "./Text.js"
import "./Cities.js"
import "./Circle.js"
import "./World.js"
import "./APIFunctions.js"
import "./Pixel.js"
import "./Time.js"
import "./Sky.js"
import "./SunMoon.js"
import "./Weather.js"
import "./WeatherSeverity.js"
import "./InfoPage.js"
import "./Custom.js"

export default function sketch(s) {

  // Weather
  var apiweather,
      apitime,
      weather,
      temperature,
      humidity,
      wind,
      rawtime,
      rawsunrise,
      rawsunset,
      time,
      sunrise,
      sunset;

  // Weather booleans
  var snowing,
    drizzling,
    raining,
    clouds,
    clearsky,
    thundering,
    hazing,
    freezing,
    noriseset;

  // Intensity
  var apiclouds;
  var freezeamount;
  var rainamount;
  var snowamount;
  var weatherSeverity;
  var name              = "Unknown Place";
  var rainheaviness     = 40;
  var lat, lon;
  var SunMoonColor      = [0, 0, 0, 0];
  var CloudColor        = [0, 0, 0, 0];
  var lettervalue       = 0;
  var cityselect        = false;
  var weatherexist      = false;
  var timeexist         = false;
  var displayingweather = false;
  var bigcity           = false;
  var chosen            = false;
  var custom;
  var customed          = false;
  var infoPage          = false;
  var window_scale;
  var weather_scale;
  var mobile            = false;

  s.setup = () => {
    let swidth = window.innerWidth;
    let sheight = window.innerHeight;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window_scale = s.int(window.innerWidth / 175) + 1;
      mobile = true;
    } else {
      window_scale = s.int(window.innerWidth / 150) + 1; // Make sure that it takes in account for height too.
    }
    weather_scale = s.int(window.innerWidth / 100);
    createCanvas(swidth, sheight);
    colorMode(RGB, 100, 100, 100, 100);
    noSmooth();
    strokeCap(SQUARE);
    frameRate(10);
    setInterval(getAPI, 1000);
  }

  s.draw = () => {
    //UPDATE WINDOW SIZE
    swidth = window.innerWidth;
    sheight = window.innerHeight;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window_scale = s.int(window.innerWidth / 175) + 1;
    } else {
      window_scale = s.int(window.innerWidth / 150) + 1; // Make sure that it takes in account for height too.
    }
    weather_scale = s.int(window.innerWidth / 100);
    if (weather_scale < 5) {
      weather_scale = 5;
    }
    if (window_scale < 2) {
      window_scale = 2;
    }

    createCanvas(swidth, sheight);

    //BASIC SET-UP
    background(0);
    noStroke();
    if (chosen === false) {
      background(20);
      Choose();

    } else if (custom) {
      Customize();

    } else if (infoPage) {
      Info();
      BackButton();

      //IF THE NECEESARY COMPONENT EXISTS, RENDER THE SKY
    } else if (weatherexist && timeexist) {
      displayingweather = true;
      Sky();

      //IF THE TIME OF THE DAY IS AT NIGHT, RENDER THE STARS
      if (timeofday == "night") {
        Blink();
        Starring();
      }

      //DRAW THE SUN OR MOON
      SunMoon();
      DrawPixel();

      //#CHANGE: ADJUSTING FOR CLOUD AMOUNTS

      if (clouds) {
        cloudamount = apiclouds / 2;
        //DRAW THE CLOUD AND MAKE THEM FLOAT
        Clouding();
        Floats();
      }


      /*
        if (hazing){
        Hazing();
        Drifts();
        }
        */


      //IF SNOWING, RENDER THE SNOW
      if (snowing) {
        Snowing();
        Melt();
      }

      //IF RAINING, RENDER RAIN
      if (raining) {
        Raining();
        Drop();
      }

      //IF FREEZING RAIN, SLEET OR HAIL
      if (freezing) {
        freezeamount = 200;
        Hailing();
        Freeze();
      }

      //IF THERE IS A THUNDERSTORM, RENDER LIGHTNING
      if (thundering) {
        Zapping();
        Zaps();
      }

      //ADD VARIOUS TEXTS
      if (customed == false) {
        Text();
        TextPixel();
        TimeofDay();
      }

      //ADD ICON THAT ALLOWS YOU TO GO BACK
      BackButton();


    } else {
      //RENDER THE WORLD MAP FOR PEOPLE TO SELECT ON
      background(20);
      snowing    = false;
      thundering = false;
      clouds     = false;
      raining    = false;
      freezing   = false;
      World();
    }
  }

  s.mousePressed = () => {
    //THE WORLD SELECTION MENU
    if (mobile != true) {
      if (custom) {
        setTimeout(Choosing(), 500);
      } else if (chosen === false) {
        setTimeout(Choice(), 500);
      } else if (infoPage === true) {
        setTimeout(BackClicked(), 500);
        ClickInfo();
      } else if (displayingweather === false) {
        setTimeout(WorldClicked(), 500);
      } else {
        setTimeout(BackClicked(), 500);
      }
    }
  }

  s.mouseReleased = () => {
    if (mobile) {
      if (custom) {
        setTimeout(Choosing(), 500);
      } else if (chosen === false) {
        setTimeout(Choice(), 500);
      } else if (infoPage === true) {
        setTimeout(BackClicked(), 500);
        ClickInfo();
      } else if (displayingweather === false) {
        setTimeout(WorldClicked(), 500);
      } else {
        setTimeout(BackClicked(), 500);
      }
    }
  }

}

//export default function sketch(s) {
//let x, y, backgroundColor;

//const width = 500;
//const height = 500;

//s.setup = () => {
//s.createCanvas(width, height);
//backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

//x = s.random(width);
//y = height / 2;
//};

//s.draw = () => {
//s.background(backgroundColor);
//s.fill(s.color(255, 0, 0));
//s.ellipse(x, y, 100, 100);

//x = (x + 1) % width;
//};

  //s.mousePressed = () => {
    //backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  //};
//}
