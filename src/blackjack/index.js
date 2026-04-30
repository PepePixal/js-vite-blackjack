
//importar todo (_) el paquete de la librería underscore
import _ from 'underscore';

//importacines individuales  
import { 
    crearDeck,
    pedirCarta,
    valorCarta,
    crearCarta,
    determinarGanador,
    turnoComputadora,
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
    
  
    //** Evento Boton Pedir Carta Jugador y Mostrar puntos y carta en el html */

    // aplica evento escuchar, click, al elemento btnPedir y la función que ejecutará
    btnPedir.addEventListener( 'click', () => {

        // obtiene carta de la baraja desordenada
        const carta = pedirCarta( deck );
        // acumula los puntos de las cartas que va pidiendo
        puntosJugador = puntosJugador + valorCarta(carta);
        //muestra los puntos en la primera etiqueta <small> del html
        puntosHTML[0].innerHTML = puntosJugador;

        // llama func que crea el nombre de la imagen de la carta 
        // enviando el nombre de la carta
        const imgCarta = crearCarta( carta );
        // muestra la carta en el div correspondiente, según el indice
        divCartasJugadores[0].append( imgCarta );

        //validar la acumulación de puntos del jugador, máximo  21
        if ( puntosJugador > 21 ) {
            // si es > 21, bloquear botón pedir carta
            btnPedir.disabled = true;
            // y bloquear el botón Detener
            btnDetener.disabled = true;
            // llamar func turnoComputadora() enviando argumentos
            turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasJugadores );
            
        } else if ( puntosJugador === 21) {
            // si es === 21, bloquear botón pedir carta
            btnPedir.disabled = true;
            // y bloquear el botón Detener
            btnDetener.disabled = true;
            // llamar func turnoComputadora() enviando argumentos
            turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasJugadores );
        };

    });


    //** Evento Boton Dentener - Inicar turno Computadora */

    // Al pulsar el botón Detener se bloquearán los botones Detener y Pedir Carta,
    // y se inciará automáticamente el turno de la computadora
    btnDetener.addEventListener( 'click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador, deck, puntosHTML[1], divCartasJugadores );

    });


    //** Evento botón Nuevo Juego - resetar todo */

    // Al pulsar Nuevo Juego se deben resetear los contadores y la baraja
    btnNuevo.addEventListener( 'click', () => {

        // inicializa el juego
        inicializarJuego();
        
    });

    
})();


