// promise = hứu

const promise = new Promise(
    function executor(resolve, reject) {
        // xử lý logic
        let number = 5;
        if (number >= 5) {
            return resolve(0);
        }
        return reject();
    }
)

// promise chain
promise
    .then(function (data) {
        data = data + 1
        console.log(data);
        return data;
    })
    .then(function(data){
        data = data + 1;
        console.log(data);
        return data
    })
    .then(function(data){
        data = data + 1;
        console.log(data);
        return data
    })
    .catch(function () {
        console.log("Error");
    })
    .finally(function () {
        console.log("Done");
    })