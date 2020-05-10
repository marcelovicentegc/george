# 🏠 About George

## Application architecture

- User authentication.
- House dashbord.
- Device toggle functionality.

---

## Software directions

| General steps                                                                                      |
| -------------------------------------------------------------------------------------------------- |
| Install Node.js on Raspberry -> Set a MQTT broker on Raspberry -> Set a MQTT client on Application |

## Configure the Raspberry Pi's O.S. through a remote machine

1. [Get Raspberry Pi's O.S. lite (server) version](https://www.raspberrypi.org/downloads/raspbian/)
2. [Follow the instructions](https://www.raspberrypi.org/documentation/installation/installing-images/README.md)
3. Enable `ssh` (disabled by default for security reasons) by creating a `ssh` folder inside the disk's root
4. Set up a [DHTP server](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)
5. Start Raspberry Pi
6. Get Raspberry Pi's IP address <ip_address>
7. ssh into it: `ssh pi@<ip_address>`
   - Password: `raspberry`
8. _pi@raspberrypi_ Change current password: `passwd`
9. _pi@raspberrypi_ Update and upgrade the O.S.:
   - `sudo apt-get update`
   - `sudo apt-get upgrade`
10. _pi@raspberrypi_ Install git: `sudo apt-get install git`
11. _pi@raspberrypi_ Set time to local time: `sudo dpkg-reconfigure tzdata`
12. _pi@raspberrypi_ Install Node (Debian approaches versioning differently than Node's, and in this case `apt-get` straight away is not the best option):
    - `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`
      - Note: if you get stuck on `[Connecting to archive.raspberrypi.org (etc...)]`, try:
        - `sudo apt-get -o Acquire::ForceIPv4=true update`
        - `sudo apt-get -o Acquire::ForceIPv4=true -y dist-upgrade`
        - Note that `-o Acquire::ForceIPv=true` can be used for stucked installs as well
    - `sudo apt-get install nodejs`
    - `node -v`
    - `npm -v`
13. **If willing to set a minimum decent development environment on the Raspberry [RECOMMENDED, otherwise handling johnny-five and raspi-io can get quite over complicated], install VS Code (Code-OSS)**:
    - `wget https://packagecloud.io/headmelted/codebuilds/gpgkey -O - | sudo apt-key add -` or `sudo apt-get install code-oss=<version>` [check version here](https://packagecloud.io/headmelted/codebuilds)
    - `curl -L https://code.headmelted.com/installers/apt.sh | sudo bash`
14. _pi@raspberrypi_ Install Nginx: `sudo apt-get install nginx`
15. _pi@raspberrypi_ Adjust the Firewall: `sudo ufw app list`
16. _pi@raspberrypi_ Clone this repo: `git clone https://github.com/marcelovicentegc/home-automation-model.git`
17. Install yarn:
    - `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
    - `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
    - `sudo apt update`
    - `sudo apt install --no-install-recommends yarn`
    - `yarn --version`
18. _pi@raspberrypi_ Install dependencies:

    - `yarn install`
    - `yarn add johnny-five raspi-io & yarn add -D @types/johnny-five`

19. _pi@raspberrypi_ Reboot: `sudo reboot`
20. _pi@raspberrypi_ Start the application: `pm2...`

## Configure the Raspberry Pi's O.S. on a Hyper-V V.M

Sources: [How to install Raspbian O.S. on Hyper-V](https://www.avoiderrors.com/how-to-install-raspbian-os-on-hyper-v/)

---

## Raspberry Pi as a web server

Sources: [How To Set Up a Firewall with UFW on Debian 9](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-debian-9), [Setting up an NGINX web server on a Raspberry Pi](https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md), [How to set up a Node.js application for production on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04)
Sources: [How to install yarn on Ubuntu 18.04](https://linux4one.com/how-to-install-yarn-on-ubuntu-18-04/)

---

## Node.js libraries

### [johnny-five](https://github.com/rwaldron/johnny-five)

Makes it simple (Javascript way) to interact with Pi's hardware.

Bryan Hughes - _The JQuery of robotics. A physical web UI._

It communicates with Raspberry Pi through the Firmata Protocol

Sources: [Getting Started with the Johnny-Five Robotics](https://www.youtube.com/watch?v=bqdbglIRRJA&list=PL9z6q1fnu6aBbcgDRXlzAmqAf9MsTaRJk)

### [raspi-io](https://github.com/nebrius/raspi-io)

### [MQTT](https://github.com/mqtt/mqtt.github.io/wiki/software?id=software) (Message Queue Telemetry Transport, a.k.a. Mosquitto by the Python community)

IoT **connectivity protocol** that can be used to glue devices together.

MQTT is a machine-to-machine (M2M) data transfer protocol. MQTT was created with the goal of collecting data from many devices and then transporting that data to the IT infrastructure. It is lightweight, and therefore ideal for remote monitoring, especially in M2M connections that require a small code footprint or where network bandwidth is limited.

MQTT is a publish/subscribe (PubSub) protocol that allows edge-of-network devices to publish to a broker. Clients connect to this broker, which then mediates communication between the two devices. **Each device can subscribe, or register, to particular topics**. When another client publishes a message on a subscribed topic, the broker forwards the message to any client that has subscribed.

MQTT is bidrectional, and maintains stateful session awareness. If an edge-of-network device loses connectivity, all subscribed clients will be notified with the "Last Will and Testament" feature of the MQTT server so that any authorized client in the system can publish a new value back to the edge-of-network device, maintening bidirectional connectivity.

Sources: [Getting started with Node.js and MQTT](https://blog.risingstack.com/getting-started-with-nodejs-and-mqtt/), [ESP8266 and Node-RED with MQTT (Publish and Subscribe)](https://randomnerdtutorials.com/esp8266-and-node-red-with-mqtt/), [CloudMQTT](https://www.cloudmqtt.com/), [Setting up private MQTT broker using Mosca in Node.js](https://medium.com/@alifabdullah/setting-up-private-mqtt-broker-using-mosca-in-node-js-c61a3c74f952)

### Testing the MQTT broker

Sources: [How to Install Mosquitto Broker on Raspberry Pi](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/), [Testing Mosquitto Broker and Client on Raspbbery Pi](https://randomnerdtutorials.com/testing-mosquitto-broker-and-client-on-raspbbery-pi/)

---

## Hardware directions

### Controllers

- [ESP controller](https://www.google.com/search?q=esp+controller&oq=esp+controller&aqs=chrome..69i57j69i65l3.4142j0j7&sourceid=chrome&ie=UTF-8)
  - ESP controllers are the conductors of the application and they orchestrate the application's logic and responses to client requests. Via `action` functions, they receive client requests and generate appropriate responses, mutating the applications data model as required.
    An ESP controller is a `C` source file that contains action functions to receive incoming client requests and manage the applications response. The controller may be part of an ESP MVC application or it may be a stand-alone controller. [Source](https://www.embedthis.com/esp/doc/users/controllers.html).
  - Connects to [LAN](https://en.wikipedia.org/wiki/Local_area_network).

#### ESP8266 power consumption

| Energy      |
| ----------- |
| 1,2 W/h     |
| 720 W/month |

Sources: [ESP8266 Power Consumption](https://bbs.espressif.com/viewtopic.php?t=133)

#### ESP8266 NodeMCU ESP-12E WiFi module board + Raspberry Pi

- Both can talk to each other directly.
- Both use 3.3V signaling, so no level converting is required.

Sources: [Connect the ESP8266 WiFi Chip to your Raspberry Pi](https://openhomeautomation.net/connect-esp8266-raspberry-pi), [Connect an ESP8266 to your Raspberry Pi](https://www.instructables.com/id/Connect-an-ESP8266-to-your-RaspberryPi/), [Raspberry Pi talking to ESP8266 using MQTT](https://www.hackster.io/ruchir1674/raspberry-pi-talking-to-esp8266-using-mqtt-ed9037), [Introduction to IoT: Build an MQTT Server Using Raspberry Pi](https://appcodelabs.com/introduction-to-iot-build-an-mqtt-server-using-raspberry-pi)

#### ESP8266 NodeMCU ESP-12E WiFi module board + Arduino

- Install NodeMCU on local machine
- Configure it via Arduino IDE

Sources: [ESP8266 ESP-01 Real time clock with DS3231/DS1307](https://simple-circuit.com/esp8266-esp-01-ds3231-ds1307-rtc/), [NodeMCU – Como criar um Web Server e conectar a uma rede WiFi](http://blogmasterwalkershop.com.br/embarcados/nodemcu/nodemcu-como-criar-um-web-server-e-conectar-a-uma-rede-wifi/)

#### ESP8266 NodeMCU ESP-12E WiFi module board + MQTT

Sources: [Como programar o NodeMCU com IDE Arduino](https://www.filipeflop.com/blog/programar-nodemcu-com-ide-arduino/), [Controle monitoramento IoT com NodeMCU e MQTT](https://www.filipeflop.com/blog/controle-monitoramento-iot-nodemcu-e-mqtt/), [MQTT + ESP8266 12e (NodeMCU)](https://www.hackster.io/techiesms/mqtt-esp8266-12e-nodemcu-157e8b), [NodeMCU - Lua scripting language](https://www.cloudmqtt.com/docs/nodemcu.html), [Configurando o ESP8266 para trabalhar com MQTT](https://douglaszuqueto.com/artigos/configurando-o-esp8266-para-trabalhar-com-mqtt), [Experimentando a NodeMCU com Node.js e MQTT](https://medium.com/@czarantoniodesouza/experimentando-a-node-mcu-com-nodejs-e-mqtt-798bc5666d2f), [How to Use MQTT With the Raspberry Pi and ESP8266](https://www.instructables.com/id/How-to-Use-MQTT-With-the-Raspberry-Pi-and-ESP8266/)

#### Powering a ESP8266 NodeMCU ESP-12E WiFi module board

Sources: [Powering the ESP-12E NodeMCU Development Board](http://henrysbench.capnfatz.com/henrys-bench/arduino-projects-tips-and-more/powering-the-esp-12e-nodemcu-development-board/)

#### Controlling a relay with ESP8266 NodeMCU ESP-12E WiFi module board

Sources: [How to make a 5 volts relay work with NodeMCU](https://arduino.stackexchange.com/questions/36330/how-to-make-a-5-volt-relay-work-with-nodemcu), [ESP8266 WiFi relay control](https://www.youtube.com/watch?v=3bFs_MZVFxw), [ESP8266 Web Server - Control a Relay, LED, Read Temperature & Humidity](https://www.youtube.com/watch?v=vItG2NUKovk), [Connecting a Relay Module with NodeMCU](http://www.notespoint.com/relaymodule-nodemcu/)

---

### Breadboard (a.k.a. protoboard)

Wires stuff together. The physical glue.

---

### Jump wire (a.k.a. jumpers)

---

### Switches

---

### Resistors

#### Pull up/down resistors

---

### Transistors

---

### Relays

A relay is an electrally operated _switch_. Many relays use an electromagnet to mechanically operate a switch, but other operating pricnipals are also used, such as solid-state relays. Relays are used where it is necessary to control a circuit by a separate low-power signal, or where several circuits must be controlled by one signal. The first relays were used in long distance telegraph circuits as amplifiers: they repeated the signal coming in from one circuit and re-transmitted it on another circuit. Relays were used extensively in telephone exchanges and early computers to perform logical operations.

Sources: [How to connect a lamp to a DIY relay module for the popular clap switch](https://www.buildcircuit.com/how-to-use-diy-relay-module-for-popular-clap-switch/), [How to set up a 5V relay on the Arduino](http://www.circuitbasics.com/setting-up-a-5v-relay-on-the-arduino/), [Relay Logic](https://ncd.io/relay-logic/)

---

## Use cases

| Case                          | Communication steps                                   |
| ----------------------------- | ----------------------------------------------------- |
| Eletric bulbs (light control) | Broker -> Controller -> Relay -> Device               |
|                               | Broker -> Controller -> Transistor -> Relay -> Device |
| Infrared devices              | Broker -> Controller -> Infrared emissor -> Device    |

---

## Hardware dictionary

| Word | Meaning                              |
| ---- | ------------------------------------ |
| TX   | Transmit (transmit FROM this server) |
| RX   | Receive (receive TO this server)     |
