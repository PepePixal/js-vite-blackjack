/**
 * Crear el nombre de la imagen de la carta y estilo 
 * @param {String} carta nombre de la carta
 * @returns {HTMLImageElement} nombre imagen de la carta 
*/
export const crearCarta = ( carta ) => {
    
    //validación de parametros recigidos
    if ( !carta ) throw new Error('carta requerida');
    
    // crear nuevo elemento html img para la carta
    const imgCarta = document.createElement('img');
    // agregar el src de la carta, con el nombre de la carta dinamicamente
    // ` ` para poder insertar código js ${}
    imgCarta.src = `assets/cartas/${ carta }.png`;
    // agrega clase con estilo css para la carta. El efecto abanico lo hace el css.
    imgCarta.classList.add('carta');

    return imgCarta;

};

