import React from "react";
import { FaCartArrowDown, FaStar } from "react-icons/fa";

function Product() {
    return (
        <div className="col-md-3 mb-4">
            <div className="card d-flex align-items-center pt-2">
                <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" 
                    className="card-image-top" alt="" 
                    style={{width: "70%"}}
                />
                <div className="card-body">
                    <p className="fw-bolder">{"Nike Air Monarch IV"}</p>
                    <div className="d-flex align-items-center mb-2">
                        <div className="me-1">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                        </div>
                        <div className="fs-10">
                            ({123} reviewer)
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                         <div>
                            <del className="line-through me-2">${140}</del>
                            <span>${120}</span>
                        </div>   
                        <FaCartArrowDown size={20} className="btn-cart"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;