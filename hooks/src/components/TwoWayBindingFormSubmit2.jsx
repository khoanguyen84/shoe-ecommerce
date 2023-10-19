import React, { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

function TwoWayBindingFormSubmit2() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isSuccess, setIsSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        if (email === 'khoa.nguyen@codegym.vn' && password === '12345678') {
            setIsSuccess(true)
        }
        else {
            setIsSuccess(false)
        }
        setShowAlert(true)
    }

    const handleGetAccount = () => {
        // fetching data from api
        setEmail('khoa.nguyen@codegym.vn')
        setPassword('12345678')
    }

    return (
        <div>
            <h1>Login Form</h1>
            {
                isSuccess && <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thành công"}/>
                || !isSuccess && <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} />
            }
            <form onSubmit={handleSubmitLogin}>
                <div className="form-group mb-3">
                    <label className="form-lable">Email</label>
                    <input type="email" className="form-control" required
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" minLength={8} className="form-control" required
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark me-3">Login</button>
                    <button type="button" className="btn btn-warning"
                        onClick={handleGetAccount}
                    >Get Account</button>
                </div>
            </form>
        </div>
    )
}

export default TwoWayBindingFormSubmit2