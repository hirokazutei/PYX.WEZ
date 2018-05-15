function SunMoon() {
  if (timeofday == "midnightsun" || timeofday == "polarnight") {
    if (time <= 12) {
      sunpositionx = map(time, 0, 12, 0, width / 2);
      sunpositiony = map(time, 0, 12, height, 50);
      print(sunpositionx + " " + sunpositiony);
    } else {
      sunpositionx = map(time, 12, 24, width / 2, width);
      sunpositiony = map(time, 12, 24, 50, height);
    }
    if (timeofday == "midnightsun" && raining) {
      SunMoonColor = [90, 90, 90, 100];
      CloudColor = [70, 70, 70, 90];
    } else if (timeofday == "midnightsun") {
      SunMoonColor = [100, 100, 100, 100];
      CloudColor = [100, 100, 100, 80];
    } else if (timeofday == "polarnight" && raining) {
      SunMoonColor = [60, 60, 70, 100];
      CloudColor = [60, 60, 70, 90];
    } else if (timeofday == "midnightsun") {
      SunMoonColor = [90, 90, 100, 100];
      CloudColor = [90, 90, 100, 80];
    }
  } else if (timeofday == "sunrise") {
    timedifference = time - sunrise;
    sunpositionx = map(timedifference, -1, 2, 0, 100);
    sunpositiony = map(timedifference, -1, 2, height, height - 300);
    if (raining && timeofday == "sunrise") {
      SunMoonColor = [100, 95, 95, 80];
      CloudColor = [90, 85, 95, 90];

    } else if (timeofday == "sunrise") {
      SunMoonColor = [100, 95, 95, 100];
      CloudColor = [100, 95, 95, 80];
    }

  } else if (timeofday == "sunset") {
    timedifference = time - sunset;
    sunpositionx = map(timedifference, -2, 1, width - 100, width)
    sunpositiony = map(timedifference, -2, 1, height - 300, height);
    if (raining && timeofday == "sunset") {
      SunMoonColor = [100, 90, 90, 100];
      CloudColor = [85, 70, 70, 90];

    } else if (timeofday == "sunset") {
      SunMoonColor = [100, 90, 90, 100];
      CloudColor = [100, 90, 90, 80];
    }

  } else if (timeofday == "day") {
    timedifference = (sunset - sunrise) - (time - sunrise);
    if (timedifference > (sunset - sunrise) / 2) {
      sunpositionx = map(timedifference, sunset - sunrise - 2, (sunset - sunrise) / 2, 100, width / 2)
      sunpositiony = map(timedifference, sunset - sunrise - 2, (sunset - sunrise) / 2, height - 299, 50);
    } else {
      sunpositionx = map(timedifference, (sunset - sunrise) / 2, 2, width / 2, width - 100);
      sunpositiony = map(timedifference, (sunset - sunrise) / 2, 2, 50, height - 299);
    }
    if (raining && timeofday == "day") {
      SunMoonColor = [90, 90, 90, 100];
      CloudColor = [90, 90, 90, 80];

    } else if (timeofday == "day") {
      SunMoonColor = [100, 100, 100, 100];
      CloudColor = [100, 100, 100, 80];
    }
  } else if (timeofday == "night") {
    nighttime = (22 - sunset) + sunrise;
    if (time > 15) {
      timedifference = time - sunset - 1;
    } else if (time < 15) {
      timedifference = 23 - sunset + time;
    }
    if (timedifference < nighttime / 2) {
      sunpositionx = map(timedifference, 0, nighttime / 2, 100, width / 2)
      sunpositiony = map(timedifference, 0, nighttime / 2, height - 100, 200);
    } else {
      sunpositionx = map(timedifference, nighttime / 2, nighttime, width / 2, width - 100);
      sunpositiony = map(timedifference, nighttime / 2, nighttime, 200, height - 100);
    }
    if (raining && timeofday == "night") {
      SunMoonColor = [60, 60, 70, 100];
      CloudColor = [30, 30, 40, 70];

    } else if (timeofday == "night") {
      SunMoonColor = [90, 90, 100, 100];
      CloudColor = [90, 90, 100, 80];
    }
  }
  noStroke();
  //stroke(SunMoonColor[0], SunMoonColor[1], SunMoonColor[2], SunMoonColor[3]);
  fill(SunMoonColor[0], SunMoonColor[1], SunMoonColor[2], SunMoonColor[3]);
  Circle(sunpositionx, sunpositiony);
}
