# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Install certbot and the nginx plugin
RUN apk add certbot certbot-nginx

# Create the directory for Let's Encrypt
RUN mkdir /etc/letsencrypt

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf