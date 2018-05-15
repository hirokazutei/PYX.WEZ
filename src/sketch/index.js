import "./Sketch.js"
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
  let x, y, backgroundColor;

  const width = 500;
  const height = 500;

  s.setup = () => {
    s.createCanvas(width, height);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

    x = s.random(width);
    y = height / 2;
  };

  s.draw = () => {
    s.background(backgroundColor);
    s.fill(s.color(255, 0, 0));
    s.ellipse(x, y, 100, 100);

    x = (x + 1) % width;
  };

  s.mousePressed = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}
