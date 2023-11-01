import express from 'express'
import { PrismaClient } from '@prisma/client'

const PORT = Number(process.env.PORT || 8080)
const app = express()
const clnt = new PrismaClient()

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to learnhub').end()
})

app.listen(PORT, () => {
  console.log(`Learnhub API is up at ${PORT}`)
})
