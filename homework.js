const log = (exercise, ...messages) => {
    console.log(
        "\n--------------- EXERCISE " + exercise + " ---------------\n",
        messages.join("\n")
    );
};

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
function area(width, height) {
    return width * height;
}
log(
    1,
    "Area of a rectangle with a width of 15cm and a height of 10cm",
    area(15, 10)
);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
function crazySum(num1, num2) {
    return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
}

log(2, "Crazy sum", crazySum(5, 5));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
function crazyDiff(num) {
    let diff = Math.abs(19 - num);
    return num > 19 ? diff * 3 : diff;
}

log(3, "Crazy diff", crazyDiff(20));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

log(4, "Boundary");
console.log("Boundary 10", boundary(10));
console.log("Boundary 50", boundary(50));
console.log("Boundary 400", boundary(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
function strivify(str) {
    return str.toLowerCase().startsWith("strive") ? str : "Strive " + str;
}
log(5, "Strivify");
console.log("Strivify: Strive School -> ", strivify("Strive School"));
console.log("Strivify: School        -> ", strivify("School"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
function check3and7(num) {
    return num % 3 === 0 || num % 7 === 0;
}
log(6, "Check 3 and 7");
console.log("Check 3 and 7: 21 -> ", check3and7(21));
console.log("Check 3 and 7: 22 -> ", check3and7(22));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
function reverseString(str) {
    return str.split("").reverse().join("");
}

log(7, "Reverse String");
console.log("Reverse String: Strive -> ", reverseString("Strive"));
console.log("Reverse String: School -> ", reverseString("School"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
function upperFirst(str) {
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1)) //Take first letter and uppercase it, then concat the rest of the word by slicing the first letter
        .join(" ");
}

log(8, "Upper First");
console.log("Upper First: hello world   -> ", upperFirst("hello world"));
console.log("Upper First: strive school -> ", upperFirst("strive school"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
function cutString(str) {
    return str.slice(1, -1);
}

log(9, "Cut String");
console.log("Cut String: hello       -> ", cutString("hello"));
console.log("Cut String: hello world -> ", cutString("hello world"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
function giveMeRandom(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 11)); //Math.random() returns a number between 0 and 1, so we multiply it by 11 to get a number between 0 and 10
    }
    return arr;
}

log(10, "Give Me Random");
console.log("Give Me Random: 5 -> ", giveMeRandom(5));
console.log("Give Me Random: 3 -> ", giveMeRandom(3));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
