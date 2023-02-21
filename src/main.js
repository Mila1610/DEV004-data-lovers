// import la funcion de data.js
import { filterData } from './data.js';
import {OrdenarP} from './data.js';
import {Calcular} from './data.js';

//importando la data de harry potter
import data from './data/harrypotter/data.js';

let ultimofiltro;

const MenuCasas = document.getElementsByClassName ("casas")

for (let index = 0; index < MenuCasas.length; index++) {
  //console.log(MenuCasas[index]) // tenemos cada li
  MenuCasas[index].addEventListener("click", function() {
    // console.log(casas[index].id) // obtenemos id de cada li
    const casaSeleccionada = MenuCasas[index].id
    const filterHouses = filterData(data.characters,casaSeleccionada) //enviamos argumentos 
    printData(filterHouses)
    ultimofiltro=filterHouses
  })
}

//ordena la data de personajes dependiendo de la casa
const OrdenPersanajes = document.getElementsByClassName ("Ordenes")
for (let index = 0; index < OrdenPersanajes.length; index++) {
  OrdenPersanajes[index].addEventListener("click", function() {
    const dataordenada= OrdenarP(ultimofiltro)
    if(OrdenPersanajes[index].id==="A-Z"){
      printData(dataordenada)
    }else{
      printData(dataordenada.reverse())
    }
  })
}


const calcular =document.getElementsByClassName ("Calculo")
for (let index = 0; index < calcular.length; index++) {
  calcular[index].addEventListener("click", function() {
    Calcular(ultimofiltro)
  })
}


const printData = (array)=>{
  const $casas=document.getElementById("root");
   
  //muestra los personajes que hay por cada una de las casas
  $casas.innerHTML = ""   
  array.forEach(item => {  
    const $div = document.createElement ("div") 
    $div.innerHTML= item.name  
    $casas.appendChild ($div)   
  } )
}