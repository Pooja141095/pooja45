// Promises:-

// 1.
// Promise
//     .resolve('some')
//     .then(function (input) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 input += 'thing'
//                 resolve(input);
//             }, 1000)
//         })
//     })
//     .then(function (input) {
//         console.log(input);
//     })

// 2.
// var add = function (x, y) {
//     return new Promise(function (resolve, reject) {
//         let sum = x + y;

//         if (sum) {
//             resolve(sum)
//         } else {
//             reject(Error('Something went wrong while adding numbers..!'));
//         }
//     });
// }

// var sub = function (x, y) {
//     return new Promise(function (resolve, reject) {
//         var dif = x - y;
//         if (dif) {
//             resolve(dif);
//         } else {
//             reject(Error('Something went wrong while subtracting numbers..!'));
//         }
//     })
// }

// add(2, 3)
//     .then(function (res) {
//         console.log(res);
//         return sub(res, 1);
//     })
//     .then(function (res) {
//         console.log(res);
//         return add(res, 5);
//     })
//     .then(function (res) {
//         console.log(res);
//         sub(res, 5);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// ASYNC AWAIT
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(resolve, ms);
        }

        else {
            reject(console.log("Shop is closed"))
        }
    });
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(1000)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }

    catch (error) {
        console.log(error);
        console.log("customer left")
    }

    // finally block (optional)
}

// kitchen();