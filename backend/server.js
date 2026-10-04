import express from "express"
import "dotenv/config"
import db from "./db.js"
import router from "./routes/incidentsRoutes.js"
import authRouter from "./routes/usersRoutes.js"


const app = express()

app.use(express.json())
app.use(router)
app.use(authRouter)


app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`))