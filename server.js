const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('I AM THE ROOT DIRECTORY HEAR ME ROAR!')
})

app.listen(PORT, () => {
  console.log(`Express is ALIVE on ${PORT}!!!`)
})
