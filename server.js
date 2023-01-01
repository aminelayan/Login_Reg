const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(cookie());
app.use(cors({credentials:true , origin:'http://localhost:3000'}));

require('./server/config/mongoose.config')

app.use(
    express.json(),
    express.urlencoded({extended: true }));

require('./server/routes/user.routes')(app)

app.listen(port,()=>console.log("Listen on Tanas: ",port))

