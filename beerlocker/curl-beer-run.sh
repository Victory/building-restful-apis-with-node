#!/bin/sh

UN='james'
PW='bond'

AUTH="$UN:$PW"

PAGE=$(curl -u "$AUTH" http://localhost:9000/api/beers)

if [ $PAGE = "Unauthorized" ]; then
    DATAURL="username=james&password=bond"
    curl -d "$DATAURL" http://localhost:9000/api/users
    PAGE=$(curl -u "$AUTH" http://localhost:9000/api/beers)
    if [ $PAGE -eq 100 ]; then
        exit 100
    fi
fi

DATAURL="name=my+name&type=tastey&quantity=3"
PAGE=$(curl -u "$AUTH" -d "$DATAURL" http://localhost:9000/api/beers)

echo $PAGE

PAGE=$(curl -u "$AUTH" http://localhost:9000/api/beers)

echo $PAGE

PAGE=$(curl -u "bad:guy" http://localhost:9000/api/beers)

echo $PAGE

beers=$(curl -u "$AUTH" http://localhost:9000/api/beers)
beerId=$(echo "<?php \$beers = json_decode('$beers'); echo \$beers[0]->_id; ?>" | php);

DATAURL="quantity=11"
curl -u "$AUTH" -d "$DATAURL" -X PUT http://localhost:9000/api/beers/$beerId
