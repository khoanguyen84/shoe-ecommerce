// spread = ...

// pass by value = truyền tham trị => các kiểu dữ liệu nguyên thủy number, string, boolean,..
// pass by reference = truyền tham chiếu => array, object, function

// let name_1 = "Khoa"
// let name_2 = name_1;
// name_2 = "Sơn"

// console.log(name_2);
// console.log(name_1);

// const jobsKhoa = ["Nấu cơm", "Đón con", "Lau nhà"]

// let jobsSon = jobsKhoa;
// jobsSon[2] = "Quét nhà"
// jobsSon.push("Rửa bát")

// let jobsSon = [...jobsKhoa, "Rửa bát"]
// jobsSon[2] = "Quét nhà"

// console.log("khoa", jobsKhoa);
// console.log("son", jobsSon);

// var n1 = 5;
// var n2 = 7;
// var n3 = 9;

// console.log(n1);


// var numbers = [5, 7, 9]
// console.log(numbers[0])

// const khoa_info = {
//     name: "Khoa",
//     age: 18,
//     gender: true
// }

// const son_info = khoa_info;
// const son_info = {...khoa_info}
// son_info.name = "Son"

// const son_info = {
//     ...khoa_info,
//     name: "Son",
//     email: "son@gmail.com"
// }
// console.log(khoa_info);
// console.log(son_info);

// clourse
var name = "Khoa"
function parent(){
    var count = 1;
    console.log(name);
    function getCount(){
        return count;
    }

    function setCount(newValue){
        count = newValue
    }

    return {
        getCount,
        setCount
    }
}

let func = parent()

console.log(func.getCount());
func.setCount(10)
console.log(func.getCount());