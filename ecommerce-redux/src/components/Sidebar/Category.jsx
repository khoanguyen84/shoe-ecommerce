import React, { useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { setSearchCategory } from "../../reducer/actions";

const categories = [
    "All", "Sneakers", "Flats", "Sandals", "Heels"
]
function Category() {
    const {state, dispatch} = useContext(EcommerceContext)
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Category</h5>
            <div className="form-group">
                {
                    categories.map(cat => (
                        <div key={cat} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="category"
                                value={cat}
                                id={`cat_${cat}`}
                                defaultChecked={cat === state?.filters?.category}
                                onChange={(e) => dispatch(setSearchCategory(e.target.value))}
                            />
                            <label role="button" htmlFor={`cat_${cat}`} 
                                className={`form-check-label ${cat === state?.filters?.category ? 'text-decoration-underline fw-bolder' : ''}`}
                            >{cat}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category;