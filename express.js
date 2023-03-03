const express =require("express");


const app =express();  // entire express package is available in app variable.

app.get("/", function(req,res){
    res.send("Hello from express before midsem");
})

app.listen(2000);  

