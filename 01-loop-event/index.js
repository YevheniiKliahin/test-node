const { time } = require('console');
const fs = require('fs')
const dns = require('dns')

function timeStapm(){
    return performance.now().toFixed(2)
}

console.log('Program start');

//Timeouts
setTimeout(() => console.log('Timeout 1', timeStapm()), 0)
setTimeout(() => {
    process.nextTick(() => console.log('Next tick 2', timeStapm()))
    console.log('Timeout 2', timeStapm())
}, 200)

//Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    console.log(`Interval ${intervalCount += 1}`, timeStapm())
    if (intervalCount === 2) clearInterval(intervalId)
}, 100)

//Close event
fs.writeFile('./test.txt', 'Hello Fucker!', () => console.log('File written 1', timeStapm()))

//Promise
Promise.resolve().then(() => console.log('Promise 1', timeStapm()))

//Next tick
process.nextTick(() => console.log('Next tick 1', timeStapm()))

//Set Immidiate
setImmediate(() => console.log('Immidiate 1', timeStapm()))

//I/O Event
dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 1 localhost', address, timeStapm())
    Promise.resolve().then(() => console.log('Promise 2', timeStapm()))
    process.nextTick(() => console.log('Next tick 3', timeStapm()))
})

console.log('Program end');