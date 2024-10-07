const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];

let evenOddchecker = function (arr) {
    let even = []
    let odd = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
        }
        else if (arr[i] % 2 != 0) {
            odd.push(arr[i])
        }
    }
    return console.log(`Even : ${even} , Odd : ${odd}`)
    }
    