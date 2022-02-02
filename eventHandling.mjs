import { default as eventEmitter } from 'events'

const myEmitter = new eventEmitter()
myEmitter.on('kiran', (...args) => {
    console.log("Event Triggered!!");
    console.log("Data passed is : ", args);
});

myEmitter.emit("kiran", 1,2,3)
