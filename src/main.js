// import la funcion de data.js
import { filterData } from './data.js';

//importando la data de harry potter
import data from './data/harrypotter/data.js';

const casas=document.getElementsByClassName("casas");
//console.log(casas) // array recorrer

for (let index = 0; index < casas.length; index++) {
  // console.log(casas[index]) // tenemos cada li

    casas[index].addEventListener("click", function() {
       // console.log(casas[index].id) // obtenemos id de cada li
        filterData(data,casas[index].id) //enviamos argumentos 
    })
}

