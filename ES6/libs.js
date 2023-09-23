function sum(n1, n2) {
    console.log(n1 + n2);
}

function times(n1, n2) {
    console.log(n1 * n2);
}

function minus(n1, n2) {
    console.log(n1 - n2);
}

const data = ["Java", "React", "NET"]

export { times, minus, data }

export default sum;
// default ko bắt buộc
// nếu export default thì chỉ được 1 lần