import express from "express"
import desafioCadastro from "./routes/rotas.js"

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", desafioCadastro )

export default app
