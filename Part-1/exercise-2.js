// This is Exercise 2
console.log("This is Exercise 2");
let min = 1;
let count = 1;
let max = 100;
while (min < max){
    min = min + count;
    if (min % 3 == 0 && min % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (min % 3 == 0){
        console.log("Fizz");
    } 
    else if (min % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(min);
    }
}
console.log("");
