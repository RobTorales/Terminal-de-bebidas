
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

/*let precioTotal=0;
let producto;

while(producto != "fin"){
    producto=prompt("ingresa el nombre del producto o fin para salir");
    if (producto=! "fin"){
        let precio = parseFloat(prompt("ingrese el precio del producto"));
        if(!isNaN(precio)) {
            precioTotal +=precio;
        }
    }
    alert("el precio total del carrito es: ${precioTotal}");
}
*/ 






