// console.log(process.argv);

const sum =(a,b)=>{
    return a + b;
}

const [, ,num1, num2]= process.argv;//destructured the process.argv
console.log(sum(+num1,+num2)); // the string is converted to integers



// so node js can have values taken from terminal and dom like properties through global object



