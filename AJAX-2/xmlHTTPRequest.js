function showUserList() {
    const response = new XMLHttpRequest()
    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            const userRes = JSON.parse(response.responseText);
            let htmls = userRes.data.map((user) => (
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
                        </div>
                    </div>
                </div>
                `
            ))
            document.getElementById('userList').innerHTML = htmls.join('')
        }
    }
    response.open("GET", "https://reqres.in/api/users")
    response.send();
}

function showDetailUser(userId) {
    const response = new XMLHttpRequest();

    response.onload = function () {
        if (response.status == 200 && response.readyState == 4) {
            console.log(response);
            const userRes = JSON.parse(response.responseText)
            $('#user-avatar').attr("src", userRes.data.avatar);
            $('#user-name').html(`${userRes.data.first_name} ${userRes.data.last_name}`);
            $('#user-email').html(userRes.data.email);
            $('#user-detail').modal('show');
        }
        else{
            alert('Somthing went wrong, please contact administrator!')
        }
    }

    response.open("GET", `https://reqres.in/api/users/${userId}`)
    response.send();
}

// JSON.stringify()    => convert object to json
// JSON.parse()        => convert json to object