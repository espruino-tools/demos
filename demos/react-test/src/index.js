import { Puck } from "@espruino-tools/core";
import "./styles/app.scss";

let puck = new Puck();

export const loadCode = () => {
  puck.LED.on("red");
};
