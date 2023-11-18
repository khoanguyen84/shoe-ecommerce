import React, { useContext } from "react";
import { ShoeContext } from "../../context/ShoeContext";
import { setSearchColor } from "../../reducer/actions";

const colors = [
    "All", "Black", "Blue", "Red", "Green", 'White'
]
function Colors() {
    const { state, dispatch } = useContext(ShoeContext)
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Colors</h5>
            <div className="form-group">
                {
                    colors.map((color, index) => (
                        <div key={color} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="color"
                                id={`color_${index}`}
                                value={color}
                                defaultChecked={color === 'All'}
                                style={color === 'All' ? { backgroundImage: 'linear-gradient(to right, red, green)' } : color !== 'White' ? { backgroundColor: color } : {}}
                                onChange={(e) => dispatch(setSearchColor(e.target.value))}
                            />
                            <label
                                role="button"
                                className={`form-check-label ${color === state?.filters?.color ? 'text-decoration-underline fw-bolder' : ''}`}
                                htmlFor={`color_${index}`}
                            >
                                {color}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Colors;