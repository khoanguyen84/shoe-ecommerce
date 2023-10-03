function showUserList() {
    const response = new XMLHttpRequest()
    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            const userRes = JSON.parse(response.responseText);
            let htmls = userRes.map((user) => (
                `
                <div class="col-md-3 mb-3">
                    <div class="card">
                        <img src="${user.avatar}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                            <p class="card-text">${user.email}</p>
                        </div>
                        <div class='card-footer'>
                            <button class='btn btn-sm btn-dark' onclick='showDetailUser(${user.id})'>View</button>
                            <button class='btn btn-sm btn-danger' onclick='removeUser(${user.id})'>Remove</button>
                            <button class='btn btn-sm btn-success' onclick='editUser(${user.id})'>Edit</button>
                        </div>
                    </div>
                </div>
                `
            ))
            document.getElementById('userList').innerHTML = htmls.join('')
        }
    }
    response.open("GET", "https://651be324194f77f2a5af0654.mockapi.io/users")
    response.send();
}

function showDetailUser(userId) {
    const response = new XMLHttpRequest();

    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            console.log(response.responseText);
            const userRes = JSON.parse(response.responseText)
            $('#user-avatar').attr("src", userRes.avatar);
            $('#user-name').html(`${userRes.first_name} ${userRes.last_name}`);
            $('#user-email').html(userRes.email);
            $('#user-detail').modal('show');
        }
        else {
            alert('Somthing went wrong, please contact administrator!')
        }
    }

    response.open("GET", `https://651be324194f77f2a5af0654.mockapi.io/users/${userId}`)
    response.send();
}

function createUser(e) {
    e.preventDefault();
    const user = {
        "first_name": document.querySelector('#firstName').value,
        "last_name": document.querySelector('#lastName').value,
        "email": document.querySelector('#email').value,
        "avatar": document.querySelector('#avatar').value,
        "id": document.querySelector('#id').value
    }
    const response = new XMLHttpRequest();
    response.onload = function () {
        if (response.status == 201 && response.readyState == 4) {
            const userCreated = JSON.parse(response.responseText);
            showUserList();
            $('#create-update-user').modal('hide');
            alert(`User ${userCreated.first_name} created successfully`);
        }
        if (response.status == 200 && response.readyState == 4) {
            const userUpdate = JSON.parse(response.responseText);
            console.log(userUpdate);
            showUserList();
            $('#create-update-user').modal('hide');
            alert(`User ${userUpdate.first_name} updated successfully`);
        }
    }
    if (user.id == 0) {
        response.open("POST", 'https://651be324194f77f2a5af0654.mockapi.io/users/');
    }
    else {
        response.open("PUT", `https://651be324194f77f2a5af0654.mockapi.io/users/${user.id}`);
    }
    response.setRequestHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(user))
}

function openUserModel() {
    $('#create-update-user-form')[0].reset();
    $('#create-update-user').modal('show');
    $('#create-update-user').find('.modal-title').text('Create User')
    $('#btn-save').addClass('d-none');
    $('#btn-create').removeClass('d-none');
    document.querySelector('#id').value = 0
}

function editUser(userId) {

    const response = new XMLHttpRequest();

    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            const userRes = JSON.parse(response.responseText)
            console.log(userRes);
            document.querySelector('#avatar').value = userRes.avatar;
            document.querySelector('#firstName').value = userRes.first_name;
            document.querySelector('#lastName').value = userRes.last_name;
            document.querySelector('#email').value = userRes.email;
            document.querySelector('#id').value = userRes.id;
        }
        else {
            alert('Somthing went wrong, please contact administrator!')
        }
    }

    response.open("GET", `https://651be324194f77f2a5af0654.mockapi.io/users/${userId}`)
    response.send();

    $('#create-update-user').modal('show');
    $('#create-update-user').find('.modal-title').text('Edit User')
    $('#btn-save').removeClass('d-none');
    $('#btn-create').addClass('d-none');


}
function removeUser(userId) {
    let confirm = window.confirm('Are you sure to remove this user?')
    if (confirm) {
        const response = new XMLHttpRequest();
        response.onload = function () {
            if (response.status == 200 && response.readyState == 4) {
                alert(`User removed successfully`);
                showUserList();
            }
        }
        response.open("DELETE", `https://651be324194f77f2a5af0654.mockapi.io/users/${userId}`)
        response.send();
    }

}

showUserList()
// JSON.stringify()    => convert object to json
// JSON.parse()        => convert json to object