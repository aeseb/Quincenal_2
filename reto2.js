/**
 * Crear una pagina que permita marcar 20 casillas 
 * de verificacion con un orden según lo indique el usuario.
 * 
 * Información:
 *      - Las casillas se marcan automáticamente.
 *      - Las "distancias" entre casillas marcadas es pareja.
 * 
 * Visual:
 *      - Marco de ingreso de la alternación.
 *      - Botón de generación de la alternación.
 *      - Botón de borrado para las casillas checkeadas.
 *      - Lista de opciones (20) con las casillas 
 *          correspondientes chequeadas.
 * 
 * Lógica:
 *      - Crear una lista de 20 elementos.
 *      - Ingresar un valor numérico entre 1 y 20.
 *      - Recorrer la lista.
 *      - Chekear las casillas según el valor ingresado.
 *      - Borrar los checks.
 */


// Código

const INICIO_ALTERNACION = 1;
const FIN_ALTERNACION = 20;
const NOMBRE_REFRESCAR = `Refrescar`;
const NOMBRE_GENERAR = `Generar`;
const BORRAR_INPUT = ``;

// Esta estructura genera la lista de elementos.
for (i = INICIO_ALTERNACION; i <= FIN_ALTERNACION; i++){
    document.querySelector("#lista").innerHTML += `
        <input type="checkbox" id="casilla${i}">Casilla ${i}<br>`;
}
/*
Esta funcion comprueba (if) que el nro ingresado este dentro 
del rango establecido y checkea (for) las casillas que corresponden.
*/
function generarCheck(){

    let ingreso = Number(document.querySelector("#alternaciones").value)
    
    if (ingreso < INICIO_ALTERNACION || ingreso > FIN_ALTERNACION){
        window.alert(`Ingresar un número igual o mayor que ${INICIO_ALTERNACION} 
            e igual o menor que ${FIN_ALTERNACION}.`);
    }
    else{
        refrescar();
        for (i = INICIO_ALTERNACION; i <= FIN_ALTERNACION; i += ingreso){
            document.querySelector("#casilla"+i).checked = true;
        }
    }  
}
// Esta función refresca los checks y cambia el nombre del botor "Generar" a "Refrescar".
function refrescar(){
    for (i = INICIO_ALTERNACION; i <= FIN_ALTERNACION; i++){
        document.querySelector("#casilla"+i).checked = false;
    }
    document.querySelector("#generar_check").innerHTML = NOMBRE_REFRESCAR;
}
// Esta función limpia todos los checks de la lista y el input.
function limpiar(){
    for (i = INICIO_ALTERNACION; i <= FIN_ALTERNACION; i++){
        document.querySelector("#casilla"+i).checked = false;
    }
    document.querySelector("#alternaciones").value = BORRAR_INPUT;
    document.querySelector("#generar_check").innerHTML = NOMBRE_GENERAR; 
}


     

