const form = document.getElementById('associate-form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData(form);
    const values = {};

    formData.forEach((value, key) => {
        values[key] = value;
    });

    const { cp, fname, lname, mail, fechanac, calle, num, ciudad } = values 

    if(!cp || !fname || !lname || !mail || !fechanac || !calle || !num || !ciudad){
        return alert("Campos obligatorios incompletos")
    }

    sessionStorage.setItem("registered", JSON.stringify({fname, lname}));
    window.location.href = "./form_enviado.html";
 
})