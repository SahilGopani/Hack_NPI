const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send(`Ты находишься на порту - ${PORT}`)
})

app.listen(PORT, () => console.log(`Сервер запущен! Порт - ${PORT}`))