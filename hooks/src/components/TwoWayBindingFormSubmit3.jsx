import React, { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

function TwoWayBindingFormSubmit3() {
    const [state, setState] = useState({
        email: '',
        password: '',
        mobile: '',
        isSuccess: false
    })
    const [showAlert, setShowAlert] = useState(false)

    const { email, password, mobile, isSuccess } = state;

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        console.log(state);
        if (email === 'khoa.nguyen@codegym.vn' && password === '12345678') {
            setState({
                ...state,
                isSuccess: true
            })
        }
        else {
            setState({
                ...state,
                isSuccess: false
            })
        }
        setShowAlert(true)
        console.log(state);
    }

    const handleGetAccount = () => {
        // fetching data from api
        setState({
            ...state,
            email: 'khoa.nguyen@codegym.vn',
            password: '12345678'
        })
    }

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <h1>Login Form</h1>
            {
                isSuccess && <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content={"Đăng nhập thành công"} />
                || !isSuccess && <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} />
            }
            <form onSubmit={handleSubmitLogin}>
                <div className="form-group mb-3">
                    <label className="form-lable">Email</label>
                    <input type="email" className="form-control" required
                        value={email}
                        name= "email"
                        onInput={handleInputValue}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-lable">Mobile</label>
                    <input type="tel" className="form-control" required
                        value={mobile}
                        name= "mobile"
                        onInput={handleInputValue}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" minLength={8} className="form-control" required
                        value={password}
                        name="password"
                        onInput={handleInputValue}
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

export default TwoWayBindingFormSubmit3