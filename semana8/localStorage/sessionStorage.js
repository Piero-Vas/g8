const crear  = document.querySelector("#crear-sesion");
const obtener = document.querySelector("#obtener-sesion");
const eliminar = document.querySelector("#eliminar-sesion")

crear.onclick = function(){
    sessionStorage.setItem('email','mi primera variable');
}

obtener.onclick = function(){
    const variable = sessionStorage.getItem('email');
    console.log(variable);
}


eliminar.onclick = function(){ sessionStorage.removeItem("email") };