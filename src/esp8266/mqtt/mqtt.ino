// install PubSubClient -> https://github.com/knolleary/pubsubclient
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char *SSID = "my wifi network";                           // WiFi network
const char *PASSWORD = "the password is written on the router"; // WiFi network password

const char *BROKER_MQTT = "127.0.0.1"; // broker ip/host
int BROKER_PORT = 4000;                // broker port

// prototypes
void initPins();
void initSerial();
void initWiFi();
void initMQTT();

WiFiClient espClient;
PubSubClient MQTT(espClient); // instancia o mqtt

// setup
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

// prototypes implementation
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

// connects to the broker
void initMQTT()
{
    MQTT.setServer(BROKER_MQTT, BROKER_PORT);
    MQTT.setCallback(mqtt_callback);
}

// receives published messages
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
            MQTT.subscribe("sala/ar-condicionado");
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