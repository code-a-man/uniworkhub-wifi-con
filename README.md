# UniWorkHub Auto Wifi Login

This is a simple script that logs into the UniWorkHub wifi network automatically because each day you must login again. You can run this script with set an alias on your terminal and you can connect to the wifi network with just one command.

## Installation

- Clone the repository

```bash
git clone
```

- Install the required packages

```bash
npm install
bun install
```

- Fill .env file with your credentials

```bash
TC_NO="123"
AD="John"
SOYAD="Doe"
DOGUM_YILI="1900"
```

- Set the alias

```bash
alias wificon='cd ~/uniworkhub-wifi-con; bun main.ts'
source ~/.bashrc
```

- Run the script

```bash
wificon
```

## Notes

- I use usually Bun for simple projects you can use Node.js or something you like.
- Might be written better but it works.
