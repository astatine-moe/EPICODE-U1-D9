const log = (exercise, ...messages) => {
    console.log(
        "\n--------------- EXTRA EXERCISE " + exercise + " ---------------\n",
        messages.join("\n")
    );
};

// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* WRITE YOUR ANSWER HERE */
/* giveMeRandom from homework.js */
function giveMeRandom(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 11)); //Math.random() returns a number between 0 and 1, so we multiply it by 11 to get a number between 0 and 10
    }
    return arr;
}
/* */
function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > 5) {
            sum += num;
        }
    }

    return sum;
}

log(1, "checkArray");
let arrToCheck = giveMeRandom(10);
console.log("checkArray: Calc sum > 5   ->", arrToCheck);
console.log("checkArray: Sum of array   ->", checkArray(arrToCheck));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR ANSWER HERE */
let shoppingCart = [
    {
        name: "Sunglasses",
        price: 39.99,
        id: "sunglasses",
        quantity: 1,
    },
    {
        name: "Long sleeved hoodie",
        price: 89.99,
        id: "long-sleeved-hoodie",
        quantity: 2,
    },
    {
        name: "Socks",
        price: 2.99,
        id: "socks",
        quantity: 5,
    },
];

function calculateShopTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const { price, quantity } = items[i]; //deconstruct the object into variables
        total += price * quantity;
    }

    return total;
}

log(2, "Shopping cart total:", "$" + calculateShopTotal(shoppingCart));

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */
function addToShoppingCart(item) {
    shoppingCart.push(item);

    return shoppingCart.length;
}

log(3, "Add to shopping cart:");
console.log("Items before: ", shoppingCart.length);
console.log(
    "Items after: ",
    addToShoppingCart({
        name: "Black shoes",
        price: 59.99,
        id: "black-shoes",
        quantity: 1,
    })
);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */
function maxShoppingCart(items) {
    let mostExpensive = items[0].price,
        name = items[0].name;
    for (let i = 1; i < items.length; i++) {
        const item = items[i];
        if (mostExpensive < item.price) {
            mostExpensive = item.price;
            name = item.name;
        }
    }

    return { mostExpensive, name };
}

let max = maxShoppingCart(shoppingCart);
log(4, "Most expensive item", max.name, "$" + max.mostExpensive);

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */
function latestShoppingCart(items) {
    return items.pop();
}

log(5, "Latest item in shopping cart: ", latestShoppingCart(shoppingCart).name);

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */
let till = 2;
log(6, "Loop until", till);
function loopUntil(x) {
    let count = 0;
    while (count < 3) {
        let num = Math.floor(Math.random() * 10);
        console.log(num);
        if (num > x) {
            count++;
        } else {
            count = 0;
        }
    }
    console.log("Number larger than", x, "found 3 times in a row");
}

loopUntil(till);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */
let arr = [1, 2, true, 4, 5, "Not a number!", 7, 8, null, 10];
log(7);
function average(arr) {
    let sum = 0,
        count = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (typeof num === "number") {
            sum += num;
            count++;
        }
    }

    return parseFloat((sum / count).toFixed(2));
}

console.log("Average of", arr);
console.log("Is:", average(arr));

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */
let strings = [
    "This",
    "is",
    "a",
    "test",
    "of",
    "random super duper long string",
    "the",
    "longest",
    "string",
    "function",
];
function longest(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let str = arr[i];
        if (longest.length < str.length) {
            longest = str;
        }
    }
    return longest;
}
log(8);
console.log("Longest string in", strings);
console.log("Is:", longest(strings));

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */
let emailContent = "This is a test email. It does not contain SPAM or SCAM.";
function antiSpamFilter(emailContent) {
    return !emailContent.includes("SPAM") && !emailContent.includes("SCAM");
}

log(9);
console.log("Email content:", emailContent);
console.log("Free of spam?:", antiSpamFilter(emailContent) ? "Yes" : "No");

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */
function daysPassed(date) {
    let today = new Date();
    let diff = today.getTime() - date.getTime();
    return Math.floor(diff / (1000 * 3600 * 24));
}

log(10);
console.log(
    "Days passed since 1st January 2020:",
    daysPassed(new Date(2020, 0, 1))
);

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */
function matrixGenerator(x, y) {
    //we want to create y rows with x columns
    let matrix = [];
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            matrix.push(i + "" + j);
        }
    }

    return matrix;
}

log(11);
console.log("Matrix of 3x3:");
console.log(matrixGenerator(3, 3));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
