/* Accesibility JS tab
este software esta creado para facilitar las tareas 
de los auditores y personas que auditan sitios web.
esta es una versión básica de libre uso, que solo debes pegar en la consola del navegador y utilizar.
version: 0.1
con esto podrás indentificar el orden de navegación mediante teclado.
*/

//function que muestra el orden de navegación por tecla TAB.

function highlightTabbableElements() {
    // Obtener todos los elementos que son navegables por la tecla tab
    const tabbableElements = document.querySelectorAll('[tabindex]:not([tabindex="-1"])');

    // Recorrer cada elemento
    for (let i = 0; i < tabbableElements.length; i++) {
        const element = tabbableElements[i];

        // Marcar elemento con un borde de color
        element.style.border = '2px solid blue';

        // Añadir orden numérico al elemento mediante un texto envuelto en un círculo color blanco con letra negra
        const orderText = document.createElement('span');
        orderText.innerText = i + 1;
        orderText.style.backgroundColor = 'white';
        orderText.style.color = 'black';
        orderText.style.borderRadius = '50%';
        orderText.style.display = 'inline-block';
        orderText.style.width = '20px';
        orderText.style.height = '20px';
        orderText.style.textAlign = 'center';
        orderText.style.verticalAlign = 'middle';
        element.parentNode.insertBefore(orderText, element);
    }
}
highlightTabbableElements();