import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'
mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

app.get('/ping', (req, res) => {
  res.json({ pong: true })
})

const PORT = Number(process.env.PORT) || 8000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
