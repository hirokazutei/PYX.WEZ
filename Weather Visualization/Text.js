var timedisplay = "";
var texttime;
var temperaturetext = "";


function Text() {
  textSize(100);
  textAlign(RIGHT)
  fill(100);
  if (time) {
    texttime = rawtime.charAt(11) + rawtime.charAt(12) + '.' + rawtime.charAt(14) + rawtime.charAt(15);
    if (time < 10) {
      timedisplay = texttime.charAt(1) + ":" + texttime.charAt(3) + "" + texttime.charAt(4);
    } else {
      timedisplay = texttime.charAt(0) + texttime.charAt(1) + ":" + texttime.charAt(3) + "" + texttime.charAt(4);
    }
  }
  if (temperature) {
    temperature = round(temperature);
    temperaturetext = str(temperature);
  }
  noStroke();
}




function TextPixel() {
  fill(0, 0, 0, 70);
  if (timedisplay.length == 5) {
    rect(width - 400, 130, 400, 200);
  } else {
    rect(width - 350, 130, 350, 200);
  }
  for (var i = 1; i <= timedisplay.length; i++) {
    PixelNumber(width - 80 - (i * 60), 150, timedisplay.charAt(timedisplay.length - i))
  }
  for (var i = 1; i <= temperaturetext.length; i++) {
    PixelNumber(width - 170 - (i * 60), 240, temperaturetext.charAt(temperaturetext.length - i))
  }
  PixelNumber(width - 140, 240, "C");
  PixelNumber(width - 190, 240, "o");
  rect(width - 70, 150, 10, 160);
  if (name) {
    for (var i = 1; i <= name.length; i++) {
      PixelLetter(width - 50 - (i * 60), 30, name.charAt(name.length - i))
    }
  }
}
