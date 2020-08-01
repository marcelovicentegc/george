(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(73)),o={id:"setup",title:"Setup \ud83d\udda5"},l={unversionedId:"setup",id:"setup",isDocsHomePage:!1,title:"Setup \ud83d\udda5",description:"Raspberry Pi setup \ud83d\ude0b",source:"@site/docs/PRODUCTION_DIRECTIONS.md",permalink:"/george/docs/setup",editUrl:"https://github.com/marcelovicentegc/george/edit/docs/docs/docs/PRODUCTION_DIRECTIONS.md",sidebar:"sidebar",next:{title:"Configuration",permalink:"/george/docs/config"}},b=[{value:"Raspberry Pi setup \ud83d\ude0b",id:"raspberry-pi-setup-",children:[{value:"Docker images \ud83d\udc0b",id:"docker-images-",children:[]},{value:"Fast setup \u23e9",id:"fast-setup-",children:[]},{value:"The hard way setup \ud83c\udfcb",id:"the-hard-way-setup-",children:[]}]}],s={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"raspberry-pi-setup-"},"Raspberry Pi setup \ud83d\ude0b"),Object(r.b)("h3",{id:"docker-images-"},"Docker images \ud83d\udc0b"),Object(r.b)("p",null,"In progress..."),Object(r.b)("h3",{id:"fast-setup-"},"Fast setup \u23e9"),Object(r.b)("p",null,"If you don't want to go through each of these steps, I separated a script to do some of the boring stuff for you, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../setup.sh"}),"here"),". ",Object(r.b)("strong",{parentName:"p"},"Please, read this before running it.")," This scripts installs the following software on your machine:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mosquitto"),Object(r.b)("li",{parentName:"ul"},"Redis"),Object(r.b)("li",{parentName:"ul"},"SQLite"),Object(r.b)("li",{parentName:"ul"},"UFW"),Object(r.b)("li",{parentName:"ul"},"Nginx"),Object(r.b)("li",{parentName:"ul"},"Node"),Object(r.b)("li",{parentName:"ul"},"PM2")),Object(r.b)("p",null,"and enables these programs to start on the system's boot:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mosquitto"),Object(r.b)("li",{parentName:"ul"},"Redis"),Object(r.b)("li",{parentName:"ul"},"UFW")),Object(r.b)("p",null,"It also adds Nginx to the UFW's list of allowed ports, as well as configures the UFW to allow outgoing requests from the machine which it is being installed."),Object(r.b)("p",null,"This script doesn't do everything, you will still want to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/george/docs/setup#testing-the-mqtt-broker-"}),"test Mosquitto"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/george/docs/setup#testing-redis-connection"}),"test Redis"),", and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/george/docs/setup#installing-nginx-"}),"configure Nginx, clone the repo and configure PM2"),"."),Object(r.b)("h3",{id:"the-hard-way-setup-"},"The hard way setup \ud83c\udfcb"),Object(r.b)("p",null,"First of all, update your O.S. deps: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo apt update && sudo apt upgrade")),Object(r.b)("h4",{id:"installing-the-mqtt-broker-"},"Installing the MQTT broker \ud83d\ude0b"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Mosquitto: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt-get install -y mosquitto mosquitto-clients")),Object(r.b)("li",{parentName:"ol"},"Enable Mosquitto to start on boot: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl enable mosquitto.service")),Object(r.b)("li",{parentName:"ol"},"Check Mosquitto's version: ",Object(r.b)("inlineCode",{parentName:"li"},"mosquitto -v")),Object(r.b)("li",{parentName:"ol"},"To use the Mosquitto broker, you'll need your Raspberry Pi's IP address, check it out by typing: ",Object(r.b)("inlineCode",{parentName:"li"},"hostname -I"))),Object(r.b)("h4",{id:"testing-the-mqtt-broker-"},"Testing the MQTT broker \ud83d\udcde"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run Mosquitto as a daemon: ",Object(r.b)("inlineCode",{parentName:"li"},"mosquitto -d")),Object(r.b)("li",{parentName:"ol"},"Subscribe to a ",Object(r.b)("inlineCode",{parentName:"li"},"testTopic"),": ",Object(r.b)("inlineCode",{parentName:"li"},"mosquitto_sub -d -t testTopic")),Object(r.b)("li",{parentName:"ol"},"Open another terminal and publish a message to ",Object(r.b)("inlineCode",{parentName:"li"},"testTopic"),": ",Object(r.b)("inlineCode",{parentName:"li"},'mosquitto_pub -d -t testTopic -m "Hello world!"')),Object(r.b)("li",{parentName:"ol"},"Open one more terminal and subscribe to ",Object(r.b)("inlineCode",{parentName:"li"},"testTopic"),": ",Object(r.b)("inlineCode",{parentName:"li"},"mosquitto_sub -d -t testTopic")),Object(r.b)("li",{parentName:"ol"},"Again, on the second window, publish another message to ",Object(r.b)("inlineCode",{parentName:"li"},"testTopic"),": ",Object(r.b)("inlineCode",{parentName:"li"},'mosquitto_pub -d -t testTopic -m "Hello world again!"')),Object(r.b)("li",{parentName:"ol"},"Unsubscribe topic: ",Object(r.b)("inlineCode",{parentName:"li"},"mosquitto_sub -t testTopic -U testTopic -v"))),Object(r.b)("h4",{id:"installing-redis-server-"},"Installing Redis Server \ud83d\udcdd"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Redis: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt-get install redis-server")),Object(r.b)("li",{parentName:"ol"},"Enable Redis to start on system boot: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl enable redis-server.service")),Object(r.b)("li",{parentName:"ol"},"If you need to make any changes to Redis configuration, head to: ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/redis/redis.conf"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"I.g.: If you need to adjust the max memory limit used by Redis, you can update it by ",Object(r.b)("inlineCode",{parentName:"li"},"sudo vim /etc/redis/redis.conf"),"ing and altering the ",Object(r.b)("inlineCode",{parentName:"li"},"maxmemory")," line."))),Object(r.b)("li",{parentName:"ol"},"After configuring it, restart it: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl restart redis-server.service"))),Object(r.b)("h4",{id:"testing-redis-connection"},"Testing Redis connection"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Test connection:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  $ redis-cli\n\n  127.0.0.1:6379> ping\n  PONG\n  127.0.0.1:6379>\n")),Object(r.b)("h4",{id:"installing-ufw"},"Installing UFW"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("inlineCode",{parentName:"li"},"ufw"),": ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt install ufw")),Object(r.b)("li",{parentName:"ol"},"Set up default Firewall policies by running: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo ufw default deny incoming"),", followed by ",Object(r.b)("inlineCode",{parentName:"li"},"sudo ufw default allow outgoing")),Object(r.b)("li",{parentName:"ol"},"Allow SSH connections: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo ufw allow OpenSSH")),Object(r.b)("li",{parentName:"ol"},"Enable UFW: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo ufw enable")),Object(r.b)("li",{parentName:"ol"},"Check if it's status is ok: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo ufw status verbose"))),Object(r.b)("h4",{id:"installing-nginx-"},"Installing Nginx \ud83d\udda5"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("inlineCode",{parentName:"p"},"nginx"),": ",Object(r.b)("inlineCode",{parentName:"p"},"sudo apt-get install nginx"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Allow HTTP connections: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo ufw allow 'Nginx HTTP'"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Start the server: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo /etc/init.d/nginx start"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get the Raspberry's IP address: ",Object(r.b)("inlineCode",{parentName:"p"},"hostname -I"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Make sure the web server is up and running: ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl status nginx")," should return"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"\u25cf nginx.service - A high performance web server and a reverse proxy server\nLoaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)\nActive: active (running) since Fri 2018-04-20 16:08:19 UTC; 3 days ago\n    Docs: man:nginx(8)\nMain PID: 2369 (nginx)\n    Tasks: 2 (limit: 1153)\nCGroup: /system.slice/nginx.service\n        \u251c\u25002369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;\n        \u2514\u25002380 nginx: worker process\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set up Nginx as a Reverse Proxy Server: - Open ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/example.com")," for editing"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Replace the contents of the ",Object(r.b)("inlineCode",{parentName:"li"},"location /")," block")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-nginx"}),"        location / {\n            proxy_pass http://localhost:4000;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection 'upgrade';\n            proxy_set_header Host $host;\n            proxy_cache_bypass $http_upgrade;\n        }\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Test the webserver by heading to the Raspberry's IP. You should see Nginx's fallback HTML page."))),Object(r.b)("h4",{id:"installing-pm2-and-testing-george"},"Installing PM2 and testing George"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://pm2.keymetrics.io/"}),"PM2")," (a process manager for Node.js applications): ",Object(r.b)("inlineCode",{parentName:"p"},"sudo npm install pm2@latest -g"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clone the repository: ",Object(r.b)("inlineCode",{parentName:"p"},"git clone https://github.com/marcelovicentegc/george.git"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change directory into ",Object(r.b)("inlineCode",{parentName:"p"},"george"),": ",Object(r.b)("inlineCode",{parentName:"p"},"cd george"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install dependencies: ",Object(r.b)("inlineCode",{parentName:"p"},"npm i"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build the application: ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Test the application"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"npm run launch")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"curl http://localhost:4000")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the george's main application in the background: ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV=production pm2 start dist/server/index.js"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Applications that are running under PM2 will be restarted automatically if they crash or are killed, but we can take an additional step to get the application to launch on system startup using the ",Object(r.b)("inlineCode",{parentName:"p"},"startup")," subcommand. This subcommand generates and configures a startup script to launch PM2 and its managed processes on server boots: ",Object(r.b)("inlineCode",{parentName:"p"},"pm2 startup systemd")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The last line of the resulting output will include a command to run with superuser privileges in order to set PM2 to start on boot:")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"[PM2] Init System found: systemd\n[PM2] To setup the Startup Script, copy/paste the following command:\nsudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run the command from the output: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"As an additional step, we can save the PM2 process list and corresponding environments: ",Object(r.b)("inlineCode",{parentName:"p"},"pm2 save"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Start the service with ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl"),": ",Object(r.b)("inlineCode",{parentName:"p"},"sudo systemctl start pm2-pi")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note: if this command raises an error, reboot the server (",Object(r.b)("inlineCode",{parentName:"li"},"sudo reboot"),") and run it again as soon as you ssh in."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the status of systemd unit: ",Object(r.b)("inlineCode",{parentName:"p"},"systemctl status pm2-pi")))),Object(r.b)("h4",{id:"last-steps-"},"Last steps \ud83c\udfc1"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Managing PM2:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Stop an application: ",Object(r.b)("inlineCode",{parentName:"li"},"pm2 stop <app_name_or_id>")),Object(r.b)("li",{parentName:"ol"},"Restart an application: ",Object(r.b)("inlineCode",{parentName:"li"},"pm2 restart <app_name_or_id>")),Object(r.b)("li",{parentName:"ol"},"List applications currently managed by PM2: ",Object(r.b)("inlineCode",{parentName:"li"},"pm2 list")),Object(r.b)("li",{parentName:"ol"},"Get information about a specific application using its ",Object(r.b)("inlineCode",{parentName:"li"},"App name"),": ",Object(r.b)("inlineCode",{parentName:"li"},"pm2 info <app_name>")),Object(r.b)("li",{parentName:"ol"},"The PM2 process monitor can be pulled up with the ",Object(r.b)("inlineCode",{parentName:"li"},"monit")," subcommand. This displays the application status, CPU, and memory usage: ",Object(r.b)("inlineCode",{parentName:"li"},"pm2 monit")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Managing the Nginx Process:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"To stop the web server: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl stop nginx")),Object(r.b)("li",{parentName:"ol"},"To start the web server: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemcl start nginx")),Object(r.b)("li",{parentName:"ol"},"To stop and start the service again: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl restart nginx")),Object(r.b)("li",{parentName:"ol"},"To reload the service without dropping connection: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl reload nginx")),Object(r.b)("li",{parentName:"ol"},"By default, Nginx is configured to start automatically when the server boots. If this is not what you want, you can disable this behavior by typing: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl disable nginx")),Object(r.b)("li",{parentName:"ol"},"To re-enable the service: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl enable nginx")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setting up Nginx's Server Blocks:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add a server block to ",Object(r.b)("inlineCode",{parentName:"p"},"example.com"),": ",Object(r.b)("inlineCode",{parentName:"p"},"sudo vi /etc/nginx/sites-available/example.com")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-nginx"}),"    server {\n        listen 80;\n        listen [::]:80;\n\n            root /home/pi/project/dist/index.html;\n            index index.html index.htm index.nginx-debian.html;\n\n            server_name example.com www.example.com;\n\n            location / {\n                    try_files $uri $uri/ =404;\n            }\n    }\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enable the file by creating a symbolic link from it to the ",Object(r.b)("inlineCode",{parentName:"p"},"sites-enabled")," directory, which Nginx reads from during startup: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To avoid possible hash bucket memory problem that can arise from adding additional server names, it is necessary to adjust a single value in the ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," file. Open it (code editor of your choice) and find the ",Object(r.b)("inlineCode",{parentName:"p"},"server_names_hash_bucket_size")," directive and uncomment that line.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Test for syntax errors in any of Nginx files: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo nginx -t"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Restart Nginx to enable the changes: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo systemctl restart nginx")))))))}p.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,u=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);