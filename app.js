// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista = document.getElementById("listaAmigos");

function agregarAmigo (){
    // si el input esta vacio da una alerta para q ingrese el nombre
    if (document.getElementById("amigo").value == ""){
        alert ("por favor inserte un nombre")

    }else{
        // ingresa los nombres
        let nombre = document.getElementById("amigo").value
        amigos.push(nombre);
        document.getElementById("amigo").value = ""
        listaAmigos();


    }
}

function listaAmigos(){
    // agrega nombres a la lista
    lista.innerHTML = "";
    for(let i= 1; i <= amigos.length; i++){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.innerHTML= amigos[i-1];
        lista.appendChild(nuevoAmigo);
    }

}