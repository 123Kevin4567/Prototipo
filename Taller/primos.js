let numero =parseInt(prompt(`Ingrese el numero`));

// const esPrimo =(a) => {
    
//     if (a <= 1) return false;
    
//     if (a === 2) return true; 
    
//     if (a % 2 === 0) return false;
    
//     for (let i = 3; i <= Math.sqrt(a); i += 2) {
//         if (a % i === 0) return false;
//     }
    
//     return true;
// }


const esPrimo = (a) => {
    let primo = true;
    if (a <= 1) return false;

    if (a === 2) return true;

    for (i = 2; i*i<=a; i++) {
        if (a % i === 0) {
            primo = false;
            break;
        }
    }
    
    return primo;
}


let respuesta =esPrimo(numero);

let primo =respuesta ? `si` : `No`;

console.log(`¿El numero ${numero} es primo? ${primo}`);
