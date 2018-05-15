var worldmapWord    = "worldmap";
var customWord      = "custom";
var orWord          = "or";
var listOfWords     = ["Dawn", "Day", "Dusk", "Night", "Cloud", "Rain", "Snow", "Thund", "Hail", "Haze", "generate"];
var timeOfDayScroll = 0;

var nextButton = [
    [0, 0, 0, 0, 0, 10, 10, 10, 20],
    [0, 10, 20, 30, 40, 10, 20, 30, 20]
];
var checkMark = [
    [0, 10, 20, 30, 40],
    [20, 30, 20, 10, 0]
]
var infoMark = [
    [10, 10, 20, 20, 20, 20, 20, 20, 30],
    [30, 70, 10, 30, 40, 50, 60, 70, 70]
]


function Choose() {
  stroke(30);

  for (var i = 0; i < height; i = i + 10) {
    line(0, i, width, i);
  }

  for (var i = 0; i < width; i = i + 10) {
    line(i, 0, i, height);
  }

  fill(80);
  noStroke();
  stroke(0)

  for (var i = 0; i < infoMark[0].length; i++) {
    rect(
      int(width / 10) * 10 - 80 + infoMark[0][i],
      int(height / 10) * 10 - 120 + infoMark[1][i],
      10,
      10
    );
  }

  for (var i = 1; i <= worldmapWord.length; i++) {
    PixelLetter(
      int(width / 10) * 10 / 2 + 70 - (i * 60),
      int(height / 10) * 10 / 2 - 249,
      worldmapWord.charAt(worldmapWord.length - i)
    )
  }

  for (var i = 1; i <= customWord.length; i++) {
    PixelLetter(
      int(width / 10) * 10 / 2 + 350 - (i * 60),
      int(height / 10) * 10 / 2 + 149,
      customWord.charAt(customWord.length - i)
    )
  }

  for (var i = 1; i <= orWord.length; i++) {
    PixelLetter(
      int(width / 10) * 10 / 2 + 70 - (i * 60),
      int(height / 10) * 10 / 2 - 49,
      orWord.charAt(orWord.length - i)
    )
  }

  if (mouseX < width / 2 + 70 && mouseX > width / 2 - 410 && mouseY > height / 2 - 250 && mouseY < height / 2 - 180) {
    fill(100);
    stroke(80)
    strokeWeight(1);

    for (var i = 1; i <= worldmapWord.length; i++) {
      PixelLetter(
        int(width / 10) * 10 / 2 + 70 - (i * 60), int(height / 10) * 10 / 2 - 249, worldmapWord.charAt(worldmapWord.length - i))
    }

  } else if (mouseX < width / 2 + 350 && mouseX > width / 2 - 10 && mouseY > height / 2 + 150 && mouseY < height / 2 + 220) {

    fill(100);
    stroke(80)
    strokeWeight(1);

    for (var i = 1; i <= customWord.length; i++) {
      PixelLetter(
        int(width / 10) * 10 / 2 + 350 - (i * 60),
        int(height / 10) * 10 / 2 + 149,
        customWord.charAt(customWord.length - i)
      )
    }

  } else if (mouseX < int(width / 10) * 10 - 50 && mouseX > int(width / 10) * 10 - 80 && mouseY > int(height / 10) * 10 - 120 && mouseY < int(height / 10) * 10 - 0) {

    fill(100);
    stroke(80)
    strokeWeight(1);

    for (var i = 0; i < infoMark[0].length; i++) {
      rect(
        int(width / 10) * 10 - 80 + infoMark[0][i],
        int(height / 10) * 10 - 120 + infoMark[1][i],
        10,
        10
      );
    }
  }
}

function Choice() {
    positionX = mouseX;
    positionY = mouseY;
    if (positionX < width / 2 + 70 && positionX > width / 2 - 410 && positionY > height / 2 - 250 && positionY < height / 2 - 180) {
        custom = false;
        chosen = true;
    } else if (positionX < width / 2 + 350 && positionX > width / 2 - 10 && positionY > height / 2 + 150 && positionY < height / 2 + 220) {
        snowamount   = 40 * weather_scale;
        rainamount   = 40 * weather_scale;
        apiclouds    = 6 * weather_scale;
        freezeamount = 20 * weather_scale;
        timeofday    = "sunrise";
        time         = random(5, 8)
        custom       = true;
        chosen       = true;
        cloudsize    = 5 * weather_scale;
        wind         = 10;
        sunset       = 18;
        sunrise      = 6;
    } else if (positionX < int(width / 10) * 10 - 50 && positionX > int(width / 10) * 10 - 80 && positionY > int(height / 10) * 10 - 120 && positionY < int(height / 10) * 10 - 0) {
        infoPage = true
        chosen = true
    }
}



function Customize() {
    background(20);
    fill(60)

    //CHANGE TO 7 FOR HAZE!

    for (var i = 1; i < 6; i++) {
      rect(
        400,
        70 + 100 * i,
        30,
        30
      );
    }
    rect(
      int((swidth / 2) / 10) * 10 - 200,
      640,
      510,
      90
    );

    fill(100)

    for (var i = 0; i < nextButton[0].length; i++) {
      rect(
        400 + nextButton[0][i],
        60 + nextButton[1][i],
        10,
        10
      );
    }

    stroke(30);

    for (var i = 0; i < height; i = i + 10) {
        line(0, i, width, i);
    }

    for (var i = 0; i < width; i = i + 10) {
        line(i, 0, i, height);
    }

    fill(80);
    noStroke();
    stroke(0)

    for (var i = 0; i < listOfWords[timeOfDayScroll].length; i++) {
        PixelLetter(50 + (i * 60), 50, listOfWords[timeOfDayScroll].charAt(i))
    }

    for (var i = 0; i < listOfWords[4].length; i++) {
        PixelLetter(50 + (i * 60), 150, listOfWords[4].charAt(i))
    }

    for (var i = 0; i < listOfWords[5].length; i++) {
        PixelLetter(50 + (i * 60), 250, listOfWords[5].charAt(i))
    }

    for (var i = 0; i < listOfWords[6].length; i++) {
        PixelLetter(50 + (i * 60), 350, listOfWords[6].charAt(i))
    }

    for (var i = 0; i < listOfWords[7].length; i++) {
        PixelLetter(50 + (i * 60), 450, listOfWords[7].charAt(i))
    }

    for (var i = 0; i < listOfWords[8].length; i++) {
        PixelLetter(50 + (i * 60), 550, listOfWords[8].charAt(i))
    }
    //PUT THIS BACK IN FOR HAZE!!!
    /*
    for (var i = 0; i < listOfWords[9].length; i++) {
      PixelLetter(50 + (i * 60), 650, listOfWords[9].charAt(i))
    }
      */
    for (var i = 0; i < listOfWords[10].length; i++) {
        PixelLetter(int(swidth / 2 / 10) * 10 - 180 + (i * 60), 650, listOfWords[10].charAt(i))
    }


    fill(100);
    if (clouds) {
        for (var i = 0; i < checkMark[0].length; i++) {
            rect(400 + checkMark[0][i], 160 + checkMark[1][i], 10, 10);
        }
    }
    if (raining) {
        for (var i = 0; i < checkMark[0].length; i++) {
            rect(400 + checkMark[0][i], 260 + checkMark[1][i], 10, 10);
        }
    }
    if (snowing) {
        for (var i = 0; i < checkMark[0].length; i++) {
            rect(400 + checkMark[0][i], 360 + checkMark[1][i], 10, 10);
        }
    }
    if (thundering) {
        for (var i = 0; i < checkMark[0].length; i++) {
            rect(400 + checkMark[0][i], 460 + checkMark[1][i], 10, 10);
        }
    }
    if (freezing) {
        for (var i = 0; i < checkMark[0].length; i++) {
            rect(400 + checkMark[0][i], 560 + checkMark[1][i], 10, 10);
        }
    }
    if (hazing) {
        for (var i = 0; i < checkMark[0].length; i++) {
            rect(400 + checkMark[0][i], 660 + checkMark[1][i], 10, 10);
        }
    }
}

function Choosing() {
    positionX = mouseX;
    positionY = mouseY;
    for (var i = 0; i < nextButton[0].length; i++) {
        if (positionX > 400 + nextButton[0][i] && positionX < 400 + nextButton[0][i] + 10 && positionY > 60 + nextButton[1][i] && positionY < 60 + nextButton[1][i] + 10) {
            if (timeOfDayScroll == 0) {
                timeOfDayScroll++;
                timeofday = "day";
                time      = random(8, 16);
            } else if (timeOfDayScroll == 1) {
                timeOfDayScroll++;
                timeofday = "sunset";
                time      = random(16, 18);
            } else if (timeOfDayScroll == 2) {
                timeOfDayScroll++;
                timeofday = "night";
                time      = random(18, 30);
                if (time > 24) {
                    time = time - 24;
                }
            } else {
                timeOfDayScroll = 0;
                timeofday       = "sunrise";
                time            = random(5, 8)
            }
        }
    }

    if (positionX > int((swidth / 2) / 10) * 10 - 200 && positionX < int((swidth / 2) / 10) * 10 + 310 && positionY > 640 && positionY < 730) {
        custom       = false;
        weatherexist = true;
        timeexist    = true;
        customed     = true;
    }

    for (var i = 1; i < 7; i++) {
        if (positionX > 400 && positionX < 430 && positionY > 70 + 100 * i && positionY < 100 + 100 * i) {
            switch (i) {
                case 1:
                    if (clouds) {
                        clouds = false;
                    } else {
                        clouds = true;
                    }
                    break;
                case 2:
                    if (raining) {
                        raining = false;
                    } else {
                        raining = true;
                    }
                    break;
                case 3:
                    if (snowing) {
                        snowing = false;
                    } else {
                        snowing = true;
                    }
                    break;
                case 4:
                    if (thundering) {
                        thundering = false;
                    } else {
                        thundering = true;
                    }
                    break;
                case 5:
                    if (freezing) {
                        freezing = false;
                    } else {
                        freezing = true;
                    }
                    break;
                case 6:
                    if (hazing) {
                        hazing = false;
                    } else {
                        hazing = true;
                    }
                    break;
            }
        }
    }
}
