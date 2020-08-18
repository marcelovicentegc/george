<p align="center">
  <img alt="george logo" src="assets/george.png" height="300" />
  <h3 align="center">GEORGE</h3>
  <p align="center">A configurable DIY home automation, assistance and analytics project with IoT plugins.</p>
</p>

---

George can aid you on automating your home.

George doesn't work out of the box! You need a server to run it on your local network and at least one IoT device.

| Device                                                                | Support        |
| --------------------------------------------------------------------- | -------------- |
| [ESP8266](https://marcelovicentegc.github.io/george/docs/iot#esp8266) | In development |

## About

### Server

- Node
- Express
- GraphQL
- Apollo Server
- TypeORM
- MQTT client
- Redis client

### Client

- React
- Apollo Client
- React Testing Library
- Webpack

### Other services

- PostgreSQL
- Redis
- MQTT

## Development directions ⌨️

1. Clone this project: `git clone https://github.com/marcelovicentegc/george`
2. Install its dependencies: `npm i`
3. If you already have `redis` and `postgres` installed on your machine, jump to the next step, otherwise, install both before continuing
4. Make sure `redis` is up and running before starting this project (e.g. `sudo service redis-server start` or `sudo systemctl start redis`)
5. Make sure `postgres` is up and running before starting this project (e.g. `sudo service postgresl start` or `sudo systemctl start postgres`)
6. By default, the MQTT broker runs on port 1883, the server runs on port 4000, and the client on the port 3000. Check the [configuration guide](https://marcelovicentegc.github.io/george/docs/config) if you want to change some configuration.
7. You're good to go. Run: `npm start`
8. A default user will be created every time upon start. It has `admin` as username and password.
9. To generate new types, first change the types on `src/server/schema/types/`, run `npm run gen` while George is up and running, and add the query or mutation on `src/gql/` files if necessary.

## Pull requests 🌳

For pull requests, check the [contribution guide](https://marcelovicentegc.github.io/george/docs/contrib)

## Production directions ⤴️

To put George in production, check the [production instructions](https://marcelovicentegc.github.io/george/docs/setup).

<a href="https://www.buymeacoffee.com/YkwcZVO" target="_blank"><img src="./assets/buymeacoffee.png" alt="Buy Me A Coffee" height="51"></a>

[![Become a patron](./assets/patron.png)](https://www.patreon.com/bePatron?u=34051560)
