// callback sử dụng để xử lý các tác vụ bất đồng bộ
// callback
// 1. callback phải là 1 function
// 2. callback phải được truyền vào 1 hàm khác qua agrument
// 3. callback phải được thực thi


// const callback = function(n1, n2){
//     console.log(n1 * n2);
// }

// function useCallback(params){
//     params(10, 20)
// }


// function useCallback_2(){
//     callback(4, 2)
// }
// useCallback(callback)
// useCallback_2();
// callback(100,200)

// function useCallback(params) {
//     params(10, 20)
// }

// callback
// anonymous (vô danh)
// useCallback(function (n1, n2) {
//     console.log(n1 + n2);
// })

// callback(200, 300)

// function sum(n1, n2){
//     console.log(n1 + n2);
// }

// function useSum(){
//     sum(4, 2)
// }

// function times(n1, n2){
//     console.log(n1 * n2);
// }

// function useTimes(){
//     times(4, 2);
// }

// useSum();
// useTimes();


// function process(callback) {
//     callback(4, 2)
// }

// process(function (n1, n2) {
//     console.log(n1 + n2);
// })
// process(function (n1, n2) {
//     console.log(n1 * n2);
// })
// process(function (n1, n2) {
//     console.log(n1 - n2);
// })

// let numbers = [4, 5, 6, 4, 5];
// const power = function(n){
//     return n ** 2;
// }
// let result = numbers.map(power)

// let result = numbers.map(function(n){
//     return n ** 2;
// }) //power(4)

// let result = numbers.map((n) => n ** 2) //power(4)

// console.log(result);

setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
        }, 4 * 1000)
    }, 2 * 1000)
}, 5 * 1000)
// callback hell


