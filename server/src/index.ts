import express from 'express'
import dotenv from 'dotenv'
import sequelize from '../db'
import router from "../routes/router"
import errorHandler from '../middleware/errorHandler'
import fileUpload from 'express-fileupload'
import * as path from "path"
import cors from 'cors'
import cookieParser from "cookie-parser"

dotenv.config({path: "./.env"})
const PORT = process.env.SERVER_PORT
const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/static', express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(cookieParser())

app.use(router)
app.use(errorHandler)

async function startServer() {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startServer()
