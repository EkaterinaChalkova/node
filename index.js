const socket = require("socket.io");
const http = require("http");
const path = require("path");
const fs = require("fs");
const { disconnect } = require("process");

const server = http.createServer((req, res) => {
  const indexPath = path.join(__dirname, "./index.html");
  const readStream = fs.createReadStream(indexPath);

  readStream.pipe(res);
});

const io = socket(server);

io.on("connection", (client) => {
  console.log(`client ${client.id} connected`);

  client.on("disconnect", () => {
    console.log("client  disconnect!");
  });

  client.on("clientName", (person_name) => {
    console.log("client Name " + person_name);
  });

  client.on("client-msg", (data) => {
    // console.log(data);

    const payload = {
      message: data.message.split("").reverse().join(""),
    };

    client.broadcast.emit("server-msg", payload);
    client.emit("server-msg", payload);
  });
});

server.listen(5555);
