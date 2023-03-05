
let edad = prompt ("ingrese su edad");

if(edad >= 18) {
    alert("sos mayor de edad, podes ingresar");
} else {
    alert("sos menor de edad, no podes ingresar");
    if(isNaN (edad) && edad>18){

    } else {
        alert("sos menor de edad no podes ingresar");
    }
}


let total = 0;

function multiplicar(precio, cantidad) {
    total = precio * cantidad
}

function mostrar (mensaje){
    console.log(mensaje)
}

multiplicar (1230, 4);
mostrar (total);





