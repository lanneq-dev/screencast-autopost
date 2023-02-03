import * as dotenv from "dotenv";
dotenv.config();
import fs from "fs";

import { Telegram, Server, Directory,  } from "./server.js";


const server = new Server();
const directory = new Directory();
const telegram = new Telegram(process.env.TELEGRAM_TOKEN)


// 1.0. Запустим наш основной Express сервер
server.serverRun();


// 2.0. Подключимся к Telegram боту
telegram.telegramBotRun()

// 3.0. Начнем отслеживать файлы в указанной директории
directory.directoryWatchEvent(process.env.WATCH_PATH);


// 4.0. Отслеживальщи вызывает ту функцию при каждом изменении в лдиректории и возвращает имя файла
export const changedFileName = (filename) => {
  sendVideo(filename)
  console.log(filename);
};


// Отправим файл в Телеграм
const sendVideo =()=> {
  telegram.sendVideo(filename)
}