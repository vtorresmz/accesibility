/* Accesibility JS
este software esta creado para facilitar las tareas 
de los auditores y personas que auditan sitios web.
esta es una versión básica de libre uso, que solo debes pegar en la consola del navegador y utilizar.
Identifica y marca la repetición de elementos, agrega console.table todos los datos tabulados y entrega los textos y marca con rojo 
todo aquello que no cumpla con la  básica de accesbilidad a nivel semantico.
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

//funcion que contaviliza la cantidad de elementos del sitio.
function getHtmlTagCounts() {
    const h1Tags = document.getElementsByTagName('h1').length;
    const h2Tags = document.getElementsByTagName('h2').length;
    const h3Tags = document.getElementsByTagName('h3').length;
    const h4Tags = document.getElementsByTagName('h4').length;
    const h5Tags = document.getElementsByTagName('h5').length;
    const h6Tags = document.getElementsByTagName('h6').length;
    const pTags = document.getElementsByTagName('p').length;
    const imgTags = document.getElementsByTagName('img').length;
    const sectionTags = document.getElementsByTagName('section').length;
    const articleTags = document.getElementsByTagName('article').length;

    console.table({
        'H1': h1Tags,
        'H2': h2Tags,
        'H3': h3Tags,
        'H4': h4Tags,
        'H5': h5Tags,
        'H6': h6Tags,
        'P': pTags,
        'Img': imgTags,
        'Section': sectionTags,
        'Article': articleTags
    });
}

getHtmlTagCounts();

function getHtmlTagTexts() {
    const h1Tags = document.getElementsByTagName('h1');
    const h2Tags = document.getElementsByTagName('h2');
    const h3Tags = document.getElementsByTagName('h3');
    const h4Tags = document.getElementsByTagName('h4');
    const h5Tags = document.getElementsByTagName('h5');
    const h6Tags = document.getElementsByTagName('h6');
    const pTags = document.getElementsByTagName('p');

    const h1Texts = [];
    for (let i = 0; i < h1Tags.length; i++) {
        h1Texts.push(h1Tags[i].innerText);
    }

    const h2Texts = [];
    for (let i = 0; i < h2Tags.length; i++) {
        h2Texts.push(h2Tags[i].innerText);
    }

    const h3Texts = [];
    for (let i = 0; i < h3Tags.length; i++) {
        h3Texts.push(h3Tags[i].innerText);
    }

    const h4Texts = [];
    for (let i = 0; i < h4Tags.length; i++) {
        h4Texts.push(h4Tags[i].innerText);
    }

    const h5Texts = [];
    for (let i = 0; i < h5Tags.length; i++) {
        h5Texts.push(h5Tags[i].innerText);
    }

    const h6Texts = [];
    for (let i = 0; i < h6Tags.length; i++) {
        h6Texts.push(h6Tags[i].innerText);
    }

    const pTexts = [];
    for (let i = 0; i < pTags.length; i++) {
        pTexts.push(pTags[i].innerText);
    }

    console.table({
        'H1': h1Texts,
        'H2': h2Texts,
        'H3': h3Texts,
        'H4': h4Texts,
        'H5': h5Texts,
        'H6': h6Texts,
        'P': pTexts
    });
}

getHtmlTagTexts();

// función para detectar errores en los H1 de los sitios web.
function detectarH1() {
    let h1Elements = document.getElementsByTagName("h1");
    console.table([{
        nombreEtiqueta: "h1",
        cantidadTexto: h1Elements[0].textContent.length,
        textoContenido: h1Elements[0].textContent,
        estado: "correcto"
    }]);
    for (let i = 1; i < h1Elements.length; i++) {
        console.table([{
            nombreEtiqueta: "h1",
            cantidadTexto: h1Elements[i].textContent.length,
            textoContenido: h1Elements[i].textContent,
            estado: "erroneo"
        }]);
    }
}

detectarH1();

function detectarH1s() {
    let h1Elements = document.getElementsByTagName("h1");
    h1Elements[0].style.border = "2px solid green";
    for (let i = 1; i < h1Elements.length; i++) {
        h1Elements[i].style.border = "2px solid red";
        h1Elements[i].style.position = "relative";
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.style.color = "white";
        div.style.position = "absolute";
        div.style.top = "0%";
        div.style.fontSize = "1.2rem";
        div.innerHTML = "ERROR SEMÁNTICO: Etique ta H1 no debe repertise.";

        h1Elements[i].appendChild(div);
    }
}

detectarH1s();


//function for identify te errors in the alt text.
function detectarAlt() {
    let imgElements = document.getElementsByTagName("img");
    for (let i = 0; i < imgElements.length; i++) {
        let alt = imgElements[i].getAttribute("alt");
        if (alt === null || alt === "") {
            console.table([{
                nombreImagen: imgElements[i].getAttribute("src"),
                cantidadTexto: 0,
                textoContenido: "",
                estado: "incorrecto"
            }]);
        } else if (alt.length < 4) {
            console.table([{
                nombreImagen: imgElements[i].getAttribute("src"),
                cantidadTexto: alt.length,
                textoContenido: alt,
                estado: "incorrecto"
            }]);
        } else {
            console.table([{
                nombreImagen: imgElements[i].getAttribute("src"),
                cantidadTexto: alt.length,
                textoContenido: alt,
                estado: "correcto"
            }]);
        }
    }
}

detectarAlt();


//function que detecta las img y expone si la imagen es o no accesible:

function showImageAltTexts() {
    // Obtener todas las imágenes de la página
    const images = document.getElementsByTagName('img');

    // Recorrer cada imagen
    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        // Crear div y p para envolver la imagen y mostrar el texto del atributo alt
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.appendChild(p);

        // Obtener texto del atributo alt
        const altText = image.getAttribute('alt');

        // Si el atributo alt está vacío
        if (altText === '') {
            // Establecer estilo de la etiqueta p para mostrar un mensaje de "imagen no accesible"
            p.style.backgroundColor = 'red';
            p.style.color = 'white';
            p.style.position = 'absolute';
            p.style.bottom = '0';
            p.style.left = '0';
            p.innerText = 'Imagen no accesible';
        }
        // Si el atributo alt no está vacío
        else {
            // Mostrar el texto del atributo alt en la etiqueta p
            p.innerText = altText;
        }

        // Reemplazar imagen por div en el árbol del DOM
        image.parentNode.appendChild(div, image);
    }
}
showImageAltTexts();