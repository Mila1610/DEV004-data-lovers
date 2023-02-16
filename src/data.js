// funcion para filtrar por datos 
export const filterData=(characters, casas) => {
 
  //Filtrando por cada una de las casas (4 casas)
  const $casas=document.getElementById("root");
  const filterCasa = characters.filter(character=> character.house === casas) 
  console.log("Nombre de la casa: " + casas);
  console.log("Trae toda la data correspondiente a una casa", filterCasa);
 
  //muestra los personajes que hay por cada una de las casas
  $casas.innerHTML = ""   //está vaciando el contenido HTML dentro del elemento con la ID "casas". Esto se hace para que solo se muestren los elementos filtrados y no se dupliquen o agreguen elementos adicionales a cada vez que se ejecute el código
  filterCasa.forEach(item => {  //Inicio del bucle, Cada elemento del array se representa con la variable .filterCasaitem
    const $div = document.createElement ("div") //  crea un nuevo elemento de división en el documento HTML. La variable se utiliza para hacer referencia a este elemento recién creado.$div
    $div.innerHTML= item.name  // establece el contenido HTML del elemento de división recién creado como el nombre del elemento actual en el array 'filterCasaname del objeto 'itemitem.
    $casas.appendChild ($div)  // El método 'appendappendChild() agrega el elemento proporcionado como un hijo del elemento actual. En este caso, estamos agregando el elemento de división recién creado (representado por la variable '$$div) como un hijo del elemento con la ID "casas".
  } )
 
};

//Funcion para Ordenar de A-Z
export const OrdenarP=(personajes) => {
  personajes.sort((a, b) => 
  {
    if (a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
    }
    return 0;
  }
  ); 
  console.log(personajes);
  return personajes;
};


