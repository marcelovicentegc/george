import * as mqtt from "mqtt";

export const mqttClient = mqtt.connect("http://localhost:1883");
