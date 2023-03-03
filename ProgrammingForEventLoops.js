const FileSystem = require("fs");

const FileName = "target.txt";

// Functions to handle errors and data.
const errorHandler =error => console.log(error);
/* funcution name = parameters =>returning */
const dataHandler = data => console.log(data.toString());

// FileSystem.watch(FileName, function(req,res){
//     console.log("File Changed");  // output will be displayed in terminal when ever you save (ctrl + s) the "target.txt" file
// });
//--------Synchronous----------------------------------------------


// const SynchronousData=FileSystem.readFileSync(FileName);       //No callback function is provided.
// console.log(SynchronousData.toString());


//-------- Asynchronous Call back --------------------------------
FileSystem.readFile(FileName, function (error, data) {
    if (error) {
        errorHandler(error);
    }
    dataHandler(data);  //data=> is the actual data which is in the target.txt file.
})

console.log("Node.js Asynchronous Programming..............");