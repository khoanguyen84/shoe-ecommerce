import React, { useState } from "react";

function SuccessAlert(props) {
    const { showAlert, setShowAlert, content } = props;
    return (
        <>
            {
                showAlert && (
                    <div className="alert alert-success d-flex justify-content-between algin-items-center" role="alert">
                        { content || 'Login success'}
                        <span role="button" className="text-dark fs-5 fw-bolder"
                            onClick={() => setShowAlert(false)}
                        >&times;</span>
                    </div>
                )
            }
        </>
    )
}

export default SuccessAlert;