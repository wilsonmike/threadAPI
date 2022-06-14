const http = require('http')

const port = process.env.PORT || 1337

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }))
})

function respondText(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hi')
}

function respondJson(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ text: 'hi', numbers: [1, 2, 3] }))
}


server.listen(port)
console.log(`Suva @ port ${port}`);