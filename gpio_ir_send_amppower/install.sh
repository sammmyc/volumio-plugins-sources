#!/bin/bash

echo "Installing gpio control Dependencies"

echo "Guess what I think there are none!!"
sudo apt-get update
# Install the required packages via apt-get
# uncomment if I do have a dependancy
#sudo apt-get -y install <dependancy> --no-install-recommends

ARCH=$(cat /etc/os-release | grep ^VOLUMIO_ARCH | tr -d 'VOLUMIO_ARCH="')
HARDWARE=$(cat /etc/os-release | grep ^VOLUMIO_HARDWARE | tr -d 'VOLUMIO_HARDWARE="')

# If you need to differentiate install for armhf and i386 you can get the variable like this
#DPKG_ARCH=`dpkg --print-architecture`
# Then use it to differentiate your install

echo "Installing gpio_ir_send_amppower"
#required to end the plugin install
echo "plugininstallend"