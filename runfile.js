import fs from "fs";
import FileExplorer from "./run_bash.js";

const fileExplorer = new FileExplorer();

fileExplorer.getCurrentFileName();

const filenames = fileExplorer.converFile()

console.log(filenames);


