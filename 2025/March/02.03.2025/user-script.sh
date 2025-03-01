#!/bin/bash
# Update all installed packages
yum update -y

# Install Apache HTTP Server
yum install -y httpd

# Start the Apache service
systemctl start httpd

# Enable Apache to start on boot
systemctl enable httpd

# Create a simple index.html page
echo "Hello World from Amazon Linux 2 Apache Server!" > /var/www/html/index.html
