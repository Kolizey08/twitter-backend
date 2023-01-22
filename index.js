const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000

app.use(express.json());
app.use(require('./routers/users.route'))
app.use(require('./routers/comments.route'))
app.use(require('./routers/twits.route'))

mongoose
  .connect("mongodb+srv://Kolizey08:Maga@cluster0.nmzoj5b.mongodb.net/Twitter")
  .then(() => console.log("Соеденение со сервером установлено"))
  .catch(() => console.log("Ошибка при соеденение со сервером"));

  app.listen(port, ()=> {
    console.log('Сервер успешно запущен')
  })