let player = new Image();
player.src = "./player.png";

player.onload = () => {
      let w = newMaze.size / newMaze.rows;
      let nw = player.naturalWidth;
      let nh = player.naturalHeight;
      let ratio = nw / nh;
      let h = w / ratio;

      ctx.drawImage(player, 1, 1, w - 1, h - 1);
};