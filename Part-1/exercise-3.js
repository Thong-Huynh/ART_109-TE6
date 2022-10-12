// This is Exercise 3
console.log("This is Exercise 3");

let evenRow = "";
let oddRow = "";
let n = " #";
let m = "# ";
let l = 0;
let k = 0;
let j = 8;

while (l < j / 2) {
    l++;
    oddRow += n;
    evenRow += m;
}

while (k < j) {
    k++;
    if (k % 2 == 0) {
        console.log(evenRow);
    } else {
        console.log(oddRow);
    }
}