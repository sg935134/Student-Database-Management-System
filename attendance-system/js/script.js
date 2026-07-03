function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    console.log(username);
    console.log(password);

    if (username === "admin" && password === "1234") {
        alert("Success!");
        window.location.href = "dashboard.html";
    } else {
        alert("Username = " + username);
        alert("Password = " + password);
        document.getElementById("message").innerHTML = "Invalid Username or Password!";
    }

}