const express =require("express");


const app =express();  // entire express package is available in app variable.
 
var title="welcome to"

app.get("/", function(req,res){
    res.send("Hello from express before midsem "  +title );

})

app.listen(2000);  

console.log("connecting to express");
