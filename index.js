const pregunta=document.getElementById("pregunta");
const elemento=document.getElementById("elemento");
const evento=document.getElementById("evento");
const nodos_seccion=document.querySelectorAll("section");
const boton_avance = document.getElementById("boton_avance");

boton_avance.addEventListener('click', () => comprobar(1, "2. Intenta ahora que al hacer doble click sobre la imagen se pase a la siguiente pregunta", 3, 1));

document.getElementById("img_javascript").addEventListener('dblclick', () => comprobar(2, "3. Ahora probemos cambiando el tamaño de la ventana para pasar de nivel", 4, 4));

window.addEventListener('resize', () => comprobar(3, "4. Vamos a pasar el ratón por encima del botón para avanzar en el juego", 1, 5));

boton_avance.addEventListener('mouseover', () => comprobar(4, "5. Ya casi esta, prueba a pulsar una letra del teclado", 3, 2));

document.addEventListener('keydown', () => comprobar(5, "Enhorabuena, has completado el tutorial", 2, 3));

function comprobar(pregunta_data, texto, elemento_numero, evento_numero){
    if(pregunta.dataset.pregunta==pregunta_data){
        if(elemento.value==elemento_numero && evento.value==evento_numero ){
            pregunta.innerHTML=texto;
            pregunta.dataset.pregunta=pregunta_data+1;
            restartAnimation();            
            if(pregunta_data==5){
                document.getElementById("respuesta").style.display="none";
                boton_avance.style.display="none";
            }
        }
        else document.getElementById("incorrecto").showPopover();
    }
}
function restartAnimation() {
    const secciones = [...nodos_seccion].map(function(seccion){
        seccion.classList.remove('animate');
        void seccion.offsetWidth; 
        seccion.classList.add('animate');
    });
}
