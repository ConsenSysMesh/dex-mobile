import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())


app.listen(6000)

console.log('API listening on port 6000')
