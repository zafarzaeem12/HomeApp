const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require("dotenv/config");

app.use(express.json());
app.use(cors());
app.use('/user/api/',userRoutes);


mongoose.set('strictQuery', true);
mongoose
.connect(process.env.mongodb_url)
.then(response => { console.log(`Database Connected Successfully`) } )
.catch(error => { console.log(`Database Disconnected ${error}`)}  );



const PORT = process.env.port || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});