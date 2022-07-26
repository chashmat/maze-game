let player = new Image();
player.src = "./player.png";

console.log(selectStartingCell);
console.log(selectEndingCell);

let rowCol = [];
let w;
let h;

player.onload = () => {
      w = newMaze.size / newMaze.rows;
      let nw = player.naturalWidth;
      let nh = player.naturalHeight;
      let ratio = nw / nh;
      h = w / ratio;
      ctx.drawImage(player, selectStartingCell.colNum * w + 1, selectStartingCell.rowNum * w + 1, w - 3, h - 3);
      rowCol.push(selectStartingCell.colNum, selectStartingCell.rowNum);
      console.log(rowCol);
}
window.addEventListener("keydown", move);

function move(eve) {
      switch (eve.keyCode) {
            case 37:
                  if (rowCol[0] != 0) {
                        if (newMaze.grid[rowCol[1]][rowCol[0]].wall.leftWall == false) {
                              ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                              rowCol[0] -= 1;
                              ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                        }
                  }
                  break;
            case 38:
                  if (rowCol[1] != 0) {
                        if (newMaze.grid[rowCol[1]][rowCol[0]].wall.topWall == false) {
                              ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                              rowCol[1] -= 1;
                              ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                        }
                  }
                  break;
            case 39:
                  if (rowCol[0] != newMaze.grid.length - 1) {
                        if (newMaze.grid[rowCol[1]][rowCol[0]].wall.rightWall == false) {
                              ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                              rowCol[0] += 1;
                              ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                        }
                  }
                  break;
            case 40:
                  if (rowCol[1] != newMaze.grid.length - 1) {
                        if (newMaze.grid[rowCol[1]][rowCol[0]].wall.bottomWall == false) {
                              ctx.clearRect(rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                              rowCol[1] += 1;
                              ctx.drawImage(player, rowCol[0] * w + 1, rowCol[1] * h + 1, w - 3, h - 3);
                        }
                  }
                  break;
            default:
                  break;
      }
}