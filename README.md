# 🏠 home-automation-model

## Application architecture

- User authentication.
- House dashbord.
- Device toggle functionality.

# Software directions

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
    - `sudo apt-get install nodejs`
    - `node -v`
    - `npm -v`
13. _pi@raspberrypi_ Install Nginx: `sudo apt-get install nginx`
14. _pi@raspberrypi_ Adjust the Firewall: `sudo ufw app list`
15. _pi@raspberrypi_ Clone this repo: `git clone https://github.com/marcelovicentegc/smarthome-dudu.git`
16. _pi@raspberrypi_ Install dependencies:

    - `yarn install`
    - `yarn add johnny-five raspi-io & yarn add -D @types/johnny-five`

17. _pi@raspberrypi_ Reboot: `sudo reboot`
18. _pi@raspberrypi_ Install PostgreSQL: `sudo apt-get install postgres`
19. _pi@raspberrypi_ Start the application: `pm2...`

### [johnny-five](https://github.com/rwaldron/johnny-five)

Makes it simple (Javascript way) to interact with Pi's hardware.

Bryan Hughes - _The JQuery of robotics. A physical web UI._

### [raspi-io](https://github.com/nebrius/raspi-io)

### [MQTT](https://github.com/mqtt/mqtt.github.io/wiki/software?id=software)

IoT **connectivity protocol** that can be used to glue devices together.

# Hardware directions

## Controllers

- [ESP controller](https://www.google.com/search?q=esp+controller&oq=esp+controller&aqs=chrome..69i57j69i65l3.4142j0j7&sourceid=chrome&ie=UTF-8)
  - ESP controllers are the conductors of the application and they orchestrate the application's logic and responses to client requests. Via `action` functions, they receive client requests and generate appropriate responses, mutating the applications data model as required.
    An ESP controller is a `C` source file that contains action functions to receive incoming client requests and manage the applications response. The controller may be part of an ESP MVC application or it may be a stand-alone controller. [Source](https://www.embedthis.com/esp/doc/users/controllers.html).
  - Connects to [LAN](https://en.wikipedia.org/wiki/Local_area_network).
  - Have ports

### Connectivity protocols

## Transistors

## Relays

A relay is an electrally operated _switch_. Many relays use an electromagnet to mechanically operate a switch, but other operating pricnipals are also used, such as solid-state relays. Relays are used where it is necessary to control a circuit by a separate low-power signal, or where several circuits must be controlled by one signal. The first relays were used in long distance telegraph circuits as amplifiers: they repeated the signal coming in from one circuit and re-transmitted it on another circuit. Relays were used extensively in telephone exchanges and early computers to perform logical operations.

## Use cases

| Case             | Communication steps                                   |
| ---------------- | ----------------------------------------------------- |
| Eletric bulbs    | Broker -> Controller -> Relay -> Device               |
| -                | Broker -> Controller -> Transistor -> Relay -> Device |
| Infrared devices | Broker -> Controller -> Infrared emissor -> Device    |
