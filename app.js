let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}


function verificarIntento() {
  console.log(numeroSecreto);

  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);


  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en  ${intentos} ${(intentos > 1) ? 'intentos' : 'intento'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');//habiltamos el boton nuevo juego cuando acierta
  }
  else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
      limpiarInput()
    }
    else {
      asignarTextoElemento('p', 'El número secreto es mayor');

    }
    limpiarInput()
    intentos++;
  }

}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles' )
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      //includes recorre la lista para verificr si existe un elemento
      return generarNumeroSecreto();//recursividad: la funcion se llama a si misma hasta generar un numero que no haya sido sorteado
    }
    else {
      listaNumerosSorteados.push(numeroGenerado);//agregamos a la lista
      return numeroGenerado;
    }
  }

}


function reiniciarJuego() {
  //limpiar la caja

  //mensaje inicio del juego
  limpiarInput();
  condicionesInicio()

  console.log(numeroSecreto);
  //generar num aleatorio

  //deshabilitar el nuevojuego

  //inicializar el num de intentos

}


function condicionesInicio() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un número del 1 al  ${numeroMaximo}`);

  numeroSecreto = generarNumeroSecreto();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
  intentos = 1;
}


function limpiarInput() {
  document.querySelector(".container__input").value = "";

}


condicionesInicio();

