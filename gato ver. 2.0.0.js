/* Juego de gato:
Realizar un juego de gato donde se muestre la base y se determine si gana alguien o no 
( usar JSON para el tablero "Investigar") con validaciones y aguacate. */

var step = 0;
var seccion = document.getElementsByClassName('cuadro');
var reinicio = document.getElementById('reinicio');
var mensaje = document.getElementById('mensaje');

var J1 = { nombre: '', turno: 0, tipo: 'X' };
var J2 = { nombre: '', turno: 0, tipo: 'O' };

function comenzar() {
    J1.nombre = prompt("Escriba el nombre del jugador 1:");
    while (!J1.nombre) {
        alert("No puedes dejar el campo vacio");
        J1.nombre = prompt("Escriba el nombre del jugador 1:");

    }
    J2.nombre = prompt("Escriba el nombre del jugador 2:");
    console.log(J2.nombre);
    while (!J2.nombre) {
        alert("No puedes dejar el campo vacio");
        J2.nombre = prompt("Escriba el nombre del jugador 2:");
    }


    var ValTurno = function () {
        let id = event.target.id;
        if (document.getElementById(id).value != "") {
            alert("Esa casilla ya esta ocupada, intenta de nuevo en otra casilla");
        }
    }

    document.getElementById('juego').onclick = function (event) {
        if (event.target.className == 'cuadro') {
            if (step % 2 == 0) {
                event.target.innerHTML = 'X';
                checkWinner('X');
            }
            else {
                event.target.innerHTML = 'O';
                checkWinner('O');
            }
            step++;

        }
    }

    function checkWinner(turn) {
        let playerName = setNames(turn);
        let arr = [...seccion];
        let checkDraw = arr.filter(x => x.innerHTML !== '');
        // Horizontales
        if (seccion[0].innerHTML === turn && seccion[1].innerHTML === turn && seccion[2].innerHTML === turn) {

            alert("jugador: " + playerName + " Gano!")
        }
        if (seccion[3].innerHTML === turn && seccion[4].innerHTML === turn && seccion[5].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        if (seccion[6].innerHTML === turn && seccion[7].innerHTML === turn && seccion[8].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        if (seccion[0].innerHTML === turn && seccion[1].innerHTML === turn && seccion[2].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        //Verticales
        if (seccion[0].innerHTML === turn && seccion[3].innerHTML === turn && seccion[6].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        if (seccion[1].innerHTML === turn && seccion[4].innerHTML === turn && seccion[7].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        if (seccion[2].innerHTML === turn && seccion[5].innerHTML === turn && seccion[8].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        // Diagonales
        if (seccion[0].innerHTML === turn && seccion[5].innerHTML === turn && seccion[8].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        if (seccion[2].innerHTML === turn && seccion[4].innerHTML === turn && seccion[6].innerHTML === turn) {
            alert("jugador: " + playerName + " Gano!")
        }
        else {
            if (checkDraw.length === 9) {
                alert("Empate")
            }
        }

    }


}

function setNames(turn) {
    let name;
    if (turn === J1.tipo) {
        name = J1.nombre;
    } if (turn === J2.tipo) {
        name = J2.nombre;
    }
    return name;
}
function reiniciar() {
    step = 0;
    mensaje.innerText = '';
    for (var i = 0; i < seccion.length; i++) {
        seccion[i].innerText = '';
    }
    J1 = { nombre: "", turno: 0, tipo: 'X' };
    J2 = { nombre: "", turno: 0, tipo: 'O' };
   comenzar();


}