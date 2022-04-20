const connectionHandler = (ws, msg, aWss) => {
    ws.id = msg.id
    broadcastConnection(ws, msg, aWss)
}

const broadcastConnection = (ws, msg, aWss) => {
aWss.clients.forEach(client => {
    if(client.id === msg.id) {
        client.send(JSON.stringify(msg))
    }
})
}

module.exports = {connectionHandler, broadcastConnection}