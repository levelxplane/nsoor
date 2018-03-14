#!/bin/bash

echo "lol"

docker build -t poop:scoop .
gcloud docker -- push poop:scoop
