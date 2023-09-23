// let jobList = ["Java", "React", "Angular"]

// optional parameter = tham só ko bắt buộc
// khi ko truyền giá trị thì nó sẽ sử dụng giá trị mặc định

// lưu ý, optional parameter phải đứng sau các required parameter (nếu có)
// join() mặc định là dấu phẩy (,)
// console.log(jobList.toString());
// console.log(jobList.join(" + "));

function sum(n1, n2 = 20, n3 = 60){
    console.log(n1 + n2 + n3);
}

sum(50)
// console.log(50 + undefined);
// NaN = Not a Number