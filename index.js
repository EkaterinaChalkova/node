const fs = require("fs");
const readline = require("readline");

const readStream = fs.createReadStream("./access.log", "utf8");

const file1 = fs.createWriteStream("./89.123.1.41_requests.log");
const file2 = fs.createWriteStream("./34.48.240.111_requests.log");

//readline модуль предоставляет интерфейс для чтения данных

const read = readline.createInterface({
  input: readStream,
  terminal: true,
});

read.on("line", (line) => {
  // Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false
  if (line.includes("89.123.1.41")) {
    file1.write(line + "\n");
  }

  if (line.includes("34.48.240.111")) {
    file2.write(line + "\n");
  }
});
