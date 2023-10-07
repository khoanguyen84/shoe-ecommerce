const handleLogin = () => {
    console.log({
        'user' : document.getElementById('user_name').value,
        'password': document.getElementById('password').value
    });
}

const heading_text = "Form Login";

const loginForm = (
    <div className="container w-50">
        <h3 style={{
            color: 'red',
            backgroundColor: 'yellow'
        }}>{ heading_text }</h3>
        <div className="form-group mb-3">
            <label className="form-label">User</label>
            <input type="text" className="form-control" id='user_name' />
        </div>
        <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
        </div>
        <div className='form-group mb-3'>
            <button type='button' className="btn btn-dark"
                onClick={handleLogin}
            >Login</button>
            <p>Not yet a Member? <a href='#'>Register</a></p>
        </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(loginForm);