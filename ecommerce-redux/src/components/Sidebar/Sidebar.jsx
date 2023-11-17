import React from "react";
import Category from './Category';
import Price from './Price';
import Colors from "./Colors";
import { FaCartPlus } from "react-icons/fa";
function Sidebar() {
    return (
        <div className="d-flex flex-column border-end me-1 h-100 w-25">
            <div className="py-3 d-flex align-items-center">
                <FaCartPlus size={25} className="me-2" /> Shoe Ecommerce
            </div>
            <div>
                <Category />
                <Price />
                <Colors />
            </div>

        </div>
    )
}

export default Sidebar;