# Setting IoTs up 🏗

## ESP8266

1. Make sure you have the [Arduino IDE](https://www.arduino.cc/en/Main/Software) installed on your machine.
2. Upload either a [.ino](./src/esp8266/mqtt/mqtt.ino) file:

   1. Install [PubSubClient](https://github.com/knolleary/pubsubclient)

   2. And upload this to your module, making sure to assign your wifi network name (`SSID`) and password (`PASSWORD`) as well as the topic you want this module to be subscribed to (`TOPIC`):

   ```c++
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
   ```

3. Or a [.lua](./src/esp8266/mqtt/mqtt.lua) file:

   1. Make sure to pass your network name as the third parameter (replacing `"username"`) of the `Client` method, and your network password as the fourth parameter (replacing `"password"`) and to assing the topic you want to subscribe this module to to the `topic` variable:

   ```lua
   -- initiate the mqtt client and set keepalive timer to 120sec
    mqtt = mqtt.Client("client_id", 120, "username", "password")
    local topic = ""

    mqtt:on("connect", function(con) print ("connected") end)
    mqtt:on("offline", function(con) print ("offline") end)

    -- on receive message
    mqtt:on("message", function(conn, topic, data)
    print(topic .. ":" )
    if data ~= nil then
        print(data)
    end
    end)

    mqtt:connect("hostname", port, 0, function(conn)
    print("connected")
    -- subscribe topic with qos = 0
    mqtt:subscribe(topic, 0, function(conn)
        -- publish a message with data = my_message, QoS = 0, retain = 0
       mqtt:publish("my_topic","my_message",0,0, function(conn)
       print("sent")
        end)
    end)
    end)
   ```
