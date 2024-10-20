//funcion anonima

var a = 1;
b=2;
array = ["pikachu"];

console.log(array);


const funcionAnonima = function(num1, num2) {
    console.log(sumar(3,4));
    return num1 + num2;
}

// funcion declarativa

function sumar(num1, num2) {
    console.log(functArrowBody(5,6));
    return num1 + num2;
}

//funcion de flecha con cuerpo

const functArrowBody = (num1, num2) => {
    console.log("soy a" + a);
    
    if (a === 2) {
        console.log("Verdadero");
    }
    functArrow();
    return num1 + num2;
}

//funcion de flecha sin cuerpo

const functArrow = () => console.log(5); //undefined

//logs
console.log(funcionAnonima(1,2));

//METODO LIFO -> Last In First Out