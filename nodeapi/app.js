const express = require('express');
const morgan = require('morgan');
// bring routes
const postRoutes=require("./Routes/post");
const app = express();

// const myOwnMiddleware = (req,res,next)=>{
//     console.log('my own middleware');
//     next();  
// }

//middleware
app.use(morgan("dev"));
// app.use(myOwnMiddleware);


app.use('/', postRoutes);




const port=5000;

app.listen(port, (req, res) => {
    console.log(`Uday, NodeJS listening on:${port}`);
});