let player = new Image();
player.src = "/source/player.png";
let win = new Audio("./source/win.mp3");
let movement = new Audio("./source/move.mp3");

let rowCol = [];
let w;
let h;
let enable = true;

let mazeDiv = document.getElementsByClassName('maze')[0];
let timer = document.getElementsByClassName('timer')[0];
let dPad = document.getElementsByClassName('d-pad')[0];
let winDom = document.getElementsByClassName('win')[0];

player.onload = () => {
      w = newMaze.size / newMaze.rows;
      let nw = player.naturalWidth;
      let nh = player.naturalHeight;
      let ratio = nw / nh;
      h = w / ratio;
      ctx.drawImage(player, selectStartingCell.colNum * w + 1, selectStartingCell.rowNum * w + 1, w - 3, h - 3);
      rowCol.push(selectStartingCell.colNum, selectStartingCell.rowNum);
}
window.addEventListener("keydown", move);

function move(eve) {
      if (enable) {
            switch (eve.keyCode) {
                  case 37:
                        if (rowCol[0] != 0) {
                              if (newMaze.grid[rowCol[1]][rowCol[0]].wall.leftWall == false) {
                                    movement.pause();
                                    movement.currentTime = 0;
                                    ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 2, h - 2);
                                    rowCol[0] -= 1;
                                    ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                                    movement.play();
                                    if (rowCol[1] == selectEndingCell.rowNum && rowCol[0] == selectEndingCell.colNum) {
                                          winScreen();
                                    }
                              }
                        }
                        break;
                  case 38:
                        if (rowCol[1] != 0) {
                              if (newMaze.grid[rowCol[1]][rowCol[0]].wall.topWall == false) {
                                    movement.pause();
                                    movement.currentTime = 0;
                                    ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 2, h - 2);
                                    rowCol[1] -= 1;
                                    ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                                    movement.play();
                                    if (rowCol[1] == selectEndingCell.rowNum && rowCol[0] == selectEndingCell.colNum) {
                                          winScreen();
                                    }
                              }
                        }
                        break;
                  case 39:
                        if (rowCol[0] != newMaze.grid.length - 1) {
                              if (newMaze.grid[rowCol[1]][rowCol[0]].wall.rightWall == false) {
                                    movement.pause();
                                    movement.currentTime = 0;
                                    ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 2, h - 2);
                                    rowCol[0] += 1;
                                    ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                                    movement.play();
                                    if (rowCol[1] == selectEndingCell.rowNum && rowCol[0] == selectEndingCell.colNum) {
                                          winScreen();
                                    }
                              }
                        }
                        break;
                  case 40:
                        if (rowCol[1] != newMaze.grid.length - 1) {
                              if (newMaze.grid[rowCol[1]][rowCol[0]].wall.bottomWall == false) {
                                    movement.pause();
                                    movement.currentTime = 0;
                                    ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 2, h - 2);
                                    rowCol[1] += 1;
                                    ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                                    movement.play();
                                    if (rowCol[1] == selectEndingCell.rowNum && rowCol[0] == selectEndingCell.colNum) {
                                          winScreen();
                                    }
                              }
                        }
                        break;
                  default:
                        break;
            }
      }
}

function winScreen() {
      winDom.classList.add("animate");
      setTimeout(() => winDom.style.top = "-5vh", 2000);
      enable = false;
      win.play();
}

let btn = document.querySelectorAll('.d-pad span');

if ("ontouchstart" in window || window.navigator.maxTouchPoints) {
      dPad.classList.add("touch");
      if (window.innerHeight > window.innerWidth) {
            document.body.classList.add("potrait");
      } else {
            document.body.classList.add("landscape");
      }

      for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", () => {
                  let eve = {
                        keyCode: parseInt(btn[i].getAttribute("data-key"))
                  };
                  move(eve);
            });
            btn[i].addEventListener("touchstart", () => {
                  btn[i].classList.toggle("active")
            });
            btn[i].addEventListener("touchend", () => {
                  btn[i].classList.toggle("active")
            });
      }
}