(function(){
    // el efect paralax hace parecer que la imagen te persigue mientras te mueves
var divHijoDeLaSeccionContacto = document.querySelector('.parallax');
divHijoDeLaSeccionContacto.style.backgroundPosition = '';
window.addEventListener('scroll',scrollParallax);
// se agrega un evento al scroll de windows
function scrollParallax(){
    yActual = window.pageYOffset;// position actual de y del top de la ventana
    // es el valor actual de la coordenada y
    yDivTop = divHijoDeLaSeccionContacto.offsetTop;// valor y del top del elemento html
    // ees el valor de y = 0 hasta el top del div
    // siempre es el mismo
    alturaDeDiv = divHijoDeLaSeccionContacto.offsetHeight// valor de la altura en pixeles del elmento html;
    // siempre es el mismo
    yDivBottom = yDivTop + alturaDeDiv // calcular el valor y del bottom del elmento html;
    // es el valor de y desde 0 hasta el bottom de div
    // siempre es el mismo
    alturaDeLaVentana = window.outerHeight// valor de la altura de la ventana del navegador;
    if(yActual > yDivTop - alturaDeLaVentana && yActual <= yDivBottom){
        // mientras se muestre el div
        velocidad = 1.5;
        // variable de velocidad, debe superar el 1 para un seguimiento suave
        divHijoDeLaSeccionContacto.style.backgroundPositionY = (yActual-yDivTop)/velocidad+ 'px';
        // cambiar la posicion y del background 
    }
    else{
        divHijoDeLaSeccionContacto.style.backgroundPositionY = 0;
    }
}
}())