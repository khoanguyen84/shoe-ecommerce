// ++ / --
// let number = 5;
// cách 1:
// number = number + 1;
// cách 2:
// number += 1;
// cách 3:
// number++
// ++number

// number++ > 5
// 1. number > 5
// ...
// 2. number++ (thao tác cuối cùng)

// ++number > 5
// 1. number++ (thao tác đầu tiên)
// ...
// 2. number > 5

let number = 5;
if (++number > 5) {
    console.log("Greater than 5");
}

console.log('number outsite if', number);