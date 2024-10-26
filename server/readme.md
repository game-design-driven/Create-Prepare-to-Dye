# Server files
To install, update and run the server we use the start script.
The start script needs to be in the modpack/server folder or ran with the modpack folder as an argument.

tldr: run `start` script
## Starting the server for the first time
Running script `start` and it will 
- copy `mods, config, kubejs, defaultconfigs, VERSION` from the game folder if they are not there (you can move them manually if you prefer)
- start the server

## Starting the server after the first time
Running `start` script will 
- start the server

## To update the server
Running `start` when VERSION in server files is different from the one in the game folder will
- remove current files `mods, config, kubejs, defaultconfigs, VERSION` and get the new ones from the game folder. (you can move them manually if you prefer)
- start the server


## Port-forwarding the server
### Refer to router manual or websearch for port-forwarding
### Alternatives

**ngrok**

Setup
- Run command prompt as administrator 
- Run this command in command prompt `winget install Chocolatey.Chocolatey`
- Run this command in command prompt `choco install ngrok` (note: if asked to run script, answer `A`)
- Sign up at https://ngrok.com/
- Find this command `ngrok config add-authtoken <bunch of random letters and numbers you shouldn't share with anyone>` or something similar in the dashboard that appears after signing up/logging in
- Run said command in command prompt

Forwarding 
- Run this command in command prompt `ngrok tcp 25565`
- Copy URL under Forwarding (i.e `0.tcp.XXX.ngrok.io:XXXXX`)

To stop forwarding, simply close the command prompt or press `CTRL + C`

To start forwarding, repeat Forwarding section

