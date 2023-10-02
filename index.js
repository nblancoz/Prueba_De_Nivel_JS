// Ejercicio 1
let x = "The Bridge 2023";
console.log("The Bridge 2023 tiene " + x.length + " unidades de longitud");
const y = "The Bridge 2023";
const z = y.slice(0, -4);
console.log(z);

// Ejercicio 2
let culpable = true; 
if (culpable == true) {
    console.log("Es culpable");
} else {
    console.log("No es culpable");
};

// Ejercicio 3
let nombre = "Nicolas";
function saludar(Nicolas) {
    if (typeof Nicolas === 'string') {
        return "Hola " + Nicolas;
    } else {
        return "Debo ser ejecutada con un string";
    }
};
let saludo = saludar(nombre);
console.log(saludo);

// Ejercicio 4
let array = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];
function ejer5(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 ) {
            pares.push(array[i]);
        };
    };
    return pares;
};
let numerosPares = ejer5(array);
console.log(numerosPares);

// Ejercicio 5
document.getElementById("miParrafo").innerHTML = "Nuevo texto";
document.getElementById("miParrafo").style.color = "red";
document.getElementById("miParrafo").style.fontWeight = "bold";
const lista = `<ul>
                    <li>Nuevo elemento de la lista</li>
                </ul>`;
document.getElementById("miLista").innerHTML = lista;
document.getElementById("miBoton").addEventListener("click", function(){
    alert("Haz hecho click en el botón!");
});