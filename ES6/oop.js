// Naming Convention
// camelCase = tongHaiSo
// PascalCase = TongHaiSo
// snake_case = tong_hai_so
class Person{
    constructor(name, gender, dob){
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    setMobile(phoneNumber){
        this.mobile = phoneNumber;
    }
    getMobile(){
        return this.mobile;
    }

    set location(newLocation){
        this.address = newLocation
    }

    get location(){
        return this.address
    }

    static slogen(){
        return 'Still breath still alive'
    }
}

class Student extends Person{
    constructor(name, gender, dob, email){
        super(name, gender, dob);
        this.email = email;
    }   
}
// OOP
// Kế thừa
// Đóng gói
// Đa hình
// Trừa tượng

// getter vs setter

let khoa = new Person("Khoa", true, "10/10/2000")
console.log(Person.slogen());
// console.log(khoa);
// khoa.setMobile('0935216417')
// khoa.getMobile()
// khoa.location = "Huế"
// console.log(khoa.location);
// let chau = new Person("Châu", false, "10/10/2000")

// let thuong = new Student("Thương", false, "05/05/2001", "thuong@gmail.com")

// console.log(thuong);


let numbers = new Array()
numbers.push()
Math.floor(5.6)