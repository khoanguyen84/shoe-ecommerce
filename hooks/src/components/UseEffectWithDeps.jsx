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
    const [totalPage, setTotalPage] = useState(0)
    const [direction, setDirection] = useState()
    const [jump, setJump] = useState(page)
    const [pageNumbers, setPageNumbers] = useState([])
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(3)
    useEffect(() => {
        setIsFetching(true)
        fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
            .then(response => response.json())
            .then(result => {
                const { data, pagination } = result;
                setPostList(data)
                let pages = Math.ceil(Number(pagination._totalRows) / Number(pagination._limit))
                setTotalPage(pages)
                setIsFetching(false)
                setPageNumbers(generatePageNumber(pages, start, end))
            })
    }, [page, start, end])

    const handleFrist = (e) => {
        e.preventDefault();
        setPage(1)
        setDirection('first')
    }
    const handleNext = (e) => {
        e.preventDefault()
        if (page < totalPage) {
            if(page >= 2){
                setStart(page - 1)
                setEnd(page + 1)
            }
            setPage(page + 1)
            setDirection('next')
        }
    }
    const handlePrevious = (e) => {
        e.preventDefault()
        if (page > 1) {
            setPage(page - 1)
            setDirection('prev')
            // setStart(page - 1)
            // setEnd(page + 1)
        }
    }
    const handleLast = (e) => {
        e.preventDefault();
        setPage(totalPage)
        setDirection('last')
    }

    const handleJumpPage = (e) => {
        e.preventDefault();
        if (jump < 1 || jump > totalPage) {
            alert('invalid page number')
        }
        else {
            if (jump > page) {
                setDirection('next')
            }
            if (jump < page) {
                setDirection('prev')
            }
            setPage(jump)
        }
    }

    const handleChangePage = (e, pageNumber) => {
        e.preventDefault()
        if (pageNumber > page) {
            setDirection('next')
        }
        if (pageNumber < page) {
            setDirection('prev')
        }
        setPage(pageNumber)
    }
    console.log(pageNumbers);
    // ui
    return (
        <div className="">
            <div>
                <ul className="pagination">
                    <li className={`page-item ${page <= 1 ? 'disabled' : ''} ${direction == 'first' ? 'active' : ''} `}
                    >
                        <a href="" className="page-link" onClick={handleFrist}>Frist</a>
                    </li>
                    <li className={`page-item ${page <= 1 ? 'disabled' : ''} ${direction == 'prev' ? 'active' : ''}`}>
                        <a href="" className="page-link" onClick={handlePrevious}>Previous</a>
                    </li>
                    {
                        pageNumbers.map((item) => (
                            <li key={item} className={`page-item ${item == page ? 'active' : ''}`}>
                                <a href="" className="page-link" onClick={(e) => handleChangePage(e, item)}>{item}</a>
                            </li>
                        ))
                    }
                    <li className={`page-item ${page >= totalPage ? 'disabled' : ''} ${direction == 'next' ? 'active' : ''}`}>
                        <a href="" className="page-link" onClick={handleNext}>Next</a>
                    </li>
                    <li className={`page-item ${page >= totalPage ? 'disabled' : ''} ${direction == 'last' ? 'active' : ''}`}>
                        <a href="" className="page-link" onClick={handleLast}>Last</a>
                    </li>
                    <li className='page-item'>
                        <form onSubmit={handleJumpPage}>
                            <input type="number" className="form-control page-link w-25"
                                onInput={(e) => setJump(Number(e.target.value))}
                            />
                        </form>
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

function generatePageNumber(number, start, end) {
    let pageNumbers = []
    for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
    }
    return pageNumbers;
}

export default UseEffectWithDeps;