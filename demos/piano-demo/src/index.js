import { Host } from "@espruino-tools/peer";
import "./styles/app.scss";

window.onload = function () {
  let p = new Host(window.location.origin + "/peer.html");

  p.getData((key) => {
    let audio = new Audio(`/static/sounds/${key.replace("#", "Sharp")}.mp3`);
    audio.play();
    displayKey(key);
  });
};

const displayKey = (keyData) => {
  let body = document.getElementsByTagName("body")[0];

  let keyElement = document.createElement("div");

  keyElement.classList = "shown-key";

  keyElement.innerText = keyData;

  body.appendChild(keyElement);

  setTimeout(() => {
    body.removeChild(keyElement);
  }, 1000);
};
