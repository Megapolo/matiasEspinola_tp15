
const pelis = require("./peliculas.js")
const fs = require('fs')
let mensaje = fs.readFileSync("./mensaje.txt")

for(let i = 0; i < pelis.length; i++){
    console.log(`Nombre: ${pelis[i].id}`)
    console.log(`Rating: ${pelis[i].rating}`)
    console.log(`Premios: ${pelis[i].awards}`)
    console.log(`Duración: ${pelis[i].length}`)
    console.log(`Precio: ${pelis[i].price}`)
    console.log(`Generos: ${pelis[i].genre}`)
    console.log("--------------------------------------");
}

mensaje = mensaje.toString()

console.log(mensaje)