document.getElementById("submit").onclick = async () => {
    var username = document.getElementById("id_username").value;

    var response = await fetch('https://api.github.com/users/ErickNotFound');
    var user = await response.json()

    localStorage.setItem("user", JSON.stringify(user))

    window.location.href = '../repos/index.html'
}

