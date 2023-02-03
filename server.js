import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv'
dotenv.config()
import { Telegraf } from 'telegraf';
import express from 'express';
import fs from "fs";

const PORT = process.env.POST || 4000
const watchPath = process.env.WATCH_PATH
const savePath = process.env.SAVE_PATH

console.log('WATCH_PATH: ', watchPath);
console.log('SAVE_PATH: ', savePath);

const app = express()
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendVideo = async (filename) => {
  bot.telegram.sendVideo(process.env.CHANNEL_ID, { source: `${savePath}${filename}` });
}

fs.watch(savePath, (eventType, filename) => {
    if(filename.includes('.mp4') && eventType === 'rename') {
      fs.access(`${filename}`, fs.constants.R_OK, (err) => {
        try {
          sendVideo(filename)
        } catch (error) {
          console.log(error);
        }
        if (err)
          console.error('No Read access');
        else
          console.log('File can be read', filename);
      });
    }
});

bot.launch();

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost/${PORT}`)
})


