// function => chức năng
// 4 câu hỏi?
// 1. Chức năng làm gì (chức năng đơn)
// 2. Đặt tên (thể hiện chức năng của hàm) -> bắt đầu bởi 1 động từ
// 3. input (đầu vào)
// 4. output (đầu ra)

// console.log(Math.floor(9.9999)); 
// console.log(Math.ceil(9.00001)); 
// nhiệm vụ trả về số nguyên lớn nhất mà vẫn còn nhỏ number
// 9.9 -> 9

// nhiệm vụ: ghi log với prefix: Error/Info
// đặt tên: writeLog
// input: text
// output: format log

function writeLog(code, text){
    if(code == 500){
        return `[Error]- ${text}`
    }
    return `[Info]- ${text}`
}

console.log(writeLog(500, 'Internal Server - 500'));
console.log(writeLog(203, 'Bad request'));

// parameter vs agrument
// tham số vs đối số

// Math.ceil(x)
// Math.ceil(10.343)