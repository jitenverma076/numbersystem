// finding prime numbers from array

const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

let primeChecker = function (arr) {
    let prime = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 1; j <= arr[i]; j++) {
            if (arr[i] % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            prime.push(arr[i]);
        }
    }
    return console.log(prime);
};  

primeChecker(numbers)