const express = require('express')

const app = express ()

app.use(express.json())

app.post('/exemplo02', (request, response) =>{
    const {numeroX, numeroY } = request.body

    const subtrair = (numeroX - numeroY)

    return response.json(subtrair)
})

app.listen(3334, () => {
    console.log('servidor rodando')
})
