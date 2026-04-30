
//importar todo (_) el paquete de la librería underscore
import _ from 'underscore';

//importacines individuales  
import { 
    crearDeck,
    pedirCarta,
    valorCarta,
    crearCarta,
    determinarGanador,
} from './usecases';

/* los nombres de las imágenes de las cartas constan de números / figuras:
del 2 al 10 / A (as), J, Q (queen), K (king), y de letras relacionadas con los palos: 
C = Clubs (tréboles) / D = Diamonds (diamantes) / H = Hearts (corazones) / S = Spades (picas)
*/

// Patron Modelo - función auto invocada, para encapsular el código
// 'use strict' para uso estricto del codigo js
const miModulo = (() => {
    'use strict'

    //** Definición de variables */

    // deck - baraja de cartas
    let deck        = [];
    // tipos - palos de la baraja - treboles, diamantes, corazones, picas

    const tipos     = [ 'C', 'D', 'H', 'S' ],
       // especiales - figuras de la baraja, As J, Queen, King
          especiales   = [ 'A', 'J', 'Q', 'K' ];

    // acumuladores de putos
    let puntosJugador     = 0,
        puntosComputadora = 0;

    // referncias por id
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    // puntosHTML contendrá un arreglo con todas las etiquetas <small>,
    // ordenadas consecutiva mente, la que está en el indice [0] será la primera, etc
    const puntosHTML = document.querySelectorAll('small');

    // refererncia a todos los elementos que tienen la class divCartas. Obtenenmos un arreglo
    const divCartasJugadores = document.querySelectorAll('.divCartas');


    //** Func que inicializa el juego */
    
    const inicializarJuego = () => {

        // llama a func que crea y desordena la baraja, enviando argumentos
        deck = crearDeck( tipos, especiales );
        
        //limpia la consola
        console.clear();

        // reset contadores de puntos
        puntosJugador = 0;
        puntosComputadora = 0;

        // pone 0 en los puntos de la pantalla,
        // iterando el arreglo y a cada elemento, le inserta 0.
        puntosHTML.forEach( element => element.innerText = 0);
        
        // elimina las cartas de la pantalla, del jugador y la comput
        // iterando el arreglo y a cada elemento, le inserta ''.
        divCartasJugadores.forEach( element => element.innerHTML = '');

        // habilita los botones
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };
    


  

    //** Turno de la computadora **/
    // El turno o rutina de la computadora arranca cuando:
    // El jugdor pierde porque se pasa de 21, o pulsa el botón Detener (se planta)

    // El turno de la compu se ejecuta al menos, una primera vez (do) y
    // mientras (while) los puntos de la Computadora sean < que los puntos del Jugador,
    // recibidos en (puntosMinimos) y los puntos del Jugador (puntosMinimos) sean <= a 21.
    const turnoComputadora = ( puntosMinimos ) => {
        do { 
            // obtiene carta de la baraja desordenada
            const carta = pedirCarta( deck );
            // acumula los puntos de las cartas que va pidiendo
            puntosComputadora = puntosComputadora + valorCarta('carta');
            //muestra los puntos en la segunda etiqueta <small> del html
            puntosHTML[1].innerHTML = puntosComputadora;

            // llama función que crea y muestra la carta en el html,
            // enviando la carta a crear y el div donde mostrarla
            crearCarta( carta, divCartasJugadores, 1);

        } while ( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));
       
        // llama func determinarGanador(), enviando puntos
        determinarGanador( puntosMinimos, puntosComputadora );
    };


    //** Evento Boton Pedir Carta Jugador y Mostrar puntos y carta en el html */

    // aplica evento escuchar, click, al elemento btnPedir y la función que ejecutará
    btnPedir.addEventListener( 'click', () => {

        // obtiene carta de la baraja desordenada
        const carta = pedirCarta( deck );
        // acumula los puntos de las cartas que va pidiendo
        puntosJugador = puntosJugador + valorCarta(carta);
        //muestra los puntos en la primera etiqueta <small> del html
        puntosHTML[0].innerHTML = puntosJugador;

        // llama función que crea y muestra la carta en el html,
        // enviando la carta a crear y el div donde mostrarla
        crearCarta( carta, divCartasJugadores, 0);

        //validar la acumulación de puntos del jugador, máximo  21
        if ( puntosJugador > 21 ) {
            // si es > 21, bloquear botón pedir carta
            btnPedir.disabled = true;
            // y bloquear el botón Detener
            btnDetener.disabled = true;
            // llamar func turnoComputadora() enviando los puntos del jugador
            turnoComputadora( puntosJugador );
            
        } else if ( puntosJugador === 21) {
            // si es === 21, bloquear botón pedir carta
            btnPedir.disabled = true;
            // y bloquear el botón Detener
            btnDetener.disabled = true;
            // llamar func turnoComputadora() enviando los puntos del jugador
            turnoComputadora( puntosJugador );
        };

    });


    //** Evento Boton Dentener - Inicar turno Computadora */

    // Al pulsar el botón Detener se bloquearán los botones Detener y Pedir Carta,
    // y se inciará automáticamente el turno de la computadora
    btnDetener.addEventListener( 'click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    });


    //** Evento botón Nuevo Juego - resetar todo */

    // Al pulsar Nuevo Juego se deben resetear los contadores y la baraja
    btnNuevo.addEventListener( 'click', () => {

        // inicializa el juego
        inicializarJuego();
        
    });

    
})();


