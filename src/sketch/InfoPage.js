var information1 = "I made this program partly for my own enjoyment and partly to utilize the tools and knowledge I have acquired from learning JavaScript at home."
var information2 = "More information can be found on the GitHub Website."
var information3 = "If you wish to contact me about bugs and possible ideas for future projects and improvements, e-mail me here."

var downInfo = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 1, 0]
]

var GitHubClick = [
  [],
  []
]

var EmailClick = [
  [],
  []
]

var infoSign = "PYX.WEZ INFO:"


function Info() {
  for (var i = 0; i < infoSign.length; i++) {
    PixelLetter(window_scale + (i * 3 * window_scale), window_scale, infoSign.charAt(i), int(window_scale * 0.5));
  }

  letterx = 80;
  lettery = 70;

  for (var i = 0; i < information1.length; i++) {
    letterx = letterx + 3 * window_scale;

    if (lettery > height - 10 * window_scale || (letterx > width - 10 * window_scale && lettery > height - 16 * window_scale)) {
      for (var squares = 0; squares < downInfo[0].length; squares++) {
        rect(10 * window_scale + downInfo[0][squares], height - 5 * window_scale + downInfo[1][squares], window_scale, window_scale)
      }
      return;
    }
    if (letterx > width - 10 * window_scale) {
      if (information1.charAt(i - 1) != ' ' && information1.charAt(i - 1) != '.') {
        PixelLetter(letterx, lettery, "-", int(window_scale * 0.5));
      }
      letterx = 5 * window_scale;
      lettery = lettery + 6 * window_scale;
      if (information1.charAt(i) != ' ' && information1.charAt(i) != '.') {
        PixelLetter(letterx, lettery, information1.charAt(i), int(window_scale * 0.5));
      } else {
        letterx = letterx - 3 * window_scale;
      }
    } else {
      PixelLetter(letterx, lettery, information1.charAt(i), int(window_scale * 0.5))
    }
  }

  lettery = lettery + 6 * window_scale;
  letterx = 5 * window_scale;
  count = 0;

  for (var i = 0; i < information2.length; i++) {
    letterx = letterx + 3 * window_scale;
    if (i >= 37) {
      fill(20, 20, 100);
      GitHubClick[0][count] = letterx;
      GitHubClick[1][count] = lettery;
      count++
    }
    if (lettery > height - 10 * window_scale || (letterx > width - 10 * window_scale && lettery > height - 16 * window_scale)) {
      for (var squares = 0; squares < downInfo[0].length; squares++) {
        rect(10 * window_scale + downInfo[0][squares], height - 5 * window_scale + downInfo[1][squares], window_scale, window_scale);
      }
      return;
    }
    if (letterx > width - 10 * window_scale) {
      if (information2.charAt(i - 1) != ' ' && information2.charAt(i - 1) != '.') {
        PixelLetter(letterx, lettery, "-", int(window_scale * 0.5));
      }
      letterx = 5 * window_scale;
      lettery = lettery + 6 * window_scale;
      if (information2.charAt(i) != ' ' && information2.charAt(i) != '.') {
        PixelLetter(letterx, lettery, information2.charAt(i), int(window_scale * 0.5));
      } else {
        letterx = letterx - 3 * window_scale;
      }
    } else {
      PixelLetter(letterx, lettery, information2.charAt(i), int(window_scale * 0.5));
    }
  }

  lettery = lettery + 6 * window_scale;
  letterx = 5 * window_scale;
  count   = 0;

  fill(100);

  for (var i = 0; i < information3.length; i++) {
    letterx = letterx + 3 * window_scale;

    if (i >= 94) {
      fill(100, 20, 20);
      EmailClick[0][count] = letterx;
      EmailClick[1][count] = lettery;
      count++
    }

    if (lettery > height - 10 * window_scale || (letterx > width - 10 * window_scale && lettery > height - 16 * window_scale)) {
      for (var squares = 0; squares < downInfo[0].length; squares++) {
        fill(100)
        rect(10 * window_scale + downInfo[0][squares], height - 5 * window_scale + downInfo[1][squares], window_scale, window_scale);
      }
      return;
    }

    if (letterx > width - 10 * window_scale) {
      if (information3.charAt(i - 1) != ' ' && information3.charAt(i - 1) != '.') {
        PixelLetter(letterx, lettery, "-", int(window_scale * 0.5));
      }
      letterx = 50;
      lettery = lettery + 6 * window_scale;
      if (information3.charAt(i) != ' ' && information3.charAt(i) != '.') {
        PixelLetter(letterx, lettery, information3.charAt(i), int(window_scale * 0.5));
      } else {
        letterx = letterx - 3 * window_scale;
      }
    } else {
      PixelLetter(letterx, lettery, information3.charAt(i), int(window_scale * 0.5));
    }
  }
}

function ClickInfo() {
  for (var i = 0; i < GitHubClick[0].length; i++) {
    if (mouseX > GitHubClick[0][i] && mouseX < GitHubClick[0][i] + 3 * window_scale && mouseY > GitHubClick[1][i] && mouseY < GitHubClick[1][i] + 4 * window_scale) {
      window.open("https://github.com/kazuyalegrey/PYX.WEZ", menubar = "yes", status = "yes");
    }
  }

  for (var i = 0; i < EmailClick[0].length; i++) {
    if (mouseX > EmailClick[0][i] && mouseX < EmailClick[0][i] + 3 * window_scale && mouseY > EmailClick[1][i] && mouseY < EmailClick[1][i] + 4 * window_scale) {
      window.location.href = "mailto:hirokazu.tei@gmail.com?subject='Hey Dude,'";
    }
  }
}
