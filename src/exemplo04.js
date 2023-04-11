const express = require('express')

const app = express()

app.use(express.json())

app.post('/exemplo04', (request,response) => {
    const { numeroX, numeroY } = request.body

    const multiplicar = (numeroX * numeroY)

    return response.json(multiplicar)
})

app.listen(3334, () => {
    console.log('servidor rodando')
})