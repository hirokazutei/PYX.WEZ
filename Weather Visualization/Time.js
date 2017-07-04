var skyr = 150;
var skyg = 150;
var skyb = 150;
var season;
var sunpositionx;
var sunpositiony
var timedifference;
var nighttime;
var timeofday;
var nighttime;

function TimeofDay() {
  if (noriseset) {
    season = int(rawtime.charAt(5) + rawtime.charAt(6));
    print(season);
    if (lat > 0 && season > 4 && season < 9) {
      timeofday = "midnightsun";
    } else if (lat > 0) {
      timeofday = "polarnight";
    } else if (lat < 0 && season > 4 && season < 9) {
      timeofday = "polarnight";
    } else if (lat < 0) {
      timeofday = "midnightsun";
    }

  } else {
    if (time + 1 > sunrise && time < sunrise || time - 2 < sunrise && time > sunrise) {
      timeofday = "sunrise";
    } else if (time + 2 > sunset && time < sunset || time - 1 < sunset && time > sunset) {
      timeofday = "sunset";
    } else if (time - 2 > sunrise && time < sunset) {
      timeofday = "day";
    } else if (time - 1 > sunset || time + 1 < sunrise) {
      timeofday = "night"
    }
  }
}