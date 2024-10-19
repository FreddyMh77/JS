let a = 10;
let b = "10";
let c;
let d;

/**
 * Método que se utiliza para sumar por parametros
 * @param {*} a es el primer valor para sumar
 * @param {*} segundoNumero es el segundo valor para sumar 
 * @returns la suma de a + segundoNumero
 */
function suma(a, segundoNumero) {
    const num1 = a;
    const num2 = b;

    return num1 + num2;
}

/**
 * Funcion que compara a y b
 * Si a es = a b entonces es true
 * Si no es false
 */
function comparar() {
    c = a == b ? true : false;
    console.log(c);
}

//operator null check ??
console.log(d ?? "d es vacio");
a = d ?? "Freddy";

console.log(a);
suma();
comparar();

//Conversión de tipos
console.log(8 + "1");
console.log(8 - "1");
console.log(8 * "Algo");
console.log(true == 0);
console.log(true == "Freddy");


// +-*/

// ><

// ==
// ===

// !=
// !==