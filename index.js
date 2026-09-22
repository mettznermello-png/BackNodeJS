import express from 'express'
import clientes from './router/clientes.js'
import database from './config/database.js'

const app = express()

app.get("/api/v1/", clientes)

database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(3000, () => {
        console
        .log("porta a escutar o numero 3000")
    })
})   
.catch((e) => {
        console.log(e)
})