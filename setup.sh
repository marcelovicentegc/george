#!/bin/sh

function handle_action() {
    echo -e "$1...\n"
    
    for var in "$@"
        do
            if [ "$var" != "$1" ]; then 
                $var
            fi
        done
    
    echo -e "done $1.\n"
}

handle_action "uptading the O.S" "sudo apt update" 
handle_action "installing mosquitto" "sudo apt-get install -y mosquitto mosquitto-clients"
handle_action "enabling mosquitto on system boot" "sudo systemctl enable mosquitto.service"
handle_action "installing redis" "sudo apt-get install redis-server"
handle_action "enabling redis on system boot" "sudo systemctl enable redis-server.service"
handle_action "installing sqlite" "sudo apt-get install sqlite3 -y"
handle_action "installing ufw" "sudo apt install ufw"
handle_action "configuring ufw" "sudo ufw default deny incoming" "sudo ufw default allow outgoing" "sudo ufw allow OpenSSH"
handle_action "enabling ufw on system boot" "sudo ufw enable"
handle_action "installing nginx" "sudo apt-get install nginx"
handle_action "adding nginx on ufw's allowed set" "sudo ufw allow Nginx HTTP"
handle_action "installing pm2" "sudo npm install pm2@latest -g"

