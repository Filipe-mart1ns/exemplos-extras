const express = require ('express')

const app = express()

app.use(express.json())

app.post('/exemplo03', (request, response) => {
    const { numeroX, numeroY } = request.body

    const divisao = (numeroX / numeroY)

return response.json(divisao)
})
app.listen(3334, () => {
    console.log('servidor rodando')
})
