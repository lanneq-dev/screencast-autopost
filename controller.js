import { exec } from "child_process";
import fs from "fs";

import { sendVideo } from './server.js'

export class FileExplorer {
  constructor(filename, path) {
    this.filename = filename;
    this.path = path;
  }

  // 1. Find all *.webm files and rename them
  getCurrentFileName = () => {
    fs.readdirSync("./").forEach((file) => {
      if (file.includes("Screencast from ")) {
        const dateFromFileName = file
          .replace("Screencast from ", "")
          .slice(0, -8);

        let date = new Date(dateFromFileName);
        let shortData = date.toUTCString().replaceAll(" ", "_");

        fs.rename(`${file}`, `${shortData}.webm`, function (err) {
          if (err) throw err;
        });
      }
    });
  };

  // 2. Conver *.webm video to mp4
  converFile = () => {
    fs.readdirSync("./").forEach((file) => {
      if (file.includes(".webm")) {
        const shothoutEnd = file.slice(0, -5);
        exec(
          `ffmpeg -fflags +genpts -i ${shothoutEnd}.webm -r 24 ./Source/${shothoutEnd}.mp4`
        );
        this.removeByName(shothoutEnd);
      }
    });
  };

  // 3. Remove old *.webm file after converting
  removeByName = (shothoutEnd) => {
    setInterval(() => {
      fs.rmSync(`./${shothoutEnd}.webm`, {
        force: true,
      });
    }, 1000);
  };

  // 4. Watcher for autopost to Telegram
  watchChanges() {
    const senderToTelegram = new SenderToTelegram()

    fs.watch("./", (eventType, filename) => {
      if (eventType === 'rename') {
        if (filename.includes('Screencast from ')) {
          senderToTelegram.sendFile(filename)
        }
      } 
    });
  }
}

export class SenderToTelegram {
  constructor() {}

  sendFile(filename) {
    console.log(filename);
  }
}
