"use strict"

if (4==9) {
    console.log('OK');
} else {
    console.log('ebat ti matematik');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('To much');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') : console.log('Error');

const num = 50;


switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log("Oh my GOD, it's true!");
        break;
    default:
        console.log("Otstan' Hvatit!");
        break;
    }