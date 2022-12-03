import { Puck } from "@espruino-tools/device-controller";

let device = new Puck();

const connect = () => device.connect(() => console.log("connected"));

const doSomething = () => {
  device.onPress(() => {
    // do something.
  });
};
