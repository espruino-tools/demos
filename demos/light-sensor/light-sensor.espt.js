import { Puck } from "@espruino-tools/core";

function toggleLEDOnLightVal() {
  let p = new Puck();

  let light = p.getLightVal();
  p.LED.off("blue");
  if (light < 0.1) {
    p.LED.on("blue");
  } else {
    p.LED.off("blue");
  }
}

setInterval(toggleLEDOnLightVal, 200);
