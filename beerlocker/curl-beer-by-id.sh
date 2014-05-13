#!/bin/sh

beerId=1
beers=$(curl http://localhost:9000/api/beers)
beerId=$(echo "<?php \$beers = json_decode('$beers'); echo \$beers[0]->_id; ?>" | php);
curl http://localhost:9000/api/beers/$beerId