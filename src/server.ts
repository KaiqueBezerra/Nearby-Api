import express from "express"
const cors = require("cors");

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()

const allowedOrigins = "*";

app.use(
    cors({
        origin: allowedOrigins,
    })
);

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
