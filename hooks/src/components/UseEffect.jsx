import React, { useState, useEffect } from "react";

// useEffect(callback, [deps])
// có 3 trường hợp sử dụng
// 1. useEffect(callback)
//  - callback sẽ được gọi lại mỗi khi cập state (setState)
// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])
// --
// Chức năng: side effects (những tác động bên cạnh)
// call API
// Update DOM
// setInteval, setTimeout
// listen event DOM

// input: callback, dependency
// output: void

// Nguyên tắc chung:
// 1. callback luôn được gọi khi component được mounted vào DOM
// 2. component UI sẽ được render -> callback gọi
function UseEffect() {
    // logic
    const [content, setContent] = useState('')
    const [number, setNumber] = useState(1)
    const [data, setData] = useState([])
    useEffect(() => {
        // console.log(number);
        // setNumber(number + 1)
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(json => setData(json))
        document.getElementById('h_1').innerText = content
    })
    // ui
    return (
        <div className="bg-success text-white">
            <input type="text" className="form-control" onInput={(e) => setContent(e.target.value)} />
            <h1 id="h_1"></h1>
            {/* {console.log('render UI')} */}
        </div>
    )
}

export default UseEffect;