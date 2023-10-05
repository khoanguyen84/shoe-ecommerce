var userIdList = []
function showUserList() {
    fetch('https://651be324194f77f2a5af0654.mockapi.io/users', {
        method: "GET"
    }).then(function (response) {
        return response.json()
    }).then(function (userRes) {
        let htmls = userRes.map((user) => (
            `
            <div class="col-md-3 mb-3">
                <div class="card">
                    <img src="${user.avatar}" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class='d-flex'>
                            <h5 class="card-title me-3">${user.first_name} ${user.last_name}</h5>
                            <input type='checkbox' onchange='selectUser(${user.id})'/>
                        </div>
                        <p class="card-text">${user.email}</p>
                        
                    </div>
                    <div class='card-footer'>
                        <button class='btn btn-sm btn-dark' onclick='showDetailUser(${user.id})'>View</button>
                        <button class='btn btn-sm btn-success' onclick='editUser(${user.id})'>Modify</button>
                        <button class='btn btn-sm btn-danger' onclick='removeUser(${user.id})'>Remove</button>
                    </div>
                </div>
            </div>
            `
        ))
        document.getElementById('userList').innerHTML = htmls.join('')
    })
}

function selectUser(userId) {
    if (userIdList.includes(userId)) {
        userIdList = userIdList.filter((id) => id != userId)
    }
    else {
        userIdList.push(userId)
    }
    console.log(userIdList);
}

async function removeUserIdList() {
    if (userIdList.length) {

    }
}
// function showDetailUser(userId) {
//     fetch(`https://reqres.in/api/users/${userId}`, {
//         method: "GET"
//     }).then(function (response) {
//         return response.json()
//     }).then(function (userRes) {
//         $('#user-avatar').attr("src", userRes.data.avatar);
//         $('#user-name').html(`${userRes.data.first_name} ${userRes.data.last_name}`);
//         $('#user-email').html(userRes.data.email);
//         $('#user-detail').modal('show');
//     }).catch(function(error){
//         alert(error)
//     })
// }

async function showDetailUser(userId) {
    let response = await fetch(`https://651be324194f77f2a5af0654.mockapi.io/users/${userId}`, {
        method: "GET"
    })

    let userRes = await response.json();

    $('#user-avatar').attr("src", userRes.avatar);
    $('#user-name').html(`${userRes.first_name} ${userRes.last_name}`);
    $('#user-email').html(userRes.email);
    $('#user-detail').modal('show');
}


async function removeUser(userId) {
    try {
        let confirm = window.confirm('Are you sure to remove this user?');
        if (confirm) {
            let response = await fetch(`https://651be324194f77f2a5af0654.mockapi.io/users/${userId}`, {
                method: "DELETE"
            })
            let userDeleted = await response.json();
            window.alert(`User ${userDeleted.first_name} removed success!`)
            showUserList();
        }
    } catch (error) {
        window.alert('Something went wrong,  please try again!')
    }
}

function openCreateUserModal() {
    $('#create-user-form')[0].reset();
    $('#create-user').modal('show')
}

async function createUser(e) {
    e.preventDefault();
    try {
        let user = {
            "first_name": document.getElementById('firstname').value,
            "last_name": document.getElementById('lastname').value,
            "email": document.getElementById('email').value,
            'avatar': document.getElementById('avatar').value
        }
        let hasEmail = await isExistEmail(user.email)
        if (hasEmail) {
            alert(`Email ${user.email} is existed, please using other email!`)
            return;
        }
        let response = await fetch('https://651be324194f77f2a5af0654.mockapi.io/users/', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        let createUserResult = await response.json();

        window.alert(`User ${createUserResult.first_name} created success!`)
        showUserList();
        $('#create-user').modal('hide')
    } catch (error) {
        window.alert('Something went wrong,  please try again!')
    }
}

async function isExistEmail(email) {
    let response = await fetch('https://651be324194f77f2a5af0654.mockapi.io/users/')
    let useList = await response.json();
    let isExist = useList.filter((user) => user.email == email)
    return Boolean(isExist.length);
}

async function editUser(userId) {
    let response = await fetch(`https://651be324194f77f2a5af0654.mockapi.io/users/${userId}`)
    let user = await response.json()
    document.querySelector('#modify-user #firstname').value = user.first_name;
    document.querySelector('#modify-user #lastname').value = user.last_name;
    document.querySelector('#modify-user #email').value = user.email;
    document.querySelector('#modify-user #avatar').value = user.avatar
    document.querySelector('#modify-user #userId').value = user.id
    $('#modify-user').modal('show')
}

async function updateUser(e) {
    e.preventDefault()
    try {
        let user = {
            "first_name": document.querySelector('#modify-user #firstname').value,
            "last_name": document.querySelector('#modify-user #lastname').value,
            "email": document.querySelector('#modify-user #email').value,
            'avatar': document.querySelector('#modify-user #avatar').value,
            'id': document.querySelector('#modify-user #userId').value
        }
        // let hasEmail = await isExistEmail(user.email)
        // if(hasEmail){
        //     alert(`Email ${user.email} is existed, please using other email!`)
        //     return;
        // }
        let response = await fetch(`https://651be324194f77f2a5af0654.mockapi.io/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        let modifyUserResult = await response.json();

        window.alert(`User ${modifyUserResult.first_name} updated success!`)
        showUserList();
        $('#modify-user').modal('hide')
    } catch (error) {
        window.alert('Something went wrong,  please try again!')
    }
}

async function search() {
    let keyword = document.getElementById('keyword').value.toLowerCase();
    if (keyword) {
        let response = await fetch('https://651be324194f77f2a5af0654.mockapi.io/users/');
        let userList = await response.json();
        let searchResult = userList.filter((user) => user.first_name.toLowerCase().includes(keyword) ||
                                                        user.last_name.toLowerCase().includes(keyword) ||
                                                        user.email.toLowerCase().includes(keyword))
        let htmls = searchResult.map((user) => (
            `
            <div class="col-md-3 mb-3">
                <div class="card">
                    <img src="${user.avatar}" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class='d-flex'>
                            <h5 class="card-title me-3">${user.first_name} ${user.last_name}</h5>
                            <input type='checkbox' onchange='selectUser(${user.id})'/>
                        </div>
                        <p class="card-text">${user.email}</p>
                        
                    </div>
                    <div class='card-footer'>
                        <button class='btn btn-sm btn-dark' onclick='showDetailUser(${user.id})'>View</button>
                        <button class='btn btn-sm btn-success' onclick='editUser(${user.id})'>Modify</button>
                        <button class='btn btn-sm btn-danger' onclick='removeUser(${user.id})'>Remove</button>
                    </div>
                </div>
            </div>
            `
        ))
        document.getElementById('userList').innerHTML = htmls.join('')
    }
    else {
        showUserList();
    }

}
showUserList()