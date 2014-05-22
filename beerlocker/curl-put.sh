#!/bin/sh


beers=$(curl http://localhost:9000/api/beers)
beerId=$(echo "<?php \$beers = json_decode('$beers'); echo \$beers[0]->_id; ?>" | php);

DATAURL="quantity=11"

curl -d "$DATAURL" -X PUT http://localhost:9000/api/beers/$beerId