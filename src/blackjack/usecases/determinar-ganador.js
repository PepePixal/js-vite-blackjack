//Si el jugdor pasa de 21: computadora gana,
//Si los dos puntuan 21: empate,
//Si la computadora pasa de 21: jugador gana
//Si los puntos de la computadora > puntos jugador: comput gana,
// si no: jugador gana.

/**
 * Determinar ganador por puntos y mostrar alerts
 * @param {Number} puntosMinimos Puntos del jugador (mínimo a superar por la comput)
 * @param {Number} puntosComputadora 
 */
export const determinarGanador = ( puntosMinimos, puntosComputadora ) => {
    //setTimeout par dar tiempo a que las cartas de la compu se rendericen
    //antes de que se muestre la alert de ganador

    setTimeout(() => {
        
        if ( puntosMinimos > 21 ) {
            alert( 'Computadora Gana' );
        } else if (( puntosMinimos === 21) && (puntosComputadora === 21 )) {
            alert( 'Empate a 21')
        } else if ( puntosComputadora > 21) {
            alert( 'Jugador Gana');
        } else if ( puntosComputadora > puntosMinimos ) {
            alert( 'Computadora Gana')
        } else {
            alert( 'Jugador Gana');
        };
        
    }, 500 );       // milisegundos

};
