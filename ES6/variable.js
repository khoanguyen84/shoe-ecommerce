// Scope = phạm vi
// 1. Global = Toàn cục
// 2. Local = Cục bộ
// 3. Block Code

// giống nhau: dùng để khai báo/khởi tạo 1 biến
// khác nhau:
// 1. var
//      + hoisting
//      + re-use vùng nhớ
// 2. let
//      + không có hoisting
//      + tạo mới vùng nhớ
// 3. const (constant = hằng)
//      + không có hoisting
//      + đóng băng vùng nhớ


// var number = 10;
// tạo vùng nhớ đặt tên là number = mặc định là chứa giá trị undefined
// gán 10 vào vùng nhớ trên
// var number;
// number = 10;

// var age;
// console.log(age);
{
    {
        let age = 20; 
        // age = 20;
        console.log(age);
        {
            {
                // let age = 30;
                console.log(age);
            }
        }
        console.log(age);
    }
}


// var var_global = 10; //global

// function func(){
//     let var_local = 20; //local
// }

// {
//     {
//         {
//             const pi = 3.14; //block code
//             {
//                 {

//                 }
//             }
//         }
//     }
// }

// const pi = 3.14;
// pi = 3.1415

// Function Expression
// Khoa
const alert = function(){
    console.log("Chào anh em");
}

// chị Trang
alert = function(){
    console.log("Chào anh em lần nữa");
}

alert();