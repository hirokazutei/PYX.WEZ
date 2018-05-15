import PixelLetter from "./PixelLetter.js"
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
import Choose from "./Custom.js"


export default function sketch(s) {

  // Weather
  let apiweather,
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
  let snowing,
    drizzling,
    raining,
    clouds,
    clearsky,
    thundering,
    hazing,
    freezing,
    noriseset

  // Intensity
  let apiclouds,
      freezeamount,
      rainamount,
      snowamount,
      weatherSeverity,
      name              = "Unknown Place",
      rainheaviness     = 40,
      lat, lon,
      SunMoonColor      = [0, 0, 0, 0],
      CloudColor        = [0, 0, 0, 0],
      lettervalue       = 0,
      cityselect        = false,
      weatherexist      = false,
      timeexist         = false,
      displayingweather = false,
      bigcity           = false,
      chosen            = false,
      custom,
      customed          = false,
      infoPage          = false,
      window_scale,
      weather_scale,
      mobile            = false,
      worldmapWord      = "worldmap",
      customWord        = "custom",
      orWord            = "or",
      listOfWords       = ["Dawn", "Day", "Dusk", "Night", "Cloud", "Rain", "Snow", "Thund", "Hail", "Haze", "generate"],
      timeOfDayScroll   = 0

  var nextButton = [
      [0, 0, 0, 0, 0, 10, 10, 10, 20],
      [0, 10, 20, 30, 40, 10, 20, 30, 20]
  ];
  var checkMark = [
      [0, 10, 20, 30, 40],
      [20, 30, 20, 10, 0]
  ]




function Choose() {
  s.stroke(30);

  for (var i = 0; i < s.height; i = i + 10) {
    s.line(0, i, s.width, i);
  }

  for (var i = 0; i < s.width; i = i + 10) {
    s.line(i, 0, i, s.height);
  }

  s.fill(80);
  s.noStroke();
  s.stroke(0)

  //b.zip(a)
  //[x, y],
  //[30, 10],
  //[70, 10],
  //[10, 20],
  //[30, 20],
  //[40, 20],
  //[50, 20],
  //[60, 20],
  //[70, 20],
  //[70, 30]]

  let infoMark = [
      [10, 10, 20, 20, 20, 20, 20, 20, 30], // x
      [30, 70, 10, 30, 40, 50, 60, 70, 70]  // y
  ]

  // "Make it 10px by 10px at these co-ordinates."
  for (var i = 0; i < infoMark[0].length; i++) {
    s.rect(
      s.int(s.width  / 10) * 10 - 80  + infoMark[0][i],
      s.int(s.height / 10) * 10 - 120 + infoMark[1][i],
      10,
      10
    );
  }

  let z = [
    [0,  0,  0,  10, 10, 10, 20, 20, 20, 30,  30,  30, 40,  40,  40],
    [0,  50, 60, 0,  40, 60, 0,  30, 60, 0,   20,  60, 0,   10,  60]
  ]

  let char_span = z[0].length
  _.times(char_span, (i) => {
    s.rect(
      z[0][i],
      z[1][i],
      100,
      100
    )
  })

  //for (var i = 1; i <= worldmapWord.length; i++) {
  //_.each("worldmap".split(""), (letter, index) => {
    //PixelLetter(
      //100 + (index * 50),
      //100,
      //letter
    //)
  //})

  //for (var i = 1; i <= customWord.length; i++) {
    //PixelLetter(
      //int(width  / 10) * 10 / 2 + 350 - (i * 60),
      //int(height / 10) * 10 / 2 + 149,
      //customWord.charAt(customWord.length - i)
    //)
  //}

  //for (var i = 1; i <= orWord.length; i++) {
    //PixelLetter(
      //int(width  / 10) * 10 / 2 + 70 - (i * 60),
      //int(height / 10) * 10 / 2 - 49,
      //orWord.charAt(orWord.length - i)
    //)
  //}

  //if (
    //mouseX < width  / 2 + 70  &&
    //mouseX > width  / 2 - 410 &&
    //mouseY > height / 2 - 250 &&
    //mouseY < height / 2 - 180
  //) {
    //fill(100);
    //stroke(80)
    //strokeWeight(1);

    //for (var i = 1; i <= worldmapWord.length; i++) {
      //PixelLetter(s,
        //int(width  / 10) * 10 / 2 + 70 - (i * 60),
        //int(height / 10) * 10 / 2 - 249,
        //worldmapWord.charAt(worldmapWord.length - i)
      //)
    //}

  //} else if (
    //mouseX < width  / 2 + 350 &&
    //mouseX > width  / 2 - 10  &&
    //mouseY > height / 2 + 150 &&
    //mouseY < height / 2 + 220
  //) {

    //fill(100);
    //stroke(80)
    //strokeWeight(1);

    //for (var i = 1; i <= customWord.length; i++) {
      //PixelLetter(
        //int(width  / 10) * 10 / 2 + 350 - (i * 60),
        //int(height / 10) * 10 / 2 + 149,
        //customWord.charAt(customWord.length - i)
      //)
    //}

  //} else if (
    //mouseX < int(width  / 10) * 10 - 50  &&
    //mouseX > int(width  / 10) * 10 - 80  &&
    //mouseY > int(height / 10) * 10 - 120 &&
    //mouseY < int(height / 10) * 10 - 0
  //) {

    //fill(100);
    //stroke(80)
    //strokeWeight(1);

    //for (var i = 0; i < infoMark[0].length; i++) {
      //s.rect(
        //int(width  / 10) * 10 - 80  + infoMark[0][i],
        //int(height / 10) * 10 - 120 + infoMark[1][i],
        //10,
        //10
      //);
    //}
  //}

}






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

    s.createCanvas(swidth, sheight);
    s.colorMode(s.RGB, 100, 100, 100, 100);
    s.noSmooth();
    s.strokeCap(s.SQUARE);
    s.frameRate(10);
    setInterval(s.getAPI, 1000);
  }

  s.draw = () => {
    let swidth = window.innerWidth;
    let sheight = window.innerHeight;

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

    s.createCanvas(swidth, sheight);
    s.background(0);
    s.noStroke();

    if (chosen === false) {
      s.background(20);
      Choose();

    } else if (custom) {
      Customize();

    } else if (infoPage) {
      Info();
      BackButton();

    } else if (weatherexist && timeexist) {
      displayingweather = true;
      Sky();

      if (timeofday == "night") {
        Blink();
        Starring();
      }

      SunMoon();
      DrawPixel();

      if (clouds) {
        cloudamount = apiclouds / 2;
        Clouding();
        Floats();
      }

      if (snowing) {
        Snowing();
        Melt();
      }

      if (raining) {
        Raining();
        Drop();
      }

      if (freezing) {
        freezeamount = 200;
        Hailing();
        Freeze();
      }

      if (thundering) {
        Zapping();
        Zaps();
      }

      if (customed == false) {
        Text();
        TextPixel();
        TimeofDay();
      }

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
        //setTimeout(Choice(), 500);
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
