# Smarthome 🏠

## Architecture

- User authentication.
- House dashbord.

## Directions

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
18. _pi@raspberrypi_ Start the application: `yarn start`

- (https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)
- Head to <host_ipv4_address>:3000

### [johnny-five](https://github.com/rwaldron/johnny-five)

Makes it simple (Javascript way) to interact with Pi's hardware.

Bryan Hughes - _The JQuery of robotics. A physical web UI._

### [raspi-io](https://github.com/nebrius/raspi-io)

### [MQTT](https://github.com/mqtt/mqtt.github.io/wiki/software?id=software)

IoT connectivity protocol that can be used to glue devices together.
