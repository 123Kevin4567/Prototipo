import { america, diners,discover,mastercard, visa } from "./tarjetas.js";


console.log(america("341234567890123"));

console.log(diners("36123456789012"));

console.log(discover("6011345678901211"));

console.log(mastercard("5123456789012345"));

console.log(visa("4123456789012"));

while (true) {

let numero = prompt(`Ingrese el numero de su tarjeta`)



function identificarTarjeta(numero) {
    if (america(numero)) return "american Express";
    if (diners(numero)) return "Diners club fortneti";
    if (discover(numero)) return "Discover";
    if (mastercard(numero)) return "Master card";
    if (visa(numero)) return "Visa";
    return "Tarjeta no encontrada o no valida";
}

    
    try {
        if (!numero) {
            throw new Error("Si quieres continuar ingresa los numeros si no el de atras se enoja");
        }
        

        numero = numero.replace(/[\s-]/g, '');
        
        if (!/^\d+$/.test(numero)) {
            throw new Error("Solo puedes ecribir numeros no letras");
        }
        

        if (numero.length > 16 || numero.length < 13) {
            throw new Error("Longitud no válida (debe ser entre 13 y 16 dígitos)");
        }
        

        if (parseInt(numero) < 0) {
            throw new Error("No se permiten números negativos");
        }


        const tipoTarjeta = identificarTarjeta(numero);
        alert(`Su numero es valido - Tipo de tarjeta: ${tipoTarjeta}`);
        break;
        
    } catch (error) {
        alert(error.message);
    }
}
