// const h1 = document.createElement('h1');
// h1.innerText = "Client Side Rendering";
// h1.style.color = "red";
// h1.style.backgroundColor = "green";
// h1.onclick = function(){
//     alert('click on h1')
// }
// 

const loginArea = document.createElement('div')
loginArea.className = 'login';

const heading_3 = document.createElement('h3');
heading_3.innerText = 'Login Here';

const div_1 = document.createElement('div');
div_1.className = 'form-group';

const label_1 = document.createElement('label');
label_1.innerText = 'User';

const input_user = document.createElement('input')
input_user.type = 'text';

div_1.appendChild(label_1);
div_1.appendChild(input_user);

const div_2 = document.createElement('div');
div_2.className = 'form-group';

const label_2 = document.createElement('label');
label_2.innerText = 'Password';

const input_pw = document.createElement('input')
input_pw.type = 'password';

div_2.appendChild(label_2);
div_2.appendChild(input_pw);

const div_3 = document.createElement('div');
div_3.className = 'form-group';


const btn_login = document.createElement('button')
btn_login.type = 'button';
btn_login.innerText = "Login"

btn_login.onclick = function(){
    let user = {
        'user' : input_user.value,
        'password' : input_pw.value
    }
    //call login api
    console.log(user);
}

const p = document.createElement('p');
p.innerText = 'Not yet a Member?'

const a = document.createElement('a')
a.href = '#'
a.innerText = 'Register';

p.appendChild(a);

div_3.appendChild(btn_login)
div_3.appendChild(p)

div_2.appendChild(label_2);
div_2.appendChild(input_pw);

loginArea.appendChild(heading_3);
loginArea.appendChild(div_1);
loginArea.appendChild(div_2);
loginArea.appendChild(div_3);

document.getElementById('root').appendChild(loginArea)