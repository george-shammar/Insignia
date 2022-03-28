#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@45.33.31.71:/var/www/45.33.31.71
echo "Deployment complete"