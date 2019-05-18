server {
    listen 80;
    listen [::]:80;

    root /home/pi/Documents/app/dist/index.html

    server_name _;

    location / {
        # try_files $uri $uri/ =404;
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}