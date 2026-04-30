/**
 * Obtiene el valor numérico de una carta
 * @param {String} carta 
 * @returns {Number} Número
 */

// Func que recibe por parametro la carta pedida (string) y retorna su valor (número)
export const valorCarta = ( carta ) => {

    // valida si viene data en carta y es string
    if ( !carta || !isNaN(carta)) {
        //para el código e imprime el mensaje en consola
        throw 'Se requiere valor de carta string';
    }

    //substring() extrae carácteres del string carta y retorna un nuevo string,
    //requiere indice inicial y cantidad de carácteres a extraer.
    // Extrae los dós primeros carácteres (strings).
    const valor = carta.substring(0, carta.length - 1);
    
    // CONDICIONES TERNARIAS CONCATENADAS - retornan valor
    // Teniendo en cuenta que A vale 11ptos y J,Q,K valen 10ptos, cada una.
    return ( isNaN(valor) )             // SI valor No es Número,
        ?                               // entonces (es letra)
        ( valor === 'A' ) ? 11 : 10    //      SI valor es === A 11ptos : de lo contrario 10pts 
        :                               // de lo contrario (es número) 
        valor * 1;                     // convierte valor (string numérico) a número

};