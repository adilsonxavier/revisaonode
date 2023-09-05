const express = require("express")
const router = require("./router")

const app =  express();


//app.listen(3333,() => console.log("server running on 3333"))

//app.get("/",(req,res) => res.status(200).send("ola tito sssdsdfd"));
// quando mandar uma requisicao do tipo get para a rota "/" a resposta terá status 200 e receberá o conteudo "ola tito"
// O app.get pode vir antes do app.listen
app.use(express.json())

app.use(router)

module.exports = app;