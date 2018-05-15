var pixelnumbers = [
  [ //0
    [0, 0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 40, 40],
    [10, 20, 30, 40, 50, 0, 20, 60, 0, 30, 60, 0, 40, 60, 10, 20, 30, 40, 50]
  ],
  [ //1
    [10, 10, 20, 20, 20, 20, 20, 20, 20, 30],
    [10, 60, 0, 10, 20, 30, 40, 50, 60, 60]
  ],
  [ //2
    [0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40],
    [10, 60, 0, 50, 60, 0, 40, 60, 0, 30, 60, 10, 20, 60]
  ],
  [ //3
    [0, 0, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 40],
    [10, 50, 0, 60, 0, 30, 60, 0, 30, 60, 10, 20, 40, 50]
  ],
  [ //4
    [0, 0, 10, 10, 20, 20, 30, 30, 30, 30, 30, 30, 30, 40],
    [30, 40, 20, 40, 10, 40, 0, 10, 20, 30, 40, 50, 60, 40]
  ],
  [ //5
    [0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40],
    [0, 10, 20, 50, 0, 30, 60, 0, 30, 60, 0, 30, 60, 0, 40, 50]
  ],
  [ //6
    [0, 0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40],
    [10, 20, 30, 40, 50, 0, 30, 60, 0, 30, 60, 0, 30, 60, 10, 40, 50]
  ],
  [ //7
    [0, 0, 10, 20, 20, 20, 20, 30, 30, 30, 40, 40],
    [0, 10, 0, 0, 40, 50, 60, 0, 20, 30, 0, 10]
  ],
  [ //8
    [0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 40],
    [10, 20, 40, 50, 0, 30, 60, 0, 30, 60, 0, 30, 60, 10, 20, 40, 50]
  ],
  [ //9
    [0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 40, 40, 40],
    [10, 20, 50, 0, 30, 60, 0, 30, 60, 0, 30, 60, 10, 20, 30, 40, 50]
  ],
  [ //Temperature Circle
    [20, 30, 30, 40],
    [0, -10, 10, 0]
  ],
  [ //C
    [0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40],
    [10, 20, 30, 40, 50, 0, 60, 0, 60, 0, 60, 10, 50]
  ],
  [ //Temperature Circle
    [20, 20],
    [20, 40]
  ],
  [ //Negative
    [20, 30],
    [30, 30]
  ]

];

var pixelletters = [
  [ //A:0
    [0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40, 40, 40, 40],
    [20, 30, 40, 50, 60, 10, 40, 0, 40, 10, 40, 20, 30, 40, 50, 60]
  ],
  [ //B:1
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 0, 30, 60, 0, 30, 60, 0, 30, 60, 10, 20, 40, 50]
  ],
  [ //C:2
    [0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40],
    [10, 20, 30, 40, 50, 0, 60, 0, 60, 0, 60, 10, 50]
  ],
  [ //D:3
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 0, 60, 0, 60, 0, 60, 10, 20, 30, 40, 50]
  ],
  [ //E:4
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 0, 30, 60, 0, 30, 60, 0, 30, 60, 0, 60]
  ],
  [ //F:5
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40],
    [0, 10, 20, 30, 40, 50, 60, 0, 30, 0, 30, 0, 30, 0]
  ],
  [ //G:6
    [0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 30, 40, 40, 40],
    [10, 20, 30, 40, 50, 0, 60, 0, 60, 0, 40, 60, 10, 40, 50]
  ],
  [ //H:7
    [0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 40, 40, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 30, 30, 30, 0, 10, 20, 30, 40, 50, 60]
  ],
  [ //I:8
    [10, 10, 20, 20, 20, 20, 20, 20, 20, 30, 30],
    [0, 60, 0, 10, 20, 30, 40, 50, 60, 0, 60]
  ],
  [ //J:9
    [0, 10, 20, 30, 40, 40, 40, 40, 40, 40],
    [50, 60, 60, 60, 0, 10, 20, 30, 40, 50]
  ],
  [ //K:10
    [0, 0, 0, 0, 0, 0, 0, 10, 20, 20, 30, 30, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 30, 20, 40, 10, 50, 0, 60]
  ],
  [ //L:11
    [0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40],
    [0, 10, 20, 30, 40, 50, 60, 60, 60, 60, 60]
  ],
  [ //M:12
    [0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 40, 40, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 10, 20, 10, 0, 10, 20, 30, 40, 50, 60]
  ],
  [ //N:13
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 20, 30, 30, 40, 40, 40, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 10, 20, 30, 40, 50, 0, 10, 20, 30, 40, 50, 60]
  ],
  [ //O:14
    [0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40, 40, 40, 40],
    [10, 20, 30, 40, 50, 0, 60, 0, 60, 0, 60, 10, 20, 30, 40, 50]
  ],
  [ //P:15
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 0, 30, 0, 30, 0, 30, 10, 20]
  ],
  [ //Q:16
    [0, 0, 0, 0, 0, 10, 10, 20, 20, 20, 30, 30, 40, 40, 40, 40, 40],
    [10, 20, 30, 40, 50, 0, 60, 0, 40, 60, 0, 50, 10, 20, 30, 40, 60]
  ],
  [ //R:17
    [0, 0, 0, 0, 0, 0, 0, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 0, 30, 0, 30, 40, 0, 30, 50, 10, 20, 60]
  ],
  [ //S:18
    [0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40],
    [10, 20, 50, 0, 30, 60, 0, 30, 60, 0, 30, 60, 10, 40, 50]
  ],
  [ //T:19
    [0, 10, 20, 20, 20, 20, 20, 20, 20, 30, 40],
    [0, 0, 0, 10, 20, 30, 40, 50, 60, 0, 0]
  ],
  [ //U:20
    [0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 40, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 60, 60, 0, 10, 20, 30, 40, 50]
  ],
  [ //V:21
    [0, 0, 0, 0, 10, 10, 20, 30, 30, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10, 0]
  ],
  [ //W:22
    [0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 40, 40, 40, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 50, 40, 50, 0, 10, 20, 30, 40, 50, 60]
  ],
  [ //X:23
    [0, 0, 0, 0, 10, 10, 20, 30, 30, 40, 40, 40, 40],
    [0, 10, 50, 60, 20, 40, 30, 20, 40, 0, 10, 50, 60]
  ],
  [ //Y:24
    [0, 0, 0, 10, 20, 20, 20, 30, 40, 40, 40],
    [0, 10, 20, 30, 40, 50, 60, 30, 20, 10, 0]
  ],
  [ //Z:25
    [0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40],
    [0, 50, 60, 0, 40, 60, 0, 30, 60, 0, 20, 60, 0, 10, 60]
  ],
  [ //"-":26
    [10, 20, 30],
    [30, 30, 30]
  ],
  [ //" ":27
    [],
    []
  ],
  [ //":":27
    [10, 10],
    [20, 40]
  ],
  [ //".":27
    [10],
    [60]
  ],
]

var pixelthings = [
  [ //Return Arrow:0
    [-10, -10, -10, 0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90, 100, 100, 100, 110],
    [40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 0, 10, 40, 50, 60, 90, 100, 0, 10, 20, 40, 50, 60, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 20, 30, 40, 50, 60, 70, 80, 30, 40, 50, 60, 70, 40, 50, 60, 50]
  ]
]

var nuclear = [
  [0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90, 100, 100, 100, 100, 100, 110, 110, 110, 110, 110, 110, 120, 120, 120, 120, 120, 120, 120, 130, 130, 130, 130, 130, 130, 140, 140, 140, 140, 140, 140, 150, 150, 150, 150, 150],
  [40, 50, 60, 70, 80, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40, 50, 60, 0, 10, 20, 30, 40, 50, 60, 20, 30, 40, 50, 60, 130, 40, 50, 120, 130, 140, 100, 110, 120, 130, 140, 60, 70, 90, 100, 110, 120, 130, 140, 60, 70, 90, 100, 110, 120, 130, 140, 100, 110, 120, 130, 140, 40, 50, 120, 130, 140, 20, 30, 40, 50, 60, 130, 0, 10, 20, 30, 40, 50, 60, 10, 20, 30, 40, 50, 60, 20, 30, 40, 50, 60, 70, 40, 50, 60, 70, 80, ]
]




function PixelNumber(x, y, n) {
  this.x = x;
  this.y = y;
  this.n = n;
  if (n == ":") {
    this.n = 12;
  } else if (n == "o") {
    this.n = 10;
  } else if (n == "C") {
    this.n = 11;
  } else if (n == "-") {
    this.n = 13;
  }
  fill(100);
  for (var i = 0; i < pixelnumbers[this.n][0].length; i++) {
    rect(this.x + pixelnumbers[this.n][0][i], this.y + pixelnumbers[this.n][1][i], 10, 10);
  }
}

export default function PixelLetter(x, y, n, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  if (n == "a" || n == "A") {
    this.n = 0;
  } else if (n == "b" || n == "B") {
    this.n = 1;
  } else if (n == "c" || n == "C") {
    this.n = 2;
  } else if (n == "d" || n == "D") {
    this.n = 3;
  } else if (n == "e" || n == "E") {
    this.n = 4;
  } else if (n == "f" || n == "F") {
    this.n = 5;
  } else if (n == "g" || n == "G") {
    this.n = 6;
  } else if (n == "h" || n == "H") {
    this.n = 7;
  } else if (n == "i" || n == "I") {
    this.n = 8;
  } else if (n == "j" || n == "J") {
    this.n = 9;
  } else if (n == "k" || n == "K") {
    this.n = 10;
  } else if (n == "l" || n == "L") {
    this.n = 11;
  } else if (n == "m" || n == "M") {
    this.n = 12;
  } else if (n == "n" || n == "N") {
    this.n = 13;
  } else if (n == "o" || n == "O" || n == "ō") {
    this.n = 14;
  } else if (n == "p" || n == "P") {
    this.n = 15;
  } else if (n == "q" || n == "Q") {
    this.n = 16;
  } else if (n == "r" || n == "R") {
    this.n = 17;
  } else if (n == "s" || n == "S") {
    this.n = 18;
  } else if (n == "t" || n == "T") {
    this.n = 19;
  } else if (n == "u" || n == "U") {
    this.n = 20;
  } else if (n == "v" || n == "V") {
    this.n = 21;
  } else if (n == "w" || n == "W") {
    this.n = 22;
  } else if (n == "x" || n == "X") {
    this.n = 23;
  } else if (n == "y" || n == "Y") {
    this.n = 24;
  } else if (n == "z" || n == "Z") {
    this.n = 25;
  } else if (n == "-") {
    this.n = 26;
  } else if (n == " ") {
    this.n = 27;
  } else if (n == ":") {
    this.n = 28;
  } else if (n == ".") {
    this.n = 29;
  }
  if (size) {
    for (var i = 0; i < pixelletters[this.n][0].length; i++) {
      rect(this.x + pixelletters[this.n][0][i] / 10 * size, this.y + pixelletters[this.n][1][i] / 10 * size, size, size);
    }
  } else {
    for (var i = 0; i < pixelletters[this.n][0].length; i++) {
      rect(this.x + pixelletters[this.n][0][i], this.y + pixelletters[this.n][1][i], 10, 10);
    }
  }
}

function PixelThing(x, y, n, a) {
  this.x = x;
  this.y = y;
  this.n = n;
  this.a = a;
  fill(100, 100, 100, this.a);
  noStroke();
  if (timeofday == "day" && raining != true) {
    fill(70, 70, 70, this.a / 2);
  }
  print(timeofday);
  print(raining);
  for (var i = 0; i < pixelthings[this.n][0].length; i++) {
    rect(this.x + pixelthings[this.n][0][i], this.y + pixelthings[this.n][1][i], 10, 10);
  }
}

function NuclearThing(x, y, n, a) {
  this.x = x;
  this.y = y;
  this.n = n;
  this.a = a;
  fill(100, 100, 100, this.a);
  for (var i = 0; i < nuclear[0].length; i++) {
    rect(this.x + nuclear[0][i], this.y + nuclear[1][i], 10, 10);
  }
}
