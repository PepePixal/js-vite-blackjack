/**
 * Crear img de la carta y mostrarla en un div del html
 * @param {String} carta nombre de la carta
 * @param {NodeListOf<elemnet>} divCartasJugadores arreglo con los div con class="divCarta"
 * @param {Number} indiceDivCarta indice del arreglo del div concreto donde mostrar la carta
 */
export const crearCarta = ( carta, divCartasJugadores, indiceDivCarta ) => {
    // crear nuevo elemento html img para la carta
    const imgCarta = document.createElement('img');
    // agregar el src de la carta, con el nombre de la carta dinamicamente
    // ` ` para poder insertar código js ${}
    imgCarta.src = `assets/cartas/${ carta }.png`;
    // agrega clase con estilo css para la carta. El efecto abanico lo hace el css.
    imgCarta.classList.add('carta');
    // inserta la imgCarta en la referencia al div del html
    divCartasJugadores[indiceDivCarta].append(imgCarta);
};

