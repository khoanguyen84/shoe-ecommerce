import React from "react";

function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner-grow text-success me-2" role="status">
            </div>
            <div className="spinner-grow text-danger me-2" role="status">
            </div>
            <div className="spinner-grow text-warning" role="status">
            </div>
        </div>
    )
}
export default Spinner;