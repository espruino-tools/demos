import { Host } from "@espruino-tools/peer";
import "./styles/app.scss";
import { DeviceController } from "@espruino-tools/core";

window.onload = function () {
  const device = new DeviceController();

  const connectCallback = () => {
    let root = document.getElementById("page-root");

    let statusPopup = document.createElement("div");
    statusPopup.className = "connection-notification";
    statusPopup.innerHTML = "<p>Connected Successfully</p>";
    root.appendChild(statusPopup);
    setTimeout(function () {
      statusPopup.parentElement.removeChild(statusPopup);
    }, 2000);
  };

  let writeGame = () => {
    device.UART
      .write(`// Modification of https://github.com/espruino/EspruinoDocs/blob/master/examples/Dinosaur%20Game.js
      LED.set();
      var BTNL = BTN4;
      var BTNR = BTN3;
      var BTNU = BTN1;
      
      // Images can be added like this in Espruino v2.00
      var IMG = {
        rex: [Graphics.createImage(\`
                 ########
                ##########
                ## #######
                ##########
                ##########
                ##########
                #####
                ########
      #        #####
      #      #######
      ##    ##########
      ###  ######### #
      ##############
      ##############
       ############
        ###########
         #########
          #######
           ### ##
           ##   #
                #
                ##
      \`),Graphics.createImage(\`
                 ########
                ##########
                ## #######
                ##########
                ##########
                ##########
                #####
                ########
      #        #####
      #      #######
      ##    ##########
      ###  ######### #
      ##############
      ##############
       ############
        ###########
         #########
          #######
           ### ##
           ##   ##
           #
           ##
      \`),Graphics.createImage(\`
                 ########
                #   ######
                # # ######
                #   ######
                ##########
                ##########
                #####
                ########
      #        #####
      #      #######
      ##    ##########
      ###  ######### #
      ##############
      ##############
       ############
        ###########
         #########
          #######
           ### ##
           ##   #
           #    #
           ##   ##
      \`)],
        cacti: [Graphics.createImage(\`
           ##
          ####
          ####
          ####
          ####
          ####  #
       #  #### ###
      ### #### ###
      ### #### ###
      ### #### ###
      ### #### ###
      ### #### ###
      ### #### ###
      ### #### ###
      ###########
       #########
          ####
          ####
          ####
          ####
          ####
          ####
          ####
          ####
      \`),Graphics.createImage(\`
         ##
         ##
       # ##
      ## ##  #
      ## ##  #
      ## ##  #
      ## ##  #
      #####  #
       ####  #
         #####
         ####
         ##
         ##
         ##
         ##
         ##
         ##
         ##
      \`)],
      };
      IMG.rex.forEach(i=>i.transparent=0);
      IMG.cacti.forEach(i=>i.transparent=0);
      /* In earlier versions of Espruino you need to do this:
      var IMG = {
        rex : [
          // running
           { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAAIAADAP//")) },
           { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYwAEAABgAP//")) },
           // dead
           { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gAj8AK/ACPwA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAEIABjAP//")) }
         ],
        cacti : [
          { width : 12, height : 24, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("BgDwDwDwDwDyT373737373737373/+f8DwDwDwDwDwDwDwDw")) },
          { width : 8, height : 18, bpp : 1,  transparent:0, buffer : E.toArrayBuffer(atob("GBhY2dnZ2fl5Hx4YGBgYGBgY")) }
        ],
      };*/
      var cacti, rex, frame;
      
      function gameStart() {
        rex = {
          alive : true,
          img : 0,
          x : 10, y : 0,
          vy : 0,
          score : 0
        };
        cacti = [ { x:128, img:1 } ];
        var random = new Uint8Array(128*3/8);
        for (var i=0;i<50;i++) {
          var a = 0|(Math.random()*random.length);
          var b = 0|(Math.random()*8);
          random[a]|=1<<b;
        }
        IMG.ground = { width: 128, height: 3, bpp : 1, buffer : random.buffer };
        frame = 0;
        setInterval(onFrame, 50);
      }
      function gameStop() {
        rex.alive = false;
        rex.img = 2; // dead
        clearInterval();
        setTimeout(function() {
          setWatch(gameStart, BTNU, {repeat:0,debounce:50,edge:"rising"});
        }, 1000);
        setTimeout(onFrame, 10);
      }
      
      function jump() {
          rex.vy=4;
      }
      
      function onFrame() {
        g.clear();
        if (rex.alive) {
          frame++;
          rex.score++;
          if (!(frame&3)) rex.img = rex.img?0:1;
          // move rex
          if (BTNL.read() && rex.x>0) rex.x--;
          if (BTNR.read() && rex.x<20) rex.x++;
          if (BTNU.read() && rex.y==0) jump();
          rex.y += rex.vy;
          rex.vy -= 0.2;
          if (rex.y<=0) {rex.y=0; rex.vy=0; }
          // move cacti
          var lastCactix = cacti.length?cacti[cacti.length-1].x:127;
          if (lastCactix<128) {
            cacti.push({
              x : lastCactix + 24 + Math.random()*128,
              img : (Math.random()>0.5)?1:0
            });
          }
          cacti.forEach(c=>c.x--);
          while (cacti.length && cacti[0].x<0) cacti.shift();
        } else {
          g.drawString("Game Over!",(128-g.stringWidth("Game Over!"))/2,20);
        }
        g.drawLine(0,60,127,60);
        cacti.forEach(c=>g.drawImage(IMG.cacti[c.img],c.x,60-IMG.cacti[c.img].height));
        // check against actual pixels
        var rexx = rex.x;
        var rexy = 38-rex.y;
        if (rex.alive &&
           (g.getPixel(rexx+0, rexy+13) ||
            g.getPixel(rexx+2, rexy+15) ||
            g.getPixel(rexx+5, rexy+19) ||
            g.getPixel(rexx+10, rexy+19) ||
            g.getPixel(rexx+12, rexy+15) ||
            g.getPixel(rexx+13, rexy+13) ||
            g.getPixel(rexx+15, rexy+11) ||
            g.getPixel(rexx+17, rexy+7) ||
            g.getPixel(rexx+19, rexy+5) ||
            g.getPixel(rexx+19, rexy+1))) {
          return gameStop();
        }
        g.drawImage(IMG.rex[rex.img], rexx, rexy);
        var groundOffset = frame&127;
        g.drawImage(IMG.ground, -groundOffset, 61);
        g.drawImage(IMG.ground, 128-groundOffset, 61);
        g.drawString(rex.score,127-g.stringWidth(rex.score));
        g.flip();
      }
      
      function restart(){
        gameStart();
      }
      
      gameStart();\n`);
  };
  let root = document.getElementById("page-root");

  let connectButton = document.createElement("button");
  connectButton.className = "esp-btn";
  connectButton.classList += " green";
  connectButton.id = "esp-connect";
  connectButton.innerText = "Connect";
  connectButton.onclick = function () {
    device.connect().then(() => {
      if (device.connected) {
        connectCallback();
        writeGame();
        let disconnectBtn = document.getElementById("esp-disconnect");
        connectButton.className = "hidden";
        disconnectBtn.classList = "esp-btn red";
      }
    });
  };
  root.appendChild(connectButton);

  let p = new Host(window.location.origin + "/peer.html");

  p.getData(function (data) {
    if (data === "jump") {
      device.UART.write("jump();\n");
    } else if (data === "start") {
      device.UART.write("gameStart();\n");
    }
  });
};
