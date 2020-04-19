import * as mqtt from "mqtt";
import { brokerPort } from "./config";

export const mqttClient = mqtt.connect(`http://localhost:${brokerPort}`);
