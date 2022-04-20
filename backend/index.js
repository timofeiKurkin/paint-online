const express = require('express')
const {connectionHandler, broadcastConnection} = require("./connectionHandler");

// создаем сервер
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
// веб сокет сервер. сразу передаем наше приложение в функцию
const WSServer = require('express-ws')(app)
// получаем объект с помощью которого делаем рассылку
const aWss = WSServer.getWss()

// указываем порт. если он не указан, то 5000
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.ws('/', (ws, req) => {
    console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО')
    ws.send('Ты успешно подключился')
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        switch (msg.method) {
            case 'connection':
                connectionHandler(ws, msg, aWss)
                break
            case 'draw':
                broadcastConnection(ws, msg, aWss)
                break
        }
    })
})

app.post('/image', (req, res) => {
    try {
        const data = req.body.img.replace(`data:image/png;base64,`, '')
        fs.writeFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`), data, 'base64')
        return res.status(200).json({message: 'WORK'})
    } catch (e) {
        console.log(e)
        return res.status(500).json()
    }
})
app.get('/image', (req, res) => {
    try {
        const file = fs.readFileSync(path.resolve(__dirname, 'files', `${req.query.id}.jpg`))
        const data = `data:image/jpg;base64,` + file.toString('base64')
        return res.json(data)
    } catch (e) {
        console.log(e)
        return res.status(500).json()
    }
})

app.listen(PORT, () => console.log(`server work on port ${PORT}`))