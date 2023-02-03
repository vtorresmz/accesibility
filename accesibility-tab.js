/* Accesibility JS tab
este software esta creado para facilitar las tareas 
de los auditores y personas que auditan sitios web.
esta es una versión básica de libre uso, que solo debes pegar en la consola del navegador y utilizar.
version: 0.1
con esto podrás indentificar el orden de navegación mediante teclado.
*/


/*
        *
        *
        * 
        * 
        * 
        Credits: Developed by Vladimir Draguicevic Muñoz
                English
                Country: Chile
                This development was made with the aim of contributing to accessibility 
                and providing a foundation for those who are far from this world 
                and don't know much about it. The idea is to make internet accessible 
                again and have an open-source solution that can help everyone. 
                If this development helped you in your project and you would like to reward my help, 
                you can buy me a coffee or connect with me on LinkedIn and 
                I can help make your project more accessible.
                
        German:
        Kreditierungen: Entwickelt von Vladimir Draguicevic Muñoz
        Land: Chile
        Diese Entwicklung wurde mit dem Ziel einer Beitrag zur 
        Barrierefreiheit und dem Schaffen einer Grundlage für alle, 
        die sich weit weg von dieser Welt befinden und nicht viel darüber wissen, 
        durchgeführt. Die Idee ist, dass das Internet wieder zugänglich gemacht wird 
        und eine Open-Source-Lösung bereitsteht, die allen helfen kann. 
        Wenn diese Entwicklung Ihnen bei Ihrem Projekt geholfen hat und Sie meine 
        Hilfe belohnen möchten, können Sie mir einen Kaffee spendieren oder sich mit mir 
        auf LinkedIn verbinden, damit ich Ihnen dabei helfen kann, 
        Ihr Projekt barrierefreier zu gestalten.
                
               
        Spanish
        Créditos: Desarrollado por Vladimir Draguicevic Muñoz
        País: Chile
        Este desarrollo fue realizado con el objetivo de contribuir a la accesibilidad y proporcionar 
        una base para aquellos que están lejos de este mundo y no saben mucho sobre él. 
        La idea es hacer que internet sea accesible de nuevo y tener una solución 
        de código abierto que pueda ayudar a todos. Si este desarrollo le ayudó en su proyecto y desea 
        recompensar mi ayuda, puede comprarme un café o conectarse conmigo en LinkedIn y 
        puedo ayudar a hacer que su proyecto sea más accesible.

        Portuguese
        Créditos: Desenvolvido por Vladimir Draguicevic Muñoz
        País: Chile
        Este desenvolvimento foi feito com o objetivo de contribuir para a acessibilidade e 
        fornecer uma base para aqueles que estão longe deste mundo e não sabem muito sobre ele. 
        A ideia é tornar a internet acessível novamente e ter uma solução de código aberto que possa ajudar a todos. 
        Se este desenvolvimento lhe ajudou em seu projeto e você gostaria de recompensar minha ajuda,
         você pode me comprar um café ou me conectar no LinkedIn e posso ajudar a tornar se
       *
       *
       *
       * 
       * */

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