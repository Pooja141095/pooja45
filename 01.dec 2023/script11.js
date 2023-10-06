// CALLBACK FUNCTIONS :-

// 1. Take order - Waiter
// 2. Cook order - Cook

const takeOrder = function (cookOrder, ...items) { // args
    if (items === undefined) {
        return "Give valid order";
    } else {
        let orders = '';
        for (let i = 0; i < items.length; i++) {
            orders += items[i] + ",";
        }

        console.log("Order Noted: " + orders);
        // callback function
        cookOrder(items);
    }
}

const cookOrder = function (items) {
    let cookings = "";
    for (let i = 0; i < items.length; i++) {
        cookings += items[i] + ",";
    }

    console.log("Cooking Done: " + cookings);
}

// console.log(takeOrder(cookOrder, 'Triple Schezwan Noodles', 'Pizza', 'Burger', 'Plane Fries'));

// SYNCHRONOUS PROGRAMMING :-
/*
Normal flow, one after the another.
*/

// EX 1

const callBackFun = function () {
    console.log("Run after 5 second");
}

// console.log("START");

// setTimeout(callBackFun, 5000);

// console.log("END");


// EX 2
function printMe() {
    console.log('print me');
}

function saveMe() {
    console.log('save me');
}

function test() {
    console.log('test');
}

setTimeout(printMe, 3000);
setTimeout(saveMe, 1000);
test();