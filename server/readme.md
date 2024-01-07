# Server files
## To start the server for the first time, either 
- put `mods, config, kubejs, defaultconfigs` in the server folder
- just run the script `start-or-generate-server` and it will do it for you assuming your game folder is a above this one
- read the EULA and accept it, via the `eula.txt` file. Very important stuff
- run the same script

## To start the server after the first time
- run the script `start-or-generate-server`

## To update the server
- run the script `update-server` or
- delete the `mods, config, kubejs, defaultconfigs` folders and repeat the steps of starting the server for the first time

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

