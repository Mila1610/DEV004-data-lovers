// import la funcion de data.js
import { filterData } from './data.js';
import {OrdenarP} from './data.js';

//importando la data de harry potter
import data from './data/harrypotter/data.js';

let casaSeleccionada;

const MenuCasas = document.getElementsByClassName ("casas")
// MenuCasas.forEach (element => element.addEventListener ("click", filterData (data, element.id)) ) 

for (let index = 0; index < MenuCasas.length; index++) {
  //console.log(MenuCasas[index]) // tenemos cada li
  MenuCasas[index].addEventListener("click", function() {
    // console.log(casas[index].id) // obtenemos id de cada li
    casaSeleccionada = MenuCasas[index].id
    filterData(data.characters,casaSeleccionada) //enviamos argumentos 
  })
}

//ordena la data de personajes dependiendo de la casa
const OrdenPersanajes = document.getElementsByClassName ("Ordenes")
for (let index = 0; index < OrdenPersanajes.length; index++) {
  OrdenPersanajes[index].addEventListener("click", function() {
    const dataordenada= OrdenarP(data.characters,OrdenPersanajes[index].id)
    filterData(dataordenada,casaSeleccionada)
  })
}


//Funcion para Contar
const characters = data.characters
const count= {}

characters.forEach ((character) =>{
  if(!count[character.species]) {
    count[character.species] = 1
  } else {count[character.species] += 1}

} )
console.log(count);



