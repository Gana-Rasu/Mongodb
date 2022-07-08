// console.log(process.argv);

const sum =(a,b)=>{
    return a + b;
}

const [, ,num1, num2]= process.argv;//destructured the process.argv
console.log(sum(+num1,+num2)); // the string is converted to integers



// so node js can have values taken from terminal

// inbuilt packages
// 1) os (allows you to get info about cpu memory and everything else)
const os = require("os");
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());


// 2) fs - file system (acess files in system c,d,e also can create files)