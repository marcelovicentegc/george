# 🏠 home-automation-model

## Application architecture

- User authentication.
- House dashbord.
- Device toggle functionality.

# Software directions

## Configure the Raspberry Pi's O.S. through a remote machine:

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
13. **If willing to set a minimum decent development environment on the Raspberry [RECOMMENDED, otherwise will you have problems handling johnny-five and raspi-io], install VS Code (Code-OSS)**:
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
20. _pi@raspberrypi_ Install PostgreSQL: `sudo apt-get install postgres`
21. _pi@raspberrypi_ Start the application: `pm2...`

## Configure the Raspberry Pi's O.S. on a Hyper-V V.M.:

1.  [Get Raspbian Pi Desktop's ISO version](https://www.raspberrypi.org/downloads/raspberry-pi-desktop/)
2.  Launch Hyper-V

    ![Launch Hyper-V](assets/1.jpg)

3.  Launch the V.M. creation wizard

    ![Launch the V.M. creation wizard](assets/2.jpg)

4.  Name the V.M.

    ![Name the V.M.](assets/3.jpg)

5.  Specify its generation

    ![Specify its generation](assets/4.jpg)

6.  Specify the amount of RAM to allocate to the O.S. (note that Raspberry Pi's manufacture RAM is of 1024MB).

    ![Specify the amount of RAM](assets/5.jpg)

7.  Select the network adapter that you want to connect with this V.M. so it have access to internet (usually, the `External Virtual Switch`).

    ![Select the network adpater](assets/6.jpg)

8.  Select the size of the virtual hard disk for the V.M.

    ![Select the size of the virtual hard disk](assets/7.jpg)

9.  Reference the downloaded ISO

    ![Reference the downloaded ISO](assets/8.jpg)

10. Now, wait the wizard create the Raspbian's V.M. on Hyper-V

    ![Raspbian's V.M. creation](assets/9.jpg)

11. Once the V.M. has been created, start it

    ![Start Raspbian](assets/10.jpg)

12. On Raspbian O.S. installation wizard, select the `Graphical install` option and press `return`

    ![Raspbian O.S. installation wizard options](assets/11.jpg)

13. Select your preferred language

    ![Select your preferred language](assets/12.jpg)

14. Set the disk partition up: select `guided - use entire disk`, and continue

    ![Set the disk partition up](assets/13.jpg)

15. It will warn you that all the data on the test will be arranged. Continue

    ![Warn](assets/14.jpg)

16. Select the first option `All files in one partition`, and continue

    ![Partition options](assets/15.jpg)

17. Proceed to the summary of the partition setup, and select `Finish partitioning and write changes to disk`

    ![Partition summary](assets/16.jpg)

18. Confirm the changes by selecting `Yes`

    ![Partition confirmation](assets/17.jpg)

19. Wait for Raspbian's install

    ![Wait for Raspbian's install](assets/18.jpg)

20. Select `Yes` for the GRUB bootloader install prompt

    ![GRUP bootloader install](assets/19.jpg)

21. Specify the location you want to install the GRUB bootloader (usually, the second option)

    ![Specify the GRUB bootloader's location](assets/20.jpg)

22. Once the installation is completed, the wizard will notify it

    ![Installation is completed](assets/21.jpg)

23. After reboot, log in to Raspbian

    ![](assets/22.jpg)

Sources: [How to install Raspbian O.S. on Hyper-V](https://www.avoiderrors.com/how-to-install-raspbian-os-on-hyper-v/)

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

MQQT is bidrectional, and maintains stateful session awareness. If an edge-of-network device loses connectivity, all subscribed clients will be notified with the "Last Will and Testament" feature of the MQTT server so that any authorized client in the system can publish a new value back to the edge-of-network device, maintening bidirectional connectivity.

Sources: [Getting started with Node.js and MQTT](https://blog.risingstack.com/getting-started-with-nodejs-and-mqtt/), [ESP8266 and Node-RED with MQTT (Publish and Subscribe)](https://randomnerdtutorials.com/esp8266-and-node-red-with-mqtt/)

### Installing MQTT broker

1. Update the O.S.: `sudo apt update`
2. Install Mosquitto: `sudo apt install -y mosquitto mosquitto-clients`
3. Enable Mosquitto to start on boot: `sudo systemctl enable mosquitto.service`
4. Check Mosquitto's version: `mosquitto --version`
5. To use the Mosquitto broker, you'll need your Raspberry Pi's IP address, check it out by typing: `hostname -I`

### Testing the MQTT broker

1. Install Mosquitto's client: `sudo apt-get install mosquitto-clients`
2. Run Mosquitto as a daemon: `mosquitto -d`
3. Subscribe to a `testTopic`: `mosquitto_sub -d -t testTopic`
4. Open another terminal and publish a message to `testTopic`: `mosquitto_pub -d -t testTopic -m "Hello world!"`
5. Open one more terminal and subscribe to `testTopic`: `mosquitto_sub -d -t testTopic`
6. Again, on the second window, publish another message to `testTopic`: `mosquitto_pub -d -t testTopic -m "Hello world again!"`

Sources: [How to Install Mosquitto Broker on Raspberry Pi](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/), [Testing Mosquitto Broker and Client on Raspbbery Pi](https://randomnerdtutorials.com/testing-mosquitto-broker-and-client-on-raspbbery-pi/)

# Hardware directions

## Controllers

- [ESP controller](https://www.google.com/search?q=esp+controller&oq=esp+controller&aqs=chrome..69i57j69i65l3.4142j0j7&sourceid=chrome&ie=UTF-8)
  - ESP controllers are the conductors of the application and they orchestrate the application's logic and responses to client requests. Via `action` functions, they receive client requests and generate appropriate responses, mutating the applications data model as required.
    An ESP controller is a `C` source file that contains action functions to receive incoming client requests and manage the applications response. The controller may be part of an ESP MVC application or it may be a stand-alone controller. [Source](https://www.embedthis.com/esp/doc/users/controllers.html).
  - Connects to [LAN](https://en.wikipedia.org/wiki/Local_area_network).
  - Have ports

### ESP8266 (ESP8266 NodeMCU ESP-12E WiFi module) + Raspberry Pi

- Both can talk to each other directly.
- Both use 3.3V signaling, so no level converting is required.

Sources: [Connect the ESP8266 WiFi Chip to your Raspberry Pi](https://openhomeautomation.net/connect-esp8266-raspberry-pi), [Connect an ESP8266 to your Raspberry Pi](https://www.instructables.com/id/Connect-an-ESP8266-to-your-RaspberryPi/), [Raspberry Pi talking to ESP8266 using MQTT](https://www.hackster.io/ruchir1674/raspberry-pi-talking-to-esp8266-using-mqtt-ed9037),

### ESP8266 + MQTT

Sources: [Como programar o NodeMCU com IDE Arduino](https://www.filipeflop.com/blog/programar-nodemcu-com-ide-arduino/), [Controle monitoramento IoT com NodeMCU e MQTT](https://www.filipeflop.com/blog/controle-monitoramento-iot-nodemcu-e-mqtt/), [MQTT + ESP8266 12e (NodeMCU)](https://www.hackster.io/techiesms/mqtt-esp8266-12e-nodemcu-157e8b), [NodeMCU - Lua scripting language](https://www.cloudmqtt.com/docs/nodemcu.html), [Configurando o ESP8266 para trabalhar com MQTT](https://douglaszuqueto.com/artigos/configurando-o-esp8266-para-trabalhar-com-mqtt)

---

## Breadboard (a.k.a. protoboard)

Wires stuff together. The physical glue.

---

## Jump wire (a.k.a. jumpers)

---

## Switches

--

## Resistors

### Pull up/down resistors

---

## Transistors

---

## Relays

A relay is an electrally operated _switch_. Many relays use an electromagnet to mechanically operate a switch, but other operating pricnipals are also used, such as solid-state relays. Relays are used where it is necessary to control a circuit by a separate low-power signal, or where several circuits must be controlled by one signal. The first relays were used in long distance telegraph circuits as amplifiers: they repeated the signal coming in from one circuit and re-transmitted it on another circuit. Relays were used extensively in telephone exchanges and early computers to perform logical operations.

---

## Use cases

| Case             | Communication steps                                   |
| ---------------- | ----------------------------------------------------- |
| Eletric bulbs    | Broker -> Controller -> Relay -> Device               |
|                  | Broker -> Controller -> Transistor -> Relay -> Device |
| Infrared devices | Broker -> Controller -> Infrared emissor -> Device    |

---

## Hardware dictionary

| Word | Meaning                              |
| ---- | ------------------------------------ |
| TX   | Transmit (transmit FROM this server) |
| RX   | Receive (receive TO this server)     |
