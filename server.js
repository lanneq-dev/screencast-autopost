import { dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
dotenv.config();
import { Telegraf } from "telegraf";
import express from "express";
import fs from "fs";

import { FileExplorer } from "./main.js";

const PORT = process.env.POST || 4000;
// const watchPath = process.env.WATCH_PATH;
// const savePath = process.env.SAVE_PATH;
const fileExplorer = new FileExplorer();

// console.log("WATCH_PATH: ", watchPath);
// console.log("SAVE_PATH: ", savePath);

const app = express();
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendVideo = async (filename) => {
  bot.telegram.sendVideo(process.env.CHANNEL_ID, {
    source: `${savePath}${filename}`,
  });
};

export const telegramBotRun = (token) => {
  const bot = new Telegraf(token);
  bot.launch().then(console.log("Telegram bot connected!"));
};

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

  directoryWatchEvent(watchPath) {
    fs.watch(watchPath, (eventType, filename) => {
      console.log("AAAAAAAA");
    });
  }
}

app.get("/", (req, res) => {
  sendVideo("file.mp4");
  res.send("hello");
});