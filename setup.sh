echo "Updating the O.S...\n"
sudo apt update
echo "Done updating the O.S.\n"

echo "Installing Mosquitto...\n"
sudo apt-get install -y mosquitto mosquitto-clients
echo "Done installing Mosquitto.\n"

echo "Enabling Mosquitto on boot...\n"
sudo systemctl enable mosquitto.service
echo "Done enabling Mosquitto on boot.\n"

# echo "Testing the MQTT broker...\n"
# mosquitto -d 
# mosquitto_sub -d -t testTopic  

echo "Installing Redis...\n"
sudo apt-get install redis-server
echo "Done installing Redis.\n" 

echo "Enabling Redis to start on boot...\n"
sudo systemctl enable redis-server.service
echo "Done enabling Redis to start on boot.\n"

echo "Installing SQLite...\n"
sudo apt-get install sqlite3 -y
echo "Done installing SQLite.\n"

echo "Installing and configuring ufw...\n"
sudo apt install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw enable
echo "Done configuring ufw.\n"

echo "Installing nginx...\n"
sudo apt-get install nginx
sudo ufw allow Nginx HTTP
sudo /etc/init.d/nginx start
# To do

echo "Installing PM2...\n"
sudo npm install pm2@latest -g
echo "Done installing PM2.\n"

echo "Cloning repo...\n"
git clone https://github.com/marcelovicentegc/george.git
echo "Done cloning repo.\n"

echo "Install dependencies and build the application... \n"
cd george
npm i 
npm run build 
echo "Done installing dependencies and building the application... \n"

echo "Start application on the background... \n"
NODE_ENV=production pm2 start dist/server/index.js
echo "Done starting the application on the background.\n"

echo "Enabling the application to start on boot... \n"
pm2 startup systemd 
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 save
sudo systemctl start pm2-pi

