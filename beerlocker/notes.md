
* Issues
- Required version of `npm` not mentioned, The following don't work 
    npm 1.1.4
    node v0.6.12

The following do
    npm - 1.4.9
    node - v0.10.28

- Uses `packages.json` instead of `package.json` in body of the article.

- Could not listen on port 3000, get the following which i am guessing
  means the pot was in use

       events.js:72
               throw er; // Unhandled 'error' event
                     ^
       Error: listen EADDRINUSE
           at errnoException (net.js:904:11)
           at Server._listen2 (net.js:1042:14)
           at listen (net.js:1064:10)
           at Server.listen (net.js:1138:5)
           ... snip ....
