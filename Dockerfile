FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf
COPY public /srv/public
# nsoor:jan312018c
