import React, { useState } from "react";

function ErrorAlert(props) {
    const { showAlert, setShowAlert,content } = props;
    return (
        <>
            {
                showAlert && (
                    <div className="alert alert-danger d-flex justify-content-between algin-items-center" role="alert">
                        { content || 'Login Fail'}
                        <span role="button" className="text-dark fs-5 fw-bolder"
                            onClick={() => setShowAlert(false)}
                        >&times;</span>
                    </div>
                )
            }
        </>
    )
}

export default ErrorAlert;