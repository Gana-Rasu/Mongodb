
// 2) fs - file system (acess files in system c,d,e also can create files)

const fs = require("fs");

// const quote = "this is the proverb"
// fs.writeFile("./awesome.html",quote,(err)=>{
//     console.log(err)
//     console.log("completed writting");
// });

// ./awesome.html -> file name
// quote -> data 
// err -> callback function


// write
// const quote2 = "this is the proverb";
// const [, ,num1]= process.argv;
//     for (let index = 1; index <=num1; index++) {
    
//         fs.writeFile(`./backup/text-${index}.html`,quote2,(err)=>{
//             console.log(`completed  ${index}`);
//         });
//     }



// read file
fs.readFile('./read.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }

})


// append file

const quote = "good morning"
// fs.writeFile("./append.txt",quote,(err)=>{
      
//         console.log("completed");
//     })

// fs.appendFile("./append.txt", "\n" + quote,(err)=>{
     
//         console.log("completed writting");
//     })


// delete
    fs.unlink("./delete.css",(err)=>{
     
        console.log("completed delete");
    })