function procesarnumero(numero,operacion) {return operacion (numero)
    
}

const alCuadrado =(n)=>n*n;
const alcubo =(n)=>n**3;

document.getElementById(`Salida3`).textContent= `5 alCuadrado es ${procesarnumero(5,alCuadrado)}`


const Estudiante ={ 
            nombre:"Ana",
            edad:"20",
            carrera:"Informatica"
}
// desestructuracion 
const {nombre, edad, carrera}= Estudiante;

const ficha = document.querySelector("#Salida4");

ficha.innerHTML= `
    <span style="color: #7d3c98">
    NOMBRE: </span> ${nombre} 
     <span style="color: #7d3c98">
    EDAD: </span> ${edad}
     <span style="color: #7d3c98">
    CARRERA: </span> ${carrera}  `


const entradas = object.entries(Estudiante).map(([clave,valor])=>`El valor de la propiedad ${clave} es ${valor}`);
    
document.querySelector("#entradas").innerHTML=entradas;