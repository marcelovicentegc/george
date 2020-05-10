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

echo "Installing PM2...\n"