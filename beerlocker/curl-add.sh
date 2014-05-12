#!/bin/sh

DATAURL="name=my+name&type=tastey&quantity=3"

curl -d "$DATAURL" http://localhost:9000/api/beers