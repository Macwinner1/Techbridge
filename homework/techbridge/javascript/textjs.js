// // performing a task
// function greet(name, lastName) {
//     console.log('hello ' + name + ' ' + lastName);
// }
// greet('macwinner', 'okafor');
// greet('macwinner', 'emeka');

// // calculating a value
// function square(number) {
//     return number * number;
// }

// console.log(square(2));

// artimentic calculation
// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);


//increment (++)
// console.log(x++);
// console.log(x);

// console.log(++x);

// //decrement (--)
// console.log(--x);

// console.log(x--);
// console.log(x);

// assignment operator
// let x = 10;

// x++;
// x = x + 1;
// // for more bigger num
// //x = x + 5;
// x += 5;
// x *= 5;


//relational
// console.log(x > 5);
// console.log(x >= 5);
// console.log(x < 5);
// console.log(x <= 5);

// //equality
// console.log(x === 10);
// console.log(x !== 10);

//strict equality
// console.log(1 === 1);
// console.log('1' === 1);


// //lose equality
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

//if a customer has more than 100 points.
//they are a 'gold' customer, otherwise they are 'silver' customer.
// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// logical AND (&&)
// Returns true if both operands are true
// console.log(true && false);
// console.log(true && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore

// console.log(eligibleForLoan);

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//Hours, if  hour is between 6am and 12pm: good morning, if it is 12pm and 6pm: good afternoon otherwise: good evening.
//if... else

// let hour = 10;

// if (hour >= 6 && hour < 12)
//     console.log('good morning');
// else if (hour >= 12 && hour < 18)
//     console.log('good afternoon');
// else
//     console.log('good evening');

// let role = ('moderator');

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;

//     case 'moderator':
//         console.log('Moderator User');
//         break;

//     default:
//         console.log('Unknown User');
// }

//For loop
// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }

// //while loop
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !==0) console.log(i);
//     i++;
// }

// do-while loop
// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);
