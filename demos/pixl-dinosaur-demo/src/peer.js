import { Connector } from "@espruino-tools/peer";
import "./styles/app.scss";
let p = new Connector();

window.onload = function () {
  setTimeout(() => {
    p.connectData((data) => alert(data));
  }, 1000);

  let jumpbtn = document.querySelector(".cornerLeft2");

  jumpbtn.addEventListener("click", () => {
    p.conn.send("jump");
  });

  let startbtn = document.querySelector(".cornerRight1");

  startbtn.addEventListener("click", () => {
    p.conn.send("start");
  });
};
