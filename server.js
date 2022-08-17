const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AppRouter = require('./routes/AppRouter')
const AuthRouter = require('./routes/AuthRouter')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('I am still alive over here!!')
})
app.use('/api', AppRouter)
app.use('/auth', AuthRouter)

app.listen(PORT, () => {
  console.log(`Express is ALIVE on ${PORT}!!!`)
})
