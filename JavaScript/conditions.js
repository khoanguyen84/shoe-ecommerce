// cấu trúc rẻ nhánh
// 2 nhóm
// nhóm 1:
// ---------
// if() {}
// ---------
// if() {} else{}
// ---------
// if(){
// } else {
//     if() {
//     }
//     else {
//     }
// }
// ---------
// if() {

// } else if() {

// } else if() {

// }

// nhóm 2:
// key và value => phải cùng kiểu dữ liệu
// switch (key) {
//     case value_1:{
//         break;
//     }
//     case value_2:{
//         break;
//     }
//     case value_3:{
//         break;
//     }
//     default:
//         break;
// }

// Xếp loại
// averageScore
//  9 <= averageScore <= 10  -> Xuất sắc
//  8 <= averageScore < 9  -> Giỏi
//  7 <= averageScore < 8  -> Khá
//  5 <= averageScore < 7  -> Trung bình
//  0 <= averageScore < 5  -> Yếu
// -------------------------------
// let averageScore = 18.5;
// if (averageScore < 0 || averageScore > 10) {
//     console.log('Invalid Score');
// } else if (averageScore >= 9 && averageScore <= 10) {
//     console.log("Xuất sắc");
// } else if (averageScore >= 8 && averageScore < 9) {
//     console.log("Giỏi");
// } else if (averageScore >= 7 && averageScore < 8) {
//     console.log("Khá");
// } else if (averageScore >= 5 && averageScore < 7) {
//     console.log("Trung bình");
// } else {
//     console.log("Yếu");
// }

let averageScore = 5.5;

switch (true) {
    case (averageScore >= 9 && averageScore <= 10): {
        console.log("Xuất sắc");
        break;
    }
    case (averageScore >= 8 && averageScore < 9): {
        console.log("Giỏi");
        break;
    }
    case (averageScore >= 7 && averageScore < 8): {
        console.log("Khá");
        break;
    }
    case (averageScore >= 5 && averageScore < 7): {
        console.log("Trung bình");
        break;
    }
    case (averageScore >= 0 && averageScore < 5): {
        console.log("Yếu");
        break;
    }
    default: {
        console.log('Invalid Score');
        break;
    }
}

// so sánh bằng toán tử ===
// 5 == '5' -> true => value_1 == value_2
// 5 === '5' -> false => value_1 == value_2 && datatype_1 == datatype_2