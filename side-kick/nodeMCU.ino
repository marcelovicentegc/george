#include <Blynk.h>

/*************************************************************
  Download latest Blynk library here:
    https://github.com/blynkkk/blynk-library/releases/latest

  Blynk is a platform with iOS and Android apps to control
  Arduino, Raspberry Pi and the likes over the Internet.
  You can easily build graphic interfaces for all your
  projects by simply dragging and dropping widgets.

    Downloads, docs, tutorials: http://www.blynk.cc
    Sketch generator:           http://examples.blynk.cc
    Blynk community:            http://community.blynk.cc
    Follow us:                  http://www.fb.com/blynkapp
                                http://twitter.com/blynk_app

  Blynk library is licensed under MIT license
  This example code is in public domain.

 *************************************************************
  This example runs directly on NodeMCU.

  Note: This requires ESP8266 support package:
    https://github.com/esp8266/Arduino

  Please be sure to select the right NodeMCU module
  in the Tools -> Board menu!

  For advanced settings please follow ESP examples :
   - ESP8266_Standalone_Manual_IP.ino
   - ESP8266_Standalone_SmartConfig.ino
   - ESP8266_Standalone_SSL.ino

  Change WiFi ssid, pass, and Blynk auth token to run :)
  Feel free to apply it to any other example. It's simple!
 *************************************************************/

/* Comment this out to disable prints and save space */
#define BLYNK_PRINT Serial

#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>
#include <TimeLib.h>
#include <WidgetRTC.h>
#include <math.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "7b50be479cd3430fb8ce5b5eaeefcdbf";

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "Net-Virtua-4314";
char pass[] = "948743140";

// Alarm settings.
BlynkTimer timer;
WidgetRTC rtc;

int alarm;
int redScale;
int red;
int greenScale;
int green;
int blueScale;
int blue;
int bipDuration = 240;

BLYNK_WRITE(V0)
{
  alarm = param[0].asInt();
  Serial.println(alarm);
  /* Serial.println(rawSeconds / 3600);
  double rawHours, rawMinutes, doubleHours;
  
  rawHours = rawSeconds / 3600;
  rawMinutes = rawHours-(float)rawHours;
  int hours = doubleHours;
  int minutes = rawMinutes * 60;
  String alarm = hours + ":" + minutes;
  printf("Hours = %i\n", hours);
  printf("Minutes = %i\n", minutes);
  printf("rawMinutes = \n", rawMinutes);
  Serial.println(); */
}

BLYNK_WRITE(V1)
{
  redScale = param[0].asInt();
  red = map(redScale, 0, 1023, 0, 255);
  Serial.print("red scale: ");
  Serial.println(redScale);
  Serial.println();
  Serial.print("red: ");
  Serial.print(red);
  Serial.println();
}

BLYNK_WRITE(V2)
{
  greenScale = param[0].asInt();
  green = map(greenScale, 0, 1023, 0, 255);
  Serial.print("green scale: ");
  Serial.println(greenScale);
  Serial.println();
  Serial.print("green: ");
  Serial.print(green);
  Serial.println();
}

BLYNK_WRITE(V3)
{
  blueScale = param[0].asInt();
  blue = map(blueScale, 0, 1023, 0, 255);
  Serial.print("blue scale: ");
  Serial.println(blueScale);
  Serial.println();
  Serial.print("blue: ");
  Serial.println(blue);
  Serial.println();
}

// Digital clock display of the time
void clockDisplay()
{
  // You can call hour(), minute(), ... at any time
  // Please see Time library examples for details
  int hourSeconds = hour() * 3600;
  int minuteSeconds = minute() * 60;
  long currentTime = hourSeconds + minuteSeconds;
  // String currentTime = String(hour()) + ":" + minute();
  for (int i = 0; i < bipDuration; i++)
  {
    if (currentTime - (bipDuration - i) == alarm)
    {
      Serial.print("ALARM BIPING!");
      Serial.println();
      return;
    }
  }

  // String currentDate = String(day()) + " " + month() + " " + year();
  Serial.print("Current time: ");
  Serial.print(currentTime);
  // Serial.print(" ");
  // Serial.print(currentDate);
  Serial.println();

  // Send time to the App
  Blynk.virtualWrite(V1, currentTime);
  // Send date to the App
  // Blynk.virtualWrite(V2, currentDate);
}

void setup()
{
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk-cloud.com", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // Begin synchronizing time
  rtc.begin();

  // Other Time library functions can be used, like:
  //   timeStatus(), setSyncInterval(interval)...
  // Read more: http://www.pjrc.com/teensy/td_libs_Time.html

  // Display digital clock every 10 seconds
  timer.setInterval(10000L, clockDisplay);
}

void loop()
{
  Blynk.run();
  timer.run();
}
