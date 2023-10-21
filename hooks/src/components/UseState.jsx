import React, { useState } from "react";

// const [state, setState] = useState(initState)
// Nhiệm vụ của useState: quản lý trạng thái trong component
// input: initState là tất cả các kiểu dữ liệu có trong js
//      - number, string, boolean, null, undefined
//      - array, object, callback/function
// output: trả về 1 mảng, mảng này có 2 giá trị.
//          giá trị thứ nhất cùng kiểu dữ mà initState trả về
//          giá trị thứ hai là một hàm, hàm này có nhiệm vụ cập nhật value mới cho giá trị thứ nhất

// nguyên lý: mỗi khi thực thi hàm setState() thì component sẽ được re-render


function UseState() {
    // Logic
    const [number, setNumber] = useState(0)
    
    const handleIncreament = () => {
        setNumber(number + 1)
    }
    const handleDescreament = () => {
        setNumber(number - 1)
    }
    // UI
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleDescreament}>Descreamnet</button>
            <button onClick={handleIncreament}>Increamnet</button>
        </div>
    )
}

// const UseState = () => {
//     return (
//         <div>
//             <h1>Learning useState</h1>
//         </div>
//     )
// }

export default UseState;