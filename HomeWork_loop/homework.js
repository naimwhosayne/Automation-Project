console.log("1. Numbers 1 to 50 - For Loop");

for (let i = 1; i <= 50; i++) {
    console.log(i);
}


console.log("2. Even Numbers - For Loop");

for (let i = 2; i <= 50; i = i + 2) {
    console.log(i);
}


console.log("3. Odd Numbers - For Loop");

for (let i = 1; i <= 50; i = i + 2) {
    console.log(i);
}


console.log("4. Numbers 1 to 50 - While Loop");

let number = 1;

while (number <= 50) {
    console.log(number);
    number = number + 1;
}


console.log("5. Even Numbers - While Loop");

let even = 2;

while (even <= 50) {
    console.log(even);
    even = even + 2;
}


console.log("6. Odd Numbers - While Loop");

let odd = 1;

while (odd <= 50) {
    console.log(odd);
    odd = odd + 2;
}
