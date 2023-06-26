require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3500;
const cors = require('cors')

const musicRoute = require('./routes/musicPlayerRoutes');

app.use(cors())
app.use('/api/v1/music',musicRoute)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log(`Connected to the database`))


app.listen(PORT,()=>console.log(`Listening to port http://localhost:${PORT}`))






