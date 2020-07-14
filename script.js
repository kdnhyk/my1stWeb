const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext('2d');
const restart = document.getElementById('restart');

const n = 20;

var count = 0; // 0->black // 1->white
var box = [];

init();

function init() {
  firstSet();
}

function firstSet() {

  for (var i = 1; i < n; i++) {
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(30*i-1, 0, 2, 30*n);
    ctx.closePath();
  }
  for (var i = 1; i < n; i++) {
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(0, 30*i-1, 30*n, 2);
    ctx.closePath();
  }
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0, 0, 30*n, 1);
  ctx.fillRect(0, 0, 1, 30*n);
  ctx.fillRect(30*n-1, 0, 1, 30*n);
  ctx.fillRect(0, 30*n-1, 30*n, 1);
  ctx.closePath();

  canvas.addEventListener("click", function(event) {
    if (true) {
      if (count == 0) {
        new Black(event);
      }else if (count == 1) {
        new White(event);
      }
    }else {
      alert("더 이상 놓을 수 없습니다!");
    }
  });

  restart.addEventListener("click", function(event) {
    reset();
  });
}

function reset() {
  // 초기화
  ctx.beginPath();
  ctx.fillStyle = "#996434";
  ctx.fillRect(0, 0, 30*n, 30*n);
  ctx.closePath();
  box = [];

  for (var i = 1; i < n; i++) {
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(30*i-1, 0, 2, 30*n);
    ctx.closePath();
  }
  for (var i = 1; i < n; i++) {
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(0, 30*i-1, 30*n, 2);
    ctx.closePath();
  }
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.fillRect(0, 0, 30*n, 1);
  ctx.fillRect(0, 0, 1, 30*n);
  ctx.fillRect(30*n-1, 0, 1, 30*n);
  ctx.fillRect(0, 30*n-1, 30*n, 1);
  ctx.closePath();
}

function Black(e) {
  var bX = Math.round((e.x-6)/30),
    bY = Math.round((e.y-6)/30);
  if (check(bX, bY)) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(bX*30, bY*30, 10, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.closePath();
    box.push([bX, bY]);
    count += 1;
  }
}

function White(e) {
  var wX = Math.round((e.x-6)/30),
    wY = Math.round((e.y-6)/30);
  if (check(wX, wY)) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(wX*30, wY*30, 10, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.closePath();
    box.push([wX, wY]);
    count -= 1;
  }
}

function check(rX, rY) {
  if (rX != 0 && rX != n && rY != 0 && rY != n) {
    for (var i = 0; i < box.length; i++) {
      if (box[i][0] == rX && box[i][1] == rY) {
        alert("이미 돌이 있습니다!");
        return false;
      }
    }
    return true;
  }else {
    alert("가장자리에는 놓을 수 없습니다!");
    return false;
  }
}
