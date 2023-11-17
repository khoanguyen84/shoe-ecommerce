import React, { useContext } from "react";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { EcommerceContext } from "../../context/EcommerceContext";
import { setSearchText } from "../../reducer/actions";

function Navbar() {
    const { state, dispatch } = useContext(EcommerceContext)
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
            <form className="w-50 d-flex align-items-center">
                <input type="search" placeholder="Enter your search shoes"
                    value={state.searchText}
                    className="form-control form-control-sm"
                    style={{paddingRight: "22px"}}
                    onInput={(e) => dispatch(setSearchText(e.target.value))}
                />
                <FaSearch role="button" size={20} style={{ marginLeft: "-22px", color: 'rgba(0,0,0,.3)' }} />
            </form>
            <div className="">
                <FaShoppingCart size={20} className="me-2" role="button" />
                <FaUser size={20} role="button" />
            </div>
        </div>
    )
}

export default Navbar;