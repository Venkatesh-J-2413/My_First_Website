function login(){

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if(email === "" || password === ""){

        message.innerHTML = "Please fill all fields ❌";

        return;
    }

    // DEMO LOGIN
    if(email === "test@gmail.com" && password === "1234"){

        message.innerHTML = "Login Successful ✅";

        localStorage.setItem("loggedIn", "true");

        window.location.href = "home.html";

    }

    else{

        message.innerHTML = "Wrong Email or Password ❌";

    }

}

function togglePassword(){

    let password = document.getElementById("password");

    let eyeIcon = document.getElementById("eyeIcon");

    if(password.type === "password"){

        password.type = "text";

        eyeIcon.innerHTML = "🙈";

    }

    else{

        password.type = "password";

        eyeIcon.innerHTML = "👁️";

    }

}
