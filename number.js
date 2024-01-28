var orangePrice = 20; // number
var chocolate = 0.5; // number
var applePrice = '26'; // string

console.log(orangePrice);
console.log(typeof orangePrice);

console.log(chocolate);
console.log(typeof chocolate);

console.log(applePrice);
console.log(typeof applePrice);


// add
// number + number = number(yellow)
var sum1 = orangePrice + chocolate;
console.log(sum1);
console.log(typeof sum1);

// number + string = string(white)
var sum2 = orangePrice + applePrice;
console.log(sum2);
console.log(typeof sum2);

/**
 * ************* Convert a string to Integer **************
 */

applePrice = parseInt(applePrice);
console.log(applePrice);
console.log(typeof applePrice);



/**
 * ************ NaN: Not a Number ************
 * NaN is a value representator. Not a data type
 */

var value = parseInt('twenty')
console.log(value);
console.log(typeof value);


/**
 * *************** toFixed() ***************
 * ==> fixed that how many number will show after point
 * 
 * ==> but there is a problem. It convert the float number to string(white)
 * => to convert float again: parseFloat()
 */
// special case:
var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total); // 0.30000000000000004


// toFixed()
console.log(total.toFixed(4));
console.log(typeof total.toFixed(4));


// although for most of them it will works normally
second = 0.1;
total = first + second;
console.log(total); // 0.2



/**
 * ********* Invalid *********
 * ==> 20/0 = Infinity
 * ==> -20/0 = -Infinity
 */
console.log(50/0);
console.log(-50/0);



/**
 * ******* isNaN(x) *******
 * 
 * ==> it's a function to check the x is a NaN or not!
 */

console.log(isNaN(2));
console.log(isNaN('2'));
console.log(isNaN('moon'));