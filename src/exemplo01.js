const express = require('express')

const app = express()

app.use(express.json())

app.post('/exemplo01', (request,response) => {
    const { numeroX, numeroY } = request.body

    const soma = (numeroX + numeroY) / 2

    let resultado
    if(soma > 100) {
        resultado = 'positivo'
    } else {
        resultado = 'negativo'
    }

    return response.json({resultado})
})

app.listen(3334, () => {
    console.log('servidor rodando')
  })