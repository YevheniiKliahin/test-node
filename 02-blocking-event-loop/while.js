let isRunning = true

setTimeout(() => isRunning = false, 0)
process.nextTick(() => console.log('Next tick'))

//Blocking EVENT LOOP!!!! We will never get to the next Event Loop iteration
while(isRunning){
    console.log('While loop is running...')
}
