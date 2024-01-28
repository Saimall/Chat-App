const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get("/", (request, response) => {
  response.send("API end point");
});

app.get("/api/chat", (request, response) => {
  response.send(chats);
});

app.get("/api/chat/:id", (request, response) => {
  const singlechat = chats.find((c) => c._id === request.params.id);
  response.send(singlechat);
});

app.listen(4000, console.log("server started at 4000"));
