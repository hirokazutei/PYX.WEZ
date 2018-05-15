function Sky() {
  if (timeofday == "sunrise") {
    if (raining) {
      for (var i = 0; i <= height; i = i + 50) {
        var coloradjust = map(i, 0, height, 50, 100);
        fill(coloradjust + 10, coloradjust, 100 - coloradjust / 3, 100);
        rect(0, i, width, 50)
      }
    } else {
      for (var i = 0; i <= height; i = i + 50) {
        var coloradjust = map(i, 0, height, 50, 100);
        fill(coloradjust + 10, coloradjust - 10, 120 - coloradjust / 2, 100);
        rect(0, i, width, 50)
      }
    }
  } else if (timeofday == "sunset") {
    if (raining) {
      for (var i = 0; i <= height; i = i + 50) {
        coloradjust = map(i, 0, height, 30, 100);
        fill(coloradjust * 0.8 - 10, coloradjust * 0.8 - 30, coloradjust * 0.8 - 50, 80);
        rect(0, i, width, 50);
      }
    } else {
      for (var i = 0; i <= height; i = i + 50) {
        coloradjust = map(i, 0, height, 30, 100);
        fill(coloradjust, coloradjust - 30, coloradjust / 5, 100);
        rect(0, i, width, 50);
      }
    }
  } else if (timeofday == "day" || timeofday == "midnightsun") {
    if (raining) {
      for (var i = 0; i <= height; i = i + 50) {
        coloradjust = map(i, 0, height, 0, 180);
        fill(30 + coloradjust / 3, 30 + coloradjust / 3, 40 + coloradjust / 3, 100);
        rect(0, i, width, 50);
      }
    } else {
      for (var i = 0; i <= height; i = i + 50) {
        coloradjust = map(i, 0, height, 20, 200);
        fill(40 + coloradjust / 3, 40 + coloradjust / 3, 100, 100);
        rect(0, i, width, 50);
      }
    }
  } else if (timeofday == "night" || timeofday == "polarnight") { //NIGHT
    if (raining) {
      for (var i = 0; i <= height; i = i + 50) {
        coloradjust = map(i, 0, height, 20, 100);
        fill(coloradjust / 10, coloradjust / 8, coloradjust / 6);
        rect(0, i, width, 50)
      }
    } else {
      for (var i = 0; i <= height; i = i + 50) {
        coloradjust = map(i, 0, height, 20, 100);
        fill(coloradjust / 10, coloradjust / 8, 10 + coloradjust / 3);
        rect(0, i, width, 50)
      }
    }
  }
}
