let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //el usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","el número secreto es menor");
        } else{
            asignarTextoElemento("p","el número secreto es mayor");
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
        //si ya sorteamos todos los numeros
        
    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p" , "Ya se sortearon todos los números posibles");
    } else {
    //si el numero generado está incluido en la lista
            
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
                
        } else {
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1" , "Juego del número secreto");
    asignarTextoElemento("p" , `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled" , "true");
}

condicionesIniciales();