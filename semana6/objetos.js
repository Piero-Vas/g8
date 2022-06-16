const carro={
    color:'azul',
    motor: 2.6,
    modelo:'GTR',
    marca: 'nissan',
    nuevo: true
}
const persona ={
    edad : 20,
    nombre: 'Piero',
    sexo: 'masculino',
    talla: 1.64,
    estadoCivil: "Soltero",
    mayorEdad : true,
    nacionalidad: 'peruano'
}
persona.celular = "931883801";
persona["profesion"]="programador";
function llamarPersona(personaObject) {
    let cadena = `edad: ${personaObject.edad}`;
    return cadena;
}
const usuario ={
    nickName: 'Lokillo',
    email: 'lokillo@gmail.com',
    location: 'Peru',
    level: 'pro',
    edad: 18
}

//usuario.location = prompt("Ingrese su pais");

const validarUsuario=()=>{
    const {nickName, location,level} = usuario;
    if(location == 'Peru'){
        return `${nickName} es ${level}`;
    }else if(location !== 'Peru'){
        return `${nickName} NO es de Peru`;
    }
}

//console.log(validarUsuario())


const computadora = {
    color: "Azul",
    array: [1,2,3,4],
    marca: "hp",
    nuevo: true,
    detalle : function(){
        console.log(`El color es ${this.color} \nLa marca es ${this.marca}\nnuevo?: ${this.nuevo} `)
    }
}



const alumnos = [
    {
        nombre: "martin",
        edad: 21,
        nota: 12
    },
    {
        nombre: "Alex",
        edad: 32,
        nota: 14
    },

]

// console.log(`nota de ${alumnos[0].nombre} es ${alumnos[0].nota}`);

const laptop =[
    {
        marca: "Samsung",
        modelo: "SP-5115",
        tienda: "Tottus",
        precio: 1982
    },
    {
        marca: "LG",
        modelo: "SP-52342",
        tienda: "Plaza Vea",
        precio: 2000
    },
    {
        marca: "HP",
        modelo: "hp-1574",
        tienda: "RealPlaza",
        precio: 2500
    },
    {
        marca: "LENOVO",
        modelo: "le-54265",
        tienda: "Efe",
        precio: 1982
    },
    {
        marca: "TOSHIBA",
        modelo: "TB-5494",
        tienda: "Promart",
        precio: 5222
    }
]

//  console.log(laptop)

const components = {
    nombre: "lenovo",
    caracteristicas: {
        ram: "16gb",
        tarjeta: "12"
    }
}

// console.log(components["caracteristicas"].tarjeta)

const macks=[
    {
        name: "MacBook Pro",
        caracteristicas:{
            ram: "16gb",
            tamanoPantalla: 16.2,
            procesador: "16-Core Neural Engine"
        }
    },
    {
        name:"MacBook Air",
        caracteristicas:{
            ram: "8gb",
            tamanoPantalla: 13.3,
            procesador: "8-Core"
        }
    },
    {
        name:"Huawei MateBook",
        caracteristicas:{
            ram: "8gb",
            tamanoPantalla: 15.6,
            procesador: "Intel Core i3 10ma"
        }
    }
]

console.log(`El nombre de la laptop es ${macks[0].name}, sus Caracteristicas son:\n-Procesador: ${macks[0].caracteristicas.procesador}\n-RAM: ${macks[0].caracteristicas.ram}\n-Tamaño de Pantalla: ${macks[0].caracteristicas.tamanoPantalla}"`)

console.log(`El nombre de la laptop es ${macks[1].name}, sus Caracteristicas son:\n-Procesador ${macks[1].caracteristicas.procesador}\n-RAM: ${macks[1].caracteristicas.ram}\n- ${macks[0].caracteristicas.tamanoPantalla}"`)

console.log(`El nombre de la laptop es ${macks[2].name}, sus Caracteristicas son:\n- ${macks[2].caracteristicas.procesador}\n- ${macks[2].caracteristicas.ram}\n- ${macks[2].caracteristicas.tamanoPantalla}"`)