//WEATHER VARIABLES
var apiweather, apitime, weather, temperature, humidity, wind, rawtime, rawsunrise, rawsunset, time, sunrise, sunset;

//WEATHER BOOLEANS
var snowing, drizzling, raining, clouds, clearsky, thundering, hazing, freezing, noriseset;

//SPECIIFC WEATHER VARIABLES
var snowamount;
var rainamount;
var rainheaviness = 40;
var apiclouds;
var freezeamount;
var name = "Unknown Place";
var weatherSeverity;

var SunMoonColor = [0, 0, 0, 0];
var CloudColor = [0, 0, 0, 0];
var lat, lon;
var lettervalue = 0;
var cityselect = false;
var weatherexist = false;
var timeexist = false;
var displayingweather = false;
var bigcity = false;
var chosen = false;
var custom;
var customed = false;
var infoPage = false;

var window_scale;


function setup() {
  swidth = window.innerWidth;
  sheight = window.innerHeight;
  window_scale = int(window.innerWidth/140) + 1;
  createCanvas(swidth, sheight);
  colorMode(RGB, 100, 100, 100, 100);
  noSmooth();
  strokeCap(SQUARE);
  frameRate(10);
  setInterval(getAPI, 1000);
}


function draw() {
  //UPDATE WINDOW SIZE
  swidth = window.innerWidth;
  sheight = window.innerHeight;
  window_scale = int(window.innerWidth/140) + 1;

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
    snowing = false;
    thundering = false;
    clouds = false;
    raining = false;
    freezing = false;
    World();
  }
}


function mousePressed() {
  //THE WORLD SELECTION MENU
  if (custom) {
    Choosing();
  } else if (chosen === false) {
    Choice();
  }else if (infoPage === true){
  BackClicked();
  ClickInfo();
  
  } else if (displayingweather === false) {
    WorldClicked();
  } else {
    BackClicked();
  }
}