const user = JSON.parse(sessionStorage.getItem('registered'))

if(!user){
    window.location.href = "/";
}

const welcomeMessage = document.getElementById('user-welcome')

welcomeMessage.textContent = `¡Bienvenido al Club Boca Juniors ${user.fname} ${user.lname}!`
