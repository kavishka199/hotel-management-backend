const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const roomRouter = require('./routes/rooms');
const eventRouter = require('./routes/events');
const inventoryRouter = require('./routes/inventory');
const packageRouter = require('./routes/package');

const cors = require('cors');
//Enable CORE
app.use(cors());
dotenv.config();

/*
Run Server
*/
app.listen(8090,() => {
    console.log("backend server is working");
})

/*  
connect mongoose server
*/
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(()=>console.log("DB Connection Successfull!!!!"))
.catch((err)=>console.log(err));
/*Accesp JSON*/
app.use(express.json());

/*
Routers
*/

app.use("/api/room",roomRouter);
app.use("/api/event",eventRouter)
app.use("/api/inventory",inventoryRouter);
app.use("/api/package",packageRouter);

