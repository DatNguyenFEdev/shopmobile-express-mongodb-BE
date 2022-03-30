const express = require('express')
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const productRouter = require('./routers/productRouter')

// config
const app = express()
dotenv.config();
app.use(morgan('dev'))
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

// routers
app.use("/api", productRouter)

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB Connected'));
mongoose.connection.on('error', err => {
    // console.log(`DB connection error: ${err.message}`)
})


app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})


