// viết chương trình tạo ra 1 mảng (có 10 phần và các giá trị sinh ngẫu nhiên [10. 50]) và đếm xem trong mảng đó có bao nhiêu số chẵn

// function createArray(){
//     let size = 10;
//     let min = 10;
//     let max = 50;
//     let count = 0;
//     let numbers = new Array(size);
//     for(let i = 0; i < size; i++){
//         numbers[i] = Math.floor(Math.random() * (max - min + 1) + min)
//     }

//     for(let i = 0; i < size; i++) {
//         if(numbers[i] % 2 == 0){
//             count ++;
//         }
//     }
//     console.log(count);
// }

function createArray() {
    let numbers = genarateNumbers(10, 10, 50)
    console.log(countOfEvenNumberInArray(numbers));
}

function genarateNumbers(size, min, max) {
    let numbers = new Array(size);
    for (let i = 0; i < size; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }
    return numbers;
}

function isEvenNumber(number) {
    return number % 2 == 0;
}

function countOfEvenNumberInArray(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (isEvenNumber(array[i])) {
            count++;
        }
    }
    return count;
}

createArray()

let firstName = 'khoa';
let lastName = 'nguyễn'
let age = 20

// let person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }
let person = {
    firstName,
    lastName,
    age
}
// console.log(person);

let product = {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
}
const {id, price, title, description, category, image} = product
console.log({id, price, title, description, category, image});