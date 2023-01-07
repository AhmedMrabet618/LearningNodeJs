/*In our illustration, we described a scenario where not having a doorbell can be a problem, especially since we are hungry and waiting for food. Let’s see if we can remedy this.

There are three events that we need to take care of.
The order event will be fired when we place an order for some food. It should output Order placed for food, where food will be the variable passed to the emitter.
The doorbell event will be fired when our food is at the door. It should output RING RING!.
The payment event will be fired once we pay for our food at the door. It should output Enjoy your food, where food will be the variable passed to the emitter.
All the outputs should be done using console.log.
The placeOrder function on line 15 describes the flow of how the events might be emitted. It is only there to help you. You do not have to uncomment it.*/

/*1st coding*/
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// placeOrder = function (food) {
//   myEmitter.emit("order", food);
//   myEmitter.emit("doorbell");
//   myEmitter.emit("payment", food);
// };

// Write your code below

let food ="";
//order
orderFunction = function (food){
  console.log(`Order placed for ${food}`);
}
myEmitter.on('order', orderFunction);

//doorbell
doorbellFunction = function (){
  console.log('RING RING!');
}
myEmitter.on('doorbell', doorbellFunction);

//payment
paymentFunction = function (food){
  console.log(`Enjoy your ${food}`);
}
myEmitter.on('payment', paymentFunction);


/*2nd coding*/
/*
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("order", (food) => {
  console.log("Order placed for", food);
});

myEmitter.on("doorbell", () => {
  console.log("RING RING!");
});

myEmitter.on("payment", (food) => {
  console.log("Enjoy your", food);
});
*/
