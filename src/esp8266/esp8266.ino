#include <ESP8266WiFi.h>

const char *ssid = "your network name";
const char *password = "your network password";

int relay = D0;
int led = D1;
WiFiServer server(80);

void setup()
{
    Serial.begin(9600);
    delay(10);

    pinMode(relay, OUTPUT);
    pinMode(led, OUTPUT);
    digitalWrite(led, HIGH);

    Serial.println();
    Serial.println();

    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected.");

    server.begin();
    Serial.println("Server started");

    Serial.print("Use this URL to access your server: ");
    Serial.print("http://");
    Serial.print(WiFi.localIP());
    Serial.println("/");
}

void loop()
{
    WiFiClient client = server.available();
    if (!client)
    {
        return;
    }

    Serial.println("New client");
    while (!client.available())
    {
        delay(1);
    }

    String request = client.readStringUntil('\r');
    Serial.println(request);
    client.flush();

    int value = LOW;
    if (request.indexOf("/LED=ON") != -1)
    {
        digitalWrite(relay, HIGH);
        value = HIGH;
    }

    if (request.indexOf("/LED=OFF") != -1)
    {
        digitalWrite(relay, LOW);
        value = LOW;
    }

    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println("");
    client.println("<!DOCTYPE HTML>");
    client.println("<html>");
    client.println("Led pin is now: ");

    if (value == HIGH)
    {
        client.print("On");
    }
    else
    {
        client.print("Off");
    }

    client.println("<br><br>");
    client.println("Click <a href=\"/LED=ON\">here</a> to turn the relay On<br>");
    client.println("Click <a href=\"/LED=OFF\">here</a> to turn the relay Off<br>");
    client.println("</html>");

    delay(1);
    Serial.println("Client disconnected");
    Serial.println("");
}
