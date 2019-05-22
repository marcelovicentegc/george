// install PubSubClient -> https://github.com/knolleary/pubsubclient
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char *SSID = "my wifi network";
const char *PASSWORD = "the password is written on the router";

const char *BROKER_MQTT = "localhost";
int BROKER_PORT = 1883;

const char *TOPIC = "";

void initPins();
void initSerial();
void initWiFi();
void initMQTT();

WiFiClient espClient;
PubSubClient MQTT(espClient);

void setup()
{
    initPins();
    initSerial();
    initWiFi();
    initMQTT();
}

void loop()
{
    if (!MQTT.connected())
    {
        reconnectMQTT();
    }
    recconectWiFi();
    MQTT.loop();
}

void initPins()
{
    pinMode(D5, OUTPUT);
    digitalWrite(D5, 0);
}

void initSerial()
{
    Serial.begin(115200);
}
void initWiFi()
{
    delay(10);
    Serial.println("Connecting to: " + String(SSID));

    WiFi.begin(SSID, PASSWORD);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(100);
        Serial.print(".");
    }
    Serial.println();
    Serial.print("Connecting to " + String(SSID) + " | IP => ");
    Serial.println(WiFi.localIP());
}

void initMQTT()
{
    MQTT.setServer(BROKER_MQTT, BROKER_PORT);
    MQTT.setCallback(mqtt_callback);
}

void mqtt_callback(char *topic, byte *payload, unsigned int length)
{

    String message;
    for (int i = 0; i < length; i++)
    {
        char c = (char)payload[i];
        message += c;
    }
    Serial.println("Topic => " + String(topic) + " | Value => " + String(message));
    if (message == "1")
    {
        digitalWrite(D5, 1);
    }
    else
    {
        digitalWrite(D5, 0);
    }
    Serial.flush();
}

void reconnectMQTT()
{
    while (!MQTT.connected())
    {
        Serial.println("Trying to connect to the MQTT Broker: " + String(BROKER_MQTT));
        if (MQTT.connect("ESP8266-ESP12-E"))
        {
            Serial.println("Connected");
            MQTT.subscribe(TOPIC);
        }
        else
        {
            Serial.println("Failed to reconnect");
            Serial.println("Trying to reconnect in 2 seconds");
            delay(2000);
        }
    }
}

void recconectWiFi()
{
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(100);
        Serial.print(".");
    }
}