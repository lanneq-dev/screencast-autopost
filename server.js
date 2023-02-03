import { Telegraf } from 'telegraf';
import express from 'express';
import { channel } from 'diagnostics_channel';
const app = express()
const port = 3004

const bot = new Telegraf('5531721103:AAE4o9wWxQRLZX1GmK_Qk_yG39s1p7th8kk');


export const sendVideo = (fileName) => {
  // bot.telegram.sendVideo(147760236, { source: `./Source/${fileName}` });
  bot.telegram.sendMessage(147760236, fileName)
}
  
sendVideo()

bot.launch();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
