//Snowing Function
var snow = [];

function Snow(x, y, z, a) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.a = a;

  this.Snows = function() {
    fill(100, 100, 100, a);
    rect(this.x, this.y, 10, 10);
    this.y = this.y + 10;
    this.x = this.x + (this.z) + random(-5, 5);
  }
}

function Snowing() {
  for (var i = 0; i < snow.length; i++) {
    snow[i].Snows();
  }
}

function Melt() {
  for (var i = 0; i < snow.length; i++) {
    if (snow[i].y >= height || snow[i].x >= width || snow.length > snowamount) {
      snow[i] = new Snow(random(-(wind) * 180, width), 0, wind, 100);
    }
  }
  if (snow.length < snowamount) {
    snow.push(new Snow(random(-(wind) * 180, width), 0, wind, 100))
  }
}


//RAIN FUNCTION
var rain = [];

function Rain(x, y, z, a, v) {
  fill(100, 100, 100, 80);
  this.x = x;
  this.y = y;
  this.z = z;
  this.a = a;
  this.v = v;

  this.Rains = function() {
    stroke(100, 100, 100, this.a);
    strokeWeight(5);
    if (drizzling) {
      line(this.x, this.y, this.x + this.z, this.y + rainheaviness / 4);
    } else {
      line(this.x, this.y, this.x + this.z, this.y + rainheaviness);
    }
    this.y = this.y + this.v;
    this.x = this.x + (this.z);
    noStroke();
  }
}

function Raining() {
  for (var i = 0; i < rain.length; i++) {
    rain[i].Rains();
  }
}

function Drop() {
  for (var i = 0; i < rain.length; i++) {
    if (rain[i].y >= height || rain[i].x >= width || rain.length > rainamount) {
      rain[i] = new Rain(random(-(wind) * 180, width), 0, wind, random(30, 80), random(30, 60));
    }
  }
  if (rain.length < rainamount) {
    rain.push(new Rain(random(-(wind) * 180, width), 0, wind, random(30, 80), random(30, 60)))
  }
}




//Alternative Cloud Function

var cloud = [];
var cloudamount;
var cloudsize;

function Cloud(x, y, v, a) {
  this.x = x;
  this.y = y;
  this.v = v;
  this.a = a
  this.cloudx = [];
  this.cloudy = [];
  this.formation = [];
  this.cloudsize = cloudsize + round(random(-10, 10));
  this.cloudcurve = 2;

  for (var i = 0; i < this.cloudsize; i++) {
    this.formation[i] = round(this.cloudcurve);
    if (this.cloudsize - i < 1) {
      this.cloudcurve = this.cloudcurve + random(-2, 0);
    } else if (this.cloudsize - i < 5) {
      this.cloudcurve = this.cloudcurve + random(-1.6, 0);
    } else if (this.formation[i] <= 2) {
      this.cloudcurve = this.cloudcurve + random(0, 0.8);
    } else if (i < 3) {
      this.cloudcurve = this.cloudcurve + random(-0.1, 0.8);
    } else {
      this.cloudcurve = this.cloudcurve + random(-0.7, 0.7);
    }
  }

  for (var a = 0; a < this.formation.length; a++) {
    for (var b = 0; b < int(this.formation[a]); b++) {
      this.cloudx.push(-a * 10);
    }
  }
  for (var c = 0; c < this.formation.length; c++) {
    for (var d = 0; d < int(this.formation[c]); d++) {
      this.cloudy.push(-d * 10);
    }
  }

  this.Clouds = function() {
    noStroke();
    //stroke(CloudColor[0], CloudColor[1], CloudColor[2], CloudColor[3]);
    fill(CloudColor[0], CloudColor[1], CloudColor[2], CloudColor[3]);
    for (var i = 0; i < this.cloudx.length; i++) {
      rect(this.cloudx[i] + this.x, this.cloudy[i] + this.y, 10, 10);
    }
    this.x = this.x + this.v;
  }
}


function Floats() {
  if (wind) {
    for (var i = 0; i < cloud.length; i++) {
      if (cloud[i].x - cloudsize * 10 >= width) {
        cloud[i] = new Cloud(0, int(random((cloudamount * 7 + 300) / 10)) * 10, wind + random(-wind + 2, 10), random(80, 90));
      }
    }
    if (cloud.length < cloudamount) {
      for (var i = 0; i < cloudamount; i++) {
        cloud[i] = new Cloud(random(width), int(random((cloudamount * 7 + 300) / 10)) * 10, wind + random(-wind + 2, 10), random(80, 90));
      }
    }
  }
}



function Clouding() {
  for (var i = 0; i < cloud.length; i++) {
    cloud[i].Clouds();
  }
}




//STARS!


var stars = [];
var staramount = 50;

function Star(x, y, b, a) {
  this.x = x;
  this.y = y;
  this.b = b;
  this.a = a;

  this.Stars = function() {
    fill(100, 100, 100, this.a);
    rect(this.x, this.y, 10, 10);
    if (this.x > width - 200 && this.y < 200) {
      this.a = 20;
    }
    if (this.a > 0) {
      this.a = this.a - this.b / this.a;
    } else {
      this.a = a;
    }
  }
}

function Blink() {
  while (stars.length < staramount) {
    stars.push(new Star(int(random(0, width / 20)) * 20, int(random(0, height / 20)) * 20, random(50, 100), random(60, 150)))
  }
}


function Starring() {
  for (var i = 0; i < stars.length; i++) {
    stars[i].Stars();
  }
}




//Lightning

var lightning = [];
var lightningvalue = 30;
var light;

function Lightning(a) {
  this.lightningx = [];
  this.lightningy = [];
  this.lighted = false
  this.a = a;
  this.x = int(random(0, width / 10)) * 10;

  for (var i = 0; i * 10 < height; i++) {
    if (random(10) < 9) {
      this.x = this.x + int(random(-1.8, 1.8)) * 10;
      if (random(10) < 8) {
        i = i - 1;
      }
    }
    this.lightningx.push(this.x);
    this.lightningy.push(i * 10);
  }

  this.Lightnings = function() {
    if (this.lighted == false) {
      if (random(100) < 1) {
        this.a = 200
        fill(100, 100, 100, this.a);
        noStroke();
        for (var i = 0; i < this.lightningx.length; i++) {
          rect(this.lightningx[i], this.lightningy[i], 10, 10);
        }
        this.lighted = true;
      }
    } else {
      this.a = this.a - random(0, 20)
      fill(100, 100, 100, this.a);
      noStroke();
      for (var i = 0; i < this.lightningx.length; i++) {
        rect(this.lightningx[i], this.lightningy[i], 10, 10);
      }
      if (this.a < 0) {
        this.lighted = false
        this.x = this.x + int(random(-1.5, 1.5)) * 10;
      }
    }
  }
}




function Zapping() {
  for (var i = 0; i < lightning.length; i++) {
    lightning[i].Lightnings();
  }
}

//put this in the main function
var lightningseverity = 10;

function Zaps() {
  if (lightning.length < lightningseverity) {
    lightning.push(new Lightning(light));
  }
}



//FREEZING RAIN

//RAIN FUNCTION
var hail = [];

function Hail(x, y, z, a, v) {
  fill(100, 100, 100, 80);
  this.x = x;
  this.y = y;
  this.z = z;
  this.a = a;
  this.v = v;

  this.Hails = function() {
    fill(100, 100, 100, this.a * 6);
    rect(this.x, this.y, this.a, this.a);
    this.y = this.y + this.v;
    this.x = this.x + this.z;
    noStroke();
  }
}

function Hailing() {
  for (var i = 0; i < hail.length; i++) {
    hail[i].Hails();
  }
}

function Freeze() {
  for (var i = 0; i < hail.length; i++) {
    if (hail[i].y >= height || hail[i].x >= width || hail.length > freezeamount) {
      hail[i] = new Hail(random(-(wind) * 180, width), 0, wind, random(10, 20), random(30, 60));
    }
  }
  if (hail.length < freezeamount) {
    hail.push(new Hail(random(-(wind) * 180, width), 0, wind, random(10, 20), random(30, 60)))
  }
}






//HAZE

var haze = [];
var hazesize = 1000;
var hazeColor = [100, 100, 100, 20];
var hazeamount = 5;

function Haze(x, y, v, a) {
  this.x = x;
  this.y = y;
  this.v = v;
  this.a = a
  this.hazex = [];
  this.hazey = [];
  this.formation = [];
  this.hazesize = hazesize + round(random(-10, 10));
  this.hazecurve = 30;

  for (var i = 0; i < this.hazesize; i++) {
    this.formation[i] = round(this.hazecurve);
    if (this.hazecurve - i < 1) {
      this.hazecurve = this.hazecurve + random(-2, 0);
    } else if (this.hazesize - i < 5) {
      this.hazecurve = this.hazecurve + random(-1.6, 0);
    } else if (this.formation[i] <= 2) {
      this.hazecurve = this.hazecurve + random(0, 0.8);
    } else if (i < 3) {
      this.hazecurve = this.hazecurve + random(-0.1, 0.8);
    } else {
      this.hazecurve = this.hazecurve + random(-0.7, 0.7);
    }
  }

  for (var a = 0; a < this.formation.length; a++) {
    for (var b = 0; b < int(this.formation[a]); b++) {
      this.hazex.push(-a * 10);
    }
  }
  for (var c = 0; c < this.formation.length; c++) {
    for (var d = 0; d < int(this.formation[c]); d++) {
      this.hazey.push(-d * 10);
    }
  }

  this.Hazes = function() {
    noStroke();
    fill(hazeColor[0], hazeColor[1], hazeColor[2], hazeColor[3]);
    for (var i = 0; i < this.hazex.length; i++) {
      rect(this.hazex[i] + this.x, this.hazey[i] + this.y, 10, 10);
    }
    this.x = this.x + this.v;
  }
}


function Drifts() {
  if (wind) {
    for (var i = 0; i < haze.length; i++) {
      if (haze[i].x - hazesize * 10 >= width) {
        h[i] = new Haze(0, int(random((hazeamount * 7 + 300) / 10)) * 10, wind + random(-wind + 2, 10), random(80, 90));
      }
    }
    if (haze.length < hazeamount) {
      for (var i = 0; i < hazeamount; i++) {
        haze[i] = new Haze(random(width), height, wind + random(-wind + 2, 10), random(80, 90));
      }
    }
  }
}



function Hazing() {
  for (var i = 0; i < haze.length; i++) {
    haze[i].Hazes();
  }
}