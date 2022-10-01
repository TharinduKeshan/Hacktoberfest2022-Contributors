const express = require('express')
const app = express()

if (process.env.NODE_ENV !== "PRODUCTION") {
   require("dotenv").config({ path: "config.env" });
 }
 
app.get('/', (req, res) => {
   res.sendStatus(200)
})

app.listen(3000)
