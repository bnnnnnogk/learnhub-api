import express from 'express'

const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to learnhub').end()
})

app.listen(PORT, () => {
  console.log(`Learnhub API is up at ${PORT}`)
})
