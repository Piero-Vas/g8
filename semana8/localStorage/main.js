const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function(event){
    event.preventDefault();
 const inputs = document.querySelectorAll("input");
//vamos aguardar el correo y password en elocalstorage
// con setItem guardamos los valores en el local estorage

inputs.forEach((input)=>{
   localStorage.setItem(input.name ,input.value)});
   login();
};

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display = "block";

    tittleEmail.innerHTML = email;
    tittlePassword.innerHTML = password;
    tittleEmail.style.display  ="block";
    tittlePassword.style.display = "block";
    btnCerrarSesion.style.display = "block";
}

const form = document.querySelector("#section-login");
const tittleEmail = document.querySelector("#email");
const tittlePassword = document.querySelector("#password");
const usuarioSection = document.querySelector("#usuario-logged")

const btnCerrarSesion = document.querySelector("#cerrar-sesion");

if(email !== null && password !== null){
    login();
}else{
    usuarioSection.style.display = "none"
}

btnCerrarSesion.onClick = function(){
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    tittleEmail.style.display = "none";
    tittlePassword.style.display = "none";
    form.style.display = "block";
    btnCerrarSesion.style.display = "none";
}