# 👾 screencast-autopost
### Application that converts and sends screencasts files to the 'workflow' telegram channel 
__current v0.1__

---
## 🪧 Description:
This is a small script that works in the background and tracks the appearance of new files in the VideOS folder.Standard Ubuntu program creates a video in *.Webm format, which is not recognized by Telegram.The script converts all new files to the *.mp4 format, and sends the channel to Telegram [workflow](https://t.me/lanneq_workflow) 

---
## 🌏 How it works?:
 - [WORKFLOW](https://t.me/lanneq_workflow) 

## 🛩 How you can use:
```
npm install
cp .env.example .env
npm start

(npm run dev)
```

---
## 🛠 What I use in this project:
> ### FOR FRONTEND:
 - Electron for GUI

> ### FOR BACKEND:
 - Node.JS
 - Express.JS
 - BASH
 - Linux
 - Telegraf
  
---
#### [HERE ALL MY TOLLS](https://www.notion.so/What-I-regular-use-910e1b59d8e14e21bc1cfea87bea6a5c)
---
# 🚀 [WORKFLOW](https://t.me/lanneq_workflow)

## 🦩 FRONTEND
> MVP Version. Easy GUI with Electron
> ---
>> - [ ] Init Electron desktop app and run
>> - [ ] Status messages in Tray
>> - [ ] Show logo in Tray
>> ---

## 🐧 BACKEND
> MVP Version. Methods
> ---
>> - [x] ```renameAllFiles()``` method
>> - [x] ```removeOldWebmFile()``` method
>> - [x] ```sendFileToTelegram()``` method 
>> - [x] Replace all relative ways with absolute
>> - [ ] SendFile, if created new mp4 file and reading statis 'OK'
>> ---
