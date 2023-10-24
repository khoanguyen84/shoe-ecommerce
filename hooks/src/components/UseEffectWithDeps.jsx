import React, { useState, useEffect } from "react";

// useEffect(callback, [deps])
// có 3 trường hợp sử dụng
// 1. useEffect(callback)
//  - callback sẽ được gọi lại mỗi khi cập state (setState)
// 2. useEffect(callback, [])
//  - callback chỉ được gọi 1 lần khi component mounted DOM
// 3. useEffect(callback, [deps])
//  - callback sẽ được gọi lại khi [deps] thay đổi
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
function UseEffectWithDeps() {
    const [postList, setPostList] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
        setIsFetching(true)
        fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPostList(result.data)
                setIsFetching(false)
            })
    }, [page])

    const handleNext = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    const handlePrevious = (e) => {
        e.preventDefault()
        setPage(page - 1)
    }

    console.log(page);
    // ui
    return (
        <div className="">
            <div>
                <ul className="pagination">
                    <li className="page-item ">
                        <a href="" className="page-link" onClick={handlePrevious}>Previous</a>
                    </li>
                    <li className="page-item ">
                        <a href="" className="page-link" onClick={handleNext}>Next</a>
                    </li>
                </ul>
            </div>
            <h1>Post List</h1>
            {
                isFetching ? <p className="text-danger">Loading...</p> : (
                    <div className="row">
                        {
                            postList.map((post) => (
                                <div key={post.id} className="col-md-6 mb-2">
                                    <div className="card">
                                        <img src={post.imageUrl} alt="" />
                                        <div className="card-body">
                                            <p>{post.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default UseEffectWithDeps;