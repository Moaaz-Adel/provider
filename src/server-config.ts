import cors from 'cors'

import express, { json } from 'express'

const server = express()

server.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:4200']
  })
)

server.use(json())

server.get('/', (_, res): void => {
  res.status(200).json({ message: 'Server is running!' })
})
server.use('/auth/fake-token', (_, res): Response<any, Record<string, any>> => {
  const token = `Bearer ${new Date().toISOString()}`
  return res.status(200).json({ token, status: 200 })
})

export { server }
