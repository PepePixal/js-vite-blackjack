//** Turno de la computadora **/
// El turno o rutina de la computadora arranca cuando:
// El jugdor pierde porque se pasa de 21, o pulsa el botón Detener (se planta)

// El turno de la compu se ejecuta al menos, una primera vez (do) y
// mientras (while) los puntos de la Computadora sean < que los puntos del Jugador,
// recibidos en (puntosMinimos) y los puntos del Jugador (puntosMinimos) sean <= a 21.

// importación de métodos
import { pedirCarta, valorCarta, crearCarta, determinarGanador  } from "./";


/**
 * Coputador obtiene carta, muestra puntos acumulados y muestra carta
 * @param {Number} puntosMinimos Puntos del jugador, mínimos para ganarle al jugador
 * @param {Array<String>} deck Baraja
 * @param {HTMLElement} puntosHTML Elemento html donde mostrar los puntos del computador
 * @param {HTMLElement} divCartasJugadores Elemento html donde mostrar la carta de la computadora
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasJugadores ) => {
    
    //validaciones de arguementos recibidos
    if ( puntosMinimos < 0 ) throw new Error('puntosMinimos requeridos');
    if ( !deck ) throw new Error('deck (baraja) requerido');
    if ( !puntosHTML ) throw new Error('puntosHTML requerido par mostrar los puntos');

    let puntosComputadora = 0;
    
    do { 
        // obtiene carta de la baraja desordenada
        const carta = pedirCarta( deck );
        // acumula los puntos de las cartas que va pidiendo
        puntosComputadora = puntosComputadora + valorCarta(carta);
        //muestra los puntos en la segunda etiqueta <small> del html
        puntosHTML.innerHTML = puntosComputadora;

        // llama función que crea el nombre de la imagen de la carta,
        // enviando el nombre de la carta
        const imgCarta = crearCarta( carta );
        // inserta la imgCarta, en el div del html, según el índice en crudo
        divCartasJugadores[1].append(imgCarta);

    } while ( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));
    
    // llama func determinarGanador(), enviando puntos
    determinarGanador( puntosMinimos, puntosComputadora );
};
