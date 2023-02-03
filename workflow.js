import * as dotenv from "dotenv";
dotenv.config();

import { telegramBotRun, Server, Directory } from "./server.js";
import {  } from "./main.js";

const server = new Server();
const directory = new Directory();


// 1.0. Запустим наш основной Express сервер
server.serverRun();

// 2.0. Подключимся к Telegram боту, передав ему наш токен
telegramBotRun(process.env.TELEGRAM_TOKEN);

// 3.0. Начнем отслеживать файлы в директории и будем выводить логи при любых изменениях
// 3.1. Передадим путь к дериктории, которую хотим отслеживать
directory.directoryWatchEvent(process.env.WATCH_PATH);



// Возьмем название файла

// Отправим файл в Телеграм
