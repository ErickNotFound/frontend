var user =  JSON.parse(localStorage.getItem("user"))
console.log(user)

document.getElementById('image').src =  user.avater_url
document.getElementById('name').innerText =  user.name