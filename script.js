const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext('2d');

const n = 20;
var count = 0;

init();

function init() {
  firstSet();

}

function firstSet() {
  for (var i = 1; i < n; i++) {
    ctx.beginPath();
    ctx.fillStyle = "WhiteSmoke";
    ctx.fillRect(30*i-1, 0, 2, 30*n);
    ctx.closePath();
  }
  for (var i = 1; i < n; i++) {
    ctx.beginPath();
    ctx.fillStyle = "WhiteSmoke";
    ctx.fillRect(0, 30*i-1, 30*n, 2);
    ctx.closePath();
  }
  ctx.beginPath();
  ctx.fillStyle = "WhiteSmoke";
  ctx.fillRect(0, 0, 30*n, 1);
  ctx.fillRect(0, 0, 1, 30*n);
  ctx.fillRect(30*n-1, 0, 1, 30*n);
  ctx.fillRect(0, 30*n-1, 30*n, 1);
  ctx.closePath();

  canvas.addEventListener("click", function(event) {
    if (count < 2) {
      if (count == 0) var g1 = new Green(event);
      if (count == 1) var b1 = new Blue(event);
      count += 1;
    }else {
      // red=imgData.data[0];
      // green=imgData.data[1];
      // blue=imgData.data[2];
      // alpha=imgData.data[3];
      var color = ctx.getImageData(event.x, event.y, 1, 1).data;
      if (color[1] == 128) {
        console.log(color);
      }
      if (color[2] == 255) {

      }
    }
  });
}

function Green(event) {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(event.x, event.y, 60, 60);
  ctx.closePath();
}

function Blue(event) {
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(event.x, event.y, 60, 60);
  ctx.closePath();
}
