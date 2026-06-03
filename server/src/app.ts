import express from 'express'
import cors from 'cors'
import { env } from './config/env'
import { errorMiddleware } from './middlewares/error.middleware'
import petsRoutes from './modules/pets/pets.routes'

const app = express()

app.use(
  cors({
    origin: [env.CLIENT_URL, 'http://localhost:5173'].filter(Boolean),
    credentials: true,
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'API running' })
})

app.use('/api/pets', petsRoutes)

app.use(errorMiddleware)

export default app
