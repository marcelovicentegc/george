<p align="center">
  <img alt="george logo" src="assets/george-sq.png" height="150" />
  <h3 align="center">george</h3>
  <p align="center">A configurable DIY home automation, assistance and analytics project with plugs for IoT devices.</p>
</p>

---

George can aid you on automating your home, offering itself to manage which switches should be turned on or off, log that data to a database and give you insights about energy consumption. It can also integrate with A.I. assistants, in case you don't feel like pushing buttons.

George doesn't work out of the box! You need a server to run it on your local network and at least one IoT device.

| Device                           | Support |
| -------------------------------- | ------- |
| [ESP8266](docs/SETUP.md#ESP8266) | ✔️      |

## Development directions ⌨️

1. Clone this project: `git clone https://github.com/marcelovicentegc/george`
2. Install its dependencies: `npm i`
3. If you already have `redis` and `sqlite` installed on your machine, jump to the next step, otherwise, install both before continuing
4. Make sure `redis` is up and running before starting this project (e.g. `sudo service redis-server start` or `sudo systemctl start redis`)
5. By default, the MQTT broker runs on port 1883, the server runs on port 4000, and the client on the port 3000. Check the [configuration guide](/docs/CONFIGURATION.md) if you want to change some configuration.
6. You're good to go. Run: `npm start`
7. A default user will be created every time upon start. It has `admin` as username and password.
8. To generate new types, first change the types on `src/server/schema/types/`, run `npm run gen` while George is up and running, and add the query or mutation on `src/gql/` files if necessary.

## Pull requests 🌳

For pull requests, check the [contribution guide](docs/CONTRIBUTING.md)

## Production directions ⤴️

To put George in production, check the [production instructions](docs/PRODUCTION_DIRECTIONS.md). These instructions apply to Debian-based O.Ss, secifically, Raspberry Pies. If you pretend to run George in production on another O.S. or device, you are on your own, although it shouldn't be a problem to set up everything needed to get George up and running in any O.S. or device. PRs with production directions for other platforms are welcome 😄!

<a href="https://www.buymeacoffee.com/YkwcZVO" target="_blank"><img src="./assets/buymeacoffee.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

[![Become a patron](./assets/patron.png)](https://www.patreon.com/bePatron?u=34051560)
