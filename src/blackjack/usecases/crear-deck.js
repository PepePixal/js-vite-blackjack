//importar todo (_) el paquete de la librería underscore
import _ from 'underscore';

//** Crear la baraja (deck) */
// Función para crear la baraja (deck) con los nombres de las imágenes de las cartas.
// Requiere los tiposDeCarta (palos) y los tiposEpeciales (figuras)
// Los nombres de las cartas empiezan con los númeneros del 2 al 10 y A, J, Q, K,
// seguidas de las letras C, D, H, S que indican el tipo o palo.

/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} tipoDeCarta  Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tipoEspecial Ejemplo: [ 'A', 'J', 'Q', 'K' ]
 * @returns {Array<String>} retorna un Array strings.
 */
export const crearDeck = ( tipoDeCarta, tipoEspecial ) => {

    //valida que llega info al parámetros
    if ( !tipoDeCarta || tipoDeCarta === 0 )
         throw new Error('tipoDeCarta obligatorio, arreglo strings');
          
    if ( !tipoEspecial || tipoEspecial === 0 )
             throw new Error('tipoEspecial obligatorio, arreglo strings');
    
    // resetear o reinicializar la baraja
    let deck = [];

    // obtiene los números del 2 al 10
    for( let i = 2; i <= 10; i++ ) {
        // por cada número, obtiene los cuatro tipos (palos) C, D, H, S
        for ( let tipo of tipoDeCarta ) {
            // agrega cada número con los cuatro tipos (palos), a la baraja deck
            deck.push( i + tipo);
        }      
    };

    // obtiene cada figura especial A, J, Q, K
    for ( let esp of tipoEspecial) {
        // por cada figura obtiene los cuatro tipos (palos)
        for ( let tipo of tipoDeCarta) {
            // agrega cada figura con los cuatro tipos (palos), a la baraja
            deck.push( esp + tipo);
        }
    }
    
    // retornamos el resultado que nos retorna el método shuffle(), de la libreria underscore,
    // enviando el arreglo con la baraja ordenada. El resultado es un arreglo con la baraja desordenada.
    return _.shuffle( deck );  // retorna la baraja desordenada
}
