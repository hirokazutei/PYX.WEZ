var pix = [];

function DrawPixel() {
    for (var i = 0; i < pix.length; i++) {
        pix[i].draw();
    }
}

function Pixel(x, y) {
    this.x = x;
    this.y = y;

    this.draw = function() {
        rect(this.x, this.y, 10, 10);
    }
}



var cloudpix = [];

function DrawCloud() {
    for (var i = 0; i < cloudpix.length; i++) {
        cloudpix[i].draw();
    }
}

function CloudPixel(x, y) {
    this.x = x;
    this.y = y;

    this.draw = function() {
        rect(this.x, this.y, 10, 10);
    }
}