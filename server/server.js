

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}))

app.use(bodyParser.json())

app.get('/playlists', (req, res) => {
  const data = fs.readFileSync(__dirname + '/playlists.json')

  res.send(data)
})

app.post('/playlists', (req, res) => {
  const data = fs.readFileSync(__dirname + '/playlists.json')

  const playlists = JSON.parse(data)

  playlists.push(req.body)

  fs.writeFileSync(__dirname + '/playlists.json', JSON.stringify(playlists))

  res.send('OK')
})

app.listen(3000, () => {
  console.log('Listening...')
})
