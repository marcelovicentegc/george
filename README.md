# george 💁‍♂

---

## Who is George? 🤷‍♂

George is a home automation assistant built to run at your local network. It can aid you on automating your home, offering itself to manage which switches were turned on and off, log that data to a database and give you insights about energy consumption. It can also integrate with Alexa, in case you don't feel like pushing buttons.

George doesn't work out of the box! You need a server to run it on your local network and at least one IoT device.

| George can manage                   |
| ----------------------------------- |
| [ESP8266 ✔️](docs/SETUP.md#ESP8266) |

## Development directions ⌨️

1. Clone this project: `git clone https://github.com/marcelovicentegc/george`
2. Install its dependencies: `npm i`
3. If you already have `redis` and `sqlite` installed on your machine, jump to the next step, otherwise, install both before continuing
4. Make sure `redis` is up and running before starting this project (e.g. `sudo service redis-server start` or `sudo systemctl start redis`)
5. By default, the MQTT broker runs on port 1883, the server runs on port 4000, and the client on the port 3000. Check the [configuration guide](/docs/CONFIGURATION.md) if you want to change some configuration.
6. You're good to go. Run: `npm start`
7. A default user will be created every time upon start. It has `admin` as username and password.

For pull requests, check the [contribution guide](docs/CONTRIBUTING.md)

If you want to deploy it on your own server, check the [production instructions](docs/PRODUCTION_DIRECTIONS.md). These instructions apply to Debian-based O.Ss, secifically, Raspberry Pies. If you pretend to run George in production on another O.S. or device, you are on your own, although it shouldn't be a problem to get everything needed to get George up and running in any O.S. or device. Production directions for other platforms are welcome!
