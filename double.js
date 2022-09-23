const dbl = (n)=>n*2;
console.log(dbl(10));

// output
// user@DESKTOP-O8BPACO MINGW64 ~/OneDrive/Desktop/folders/assignments/node file system
// $ node filesystem.js
// 20


// the document and window object are not availbale in node because it is not a browser like js, so 
// how the settimeout and other functions work?

// the answer for the above question is 
console.log(global)
// global is the object which has all the setinterval,timeout..etc


// output
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 55.61449998617172,
//       nodeStart: 0.7557999491691589,
//       v8Start: 2.6441999673843384,
//       bootstrapComplete: 33.67640000581741,
//       environment: 17.199400007724762,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1663226296629.709
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }

// there are things which are present in node and not present in browser

// process is a global object inside that has argv (argument value)

console.log(process.argv)
// process.argv displays what is typed in terminal
// output
// $ node filesystem.js 100
// 20
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\user\\OneDrive\\Desktop\\folders\\assignments\\node file system\\filesystem.js',
//   '100'
// ]

const dbl = (n)=>n*2;
console.log(dbl(process.argv[2]));

// output
// $ node filesystem.js 100
// 200




