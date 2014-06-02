#!/bin/sh

DATAURL="username=joe&password=secret"

curl -d "$DATAURL" http://localhost:9000/api/users