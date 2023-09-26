// Set vs Array
// unique (duy nhất)
// ko index

let animals = new Set(["Gà", "Vịt"])
animals.add("Bò")
animals.add("Lợn")
console.log(animals.values());
// for(let animal of animals.values()){
//     console.log(animal);
// }

animals.delete("Bò")
// console.log(animals.values());
animals.forEach(function(animal) {
    console.log(animal);
})
animals.clear()
console.log(animals.values());