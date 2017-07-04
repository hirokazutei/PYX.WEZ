information1 = "I made this program partly for my own enjoyment and partly to utilize the tools and knowledge I have acquired from learning JavaScript at home."
information2 = "More information can be found on the GitHub Website."
information3 = "If you wish to contact me about bugs and possible ideas for future projects and improvements, e-mail me here."
downInfo = [
  [0, 10, 20, 30, 40],
  [0, 10, 20, 10, 0]
]
GitHubClick = [
  [],
  []
]
EmailClick = [
  [],
  []
]
infoSign = "PYX.WEZ INFO:"


function Info() {
  for (var i = 0; i < infoSign.length; i++) {
    PixelLetter(10 + (i * 30), 10, infoSign.charAt(i), 5);
  }
  letterx = 80;
  lettery = 70;
  for (var i = 0; i < information1.length; i++) {
    letterx = letterx + 30;
    if (lettery > height - 100 || (letterx > width - 100 && lettery > height - 160)) {
      for (var squares = 0; squares < downInfo[0].length; squares++) {
        rect(100 + downInfo[0][squares], height - 50 + downInfo[1][squares], 10, 10)
      }
      return;
    }
    if (letterx > width - 100) {
      if (information1.charAt(i - 1) != ' ' && information1.charAt(i - 1) != '.') {
        PixelLetter(letterx, lettery, "-", 5);
      }
      letterx = 50;
      lettery = lettery + 60;
      if (information1.charAt(i) != ' ' && information1.charAt(i) != '.') {
        PixelLetter(letterx, lettery, information1.charAt(i), 5);
      } else {
        letterx = letterx - 30;
      }
    } else {
      PixelLetter(letterx, lettery, information1.charAt(i), 5)
    }
  }
  lettery = lettery + 60;
  letterx = 50;
  count = 0;
  for (var i = 0; i < information2.length; i++) {
    letterx = letterx + 30;
    if (i >= 37) {
      fill(20, 20, 100);
      GitHubClick[0][count] = letterx;
      GitHubClick[1][count] = lettery;
      count++
    }
    if (lettery > height - 100 || (letterx > width - 100 && lettery > height - 160)) {
      for (var squares = 0; squares < downInfo[0].length; squares++) {
        rect(100 + downInfo[0][squares], height - 50 + downInfo[1][squares], 10, 10);
      }
      return;
    }
    if (letterx > width - 100) {
      if (information2.charAt(i - 1) != ' ' && information2.charAt(i - 1) != '.') {
        PixelLetter(letterx, lettery, "-", 5);
      }
      letterx = 50;
      lettery = lettery + 60;
      if (information2.charAt(i) != ' ' && information2.charAt(i) != '.') {
        PixelLetter(letterx, lettery, information2.charAt(i), 5);
      } else {
        letterx = letterx - 30;
      }
    } else {
      PixelLetter(letterx, lettery, information2.charAt(i), 5);
    }
  }
  lettery = lettery + 60;
  letterx = 50;
  count = 0;
  fill(100);
  for (var i = 0; i < information3.length; i++) {
    letterx = letterx + 30;
    if (i >= 94) {
      fill(100, 20, 20);
      EmailClick[0][count] = letterx;
      EmailClick[1][count] = lettery;
      count++
    }
    if (lettery > height - 100 || (letterx > width - 100 && lettery > height - 160)) {
      for (var squares = 0; squares < downInfo[0].length; squares++) {
        fill(100)
        rect(100 + downInfo[0][squares], height - 50 + downInfo[1][squares], 10, 10);
      }
      return;
    }
    if (letterx > width - 100) {
      if (information3.charAt(i - 1) != ' ' && information3.charAt(i - 1) != '.') {
        PixelLetter(letterx, lettery, "-", 5);
      }
      letterx = 50;
      lettery = lettery + 60;
      if (information3.charAt(i) != ' ' && information3.charAt(i) != '.') {
        PixelLetter(letterx, lettery, information3.charAt(i), 5);
      } else {
        letterx = letterx - 30;
      }
    } else {
      PixelLetter(letterx, lettery, information3.charAt(i), 5);
    }
  }
}

function ClickInfo() {
  for (var i = 0; i < GitHubClick[0].length; i++) {
    if (mouseX > GitHubClick[0][i] && mouseX < GitHubClick[0][i] + 30 && mouseY > GitHubClick[1][i] && mouseY < GitHubClick[1][i] + 40) {
    window.open("https://github.com/kazuyalegrey/PYX.WEZ", menubar="yes", status="yes");
    }
  }
    for (var i = 0; i < EmailClick[0].length; i++) {
    if (mouseX > EmailClick[0][i] && mouseX < EmailClick[0][i] + 30 && mouseY > EmailClick[1][i] && mouseY < EmailClick[1][i] + 40) {
    window.location.href = "mailto:hirokazu.tei@gmail.com?subject='Hey Dude,'";
    }
  }
}