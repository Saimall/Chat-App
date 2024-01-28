const express = require("express");
const dotenv = require("dotenv");

const { chats } = require("./data/data");

const app = express();

dotenv.config();

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

const PORT =
  process.env.PORT ||
  4000; /*if PORT varaible is not avaiable use 4000 as port because use or operator(||) */

app.listen(PORT, console.log(`server started at ${PORT}`));
