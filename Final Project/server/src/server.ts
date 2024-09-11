import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import Projects from './routes/Projects.js'

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
  }
  catch (error) {
    console.error(error as Error)
  }
})()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/projects', Projects)

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    code: 'notFound',
    message: "The page you requested doesn't exist."
  })

  next()
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
