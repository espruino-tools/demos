import { Connector } from "@espruino-tools/peer";
import "./styles/app.scss";
let p = new Connector();

window.onload = function () {
  setTimeout(() => {
    p.connectData();
  }, 1000);
};

export const pressKey = (element) => {
  let keyPressed = element.getAttribute("key-data");
  p.conn.send(keyPressed);
};
