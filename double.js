const nj = (n)=>{
    return n*2;
}
// console.log("la la land da" + nj(5));  
// console.log(document); 
// console.log(window);

// process is a global object 
// console.log(nj(process.argv[2]));//argument can be given in terminal
const [, , num]= process.argv;
console.log(nj(num));