http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/


Issues and Notes
===


**part 1**

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

- miss-spelled segue as "seque" (like I am one to talk, sheesh)

- if you are passing the `-g` global switch to npm, chances are you
  will need run as sudo, `node-inspector` throws a `WARN` if you
  install locally. `node-debug server.js` didn't run for me when
  installed with out `-g`

    sudo npm install -g node-inspector

**part 2**
