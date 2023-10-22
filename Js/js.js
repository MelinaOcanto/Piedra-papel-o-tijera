//let valorMaquina = piedra;
/*
for (let i=0; i<3; i++){
    let respuestaUsuario = prompt("Elije una opcion; ");
    if (respuestaUsuario === "papel"){
        alert ("Ganaste");
    } else if (respuestaUsuario === "piedra" ){
        alert("Empate");
    } else if (respuestaUsuario === "tijera" ){
        alert("Perdiste, gano la maquina");
    }else{
        alert("Entrada invalida, intenta de nuevo");
    }
}
*/
for (let i = 0; i < 3; i++) {
    let opciones = ["piedra", "papel", "tijera"];
    let respuestaUsuario = prompt("Elige una opción: piedra, papel o tijera");
    let indiceMaquina = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2
    let opcionMaquina = opciones[indiceMaquina];

    if (respuestaUsuario === "papel" && opcionMaquina === "piedra" ||
        respuestaUsuario === "tijera" && opcionMaquina === "papel" ||
        respuestaUsuario === "piedra" && opcionMaquina === "tijera") {
        alert(`Ganaste! La máquina eligió ${opcionMaquina}.`);
    } else if (respuestaUsuario === opcionMaquina) {
        alert(`Empate! Ambos eligieron ${opcionMaquina}.`);
    } else {
        alert(`Perdiste! La máquina eligió ${opcionMaquina}.`);
    }
}

