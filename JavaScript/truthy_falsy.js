// truthy và falsy => convert các kiểu dữ liệu về kiểu boolean (true/false)
// trường convert false
// false    ->      false
//  0       ->      false
//  empty   ->      false
//  null    ->      false
// undefinded   ->  false
// NaN      ->      false

// let array = []
// let obj = {}
// let number = 0

// if(number) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

let fullname = "Khoa";
// nếu fullname = '' -> no name
// ngược lại thì -> fullname

// if(fullname != null && fullname != '') {
//     console.log(fullname);
// }
// else {
//     console.log("No name");
// }

console.log(fullname || 'No name');