---
id: setup
title: Setup
---

## Docker [recommended]

In progress...

## Host installation

### Fast setup ⏩

If you don't want to go through each of these steps, I separated a script to do some of the boring stuff for you, [here](../setup.sh). **Please, read this before running it.** This scripts installs the following software on your machine:

- Mosquitto
- Redis
- SQLite
- UFW
- Nginx
- Node
- PM2

and enables these programs to start on the system's boot:

- Mosquitto
- Redis
- UFW

It also adds Nginx to the UFW's list of allowed ports, as well as configures the UFW to allow outgoing requests from the machine which it is being installed.

This script doesn't do everything, you will still want to [test Mosquitto](./PRODUCTION_DIRECTIONS.md#testing-the-mqtt-broker-), [test Redis](./PRODUCTION_DIRECTIONS.md#testing-redis-connection), and [configure Nginx, clone the repo and configure PM2](./PRODUCTION_DIRECTIONS.md#installing-nginx-).

### The hard way setup 🏋

First of all, update your O.S. deps: `sudo apt update && sudo apt upgrade`

#### Installing the MQTT broker 😋

1. Install Mosquitto: `sudo apt-get install -y mosquitto mosquitto-clients`
2. Enable Mosquitto to start on boot: `sudo systemctl enable mosquitto.service`
3. Check Mosquitto's version: `mosquitto -v`
4. To use the Mosquitto broker, you'll need your Raspberry Pi's IP address, check it out by typing: `hostname -I`

#### Testing the MQTT broker 📞

1. Run Mosquitto as a daemon: `mosquitto -d`
2. Subscribe to a `testTopic`: `mosquitto_sub -d -t testTopic`
3. Open another terminal and publish a message to `testTopic`: `mosquitto_pub -d -t testTopic -m "Hello world!"`
4. Open one more terminal and subscribe to `testTopic`: `mosquitto_sub -d -t testTopic`
5. Again, on the second window, publish another message to `testTopic`: `mosquitto_pub -d -t testTopic -m "Hello world again!"`
6. Unsubscribe topic: `mosquitto_sub -t testTopic -U testTopic -v`

#### Installing Redis Server 📝

1. Install Redis: `sudo apt-get install redis-server`
2. Enable Redis to start on system boot: `sudo systemctl enable redis-server.service`
3. If you need to make any changes to Redis configuration, head to: `/etc/redis/redis.conf`
   1. I.g.: If you need to adjust the max memory limit used by Redis, you can update it by `sudo vim /etc/redis/redis.conf`ing and altering the `maxmemory` line.
4. After configuring it, restart it: `sudo systemctl restart redis-server.service`

#### Testing Redis connection

1. Test connection:

```bash
  $ redis-cli

  127.0.0.1:6379> ping
  PONG
  127.0.0.1:6379>
```

#### Installing UFW

1. Install `ufw`: `sudo apt install ufw`
2. Set up default Firewall policies by running: `sudo ufw default deny incoming`, followed by `sudo ufw default allow outgoing`
3. Allow SSH connections: `sudo ufw allow OpenSSH`
4. Enable UFW: `sudo ufw enable`
5. Check if it's status is ok: `sudo ufw status verbose`

#### Installing Nginx 🖥

1. Install `nginx`: `sudo apt-get install nginx`
2. Allow HTTP connections: `sudo ufw allow 'Nginx HTTP'`
3. Start the server: `sudo /etc/init.d/nginx start`
4. Get the Raspberry's IP address: `hostname -I`
5. Make sure the web server is up and running: `systemctl status nginx` should return

   ```shell
   ● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2018-04-20 16:08:19 UTC; 3 days ago
       Docs: man:nginx(8)
   Main PID: 2369 (nginx)
       Tasks: 2 (limit: 1153)
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
   ```

6. Set up Nginx as a Reverse Proxy Server: - Open `/etc/nginx/sites-available/example.com` for editing

   1. Replace the contents of the `location /` block

   ```nginx
           location / {
               proxy_pass http://localhost:4000;
               proxy_http_version 1.1;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection 'upgrade';
               proxy_set_header Host $host;
               proxy_cache_bypass $http_upgrade;
           }
   ```

7. Test the webserver by heading to the Raspberry's IP. You should see Nginx's fallback HTML page.

#### Installing PM2 and testing George

1. Install [PM2](http://pm2.keymetrics.io/) (a process manager for Node.js applications): `sudo npm install pm2@latest -g`
2. Clone the repository: `git clone https://github.com/marcelovicentegc/george.git`
3. Change directory into `george`: `cd george`
4. Install dependencies: `npm i`
5. Build the application: `npm run build`
6. Test the application
   1. `npm run launch`
   2. `curl http://localhost:4000`
7. Run the george's main application in the background: `NODE_ENV=production pm2 start dist/server/index.js`
8. Applications that are running under PM2 will be restarted automatically if they crash or are killed, but we can take an additional step to get the application to launch on system startup using the `startup` subcommand. This subcommand generates and configures a startup script to launch PM2 and its managed processes on server boots: `pm2 startup systemd`

   - The last line of the resulting output will include a command to run with superuser privileges in order to set PM2 to start on boot:

   ```shell
   [PM2] Init System found: systemd
   [PM2] To setup the Startup Script, copy/paste the following command:
   sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
   ```

   - Run the command from the output: `sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi`

9. As an additional step, we can save the PM2 process list and corresponding environments: `pm2 save`
10. Start the service with `systemctl`: `sudo systemctl start pm2-pi`

    - Note: if this command raises an error, reboot the server (`sudo reboot`) and run it again as soon as you ssh in.

11. Check the status of systemd unit: `systemctl status pm2-pi`

#### Last steps 🏁

1. Managing PM2:

   1. Stop an application: `pm2 stop <app_name_or_id>`
   2. Restart an application: `pm2 restart <app_name_or_id>`
   3. List applications currently managed by PM2: `pm2 list`
   4. Get information about a specific application using its `App name`: `pm2 info <app_name>`
   5. The PM2 process monitor can be pulled up with the `monit` subcommand. This displays the application status, CPU, and memory usage: `pm2 monit`

2. Managing the Nginx Process:

   1. To stop the web server: `sudo systemctl stop nginx`
   2. To start the web server: `sudo systemcl start nginx`
   3. To stop and start the service again: `sudo systemctl restart nginx`
   4. To reload the service without dropping connection: `sudo systemctl reload nginx`
   5. By default, Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing: `sudo systemctl disable nginx`
   6. To re-enable the service: `sudo systemctl enable nginx`

3. Setting up Nginx's Server Blocks:

   1. Add a server block to `example.com`: `sudo vi /etc/nginx/sites-available/example.com`

      ```nginx
          server {
              listen 80;
              listen [::]:80;

                  root /home/pi/project/dist/index.html;
                  index index.html index.htm index.nginx-debian.html;

                  server_name example.com www.example.com;

                  location / {
                          try_files $uri $uri/ =404;
                  }
          }
      ```

   2. Enable the file by creating a symbolic link from it to the `sites-enabled` directory, which Nginx reads from during startup: `sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled`
   3. To avoid possible hash bucket memory problem that can arise from adding additional server names, it is necessary to adjust a single value in the `/etc/nginx/nginx.conf` file. Open it (code editor of your choice) and find the `server_names_hash_bucket_size` directive and uncomment that line.
   4. Test for syntax errors in any of Nginx files: `sudo nginx -t`
   5. Restart Nginx to enable the changes: `sudo systemctl restart nginx`
