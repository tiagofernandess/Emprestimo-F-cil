function logIn() {
    const userName = document.querySelector("#username").value;
    const passWord = document.querySelector("#password").value;


    if (userName === "tiago" && passWord === "123") {
        window.location.href = "home.html";
    } else {
        document.querySelector("#error-message").textContent = "Usuário ou Senha incorreta!";
    }
}

