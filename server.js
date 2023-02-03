import { dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
dotenv.config();

import { Telegraf } from "telegraf";
import express from "express";
import fs from "fs";

import router from "./routes/routes.js";

import { FileExplorer } from "./main.js";
import { changedFileName } from "./workflow.js";

const PORT = process.env.POST || 4000;
const fileExplorer = new FileExplorer();

const app = express();

export const __dirname = dirname(fileURLToPath(import.meta.url));

export class Telegram {
  constructor(token) {
    this.token = token;
    this.bot = new Telegraf(token);
  }
  
  
  telegramBotRun = (token) => {
    this.bot.launch().then(console.log("Telegram bot connected!"));
  };

  sendVideo = async (filename) => {
    this.bot.telegram.sendVideo(process.env.CHANNEL_ID, {
      source: ''`${savePath}${filename}`,
    });
  };
}

// fs.watch(savePath, (eventType, filename) => {
//     if(filename.includes('.mp4') && eventType === 'rename') {
//       fs.access(`${filename}`, fs.constants.R_OK, (err) => {
//         try {
//           sendVideo(filename)
//         } catch (error) {
//           console.log(error);
//         }
//         // if (err)
//         //   console.error('No Read access');
//         // else
//         //   console.log('File can be read', filename);
//       });
//     }
// });

export class Server {
  constructor() {}

  serverRun = () => {
    app.listen(PORT, () => {
      console.log(`Example app listening on port http://localhost/${PORT}`);
    });
  };
}

export class Directory {
  constructor() {}

  directoryWatchEvent = async (watchPath) => {
    fs.watch(watchPath, (eventType, filename) => {
      changedFileName(filename);
    });
  };
}

app.use(router);
