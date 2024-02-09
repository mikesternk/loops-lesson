// console.log("Hello World")

// const num1 = 1;
// const num2 = 2;
// const num3 = 3;
// const num4 = 4;
// const num5 = 5;
// const num6 = 6;
// const num7 = 7;
// const num8 = 8;
// const num9 = 9;
// const num10 = 10;
// console.log(a,b,c)


// =====PRACTICE=====

// Count down from 10 to 1
// for (i = 10; i > 0; --i) {
//     console.log(i)
// };

// output odd numbers from 1 to 10
// for (let i = 1; i < 10; i += 2) {
//     console.log(i)
// }

// or 
// for (let i = 1; i < 10; i++)
//     if (i % 2 != 0)
//         console.log(i)

// 

// output multiples of 3, starting from 6 and ending at 60

// for (let i = 6; i <= 60; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
//     }
// }

// Outout an increasing number of # symbols, from 1 to 7

// for (let i = 1; i <= 7; i++) {
//     let hash = ""
//     for (let x = 0; x < i; x++) {
//         hash += "#"
//     }
//     console.log(hash)
// }

// for (let str = ""; i <= 7; i++) {
//     str += "#";
//     console.log(str)
// }

// Write a for loop that iterates from 1 to 20.

// for (let i = 0; i <= 20; i++) {
//     if (i > 1) {
//         for (let j = 2; j < i; j++) {
//             if (i % j ) {
//                 // console.log(i + "is a composite number")
//             }
//             else
//                 console.log(i + "is a prime number")
//         }
//     }
// }

// looping from lowerNumber to higherNumber
// for (let i = 0; i <= 20; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
  
//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         if (i % 2 == 0) {
//             console.log(i +" - this is both a prime and an even number")
//             break;
//         }
//         else if (i % 2 != 0) {
//             console.log(i + " - this is both a prime and an odd number")
//             break;
//         }
//         console.log(i + " - this a prime number");
//     }
//     else if (i % 2 == 0) {
//         console.log(i + " - this is an even number")
//     }
//     else {
//         console.log(i + " - this is an odd number")
//     }
// }

// let prime = [];
// let even = [];
// let odd = [];
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         even.push(i);
//     } else {
//         odd.push(i);
//     }

//     let isPrime = true;
//     for (let j = 2; j*j <= i; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         } 
//     }  
    // j = 2; j*j <= i; j++ // i = 5
    // j = 2; 4 <= 6; j++
    // 5 % 2 == 1  
    // j = 3, 9 <= 9; j++

    // i = 6
    // j = 2; j*j <= i; j++
    // j = 2; 4 <= 6; j++
    // 6 % 2 == 0  
    
    // i = 7
    // j = 2; j*j <= i; j++
    // j = 2; 4 <= 6; j++
    // 6 % 2 == 0 


//     if (isPrime == true && i != 1 && i != 2 && i != 3) {
//         prime.push(i);
//     }
// }
// console.log(even);
// console.log(odd);
// console.log(prime);

// SOLUTION
for(let i = 1; i <= 20; i++) {
    // num === i
    // Go through 1 to 20 and figure out which numbers are prime.
    // Let's meet some of our edge cases
    if(i === 1 || i === 3) {
        console.log(`${i} is an odd number.`)
    } else if(i === 2) {
        console.log(`${i} is an even number.`)
    } else {
        // We need to print all the primes as well evens and odds
        let isPrime = true

        for(let j = 2;  j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
            }
        }

        if(isPrime) {
            console.log(`${i} is a prime number and an odd number.`)
        } else {
            // check to see if something is even
            // anything divided by 2 with a remainder of zero is an even number
            if(i % 2 === 0) {
                console.log(`${i} is an even number.`)
            } else {
                console.log(`${i} is an odd number.`)
            }
        }
    }
}