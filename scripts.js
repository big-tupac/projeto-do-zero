
/* variaveis é um espaço de memoria que você
reseva e pode guardar o que quiser lã dentro.

3 jeitos de criar uma variável 
 1 - var / jeito antigo - não usa
 2 - let / você pode alterar o valor depois
 3 - const / constante

*/
/* 
funções 
um trecho de código que 
só é execultado quando é chamada
*/
console.log('funcionou')

const formulario = document.querySelector(".formulario-falar-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostarformulario(){
    formulario.style.left = "50%"
    formulario.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
    
}


function mascaraformulario(){
    formulario.style.left = '-300px';
    formulario.style.transform = "translatex(0%)"
    mascara.style.visibility = 'hidden';
}
