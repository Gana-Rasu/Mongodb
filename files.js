
// 2) fs - file system (acess files in system c,d,e also can create files)

const fs = require("fs");

const quote = "nan dhan da inimelu vandhu ninna dhanapalu"
fs.writeFile("./awesome.html",quote,(err)=>{
    // console.log(err)
    console.log("completed writting");
});

// ./awesome.html -> file name
// quote -> data 
// err -> callback function