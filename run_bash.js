import { exec } from "child_process";
import fs from "fs";

export default class FileExplorer {
  constructor(filename, path) {
    this.filename = filename;
    this.path = path;
  }

  converFile = () => {
    fs.readdirSync("./").forEach((file) => {
      if (file.includes(".webm")) {
        const shothoutEnd = file.slice(0, -5);
        exec(
          `ffmpeg -fflags +genpts -i ${shothoutEnd}.webm -r 24 ./Source/${shothoutEnd}.mp4`
        );
        setTimeout(() => {
          this.removeByName(shothoutEnd);
        }, 100);
      }
    });
  };

  removeByName = (shothoutEnd) => {
    fs.rmSync(`./${shothoutEnd}.webm`, {
      force: true,
    });
  };

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
}
