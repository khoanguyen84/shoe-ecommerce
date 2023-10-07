// React.createElement(type, props, Children)
// + type:
//     - Tên thẻ
//     - Component (tưởng như như Thẻ (do mình tạo))
// + props (properties)
// + Children: 
//     - Text 
//     - React Element

// Virtual DOM vs Real DOM

// const h1 = React.createElement("h1", {
//     style: {
//         color: "white",
//         backgroundColor: "green"
//     },
//     onClick: () => { alert('Click on h1') }
// }, 'We are learning ReactJS');

// const p = React.createElement('p', null, 'React Element')

// const div = React.createElement(React.Fragment, null, h1, p)

// const div = React.createElement(React.Fragment, null,
//     React.createElement('h1', {
//         style: {
//             color: "red",
//             backgroundColor: "yellow"
//         },
//         onClick: () => { alert('Click on heading 1') }
//     }, "We are learning ReactJS"),
//     React.createElement('p', {
//         style: {
//             fontSize: "20px",
//             fontStyle: 'italic'
//         }
//     }, 'React Element'),
//     React.createElement('h1', {
//         className: "heading_1"
//     }, "Use External Style"))
// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(div);


const loginForm = React.createElement("div", { className: 'login' },
    React.createElement('h3', null, "Login Here"),
    React.createElement('div', { className: 'form-group' },
        React.createElement('label', null, "User"),
        React.createElement('input', { type: 'text', id: 'user_name' })),
    React.createElement('div', { className: 'form-group' },
        React.createElement('label', null, 'Password'),
        React.createElement('input', { type: 'password', id: 'password' })),
    React.createElement("div", { className: 'form-group' },
        React.createElement('button', {
            type: 'button',
            onClick: () => {
                let user = {
                    "user" : document.getElementById('user_name').value,
                    "password" : document.getElementById('password').value
                }
                console.log(user);
            }
        }, "Login"),
        React.createElement('p', {
            style: {
                color: 'red'
            }
        },
            "Not yet a Member",
            React.createElement('a', { href: '#' }, "Register"))))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(loginForm)