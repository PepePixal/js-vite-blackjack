/**
 * Elimina y retorna, la última carta de la baraja
 * @param {Array<String>} deck Baraja
 * @returns {Array<String>} Array string
 */

export const pedirCarta = ( deck ) => {
    // valida si no hay cartas en la barja (array deck)
    if (deck.length === 0) {
        //para el código e imprime el mensaje en consola
        throw 'No hay cartas en la baraja - deck';
    }
    
    // .pop() elimina la última carta de la baraja y retorna la carta
    return deck.pop();
};