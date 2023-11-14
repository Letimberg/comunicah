const express = require("express")
const app = express()

app.get("/message/:id/:user", (request, response) => {
    response.send(
        `ID da mensagem: ${request.params.id}. 
        Para o usuário: ${request.params.user}`
    )
})

const PORT = 8096
app.listen(PORT, () => console.log(`> Servidor inicializado: ${PORT}`))
