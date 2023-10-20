const express = require("express")
const path = require("path")

const app = express()
const PORT = 8080

//conectarse al puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)

})

//middlewords
//enviar y recibir info, no olvidar
//app.use(express.json())
//app.use(express.urlencoded({ extended: true }))

//importante
//app.engine("handlebars", engine());
//app.set('view engine', 'handlebars')
//app.set('views', path.resolve(__dirname + '/views'))
