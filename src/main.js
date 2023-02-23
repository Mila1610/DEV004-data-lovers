// import las funciones de data.js
import { filterData } from './data.js';
import { order } from './data.js';
import { calculate } from './data.js';

//importando la data de harry potter
import data from './data/harrypotter/data.js';

//Almacenando la casa filtrada
let filterHouse;
//Almacenando la casa seleccionada en html
const housesMenu = document.getElementsByClassName ("casas")
//LLamar la funcion de data.js segun la casa que damos click
for (let index = 0; index < housesMenu.length; index++) {
  housesMenu[index].addEventListener("click", function() {
    const selectedHouse = housesMenu[index].id
    const filterHouses = filterData(data.characters,selectedHouse) 
    printData(filterHouses)
    filterHouse=filterHouses
  })
}

//Almacenando orden de los personajes seleccionada en html
const orderCharacters = document.getElementsByClassName ("Ordenes")
// LLamar la funcion de data.js segun la casa que damos click
for (let index = 0; index < orderCharacters.length; index++) {
  orderCharacters[index].addEventListener("click", function() {
    const dataOrder= order(filterHouse)
    if(orderCharacters[index].id==="A-Z"){
      printData1(dataOrder)
    }else{
      printData1(dataOrder.reverse())
    }
  })
}

//Almacenando calcular de los personajes seleccionada en html
const calculation =document.getElementsByClassName ("Calculo")
for (let index = 0; index < calculation.length; index++) {
  calculation[index].addEventListener("click", function() {
    const printCalculate= calculate(filterHouse)
    document.getElementById('root2').innerHTML =printCalculate;
  })
}

//Imprime los personajes de la funcion filterData
const printData = (array)=>{
  const $house=document.getElementById("root");
  $house.innerHTML = ""   
  array.forEach(item => {  
    const $div = document.createElement ("div") 
    $div.innerHTML= item.name  
    $house.appendChild ($div)   
  })
}

//Imprime los personajes de la funcion order
const printData1 = (array)=>{
  const $house=document.getElementById("root1");
  $house.innerHTML = ""   
  array.forEach(item => {  
    const $div = document.createElement ("div") 
    $div.innerHTML= item.name  
    $house.appendChild ($div)   
  })
}

